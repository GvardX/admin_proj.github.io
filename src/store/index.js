import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import skills from './modules/skills'
import blog from './modules/blog'


const store = new Vuex.Store({
    modules:{
        skills,
        blog
    }
})
export default store
