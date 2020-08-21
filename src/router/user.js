const Register = () => import('@/pages/user/Register')
const Login = () => import('@/pages/user/Login')
const Change = () => import('@/pages/user/Change')
const Forget = () => import('@/pages/user/Forget')

export default [
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: '加入Dice'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登陆Dice'
    }
  },
  {
    path: '/change',
    name: 'Change',
    component: Change,
    meta: {
      title: '修改密码'
    }
  },
  {
    path: '/forget',
    name: 'Forget',
    component: Forget,
    meta: {
      title: '找回密码'
    }
  }
]
