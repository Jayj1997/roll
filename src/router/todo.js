const Todo = () => import('@/pages/todo/Todo')

export default [
  {
    path: '/todo',
    name: 'Todo',
    component: Todo,
    meta: {
      title: 'Dice - Todo'
    }
  }
]
