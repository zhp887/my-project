<template>
  <div class="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 路由的视图容器 -->
    <!-- 它的作用就是告诉vue在哪里显示路由匹配的组件 -->
    <!-- 用于显示匹配成功的页面组件 -->
    <!-- 它的默认名字叫default -->
    <router-view></router-view>

    <router-view name="aaa"></router-view>
    <router-view name="bbb"></router-view>
    <router-view name="ccc"></router-view>

    
    <div class="tabs">
      <!-- 它就是一个a标签，它的作业就是触发url路径的变化 -->
      <!-- to属性，表示要跳转到哪个路径 -->
      <!-- tag属性，指定最终渲染成哪个HTML标签 -->
      <!-- active-class用于指定高亮样式的类名 -->
      <!-- 声明式导航 -->
      <router-link to='/home' tag='span' active-class='on'>首页</router-link>
      <router-link to='/find' tag='span' active-class='on'>发现</router-link>
      <router-link to='/cart' tag='span' active-class='on'>购物车</router-link>
      <router-link to='/user' tag='span' active-class='on'>我的</router-link>

      <!-- 编程式导航 -->
      <!-- <span @click="skip(1)" :class='{"on":this.idx == 1}'>首页</span>
      <span @click="skip(2)" :class='{"on":this.idx == 2}'>发现</span>
      <span @click="skip(3)" :class='{"on":this.idx == 3}'>我的</span> -->

    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import World from './components/World.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  mounted(){
    console.log('路由.$route',this.$route)
    console.log('路由.$router',this.$router)
  },
  methods:{
    //this.$route 中记录当前url的各种匹配关系
    //this.$router 这个用于编程路由导航
    //.push()路由栈（先进后出）
    //.replace()
    //（面试题）声明式导航和编程式导航，怎么灵活使用呢？
    //答：如果是侧边栏类似的导航建议用声明式导航，如果按钮跳转使用编程式导航。
    // skip(idx){
    //   switch(idx){
    //     case 1:
    //       this.$router.push('/home') //使用path进行跳转
    //       //this.$router.push('/x') //使用别名进行跳转
    //       //this.$router.push({name:'home'}) //使用路由命名进行跳转
    //       //this.$router.replace
    //       break;
    //     case 2:
    //       this.$router.push('/find')
    //       //this.$router.replace('/find')
    //       break;
    //     case 3:
    //       this.$router.push('/user')
    //       //this.$router.replace('/user')
    //       break;
    //       default:
    //   }
    // }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
html,body{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.app{
  width: 100%;
  height: 100%;
  position: relative;
}
.tabs{
  position: absolute;
  bottom: 0;
  /* top: 0; */
  right: 0;
  left: 0;
  height: 80px;
  display: flex;
}
.tabs span{
  flex: 1;
  text-align: center;
  border: 1px solid #ccc;
  line-height: 80px;
}
.tabs span.on{
  background: palegreen;
  color: red;
}
</style>
