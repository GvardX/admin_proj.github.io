import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {path: '/', component: require('./componentsVue/about') },
    {path: '/blog', component: require('./componentsVue/blog')},
    {path: '/works', component: require('./componentsVue/works')}
    
]

export default new VueRouter({
    routes,
    mode: 'history'
})