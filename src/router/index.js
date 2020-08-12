import Vue from 'vue'
import Router from 'vue-router'
import user from './user'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/register'
    },
    ...user // 用户模块
  ]
})

const defaultTitle = 'Dice'
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : defaultTitle
  next()
})

export default router
