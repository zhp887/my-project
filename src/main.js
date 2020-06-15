//安装vue
import Vue from 'vue'
//引入根组件
import App from './App.vue'
//关闭项目启动的生成提示
Vue.config.productionTip = false

import router from './router.js'
//创建根组件实例
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
//$mount()手动挂载