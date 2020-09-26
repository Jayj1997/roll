import Axios from 'axios'

const API_URL_TODOS_ITEMS_INDEX = '/api/todo/todo_items'
const API_URL_TODOS_ITEMS_SHOW = '/api/todo/todo_items/'
const API_URL_TODOS_ITEMS_UPDATE = '/api/todo/todo_items/'
const API_URL_TODOS_ITEMS_CREATE = '/api/todo/todo_items'
const API_URL_TODOS_ITEMS_DELETE = '/api/todo/todo_items/'
const API_URL_TODOS_ITEMS_UPDATEORDER = '/api/todo/todo_items/update_order/'

function index () {
  return Axios.get(API_URL_TODOS_ITEMS_INDEX)
}
function show (id) {
  return Axios.get(API_URL_TODOS_ITEMS_SHOW + id)
}
function update (id) {
  return Axios.patch(API_URL_TODOS_ITEMS_UPDATE + id)
}
function store (data) {
  return Axios.post(API_URL_TODOS_ITEMS_CREATE, data)
}
function deleteItem (id) {
  return Axios.delete(API_URL_TODOS_ITEMS_DELETE + id)
}
function updateOrder (id, data) {
  return Axios.patch(API_URL_TODOS_ITEMS_UPDATEORDER + id, data)
}

export default {
  index,
  show,
  update,
  store,
  deleteItem,
  updateOrder
}
