import service from '../../function/service'

const API_URL_TODOS_INDEX = '/api/todo/todos'
const API_URL_TODOS_SHOW = '/api/todo/todos/'
const API_URL_TODOS_UPDATE = '/api/todo/todos'
const API_URL_TODOS_CREATE = '/api/todo/todos'
const API_URL_TODOS_DELETE = '/api/todo/todos/'

function index (data) {
  return service.get(API_URL_TODOS_INDEX, {
    params: data
  })
}
function show (id) {
  return service.get(API_URL_TODOS_SHOW + id)
}
function update (data) {
  return service.patch(API_URL_TODOS_UPDATE, data)
}
function store (data) {
  return service.post(API_URL_TODOS_CREATE, data)
}
function deleteTodo (id) {
  return service.delete(API_URL_TODOS_DELETE + id)
}

export default {
  index,
  show,
  update,
  store,
  deleteTodo
}
