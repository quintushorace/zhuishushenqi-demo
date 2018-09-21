<template>
    <div class="paihang">
        <h3>男生</h3>
        <div class="paihang-list">
            <ul>
                <router-link tag="li" :to="{name:'rankingList',params:{iid:v._id,month:v.monthRank,total:v.totalRank}}" v-if="index <7" v-for="(v,index) of myData.male">
                    <img :src="'http://statics.zhuishushenqi.com'+v.cover" alt="">
                    <span>{{ v.title }}</span>
                </router-link>
                <li @click="men=!men">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkEyNTc1NkJCNzBBRDExRTZBNzlCOUJEOTEyRjMzQjc1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkEyNTc1NkJDNzBBRDExRTZBNzlCOUJEOTEyRjMzQjc1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTI1NzU2Qjk3MEFEMTFFNkE3OUI5QkQ5MTJGMzNCNzUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTI1NzU2QkE3MEFEMTFFNkE3OUI5QkQ5MTJGMzNCNzUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5jN6HRAAADmUlEQVR42uSbXUgUURTHj5vYi7YRFZQR+FZIRCVGouVXYBSCmgb6nlARvvhuPUYQJCVF0IsUFBZIbVn2oVmWbBCU9JYQUSAWm/miqXX+zJllXa3Z2Zm7O3PnD39wl7t3zg/nfp+b86ejhhQpzN7HLmEXs4vYhey17HwpM8OOsb+yP7HH2VH2KPuniqByXa5vC/sYu5G9l73Kony+GL8rTfh+gf2GfYd9m/3ZrQBzXPoP72d3sg+lAGlXgH/APs8eclpZyOHvK9nDEsgRBbAkdaLu5/KsymwAb2L3sp+xKyhzqpBn9koMGQFuZn9kt1H21CYxNKsEzmN3s29JD5xthSUWxLTabeACdoR9irwnxPSIvc4t4A3SbmrIu8Io8VRidQSM1+Yhew95XzvZA1bNLWTRZjHw7yb/aJfEnJcO8AV2NflP1RK7LWB09yfIv0LsLakCY4J/lfyvKzJHtwTulhWN3wWGi1bAVewG0kcNycNpMvBZ0k9d/wLG4F2uIXC5sC0D7iR91ZkMvJFdpzFwnTDGgVvJ/e0eLylXGOPATaS/mkxgc3dRd4ExDOAyUrMX5TWBsSzks9WQU5UAeEeAgIsBXBQg4CJ015udtw6upr6dX5ha43N0kKifFysL82rL2Vdhrisro/rjPHlLWHPg79+zRPeuqS1nX2vwSuc77woOrjAIHFZfzr4KQhQszQF4xnE10cfLv3sdUV/OvmbQhmOOX+t+7AjlLO1kItfVl7OvXzguxTlsaUBe6TG80hMBasMTAP4QIOBxAL8NEHAUwK/ISCvQXWAcBTCyZUYDAAzGmDnx6AsAcJ+54wHdYM9rDDsvjHHgSTLOVnXVgDAu2Zc+pzFwnC0RGDlQIxrCjgjbMmCoS0PgM4kfkoGfsO9qBAuWwf8BQ6dlBeV3xYSFrIC/sNs1AG4XFktgCBluPT6G7REGShUY6iAjg9VvGpbYyS7wHPso+72PYBFro8RuGxj6zsY+yzufwNZKzJQusDntPEBGvqVX9YKMxPFJq4KpbtNOk5Hef8mDsJfZ2Mj+kUphO/vSs2Sk6raQohsnNjUtsZyU2MhtYFO4ZbLdXG5lSTfZ2yQWW0r35OEbGWn4VRlecLwkI3m0VWKgTAGbwjhdIR3GffaiAshFqRvPKHfaebqVuTMk3irtCmMhNvfTTaXAhtsYGbnPmDF57qLWSkq8iocsAxy8r6eVr+JNkXEggLFU6VW8vwIMANG61WyEcdbpAAAAAElFTkSuQmCC" alt="">
                    <span>别人家的排行榜</span>
                    <i v-show="!men" class="el-icon-arrow-down"></i>
                    <i v-show="men" class="el-icon-arrow-up"></i>
                </li>
                 <el-collapse-transition>
                     <div v-show="men" class="show">
                         <router-link tag="li" :to="{name:'rankingList',params:{iid:v._id,month:v.monthRank,total:v.totalRank}}"  v-if="index >7" v-for="(v,index) of myData.male">
                             <img :src="'http://statics.zhuishushenqi.com'+v.cover" alt="">
                            <span>{{ v.title }}</span>
                         </router-link>
                     </div>
                </el-collapse-transition>
                
            </ul>
        </div>
        <h3>女生</h3>
        <div class="paihang-list">
            <ul>
                <router-link tag="li" :to="{name:'rankingList',params:{iid:v._id,month:v.monthRank,total:v.totalRank}}"  v-if="index <7" v-for="(v,index) of myData.female">
                    <img :src="'http://statics.zhuishushenqi.com'+v.cover" alt="">
                    <span>{{ v.title }}</span>
                </router-link>
                <li @click="women=!women">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkEyNTc1NkJCNzBBRDExRTZBNzlCOUJEOTEyRjMzQjc1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkEyNTc1NkJDNzBBRDExRTZBNzlCOUJEOTEyRjMzQjc1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTI1NzU2Qjk3MEFEMTFFNkE3OUI5QkQ5MTJGMzNCNzUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTI1NzU2QkE3MEFEMTFFNkE3OUI5QkQ5MTJGMzNCNzUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5jN6HRAAADmUlEQVR42uSbXUgUURTHj5vYi7YRFZQR+FZIRCVGouVXYBSCmgb6nlARvvhuPUYQJCVF0IsUFBZIbVn2oVmWbBCU9JYQUSAWm/miqXX+zJllXa3Z2Zm7O3PnD39wl7t3zg/nfp+b86ejhhQpzN7HLmEXs4vYhey17HwpM8OOsb+yP7HH2VH2KPuniqByXa5vC/sYu5G9l73Kony+GL8rTfh+gf2GfYd9m/3ZrQBzXPoP72d3sg+lAGlXgH/APs8eclpZyOHvK9nDEsgRBbAkdaLu5/KsymwAb2L3sp+xKyhzqpBn9koMGQFuZn9kt1H21CYxNKsEzmN3s29JD5xthSUWxLTabeACdoR9irwnxPSIvc4t4A3SbmrIu8Io8VRidQSM1+Yhew95XzvZA1bNLWTRZjHw7yb/aJfEnJcO8AV2NflP1RK7LWB09yfIv0LsLakCY4J/lfyvKzJHtwTulhWN3wWGi1bAVewG0kcNycNpMvBZ0k9d/wLG4F2uIXC5sC0D7iR91ZkMvJFdpzFwnTDGgVvJ/e0eLylXGOPATaS/mkxgc3dRd4ExDOAyUrMX5TWBsSzks9WQU5UAeEeAgIsBXBQg4CJ015udtw6upr6dX5ha43N0kKifFysL82rL2Vdhrisro/rjPHlLWHPg79+zRPeuqS1nX2vwSuc77woOrjAIHFZfzr4KQhQszQF4xnE10cfLv3sdUV/OvmbQhmOOX+t+7AjlLO1kItfVl7OvXzguxTlsaUBe6TG80hMBasMTAP4QIOBxAL8NEHAUwK/ISCvQXWAcBTCyZUYDAAzGmDnx6AsAcJ+54wHdYM9rDDsvjHHgSTLOVnXVgDAu2Zc+pzFwnC0RGDlQIxrCjgjbMmCoS0PgM4kfkoGfsO9qBAuWwf8BQ6dlBeV3xYSFrIC/sNs1AG4XFktgCBluPT6G7REGShUY6iAjg9VvGpbYyS7wHPso+72PYBFro8RuGxj6zsY+yzufwNZKzJQusDntPEBGvqVX9YKMxPFJq4KpbtNOk5Hef8mDsJfZ2Mj+kUphO/vSs2Sk6raQohsnNjUtsZyU2MhtYFO4ZbLdXG5lSTfZ2yQWW0r35OEbGWn4VRlecLwkI3m0VWKgTAGbwjhdIR3GffaiAshFqRvPKHfaebqVuTMk3irtCmMhNvfTTaXAhtsYGbnPmDF57qLWSkq8iocsAxy8r6eVr+JNkXEggLFU6VW8vwIMANG61WyEcdbpAAAAAElFTkSuQmCC" alt="">
                    <span>别人家的排行榜</span>
                    <i v-show="!women" class="el-icon-arrow-down"></i>
                    <i v-show="women" class="el-icon-arrow-up"></i>
                </li>
                 <el-collapse-transition>
                     <div v-show="women" class="show">
                         <router-link tag="li" :to="{name:'rankingList',params:{iid:v._id,month:v.monthRank,total:v.totalRank}}" v-if="index > 7" v-for="(v,index) of myData.male">
                             <img :src="'http://statics.zhuishushenqi.com'+v.cover" alt="">
                            <span>{{ v.title }}</span>
                         </router-link>
                     </div>
                </el-collapse-transition>
                
            </ul>
        </div>
        
    </div>
