import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import update from '@/components/update'
import admin from '@/components/admin'

Vue.use(Router)
const router = new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component:login
    },
    {
      path: '/admin',
      name: 'admin',
      component:admin,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
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
      component:update,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    }
  ]
})

// 注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  let token = window.sessionStorage.getItem('token');
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (token) { // 通过vuex state获取当前的token是否存在
      next()
    } else {
      console.log('该页面需要登陆')
      next({
        path: '/login',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})
export default router