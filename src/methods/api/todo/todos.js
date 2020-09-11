import Axios from 'axios'

const API_URL_TODOS_INDEX = '/api/todo/todos'
const API_URL_TODOS_SHOW = '/api/todo/todos/'
const API_URL_TODOS_UPDATE = '/api/todo/todos'
const API_URL_TODOS_CREATE = '/api/todo/todos'
const API_URL_TODOS_DELETE = '/api/todo/todos/'

function index () {
  return Axios.get(API_URL_TODOS_INDEX)
}
function show (id) {
  return Axios.get(API_URL_TODOS_SHOW + id)
}
function update (data) {
  return Axios.patch(API_URL_TODOS_UPDATE, data)
}
function store (data) {
  return Axios.post(API_URL_TODOS_CREATE, data)
}
function deleteTodo (id) {
  return Axios.delete(API_URL_TODOS_DELETE + id)
}

export default {
  index,
  show,
  update,
  store,
  deleteTodo
}
