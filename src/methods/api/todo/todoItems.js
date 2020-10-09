import service from '../../function/service'

const API_URL_TODOS_ITEMS_INDEX = '/api/todo/todo_items'
const API_URL_TODOS_ITEMS_SHOW = '/api/todo/todo_items/'
const API_URL_TODOS_ITEMS_UPDATE = '/api/todo/todo_items/'
const API_URL_TODOS_ITEMS_CREATE = '/api/todo/todo_items'
const API_URL_TODOS_ITEMS_DELETE = '/api/todo/todo_items/'
const API_URL_TODOS_ITEMS_UPDATE_ORDER = '/api/todo/todo_items/update_order/'
const API_URL_TODOS_ITEMS_UPDATE_ITEM_NAME = '/api/todo/todo_items/update_item_name/'
const API_URL_TODOS_ITEMS_MOVE_TO = '/api/todo/todo_items/move_to/'

function index () {
  return service.get(API_URL_TODOS_ITEMS_INDEX)
}
function show (id) {
  return service.get(API_URL_TODOS_ITEMS_SHOW + id)
}
function update (id) {
  return service.patch(API_URL_TODOS_ITEMS_UPDATE + id)
}
function store (data) {
  return service.post(API_URL_TODOS_ITEMS_CREATE, data)
}
function deleteItem (id) {
  return service.delete(API_URL_TODOS_ITEMS_DELETE + id)
}
function updateOrder (id, data) {
  return service.patch(API_URL_TODOS_ITEMS_UPDATE_ORDER + id, data)
}
function changeItemName (id, data) {
  return service.patch(API_URL_TODOS_ITEMS_UPDATE_ITEM_NAME + id, data)
}
function moveTo (id, data) {
  return service.patch(API_URL_TODOS_ITEMS_MOVE_TO + id, data)
}

export default {
  index,
  show,
  update,
  store,
  deleteItem,
  updateOrder,
  changeItemName,
  moveTo
}
