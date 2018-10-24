import Vue from 'vue'
import App from './App.vue'

import jQuery from 'jquery'
import mock from './mock.js'
import 'bootstrap/dist/css/bootstrap.min.css'

window.$ = window.jQuery = jQuery
mock(window.$, window)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
