import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Header from '../components/home/home'
import Shujia from '../components/shujia/shujia'
import Fenlei from '../components/fenlei/fenlei'
import Paihang from '../components/paihang/paihang'
import Sousuo from '../components/sousuo/sousuo'

import Category from '../components/fenlei/category/category'

import Details from '../components/details/details'

import List from '../components/list/list'

import Book from '../components/book/book'

import RankingList from '../components/paihang/rankingList/rankingList'

import Login from '../components/home/login/login'

import User from '../components/user/user'
export default new Router({
    routes: [
        {
            path: '/home/',
            component: Header,
            name: '头部',
            children: [
                {
                    path: '/home/shujia',
                    component: Shujia,
                    name: '书架',
                },
                {
                    path: '/home/fenlei',
                    component: Fenlei,
                },
                {
                    path: '/home/paihang',
                    component: Paihang,
                },
                {
                    path:'/home/login',
                    component:Login
                },
                
                
                {
                    //如果用户随便输入地址,转到首页
                    path: '*',
                    redirect: '/home/shujia'
                }
            ]
        },
        {
            path:'/category/:name1/:key',
            component:Category,
            name:'category'
        },
        {
            path:'/category/:iid',
            component:Details,
            name:'details'
        },
        {
            path:'/list/:iid',
            component:List,
            name:'list'
        },
        {
            path:'/book/:iid',
            component:Book,
            name:'book',
        },

        {
            path:'/rankingList/:iid',
            component:RankingList,
            name:'rankingList'
        },

        {
            path: '/sousuo',
            component: Sousuo,
        },
        {
            path:'/user',
            component:User
        },
        // {
        //     //如果用户随便输入地址,转到首页
        //     path: '*',
        //     redirect: '/home'
        // }

    ]
})
