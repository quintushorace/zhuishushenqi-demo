<template>
  <div class="app">

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "app",
  data() {
    return {

    }
  },
  created(){
    this.$router.push('/home/'); // 页面加载时跳转
  },
  components:{
    
  }

}
</script>

<style lang="scss">
body,html{
  width: 100%;
  height: 100%;
}
.app{
  width: 100%;
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,li,a{
  list-style: none;
  text-decoration: none;
}
.el-message-box{
  width: auto;
}
.category .el-loading-spinner i{
    color: #152c45;
}
.category .el-loading-spinner .el-loading-text{
color: #152c45; 
}
  .header{
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 75px;
    position: relative;
    img{
      width: 100px;
      height: 23px;
      line-height: 60px;
    }
    a{
      width: 18px;
      height: 18px;
      display: inline-block;
      position: absolute;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAkCAYAAAAOwvOmAAAFNUlEQVRYR8WXa2wUVRTH/2d2u6Vim1iWTuns8kiKCS4JJmJ3WqCGICIaYyAGxZCGRElE8INiorYJIdHiB6LRhJQPooYYsBpFicYIxleCdLdSA2lqMDSh2Z2tO7tLiinS18wcM1t2Ozv76G5dYD7OOed/f/fcc+89l1DE911jY2XtxOijzHiYgCYCljGw8GboKIArILrAwM8auU6tC4VGipDN60KFgoOStMAQtFeI8QKA2mIGImDCIO5m5rdalPhgMTF2n7xQPd76ncR8CIB7LsIAJkF4p7rGfcA3MDBZikYW1IDP5xr9J/EhgB2lCBXw7RWcxpNNQ/FosXoZUEmga4lvQdiYJcBQWcAJZuMME12u1J1/mz4TDm0RMS8nEh4hA8+CIOYY/ArY2SpHIkoxYBlQAUnsBuFpW+AIiDuduvPI6uHhG4VEzzc03KU5tN1g6gBwj823XxvX16xNJMyNUfBLQwW89XvAfNjqzcDvxM6txc4wFRuQJA+TdpKAB616BBz3K+qsZZGEMkVA2iUA8y0iwaopbFilqv/ONrNc9ouiOH+sAj8C8GfYiTfJ4diZQprTUJ66wwDtsThG9SmsWqOqsbkApWJ+E8U6RwUuAFhk0emTFXV1QahAY20NxivMnVGVdiQ8J4fVj/4PUHopveIzYHyaoSUY6+RQ/Gw+fQpKdW1MdMzicCmkqCu3AXo5oBigoCQOgLAipUdMR/yR6It5oQLe+mNgbks7MNrliPp2OYDS2fKIrwOwal6WFfXevFA9HrGfgJUzs+AWfyTWU1YoSZRByNAcmzCq18fj13ONQwGPaBrSu04jXVobTgyXE+r8EvciTXdkagrkk0PRP/NBsdUw5qyqWj80NF5OqJtX10SxxW5myixoIRVwKzJ11utucLIjYoViQG5W1GC+TJlpTZ8jhsFrWoZj58qZqUCOmmInLWseig7lhAp6xF8YeGim0NHhj6gHywkVlMR2JnRaNG+EFLUm37FDPV6xkxjtMwH8V0iJ+W7lOQXgJ1lRN+Q/p3KlFtjVrKhHy5GtoFfczowTGVqMl+WI+l5eKNMQ8IgDAO6zHKCqUGHcX0pjlmuA3qUL6w1N+MN2943rU1hS6F5NXcg7APrEJhzUxvWNxfQ/uYDOut3VznmOH7K6BOYuORKzXv5Z4UkoBoSgRzR3XGabAfQJhmNL0/BwuJSl7G1o8BqC/hWAB2xxVyc1WtEajcYL6aWbvHOehY0ChD4ANbaAEQLtvzrv7g8eGxzMPABtjtNPsevPg/nNHJ0nmHhfczj27mwTzGiHg1L940x8EoArR2CMgM/AdFpgYXBicjJ5bVS6XA0GGY0g3sRIttJ1BQa9BsZmOaIGispUyinoqdvCIHO3zJttRnO0jxqgJ1qU6K8Fd5/d2OMR/YRkY7ZsjgOnwkYZGCFgsU3nBhFv9Ydjp3Pp532MJjvSMdd+It7LQGWJcMzA14ID+xzQxzU9uQt9Ng3zsbpNDqun7NoFn+2m8/RZ49gN8HYAy2ephbhB9CUzd7Uoan+6JCRpAZP2PQB7bz4FQpscVruturNCWZ17ltYvxRSaBHAjCDUGmAQICbChArjYFImZDaORC3z6LeD8BqBWm10H0S45HP049b8kqBKXMMs9+VgVtC8A2mwzMoj2yuFol/n/tkKZA043fPHjAD1lByPQa34leui2Q5kgnwOOxVLdURDtzC5yPnBHoEwQ8+nV6xHfZ+ClzCK/g1ApkIBXPAjGG0lQwsHmsNpxxzJlzU7AfBcyueVI9FXz/39gP/4oBT2u3wAAAABJRU5ErkJggg==);
      background-size: cover;
      top: 50%;
      right: 20px;
      margin-top: -9px;
    }
  }
  .nav{
    width: 100%;
    height: 40px;
    background-color: #b93321;
    .router-link-active{
      color: #fff;
    }
    ul{
      width: 100%;
      box-sizing: border-box;
      padding: 0 7.5px;
      display: flex;
      li{
        float: left;
        text-align: center;
        flex: 1;
        line-height: 40px;
        
        a{
          text-align: center;
          // color: #fff;
          color: #ddada9;
          display: block;
          font-size: 14px;
        }
      }
    }
  }
</style>
