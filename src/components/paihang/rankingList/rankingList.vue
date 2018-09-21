<template>
    <div class="category">
        <div class="header1">
            <div class="head-left" @click="$router.back(-1)">
                <i class="el-icon-arrow-left"></i>
                <span>返回</span>
            </div>
            <h2>{{ myData.title }}</h2>
            <div @click="$router.push('/home/shujia')" class="head-right">
                <i></i>
            </div>
        </div>
        <div class="topten">
            <span @click="cur=1;getData()" :class="{cur:cur==1}">周榜</span>
            <span @click="cur=2" :class="{cur:cur==2}">月榜</span>
            <span @click="cur=3" :class="{cur:cur==3}">总榜</span>
        </div>

        <div class="books-box" v-loading="tf"
element-loading-text="加载中"
element-loading-spinner="el-icon-loading"
element-loading-background="#f5f2ed"
style="width: 100%">
<div class="books-list" >
<div v-show="block" class="block">没有更多书籍</div>
<ul v-if="!block">
<router-link tag="li" :to="{name:'details',params:{iid:v._id}}" v-for="v of myData.books">
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
<span class="red">{{ v.retentionRatio }}/</span>
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
      minor: "",
      cur: 1,
      id1: 0,
      id2: 0,
      iid: "",
      tf: true,
      block: false,
      yueId: "",
      zongId: "",
      yue: true,
      zong: true
    };
  },
  watch: {
    cur() {
      this.tf = true;
      if (this.cur == 2) {
        if (this.yue) {
          this.getMonth();
        } else {
          console.log("false");
          this.tf = false;
          this.block = true;
          return;
        }
      }
      if (this.cur == 3) {
        if (this.zong) {
          this.getZong();
        } else {
          this.tf = false;
          this.block = true;
          return;
        }
      }
      //   this.getData();
    }
  },
  computed: {},
  methods: {
    getData() {
      var _this = this;
      this.$axios
        .get("/api/aaa.php", {
          params: {
            //请求参数
            url: "http://api.zhuishushenqi.com/ranking/" + _this.iid
          }
        })
        .then(function(res) {
          console.log(res);
          _this.myData = res.data.ranking;
          if ("monthRank" in _this.myData) {
            _this.yueId = _this.myData.monthRank;
          } else {
            _this.yue = false;
          }

          if ("totalRank" in _this.myData) {
            _this.zongId = _this.myData.totalRank;
          } else {
            _this.zong = false;
          }
          _this.block = false;
          _this.tf = false;
        })
        .catch(function(response) {
          console.log(response); //发生错误时执行的代码
        });
    },
    getMonth() {
      var _this = this;
      this.$axios
        .get("/api/aaa.php", {
          params: {
            //请求参数
            url: "http://api.zhuishushenqi.com/ranking/" + _this.yueId
          }
        })
        .then(function(res) {
          console.log(res);
          _this.myData = res.data.ranking;

          _this.block = false;
          _this.tf = false;
        })
        .catch(function(response) {
          console.log(response); //发生错误时执行的代码
        });
    },
    getZong() {
      var _this = this;
      this.$axios
        .get("/api/aaa.php", {
          params: {
            //请求参数
            url: "http://api.zhuishushenqi.com/ranking/" + _this.zongId
          }
        })
        .then(function(res) {
          console.log(res);
          _this.myData = res.data.ranking;

          _this.block = false;
          _this.tf = false;
        })
        .catch(function(response) {
          console.log(response); //发生错误时执行的代码
        });
    }
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
.category {
  width: 100%;
  height: 100%;
}
.block {
  font-size: 12px;
  color: #999;
  text-align: center;

  margin-top: 20px;
}
.topten {
  width: 100%;
  height: 55px;
  background-color: #fff;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  span {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
    line-height: 55px;
    &.cur {
      border-bottom: 2px solid #b93321;
    }
  }
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
  height: calc(100% - 100px);
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

