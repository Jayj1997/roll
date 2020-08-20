import Axios from 'axios'

const API_URL_LOGIN = '/api/login'

export default (data) => {
  return Axios.post(API_URL_LOGIN, data)
}
