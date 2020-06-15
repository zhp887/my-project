import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './pages/Home.vue'
import Find from './pages/Find.vue'
import User from './pages/User.vue'
// 路由：定义了一组“路径-组件”显示
let router = new VueRouter({
    routes:[
        {path:'/home',component:Home},
        {path:'/find',component:Find},
        {path:'/User',component:User}
    ]
})

export default router