<template>
    <div class="category">
        <div class="header1">
            <div class="head-left" @click="$router.back(-1)">
                <i class="el-icon-arrow-left"></i>
                <span>返回</span>
            </div>
            <h2>{{ class1 }}</h2>
            <div @click="$router.push('/home/shujia')" class="head-right">
                <i></i>
            </div>
        </div>
        <div class="header2">
            <ul>
                <li @click="id1=index;type=v.etxt" :class="{cur: id1==index}" v-for="(v,index) of innerList">
                    {{v.txt}}
                </li>
            </ul>
        </div>
         <div class="header2 header3">
            <ul>
                <li @click="id2=index;minor=v" :class="{cur:index==id2}" v-for="(v,index) of inner">
                    {{v}}
                </li>
            </ul>
        </div>




        <div class="books-box" v-loading="myData.length == 0"
    element-loading-text="加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="#f5f2ed"
    style="width: 100%">
            <div class="books-list" >
                <!-- <div v-show="myData.length==0" class="block">没有更多了</div> -->
                <ul>
                    <router-link tag="li" :to="{name:'details',params:{iid:v._id}}" v-for="v of myData">
                        <div class="list-box">
                            <img :src="'http://statics.zhuishushenqi.com'+v.cover" alt="">
                            <div class="list-right">
                                <h4>{{ v.title }}</h4>
                                <p>{{ v.author }}<span class="split">|</span> {{ v.majorCate }}</p>
                                <p class="">{{ v.shortIntro }}</p>
                                <p>
                                    <span v-if="v.latelyFollower > 10000" class="red">
                                        {{ (v.latelyFollower /10000).toFixed(1) }}万
                                    </span>
                                    <span v-else class="red">
                                        {{ v.latelyFollower }}
                                    </span>
                                    人气
                                    <span class="split">|</span>
                                    <span  class="red">{{ v.retentionRatio }}/</span>
                                    读者留存
                                </p>
                            </div>
                        </div>
                        
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
// import APIUrl from '@/axios/api';

export default {
  data() {
    return {
      myData: [],
      class1: "",
      inner: ["全部"],
      key: "",
      type: "hot",
      minor: "",
      id1: 0,
      id2: 0,

      innerList: [
        { txt: "热门", etxt: "hot" },
        { txt: "新书", etxt: "new" },

        { txt: "完结", etxt: "over" }
      ]
    };
  },
  watch: {
    id1() {
      this.getData();
    },
    id2() {
      this.getData();
    }
  },
  computed: {},
  methods: {
    getData() {
      var _this = this;
      var minor;
      var class1 = encodeURI(_this.class1);
      if (_this.minor == "全部") {
        minor = "";
      } else {
        minor = encodeURI(_this.minor);
      }

      this.$axios
        .get("/api/aaa.php", {
          params: {
            //请求参数
            url:
              "https://api.zhuishushenqi.com/book/by-categories?gender=male&type=" +
              _this.type +
              "&major=" +
              class1 +
              "&minor=" +
              minor +
              "&start=0&limit=20"
          }
        })
        .then(function(res) {
          console.log(res.data);
          _this.myData = res.data.books;
          console.log(_this.myData);
        })
        .catch(function(response) {
          console.log(response); //发生错误时执行的代码
        });
    }
  },
  created() {
    this.class1 = this.$route.params.name1;
    this.key = this.$route.params.key;
    var _this = this;
    // https://api.zhuishushenqi.com/book/by-categories?gender=male&type=hot&major=%E5%8F%A4%E4%BB%A3%E8%A8%80%E6%83%85&minor=&start=0&limit=20
    this.$axios
      .get("/api/aaa.php", {
        params: {
          //请求参数
          url: "http://api.zhuishushenqi.com/cats/lv2"
        }
      })
      .then(function(response) {
        var inner;
        inner = response.data;

        for (let i = 0; i < inner[_this.key].length; i++) {
          if (inner[_this.key][i].major == _this.class1) {
            for (let k = 0; k < inner[_this.key][i].mins.length; k++) {
              _this.inner.push(inner[_this.key][i].mins[k]);
            }
          }
        }
        console.log(_this.inner);
      })
      .catch(function(response) {
        console.log(response); //发生错误时执行的代码
      });

    this.getData();
  }
};
</script>

<style lang="scss" scoped>
.category {
  width: 100%;
  height: 100%;
}

