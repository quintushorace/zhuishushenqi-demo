<template>
    <div class="details">
        <div class="header1">
            <div class="head-left" @click="$router.back(-1)">
                <i class="el-icon-arrow-left"></i>
                <span>返回</span>
            </div>
            <h2>优质书源</h2>
            <div @click="$router.push('/home/shujia')" class="head-right">
                <i></i>
            </div>
        </div>
        <div class="head">
          <img :src="'http://statics.zhuishushenqi.com'+myData.cover" alt="">
          <div class="head-right">
            <h2>{{ myData.title }}</h2>
            <p>
              <span class="red">{{ myData.author }}</span>
              <span class="split">|</span>
              <span>{{ myData.cat }}</span>
              <span class="split">|</span>
              <span>{{ (myData.wordCount/10000).toFixed(0) }}万字 </span>
            </p>
            <p>{{update.toFixed(0)}} 分钟前更新 </p>
          </div>
        </div>
        <div class="read-link">
          <a class="btn1" @click="addBooks">加入书架</a>
          <router-link class="btn2" :to="{name:'list',params:{iid:myData._id}}">
            开始阅读
          </router-link>
        </div>
        <div class="reader-data">
          <p class="item">
            <span class="key">追人气</span>
            <!-- <span class="value">2.2万</span> -->
            <span v-if="myData.latelyFollower > 10000" class="value">
                 {{ ( myData.latelyFollower /10000).toFixed(1) }}万
             </span>
             <span v-else class="value">
                  {{ myData.latelyFollower }}
            </span>
          </p>
          <p class="item">
            <span class="key">读取留存率</span>
            <span class="value">{{ myData.retentionRatio }}%</span>
          </p>
          <p class="item">
            <span class="key">日更字数/天</span>
            <span class="value">{{ myData.serializeWordCount }}</span>
          </p>
        </div>
        
        <div :class="{introduction:true, height:height}">
          {{ myData.longIntro }}
          <i @click="height=false" v-show="height" class="icon el-icon-arrow-down"></i>
          <i @click="height=true" v-show="!height" class="icon el-icon-arrow-up"></i>
        </div>
        <div class="chapter-item">
          <router-link :to="{name:'list',params:{iid:myData._id}}">
            目录
            <span> {{ myData.lastChapter }} </span>
            <i class="el-icon-arrow-right"></i>
          </router-link>
        </div>
        <div class="hot-comment-top">
          热门书评
          <span>更多评论</span>
        </div>
        <ul class="c-comment-list">
          <li>
            <div class="comment-box">
            <a href="####">
              <img src="http://statics.zhuishushenqi.com/avatar/91/3f/913ffd2ace33c2b162025dfd51c7136f" alt="">
            </a>
            
            <div class="comment-right">
              <p class="name">居然是高手</p>
              <p><strong>吾名陈独秀</strong></p>
              
              <p class="content">一群伟大的科学家死后在天堂里玩藏猫猫，轮到爱因斯坦抓人，他数到100睁开眼睛，看到所有人都藏起来了，只见伏特趴在不远处。　　</p>
              <p>3小时前 <span class="right">3人觉得有用</span></p>
            </div>
            </div>
          </li>
          <li>
            <div class="comment-box">
            <a href="####">
              <img src="http://statics.zhuishushenqi.com/avatar/52/33/5233618066061f65ffbfdc6f16ae264d" alt="">
            </a>
            
            <div class="comment-right">
              <p class="name">祭奠那个兵荒马乱的小青春</p>
              <p><strong>很多有系统的人</strong></p>
              <p class="content">都会在心里猜测是不是有幕后黑手在算计自己。其实说句真的，你有什么值得别人设计的呢？能演出系统的存在难道还创造不出来一个宿主么？</p>
              <p>4小时前 <span class="right">0人觉得有用</span></p>
            </div>
            </div>
          </li>
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
      height: true,
      title:'',
      img:'',
      iid:'',
      userID:'',
    };
  },
  computed: {
    update() {
      // console.log(myData.updated);
      var date = new Date(this.myData.updated);
      var nowdate = new Date();
      var oldDate = date.getTime();
      var newDate = nowdate.getTime();

      var time = newDate - oldDate;

      return time / 1000 / 60;
    }
  },
  mounted() {},
  methods: {
    addBooks(){
      console.log(this.myData);
      if(!this.$store.state.user){
      this.$router.push('/home/login'); // 页面加载时跳转
    }else{
      this.title = this.myData.title;
      this.img = 'http://statics.zhuishushenqi.com'+this.myData.cover;
      this.iid = this.myData._id;
      this.userID = this.$store.state.username;


                        var self = this;
                            self.$http.post('/api/books/insertBook.php', {
                                title: self.title,
                                img: self.img,
                                iid: self.iid,
                                userID: self.userID
                            }, {emulateJSON: true}).then((response) => {
                                if (response.ok) {
                                  // alert('加入成功');
                                  self.$message({
          message: '加入成功',
          type: 'success'
        });
                                  // self.$store.commit('setUser',true);
                                  // self.$store.commit('setUsername',self.username);
                                  // self.$router.push('/user'); // 页面加载时跳转
                                    // this.login();
                                } else {
                                    // alert('服务器繁忙');
                                    self.$message.error('服务器繁忙');
                                }
                            })
    }
      
                           
    }
  },
  created() {
    this.iid = this.$route.params.iid;
    var _this = this;
    this.$axios
      .get("/api/aaa.php", {
        params: {
          //请求参数
          url: "http://api.zhuishushenqi.com/book/" + _this.iid
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
.details {
  width: 100%;
  height: 100%;
}
.c-comment-list {
  width: 100%;
  li {
    width: 100%;
    padding-left: 20px;
    padding-top: 12px;
    .comment-box {
      width: 100%;
      padding: 0 20px 8px 0;
      border-bottom: 1px solid #ebebeb;
    }
    a {
      float: left;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .comment-right {
      margin-left: 60px;
      p {
        color: #999;
        font-size: 12px;
        line-height: 20px;
      }
      strong {
        color: #000;
      }
      .content {
        height: 40px;
        overflow: hidden;
      }
      .right {
        float: right;
      }
      .name {
        color: #a58d5e;
      }
    }
  }
}
.hot-comment-top {
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  padding: 0 20px;
  span {
    float: right;
    font-size: 12px;
    color: #999;
  }
}
.chapter-item {
  width: 100%;
  height: 62px;

  background: #fff;
  border-bottom: 1px solid #ebebeb;
  color: #333;
  padding-left: 20px;
  a {
    display: block;
    width: 100%;
    height: 100%;
    padding: 20px 20px 20px 0;
    font-size: 14px;
    color: #333;
    position: relative;
    i {
      font-size: 22px;
      position: absolute;
      right: 7px;
      color: #888;
    }
    span {
      color: #999;
      float: right;
      font-size: 12px;
      width: 207px;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.height {
  height: 110px;
  -webkit-line-clamp: 3; /** 显示的行数 **/
}
.introduction {
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/

  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/

  overflow: hidden; /** 隐藏超出的内容 **/
  width: 100%;
  position: relative;
  padding: 20px;
  font-size: 13px;
  color: #222;
  line-height: 30px;
  border-bottom: 1px solid #ebebeb;
  // overflow: hidden;
  .icon {
    position: absolute;
    bottom: 3px;
    right: 7px;
    font-size: 22px;
    color: #888;
  }
}
.reader-data {
  width: 100%;
  height: 85px;
  padding: 20px 0;
  display: flex;
  border-bottom: 1px solid #ebebeb;
  .item {
    flex: 1;
    text-align: center;
    span {
      display: block;
      font-size: 16px;
      color: #222;
    }
    .key {
      color: #999;
      font-size: 12px;
    }
    .value {
      margin-top: 5px;
    }
  }
}
.read-link {
  width: 100%;
  height: 65px;
  padding: 0 20px 20px 20px;
  display: flex;
  border-bottom: 1px solid #ebebeb;
  a {
    width: 45%;
    height: 45px;
    line-height: 42px;
    font-size: 16px;
    text-align: center;
    border-radius: 2px;
    display: inline-block;
    border: 1px solid #b93321;
    flex: 1;
  }
  .btn1 {
    margin-right: 15px;
    color: #b93321;
    background-color: #fff;
  }
  .btn2 {
    margin-left: 15px;
    background-color: #b93321;
    color: #fff;
  }
}
.head {
  width: 100%;
  padding: 20px;
  height: 127px;
  img {
    width: 65px;
    height: 100%;
    float: left;
  }
  .head-right {
    margin-left: 75px;
    height: 100%;
    h2 {
      font-size: 16px;
      font-weight: 400;
    }
    p {
      color: #999;
      font-size: 12px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      line-height: 24px;
    }
    .split {
      padding: 0 10px;
    }
    .red {
      color: #b93321;
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
</style>

