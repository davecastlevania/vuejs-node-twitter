// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'Axios'
import VeeValidate from 'vee-validate'
import moment from 'moment'

axios.defaults.baseURL = 'http://127.0.0.1:3333'
console.log(axios.defaults)
window.axios = axios

Vue.filter('timeAgo', date => moment(date).fromNow())
Vue.filter('joined', date => moment(date).format('MMMM YYYY'))
Vue.filter('dob', date => moment(date).format('MMMM Do YYYY'))

Vue.config.productionTip = false
// Register Vee Validate Plugin
Vue.use(VeeValidate)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
