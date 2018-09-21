import "babel-polyfill"
import Vue from 'vue'
import App from './App.vue'

// ------------------------------------------------------------------
import Vuex from 'vuex'
import store from './vuex/store'
Vue.use(Vuex)
// ------------------------------------------------------------------
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// ------------------------------------------------------------------
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'//router/index.js
// ------------------------------------------------------------------
import axios from 'axios'
// import axios from './axios/index'
Vue.prototype.$axios = axios

// Vue.use(VueRouter)
// ------------------------------------------------------------------
import VueResource from 'vue-resource'
Vue.use(VueResource)
// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------



new Vue({
  el: '#app',
  store,
  router,
  axios,
  render: h => h(App)
})
