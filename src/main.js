import Vue from 'vue'
import App from './App'


import VueRouter from 'vue-router'
import routes from './router/index'
import VueLocalStorage from 'vue-localstorage'

import './mock/mock'


import G from '@/common/js/global.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/style/base.scss'
import '@/style/common.scss'

Vue.use(ElementUI);
Vue.use(G);
Vue.use(VueRouter)
Vue.use(VueLocalStorage)

$(document).ready(function () {
    //设定标准rem
    // document.documentElement.style.fontSize = window.innerWidth/3.75 + 'px'

})

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {

    next()
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

