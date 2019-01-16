// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'Axios'
import VeeValidate from 'vee-validate'

Vue.config.productionTip = false
// Register Vee Validate Plugin
Vue.use(VeeValidate)
window.axios = axios
axios.defaults.baseUrl = 'http://127.0.0.1:3333'
console.log(axios.defaults.baseUrl)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
