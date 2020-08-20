const Register = () => import('@/pages/user/Register')
const Login = () => import('@/pages/user/Login')

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
  }
]
