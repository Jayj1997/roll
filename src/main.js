// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store'
import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify'
import $ from 'jquery'
import service from './methods/function/service'
import '@fortawesome/fontawesome-free/css/all.min.css'

Vue.prototype.$axios = service // 在vue文件直接this.$axios
service.defaults.headers.common['Authorization'] = store.state.token
service.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8'

Vue.use(Vuetify)
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
