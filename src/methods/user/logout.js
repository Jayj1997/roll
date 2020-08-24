import Axios from 'axios'

const API_URL_LOGIN = '/api/logout'

export default () => {
  return Axios.post(API_URL_LOGIN)
}
