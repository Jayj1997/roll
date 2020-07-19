import axios from 'axios'
const globalFunction = {}// 所有请求方法
// const baseUrl = 'http://127.0.0.1:8000/'
axios.defaults.baseURL = '/api'
const baseHeaders = {
  'entry': 'I_came_from_roll',
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Origin': 'http://127.0.0.1:8000'
} // 后面再添加验证方式

/// ///////////////////////////////////////////////////////////////////
/// send 所有指向laravel 路由的方法 {position, data/id = null           //
/// fe: position: user/index_default === usercontroller@indexDefault//
/// fe: 所有data为json格式，返回也为json格式，预处理为object               //
// todo list: 未处理header加密实现安全传输/接收, 正式环境配置路由代理，解决跨域问题//
/// //////////////////////////////////////////////////////////////////

globalFunction.index = function (position) {
  axios({
    method: 'get',
    headers: baseHeaders,
    url: position
  }).then(function (resp) {
    return resp.data
  }).catch(function (e) {
    console.log(e)
  })
}

globalFunction.show = function (position, id) {
  axios({
    method: 'get',
    headers: baseHeaders,
    url: position,
    params: {id: id}
  }).then(function (resp) {
    return JSON.parse(resp.data)
  }).catch(function (e) {
    console.log(e)
  })
}

globalFunction.store = function (position, data) {
  axios({
    method: 'post',
    headers: baseHeaders,
    url: position,
    data: JSON.stringify(data)
  }).then(function (resp) {
    return JSON.parse(resp.data)
  }).catch(function (e) {
    console.log(e)
  })
}

globalFunction.update = function (position, data) {
  axios({
    method: 'patch',
    headers: baseHeaders,
    url: position,
    data: JSON.stringify(data)
  }).then(function (resp) {
    return JSON.parse(resp.data)
  }).catch(function (e) {
    console.log(e)
  })
}

// send.delete = function (position )

export default globalFunction
