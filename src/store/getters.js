const getters = {
  get_token: (state) => {
    return state.token
  },
  get_refresh_token: (state) => {
    return state.refresh_token
  },
  get_user: (state) => {
    return state.user
  }
}

export default getters
