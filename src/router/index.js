import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/views/mainPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '主页',
      component: MainPage
    }
  ]
})
