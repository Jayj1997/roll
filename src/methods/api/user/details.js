import Axios from 'axios'

const API_URL_LOGIN = '/api/user/details'

export default (data) => {
  return Axios.post(API_URL_LOGIN, data)
}
