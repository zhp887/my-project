import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import study from './modules/study'
import song from './modules/song'

const store = new Vuex.Store({
    modules:{
        study,
        song
    }
})
export default store