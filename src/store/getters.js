const getters = {
  get_token: (state, getters) => {
    return state.token
  },
  get_refresh_token: (state, getters) => {
    return state.refresh_token
  }
}

export default getters
