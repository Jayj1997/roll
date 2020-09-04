import Vue from 'vue'
import Router from 'vue-router'
// import {store} from '@/store'
import Home from '../pages/Home'
import user from './user'
import todo from './todo'

import Test from '../pages/Test'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { // 现在没有写默认的主页 到时候可以补上
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        ...todo, // 任务模块
        {
          path: '/test',
          name: 'Test',
          component: Test,
          meta: {
            title: '你写代码的样子真帅'
          }
        }
      ],
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
  //   let token = store.state.token
  //   if (token === '' || token === null) {
  //     next('/login')
  //   } else {
  //     next()
  //   }
  // }
})

export default router
