import Axios from 'axios'

const API_URL_LOGIN = '/api/user/details'

export default (data) => {
  return Axios.post(API_URL_LOGIN, data)
  // todo 循环引用？ 为什么只有这个文件夹 暂时先不管
}
