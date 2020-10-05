import axios from 'axios'
import {store} from '../../store'
import router from '../../router'

let API_URL_REGISTER = '/api/user/refreshtoken'
let service = axios.create()

service.interceptors.response.use(res => {
  return res
}, err => {
  if (err.response.status === 401) {
    axios.post(API_URL_REGISTER, {}, {
      headers: {
        'Refreshtoken': store.state.refresh_token
      }
    }).then(res => {
      store.commit('token', 'Bearer ' + res.data.access_token)
      store.commit('refresh_token', res.data.refresh_token)
    }).catch(e => {
      // 如果refresh也过期的话 应该导去重新登录
      router.push({ name: 'Login' })
    })
  } else {
    console.log(err.response.data.message)
  }
})

export default service
