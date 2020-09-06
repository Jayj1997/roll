import * as TYPES from './types'

const mutations = {
  [TYPES.SET_TOKEN] (state, v) {
    state.token = v
    localStorage.setItem('Authorization', 'Bearer ' + v)
  },
  [TYPES.SET_REFRESH_TOKEN] (state, v) {
    state.refresh_token = v
    localStorage.setItem('refresh_token', v)
    // todo 还没想好如何refresh_token
  },
  [TYPES.SET_USER] (state, v) {
    state.user = v
    localStorage.setItem('User', v)
  },
  [TYPES.CLEAR_TOKEN] (state) {
    state.token = ''
    localStorage.removeItem('Authorization')
  },
  [TYPES.CLEAR_REFRESH_TOKEN] (state) {
    state.refresh_token = ''
    localStorage.removeItem('refresh_token')
  },
  [TYPES.CLEAR_USER] (state) {
    state.user = ''
    localStorage.removeItem('User')
  }

}

export default mutations
