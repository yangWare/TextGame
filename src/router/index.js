import Vue from 'vue'
import Router from 'vue-router'
import UserInfo from '@/views/userInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '主页',
      component: UserInfo
    }
  ]
})