.header1 {
  width: 100%;
  height: 44px;
  background-color: #b93321;
  color: #fff;
  text-align: center;
  line-height: 44px;
  h2 {
    display: inline-block;
    font-size: 14px;
    line-height: 44px;
  }
  .head-left {
    float: left;
    width: 60px;
    height: 44px;
    position: relative;
    // line-height: 44px;
    i {
      font-size: 23px;
      color: #fff;
      line-height: 44px;
      position: absolute;
      left: 5px;
      font-weight: 500;
    }
    span {
      // position: relative;
      // top: -3px;
      font-size: 12px;
      line-height: 44px;
      position: absolute;
      left: 26px;
      top: -1px;
    }
  }
  .head-right {
    float: right;
    width: 60px;
    height: 44px;
    text-align: center;
    line-height: 49px;
    i {
      width: 20px;
      height: 20px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAC5UlEQVR4Xu2a0XHbMAyGgcp3vd6llnlnv3cEd4ImG8QT1J4gyQbZoO4EUSZINkg6QT1C3q0eLbePdtCTnaSuI8UkRFK6E/xMUMBH8AcEC6HlP2x5/CAAJANaTkCuQMsTQESw1iuQZtlVnoH9OJ7UlYm1ANCaemvMg8fTbeB0G1E8UQoXoUEEB5AHv8LsDgGHu8ES0KxD8UloCEEBaP1nuMbVHQD2ik+aFhF1TpQ6moXKhGAAUr08BXzM074k+OeQaUEUjQbq430ICEEApHo5BqSN4Bn/CCd91U2M1zMXegewUXqCMcc/QpgO4viCY2tq4w3ARunfLb9xg38JACGJHrsXvsTRC4AypTc9lf11PiuEcwBPSn8DgJ+4AZdUiIeIOiPXFcIpAHOl56JxXyGcAWApPZuDuwrhBEAVpeczcFMhKgF43dNzw2HaOagQbACulZ6JAKpWCBaAwz09NxyuHbErhDUA/0rPhsB6h7AC8CvLzohgynUxiJ3lO4QxgDqUng0MITGdMh0E8KT0eWd3zHaoFkOzKdObAHKxW+Hqan96U0s8jIduK8T7kVIfHsrMSwHM9e9jxHV+8gcGGAzPgpq8PWUqBNC8MleVWDmEQgCpzqaAcFb1sY2yJ/jeV/H5vk8CoOiUtldg/bNRJ1jRmYiiz0WzhFIR3ECA9ZiA/pvf534gwBAQ44o+uTUnygjg1TgdAWcRREnZIOVgH1Dk5Vwv7hHxi9sIqu1GRD8GqmfdqwgADnfJALkCogEiglIFbMtgSZ0uEmFOn9H4MmjjIKfK2Oy/Cz1YH2DjoABglFkbwJIBOwTkCoRqhW1SVDRANMC+1bbJMBFBEcF/BFhVINVZAghfrQSU4LqvYqPP5XzvX/kKsD6HIRz1VffWBNr2H2i6MVn7ssZi/8oA8g3mOrtEoPODw9HNSxBOByq+tAnI9/7PvrCugE0gTV8rAJp+Qr79kwzwTbjp+0sGNP2EfPvX+gz4C7tCBl+8koA6AAAAAElFTkSuQmCC);
      background-size: cover;
      display: inline-block;
      line-height: 44px;
    }
  }
}
.header2 {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #ccc;
  line-height: 45px;
  white-space: nowrap;
  // position: relative;
  // position: relative;
  ul {
    //    float: left;width: 100%;
    // position: absolute;
    // top: 0;
    // left: 0;
    // height: 100%;
    padding: 0 5px;
    white-space: nowrap;
    li {
      white-space: nowrap;
      // float: left;
      display: inline-block;
      font-size: 13px;
      line-height: 44px;
      padding: 0 10px;
      color: #666;
    }
  }
}
.header2 .cur {
  color: #b93321;
}
.header3 {
  white-space: nowrap;
  // overflow: auto;
  overflow-x: scroll;
  height: 45px;
  overflow-y: hidden; /***这行加上就好了***/
  position: relative;
  ul {
    height: 44px;
  }
}
.books-box {
  width: 100%;
  height: calc(100% - 134px);
  overflow-y: scroll;
  overflow-x: hidden; /***这行加上就好了***/
  // height: 100%;
  background-color: #f5f2ed;
  .books-list {
    ul {
      li {
        height: 105px;
        width: 100%;
        display: block;
        padding-left: 15px;
        .list-box {
          width: 100%;
          height: 100%;
          padding: 15px 15px 15px 0;
          // background-color: #fff;
          border-bottom: 1px solid #ccc;
          img {
            width: 58px;
            height: 100%;
            float: left;
          }
          .list-right {
            margin-left: 75px;
            height: 100%;
            h4 {
              font-size: 14px;
            }
            p {
              color: #999;
              font-size: 12px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              line-height: 18px;
            }
            .split {
              padding: 0 10px;
            }
            .red {
              color: #b93321;
            }
          }
        }
      }
    }
  }
}
</style>

