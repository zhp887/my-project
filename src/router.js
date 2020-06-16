//引入
import Vue from 'vue'
import VueRouter from 'vue-router'
//注册路由
Vue.use(VueRouter)
//引入三个页面组件
// 同步加载组件写法，不建议怎么写
// import Home from './pages/Home.vue'
// import Find from './pages/Find.vue'
// import User from './pages/User.vue'

//建议使用路由赖加载的写法，以节省项目性能
const Home =()=> import('./pages/Home.vue')
const Find =()=> import('./pages/Find.vue')
const User =()=> import('./pages/User.vue')

const Detail =()=> import('./pages/Detail.vue')
const Cart =()=> import('./pages/Cart.vue')
//@别名，它代表就是当前代码所在绝对路径 + /src
const A =()=> import('@/components/home/A.vue')
const B =()=> import('@/components/home/B.vue')
const C =()=> import('@/components/home/C.vue')
const Good =()=> import('@/components/find/Good.vue')
const Price =()=> import('@/components/find/Price.vue')
   //路由：定义了一组“路径-组件”匹配关系
   //创建路由实例
let router = new VueRouter({
     //有#的路由，就是Hash模式，没有#的就是history路由
     //Hash模式唯一的缺点，带个#，比较难看
     //History的优点是url比较正常，它的缺点是部署后刷新会报404
    //  （解决办法：要求后端做重定向处理）
    // mode:'history'，
    mode:'hash',
    routes:[
        {path:'/',redirect:'/home'},
        {
            path:'/abc', 
            components:{
                aaa:A,
                bbb:B,
                ccc:C
            }
        },
        {path:'/home',alias:'/h1',component:Home},
        {
            path:'/find',
            component:Find,
            children:[
                {path:'good',component:Good},//最终路径/find/good
                {path:'price',component:Price},//最终路径：/find/price
                {path:'',redirect:'/find/good'}
            ]
        },
        {path:'/user',component:User},
        {path:'/detail/:id',component:Detail,props:true},
        //动态路由：冒号后面的id是一个变量，在/detail对应的组件中使用
        //this.$route.params获取动态id
        //路由传参：props开启路由传参，并且允许接收参数的那个组件使用
        //props属性来接收

        {path:'/cart',component:Cart},
        //通配符 * 表示匹配任何路径，一点要放在 routes 数组后面
        //把这种匹配范围更大的路由关系,往后放
        {path:'/find*',component:Find},
        //{path:'*',component:Home},
        {path:'*',redirect:'/'}
    ]
})

//全局路由守卫：会拦截所以的路由跳转行为
//常用于实现登录拦截
router.beforeEach((to,from,next) =>{
    console.log(to,from)
    //只对访问购物车组件的路由跳转行为进行拦截 
    if (to.fullPath == '/cart') {
        let isLogin = false
        if (isLogin) {
            next()
        } else {
            next('/user')
        }
    } else {
        next()
    }
})
export default router