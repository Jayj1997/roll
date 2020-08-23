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
  [TYPES.CLEAR_TOKEN] (state) {
    state.token = ''
  },
  [TYPES.CLEAR_REFRESH_TOKEN] (state) {
    state.refresh_token = ''
  }
}

export default mutations
