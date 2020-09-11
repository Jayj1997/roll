import Axios from 'axios'

const API_URL_LOGIN = '/api/user/logout'

export default () => {
  return Axios.post(API_URL_LOGIN)
}
