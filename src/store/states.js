const state = {
  token: localStorage.getItem('Authorization')
    ? localStorage.getItem('Authorization') : '',
  refresh_token: localStorage.getItem('refresh_token')
    ? localStorage.getItem('refresh_token') : ''
}

export default state
