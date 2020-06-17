import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//Vuex是组件之间数据交互的终极解决办法
const store = new Vuex.Store({
    //state:它是Vuex的数据存储中心
    //放在state中的数据，所有组件都可以共享，并且保持同步
    //只要state中的数据发生变化，视图中自动更新页面状态
    state:{
        msg:2001,
        foo:'foo'
    },
    //getters:你可以理解组件中的计算属性
    //在getters关联的state只要发生变化，getters会自动更新
    //getters是一个函数，但一定return表达式，我们把它当作变量来用
    getters:{
        msg2:function(state){
            return state.msg * 100
        }
    },
    //mutations：直接地同步地修改state主要入口（Vuex官方建议）
    //在组件中使用 this.$store.commit('已定义的mutation方法','负载')来触发mutations方法
    //mutations在改变state时，会被devtools记录下来
    mutations:{
        //payload负载，就是组件带过来的数据
        updateMsg(state,payload){
            state.msg += payload.count
        }
    },
    actions:{
        asyncUpdateMsg(store,payload){
            setTimeout(()=>{
                //在组件
                //this.$store.commit('updateMsg',payload)
                //在atcions中,提交一个mutations方法
                store.commit('updateMsg', payload)
            },1000)
        }
    }
})
export default store