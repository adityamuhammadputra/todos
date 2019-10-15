// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Notifications from 'vue-notification'
import toastr from 'vue-toastr'
// import Vuetify from 'vuetify'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
require('../node_modules/bootstrap/dist/css/bootstrap.css')
// import vuetify from '@/plugins/vuetify'

Vue.use(Notifications)
Vue.use(toastr)
Vue.use(Vuetify)

Vue.config.productionTip = false

const opts = {}

export default new Vuetify(opts)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
