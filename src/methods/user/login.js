import Axios from 'axios'

const API_URL_LOGIN = 'localhost:9000/api/login'

export default (data) => {
  return Axios.post(API_URL_LOGIN, data)
}
