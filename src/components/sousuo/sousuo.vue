<template>
    <div class="sousuo">
        <div class="header1">
            <div class="head-left" @click="$router.back(-1)">
                <i class="el-icon-arrow-left"></i>
                <span>返回</span>
            </div>
            <h2>搜索</h2>
            <div @click="$router.push('/home/shujia')" class="head-right">
                <i></i>
            </div>
        </div>
        <div class="content">
            <div class="input-box">
                <i class="el-icon-search"></i>
                <input v-model="value" @keyup="getData()" type="text" placeholder="请输入搜索内容">
            </div>
            <span class="sub">确定</span>
        </div>
        <div v-show="tf" class="list-box">
            <ul class="ss">
            <router-link tag="li" :to="{name:'details',params:{iid:v._id}}" v-for="v of myData">
                {{ v.title }}
            </router-link>
        </ul>
        </div>
        
        <div v-show="!tf" class="box">
            <h1>搜索热词</h1>
            <span @click="value=v;getData()" v-for="v in ssrc">{{ v }}</span>
            <h1 class="lishi">热门推荐</h1>
            <span @click="value=v;getData()" v-for="v in rmtj">{{ v }}</span>
            
        </div>
        
    </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      tf:false,
      myData: [],
      ssrc: [
        "重生",
        "系统",
        "斗破苍穹",
        "都市",
        "快穿",
        "穿越",
        "三国",
        "火影",
        "洪荒",
        "末世",
        "都市仙尊",
        "唐家三少",
        "元尊",
        "斗罗大陆",
        "橙红年代"
      ],
      rmtj: [
        "香蜜沉沉烬如霜",
        "天盛长歌",
        "镇魂",
        "吞噬苍穹",
        "神级奶爸",
        "黑道特种兵"
      ]
    };
  },
  methods: {
    getData() {
        this.tf = true;
        if(this.value == ''){
            this.tf = false;
            return;
        }
        var value = encodeURI(this.value);
      var _this = this;
      this.$axios
        .get("/api/aaa.php", {
          params: {
            //请求参数
            url:
              "http://api.zhuishushenqi.com/book/fuzzy-search?query="+value
          }
        })
        .then(function(res) {
          console.log(res);
          _this.myData = res.data.books;
        })
        .catch(function(response) {
          console.log(response); //发生错误时执行的代码
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.sousuo{
    width: 100%;
    height: 100%;

}
.list-box {
  width: 100%;
  display: block;
  height: calc(100% - 120px);
  overflow-x: hidden;
  overflow-y: scroll;
}
.ss {
  overflow: hidden;

  li {
    width: 100%;
    padding-left: 24px;
    height: 52px;
    line-height: 52px;
    color: #222;
    font-size: 15px;
    border-bottom: 1px solid #ccc;
  }
}
.content {
  width: 100%;
  padding: 15px;
  height: 70px;

  .sub {
    width: 40px;
    font-size: 15px;
    float: left;
    line-height: 35px;
    text-align: center;
    color: #748389;
  }
  .input-box {
    width: calc(100% - 40px);
    float: left;
    height: 35px;
    margin-bottom: 20px;
    padding: 0 30px;
    // box-sizing: content-box;
    position: relative;
    background-color: #ebebf0;
    border-radius: 20px;
    i {
      position: absolute;
      top: 8px;
      left: 7px;
    }
  }
  input {
    width: 100%;
    height: 100%;
    background-color: #ebebf0;
    outline: none;
    background: transparent;
    border: none;
    outline: medium;
    color: #222;
  }
}
.box {
  padding: 20px;
  span {
    display: inline-block;
    color: #9b9ba3;
    background: #efeff4;
    border-radius: 10px;
    padding: 0 10px;
    margin: 10px 10px 10px 0;
  }
  .lishi {
    margin-top: 20px;
  }
}
h1 {
  color: #6b6b6b;
  display: block;
  font-size: 22px;
  font-weight: 400;
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
