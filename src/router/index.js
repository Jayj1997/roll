import Vue from 'vue'
import Router from 'vue-router'
import user from './user'
import Home from '../pages/Home'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Dice'
      }
    },
    {
      path: '*',
      redirect: '/login'
    },
    ...user // 用户模块
  ]
})

const defaultTitle = 'Dice'
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : defaultTitle
  next()
  // if (to.name === 'Login' ||
  //   to.name === 'Register' ||
  //   to.name === 'Forget') {
  //   // todo 忘记密码流程还没有走全
  //   next()
  // } else {
  //   let token = localStorage.getItem('Authorization')
  //   if (token === '' || token === null) {
  //     next('/login')
  //   } else {
  //     next()
  //   }
  // }
})

export default router
