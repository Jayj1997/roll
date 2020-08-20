import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules,
  getters,
  actions,
  strict: debug
})
