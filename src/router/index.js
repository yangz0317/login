import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import update from '@/components/update'

Vue.use(Router)
export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component:login
    },
    {
      path: '/login',
      name: 'login',
      component:login
    },
    {
      path: '/register',
      name: 'register',
      component:register
    },
    {
      path: '/update',
      name: 'update',
      component:update
    }
  ]
})
