const Register = () => import('@/pages/user/Register')

export default [
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: '加入Dice'
    }
  }
]
