// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store'
import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify'
import $ from 'jquery'
import Axios from 'axios'
import '@fortawesome/fontawesome-free/css/all.min.css'

Vue.use(Vuetify)
Axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.state.token
Vue.config.productionTip = false

// eslint-disable-next-line no-new
new Vue({
  vuetify,
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
  $
})
