<template>
    <div class="details">
        <div class="chapter-header">
            <div class="header-left">
                <h3>目录</h3>
                <span class="chapter-title-desc">共 {{ myData.length }} 章</span>
            </div>
            <span @click="myData.reverse();myDataLength.reverse()" class="header-right">倒序</span>
        </div>
        <ul class="list-ul">
            <router-link :to="{name:'book',params:{iid:iid}}" tag="li" v-for="(v,index) of myData">
                <a>
                    <!-- <span v-show="tf">{{ myDataLength }}</span> -->
                    {{myDataLength[index]}}
                    <!-- <span v-show="!tf"> {{ (index+1).reverse() }} </span> -->
                    {{ v.title }}</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
// import APIUrl from '@/axios/api';

export default {
  data() {
    return {
      myData: [],
      iid: "",
      tf: true,
      
    };
  },
  computed: {
    myDataLength() {
        var arr=[];
     for (let i = 1; i < this.myData.length+1; i++) {
         arr.push(i);
     }
     return arr;

    }
  },
  mounted() {},
  methods: {},
  created() {
    this.iid = this.$route.params.iid;
    var _this = this;
    this.$axios
      .get("/api/aaa.php", {
        params: {
          //请求参数
          url: "http://api.zhuishushenqi.com/mix-atoc/"+_this.iid+"?view=chapters"
        }
      })
      .then(function(res) {
        console.log(res.data);
        _this.myData = res.data.mixToc.chapters;
      })
      .catch(function(response) {
        console.log(response); //发生错误时执行的代码
      });
  }
};
</script>

<style lang="scss" scoped>
.details {
  width: 100%;
  height: 100%;
}
.list-ul{
    width: 100%;
    li{
        width: 100%;
        height: 50px;
        
        padding-left: 20px;
        a{
            width: 100%;
            height: 100%;
            padding-right: 40px;
            line-height: 50px;
            display: block;
            border-bottom: 1px solid #f8f8f8;
                font-size: 12px;
                    color: #999;
        }
    }
}
.chapter-header{
    width: 100%;
    height: 47px;
    padding: 15px 20px;
    border-bottom: 1px solid #f8f8f8;
    .header-left{
        float: left;
        h3{
            font-size: 14px;
            display: inline;
        }
        span{
            color: #999;
            font-size: 12px;
        }
    }
    .header-right{
            float: right;
    font-size: 14px;
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
</style>

