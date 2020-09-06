const state = {
  token: localStorage.getItem('Authorization')
    ? localStorage.getItem('Authorization') : '',
  refresh_token: localStorage.getItem('refresh_token')
    ? localStorage.getItem('refresh_token') : '',
  user: localStorage.getItem('User')
    ? localStorage.getItem('User') : ''
}

export default state
