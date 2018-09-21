<template>
    <div :class="{book:true, cur1:col==1,cur2:col==2,cur3:col==3}">
        <transition name="el-zoom-in-left">
         <div v-show="block" class="block">
            <div class="block-list">
                <list1></list1>
            </div>
            
        </div>
      </transition>
       
       <div class="content">
           <transition name="el-zoom-in-top">
               <div v-show="lock" class="head">
               <div class="header1">
                    <div class="head-left" @click="$router.back(-1)">
                        <i class="el-icon-arrow-left"></i>
                        <span>返回</span>
                    </div>
                    <h2>书籍详情</h2>
                    <div @click="$router.push('/home/shujia')" class="head-right">
                        <i></i>
                    </div>
                </div>
           </div>
        </transition>
           <transition name="el-zoom-in-bottom">
        <div v-show="lock" class="foot">
               <div class="foot-center">
                   <div class="size-box">
                       <span class="jian">Aa-</span>
                       <div class="main">
                           <el-slider :max="35" :min="15" v-model="value1"></el-slider>
                       </div>
                       <span class="jia">Aa+</span>
                   </div>
                   <div class="class1">
                       <a @click="col=1" :class="{cur:col==1}">默认</a>
                       <a @click="col=2" :class="{cur:col==2}">夜间</a>
                       <a @click="col=3" :class="{cur:col==3}">护眼</a>
                   </div>
                   <div class="item" @click="block=true">
                       <span @click="block=true;lock=false">目录</span>
                   </div>
                   
               </div>
           </div>
      </transition>
           
           <h1>{{ myData.title }}</h1>
       </div>
       <div  @click="lock=!lock;block=false" class="TXTbody" :style="{fontSize: value1+'px'}" v-html="body1">
           
       </div>
       
   </div>
</template>

<script>
import list1 from '../list/list1/list1';

export default {
  data() {
    return {
      myData: [],
      lock: false,
      value1:18,
      col:1,
      iid:'',
      block:false
    };
  },
  components:{
      list1,
  },
  computed: {
    body1() {
      var reg = new RegExp("。", "g");
      return this.myData.body.replace(reg, "。<br /><p>");
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
          url:
            "http://chapterup.zhuishushenqi.com/chapter/http://www.snwx.com/book/15/15231/4307901.html?cv=1481275033588"
        }
      })
      .then(function(res) {
        console.log(res.data.chapter);
        _this.myData = res.data.chapter;
      })
      .catch(function(response) {
        console.log(response); //发生错误时执行的代码
      });
  }
};
</script>

<style lang="scss" scoped>
.book {
  width: 100%;
  height: 100%;
  // overflow: hidden;
  
  overflow-y: scroll;
  /* 内容会被裁剪，会以滚动条显示 */
  overflow-x: hidden; /* 超出内容不可见 */
  padding-top: 25px;
  .block{
      position: absolute;
      top: 0;
      left: 0;
      width: 325px;
      height: 100%;
      z-index: 9999;
    //   background-color: #fff;
      overflow-y: scroll;
  /* 内容会被裁剪，会以滚动条显示 */
  overflow-x: hidden; /* 超出内容不可见 */
  .block-list{
      background-color: #fff;
  }
  }
  //   position: relative;
  .head {
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    background-color: rgba(50, 51, 52, 0.9);
    transition: all 0.2s ease;
    width: 100%;
    height: 44px;
    line-height: 44px;
  }
}
.foot{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 170px;
    background-color: rgba(50,51,52,.9);
    transition: all .2s ease;
    padding: 20px;
    color: #fff;
    .item{
        width: 100%;
        height: 30px;
        text-align: center;
        span{

        }
    }
    .class1{
        width: 100%;
        height: 30px;
        margin-bottom: 20px;
        display: flex;
        a{
            flex: 1;
            color: #fff;
            border: 1px solid #535353;
            border-radius: 5px;
            text-align: center;
            line-height: 30px;
            font-size: 14px;
            margin-right: 5px;
            margin-left: 5px;
            &.cur{
                color: #b93221;
    border: 1px solid #b93221;
            }
        }
    }
    .size-box{
        width: 100%;
        height: 30px;
        margin-bottom: 20px;
        span{
            font-size: 20px;
            width: 40px;
        }
        .jian{
            float: left;
        }
        .jia{
            float: right;
            margin-top: -38px;
        }
        .main{
            width: 100%;
            padding: 0 42px 0 40px;

        }
    }
}
.header1 {
  width: 100%;
  height: 44px;
  background-color: rgba(50,51,52,.9);
    transition: all .2s ease;
    color: #fff;
  text-align: center;
  line-height: 44px;
  h2 {
    display: inline-block;
        font-size: 12px;
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
      width: 15px;
      height: 15px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAaCAYAAABPY4eKAAAAcElEQVRIS+3UwQ2AMAxDUZspmArGgJFgQiqVA2SABiEkTpydA+kCVl+rz2o2oPlKoIfoOFDQcWI9zk05/N6PLLHju9mI5guE7HjYZ4qe+XMmx0P0kz2GPfMqd7/bnnmVswPIyESo/5k98yr/cdF5vQD65koTkcw9oAAAAABJRU5ErkJggg==) no-repeat;
      background-size: cover;
      display: inline-block;
      line-height: 44px;
    }
  }
}
h1 {
  padding: 0 20px;
  font-weight: 400;
  color: #333;
  font-size: 22px;
}
.TXTbody {
  text-indent: 2em;
  color: #5c5d58;
  font-size: 18px;
  line-height: 35px;
}
.cur1{
background-color: #eee6dd;
  color: #5c5d58;
}
.cur2{
    background-color: #0c0c0c;
    color: #666;
}
.cur3{
    background-color: #b8cd8d;
    color: rgba(12,46,16,.8);
}

</style>

