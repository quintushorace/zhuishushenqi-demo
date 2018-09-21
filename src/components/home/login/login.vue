<template>
    <div class="login">
        <div class="content">
           <span class="tishi">没有注册账号会自动注册</span>
            <div style="margin: 20px;"></div>
            <el-form :label-position="labelPosition" label-width="80px">
              <el-form-item label="用户名">
                <el-input v-model.number="username"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="pass"></el-input>
              </el-form-item>
              <el-form-item label=" ">
                <el-button @click="sub()" type="primary">登录</el-button>
              </el-form-item>
            </el-form>
        </div>
        
    </div>
</template>

<script>
// import APIUrl from '@/axios/api';

export default {
  data() {
    return {
      myData: [],
      
      labelPosition: "top",
        username: "",
        pass: "",
    };
  },
  computed: {},
  methods: {
    getData() {},
    sub() {
     

     


      console.log(this.username);
    var self = this;
                if (self.name != '') {

                    self.$http.post('/api/books/check.php', {username: self.username}, {emulateJSON: true}).then((response) => {
                        console.log(parseInt(response.data.substring(response.data.length - 1)));
                        if (parseInt(response.data.substring(response.data.length - 1))) {
                            // alert('已注册过的账号!');
                            self.$message('已注册过的账号');
                            
                                self.$http.post('/api/books/login.php', {
                                    username: self.username,
                                    pass: self.pass
                                }, {emulateJSON: true}).then((response) => {
                                    console.log(response.ok);
                                    if (parseInt(response.data.substring(response.data.length - 1))) {
                                      // alert('登录成功')
                                      self.$message({
          message: '登录成功',
          type: 'success'
        });
                                        self.$store.commit('setUser',true);
                                        self.$store.commit('setUsername',self.username);

                                        // self.$store.commit('newSt',self.phone);
                                        self.$router.push('/user'); // 页面加载时跳转
                                    } else {
                                        // alert('账号或密码不正确');
                                        self.$message.error('账号或密码不正确');
                                    }
                                })
                        } else {
                            // alert('没有');
                            self.$http.post('/api/books/insert.php', {
                                username: self.username,
                                pass: self.pass
                            }, {emulateJSON: true}).then((response) => {
                                console.log(self.username);
                                console.log(self.padd);
                                // console.log(response.ok);
                                if (response.ok) {
                                  // alert('注册成功');
                                   self.$message({
          message: '注册成功',
          type: 'success'
        });
                                  self.$store.commit('setUser',true);
                                  self.$store.commit('setUsername',self.username);
                                  self.$router.push('/user'); // 页面加载时跳转
                                    // this.login();
                                } else {
                                    // alert('服务器繁忙');
                                    self.$message.error('服务器繁忙');
                                }
                            })
                        }
                    })
                } else {
                    // alert('手机号不能为空');
                    self.$message.error('手机号不能为空');
                }

     
    }
  },
  created() {
    console.log(this.$store.state.user);
    if(this.$store.state.user){
      this.$router.push('/user'); // 页面加载时跳转
    }
    
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
}
.content {
  padding: 20px;
  .tishi {
    font-size: 14px;
    color: #606266;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "Hiragino Sans GB", Arial, sans-serif;
  }
  .el-button--primary {
    width: 100%;
    color: #fff;
    background-color: #b93321;
    border-color: #b93321;
  }
}
</style>

