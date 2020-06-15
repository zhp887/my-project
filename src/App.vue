<template>
  <div class="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 路由的视图容器 -->
    <!-- 它的作用就是告诉vue在哪里显示路由匹配的组件 -->
    <!-- 用于显示匹配成功的页面组件 -->
    <router-view></router-view>
    
    <div class="tabs">
      <!-- 它就是一个a标签，它的作业就是触发url路径的变化 -->
      <!-- to属性，表示要跳转到哪个路径 -->
      <!-- tag属性，指定最终渲染成哪个HTML标签 -->
      <!-- active-class用于指定高亮样式的类名 -->
      <router-link to='/home' tag='span' active-class='on'>首页</router-link>
      <router-link to='/find' tag='span' active-class='on'>发现</router-link>
      <router-link to='/user' tag='span' active-class='on'>我的</router-link>
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
  /* background: red; */
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
