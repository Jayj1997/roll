const getters = {
  get_token: (state) => {
    return state.token
  },
  get_refresh_token: (state) => {
    return state.refresh_token
  }
}

export default getters
