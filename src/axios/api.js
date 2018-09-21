import Vue from 'vue'
import axios from 'axios'
// import axios from './index'

export default {
    getRankType () {
            Vue.$axios
      .get("/api/aaa.php", {
        params: {
          //请求参数
          url: "http://api.zhuishushenqi.com/cats/lv2"
        }
      })
      .then(function(response) {
        // console.log(response); //请求正确时执行的代码
        return response.data;
        // _this.myData = response.data;
        // console.log(_this.myData);
      })
      .catch(function(response) {
          return response;
        // console.log(response); //发生错误时执行的代码
      })
        
        
        // return Vue.http.get('/ranking/gender')
    },
};