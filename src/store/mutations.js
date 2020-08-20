import * as TYPES from './types'

const mutations = {
  [TYPES.SET_TOKEN] (state, v) {
    state.token = v
  },
  [TYPES.SET_REFRESH_TOKEN] (state, v) {
    state.refresh_token = v
  },
  [TYPES.CLEAR_TOKEN] (state) {
    state.token = ''
  },
  [TYPES.CLEAR_REFRESH_TOKEN] (state) {
    state.refresh_token = ''
  }
}

export default mutations
