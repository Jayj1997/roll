import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Entrance.vue'
import Function from '@/components/function/Function.vue'
import Mine from '@/components/mine/Mine.vue'
import Test from '@/components/test/Test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/function',
      name: 'Function',
      component: Function
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/test', // 测试url
      name: 'Test',
      component: Test
    }
  ]
})
