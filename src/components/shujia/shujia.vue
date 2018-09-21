<template>
    <div class="shujia">
        <div class="bookList">
            <ul>
                <li v-for="v in myData">
                    <router-link :to="{name:'book',params:{iid:iid}}" >
                        <img :src="v.img" alt="">
                        <div class="list-right">
                            <h3>{{ v.title }}</h3>
                            <p>阅读到第1章</p>
                            
                        </div>
                    </router-link>
                    <div class="delete-box">
                                <el-button @click="open2(v.id)" type="danger" icon="el-icon-delete" circle></el-button>
                            </div>
                </li>
            </ul>
        </div>
        <div v-show="myData.length == 0" class="kong">
            <p class="kong-ku"></p>
            <p class="kong-txt">书架空空如也，快去逛逛找书</p>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        myData:[],
    };
  },
  watch:{
      myData(){
        //   this.getData();
      }
  },
  methods:{
      open2(id) {
          var self = this;
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

            this.$http.post('/api/books/delete.php', {
                        id: id
                    }, {emulateJSON: true}).then((response) => {
                        self.getData();
						console.log(response);
                    })



          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      getData(){
          var self = this;
        this.$store.state.username
      //   this.$router.push('/home/login'); // 页面加载时跳转
        this.$http
          .post(
            "/api/books/selectOne.php",
            {
              userID: self.$store.state.username
            },
            { emulateJSON: true }
          )
          .then(response => {
            console.log(response.data.data);
            self.myData = response.data.data;
          });
      }

  },
  created() {
    if (this.$store.state.user) {
        this.getData();
    }
  }
};
</script>

<style lang="scss" scoped>
.shujia {
  background: #f4f4f4;
  width: 100%;
  height: calc(100% - 100px);
  box-sizing: border-box;
  // padding-top: -100px;
  // position: relative;
}
.bookList{
    width: 100%;
    ul{
        width: 100%;
        li{
            width: 100%;
            height: 105px;
            padding-left: 15px;
            background-color: #fff;
            position: relative;
            .delete-box{
                position: absolute;
                right: 10px;
                top: 20px;
            }
            a{
                display: block;
                height: 100%;
                padding: 15px 15px 15px 0;
                border-bottom: 1px solid #ddd;
                img{
                    width: 58px;
                    height: 100%;
                    float: left;
                }
                .list-right{
                    height: 100%;
                    margin-left: 75px;
                    position: relative;
                    h3{
                        color: #333;
                        font-size: 14px;
                    }
                    p{
                            color: #999;
                            font-size: 12px;
                            line-height: 25px;
                    }
                }
            }
        }
    }
}
.kong {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  margin-top: -50px;
  .kong-ku {
    width: 100px;
    height: 100px;
    display: inline-block;
    background: url(http://m.zhuishushenqi.com/image/e9df8fb0cce3.ku.png);
    background-size: cover;
  }
  .kong-txt {
    color: #999;
    font-size: 12px;
  }
}
</style>

