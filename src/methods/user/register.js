import Axios from 'axios'

const API_URL_REGISTER = '/api/user/register'

export default (data) => {
  return Axios.post(API_URL_REGISTER, data)
}
