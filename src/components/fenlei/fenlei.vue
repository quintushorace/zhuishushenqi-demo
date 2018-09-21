<template>
    <div class="fenlei">
        <h4>男生</h4>
        <div class="list-box">
            <router-link v-for="v of myData.male" :to="{name:'category',params:{name1:v.name,key:'male'}}">
                <span>{{ v.name }}</span>
                <p>{{ v.bookCount }}</p>
            </router-link>
        </div>
        <h4>女生</h4>
        <div class="list-box">
            <router-link v-for="v of myData.female" :to="{name:'category',params:{name1:v.name,key:'male'}}">
                <span>{{ v.name }}</span>
                <p>{{ v.bookCount }}</p>
            </router-link>
        </div>
        <h4>漫画</h4>
        <div class="list-box">
            <router-link v-for="v of myData.picture" :to="{name:'category',params:{name1:v.name,key:'male'}}">
                <span>{{ v.name }}</span>
                <p>{{ v.bookCount }}</p>
            </router-link>
        </div>
        <h4>出版</h4>
        <div class="list-box">
            <router-link v-for="v of myData.press" :to="{name:'category',params:{name1:v.name,key:'male'}}">
                <span>{{ v.name }}</span>
                <p>{{ v.bookCount }}</p>
            </router-link>
        </div>
    </div>
</template>

<script>
// import APIUrl from '@/axios/api';
export default {
  data() {
    return {
        myData:[],

    };
  },
  created() {
      var _this=this;
    //   console.log(APIUrl);
    //   console.log(APIUrl.getRankType());
    this.$axios
      .get("/api/aaa.php", {
        params: {
          //请求参数
          url: "http://api.zhuishushenqi.com/cats/lv2/statistics"
        }
      })
      .then(function(response) {
        // console.log(response); //请求正确时执行的代码
        _this.myData = response.data;
        console.log(_this.myData);
      })
      .catch(function(response) {
        console.log(response); //发生错误时执行的代码
      });
  }
};
</script>

<style lang="scss" scoped>
.fenlei {
  width: 100%;
  h4 {
    width: 100%;
    height: 60px;
    line-height: 60px;
    color: #999;
    font-weight: 400;
    font-size: 12px;
    box-sizing: border-box;
    padding: 0 15px;
  }
  .list-box{
      width: 100%;
      
      a{
          width: calc(100% / 3);
          display: inline-block;
          height: 60px;
          text-align: center;
          font-size: 15px;
            font-weight: 700;
            color: #333;
            
            border-right: 1px solid #f8f8f8;
            border-top: 1px solid #f8f8f8;
            border-bottom: 1px solid #f8f8f8;
            padding: 10px;
            
      }
        span{
                // line-height: 40px;
                display: block;
            }
      p{
          display: block;
          font-size: 12px;
            color: #ccc;
            font-weight: 400;
            // line-height: 0;
      }
  }

}
</style>

