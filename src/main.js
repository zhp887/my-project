//安装vue
import Vue from 'vue'
//引入根组件
import App from './App.vue'
import router from './router.js'
import store from './store'
//关闭项目启动的生成提示
Vue.config.productionTip = false
//创建根组件实例
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
//$mount()手动挂载