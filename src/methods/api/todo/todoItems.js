import Axios from 'axios'

const API_URL_TODOS_ITEMS_INDEX = '/api/todo/todo_items'
const API_URL_TODOS_ITEMS_SHOW = '/api/todo/todo_items/'
const API_URL_TODOS_ITEMS_UPDATE = '/api/todo/todo_items'
const API_URL_TODOS_ITEMS_CREATE = '/api/todo/todo_items'
const API_URL_TODOS_ITEMS_DELETE = '/api/todo/todo_items/'

function index () {
  return Axios.get(API_URL_TODOS_ITEMS_INDEX)
}
function show (id) {
  return Axios.get(API_URL_TODOS_ITEMS_SHOW + id)
}
function update (data) {
  return Axios.patch(API_URL_TODOS_ITEMS_UPDATE, data)
}
function store (data) {
  return Axios.post(API_URL_TODOS_ITEMS_CREATE, data)
}
function deleteItem (id) {
  return Axios.delete(API_URL_TODOS_ITEMS_DELETE + id)
}

export default {
  index,
  show,
  update,
  store,
  deleteItem
}