</template>

<script>
export default {
  data() {
    return {
        myData:[],
        men:false,
        women:false
    };
  },
  created(){
    //   http://api.zhuishushenqi.com/ranking/gender
    //  this.iid = this.$route.params.iid;
    var _this = this;
    this.$axios
      .get("/api/aaa.php", {
        params: {
          //请求参数
          url: "http://api.zhuishushenqi.com/ranking/gender"
        }
      })
      .then(function(res) {
        console.log(res.data);
        _this.myData = res.data;
      })
      .catch(function(response) {
        console.log(response); //发生错误时执行的代码
      });
  }
};
</script>

<style lang="scss" scoped>
.paihang {
  width: 100%;
  height: 100%;
  position: relative;
  h3 {
    width: 100%;
    height: 54px;
    padding: 10px 0 0 15px;
    font-weight: 400;
    color: #999;
    background-color: #e6e6e6;
    font-size: 12px;
    line-height: 42px;
  }
  .show{
      overflow: hidden;
  }
  .paihang-list {
    width: 100%;
    ul {
      width: 100%;
      li {
        height: 60px;
        width: 100%;
        position: relative;
        img {
          width: 30px;
          height: 30px;
          padding: 15px 0 0 15px;
          float: left;
          box-sizing: content-box;
        }
        
        span {
          margin-left: 55px;
          display: block;
          color: #333;
          font-size: 14px;
          font-weight: 500;
          height: 100%;
          line-height: 60px;
          border-bottom: 1px solid #ebebeb;
        //   position: relative;
          
        }
        i{
            font-size: 20px;
            // line-height: 60px;
            position: absolute;
            right: 15px;
            top: 20px;
            // top: 0;
        }
      }
    }
  }
}
</style>
