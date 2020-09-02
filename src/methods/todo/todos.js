import Axios from 'axios'

const API_URL_TODOS_INDEX = '/api/todo/todos'
// const API_URL_TODOS_SHOW = '/api/todo/todos/show/{id}'
// const API_URL_TODOS_UPDATE = '/api/todo/todos/update/{id}'

export default (data) => {
  return Axios.get(API_URL_TODOS_INDEX, data)
}
