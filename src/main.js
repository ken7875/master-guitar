import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import jquery from 'jquery'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import App from './App.vue'
import router from './router'
import thousandsFilter from './assets/JS/thousands.js'
import 'bootstrap'
import './bus'
// vee-validate
import {
  ValidationObserver,
  ValidationProvider, configure, localize, extend
} from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import zhTW from 'vee-validate/dist/locale/zh_TW.json'

Vue.config.productionTip = false
window.$ = jquery

Vue.use(VueAxios, axios)
Vue.use(Loading)
Vue.use(VueAwesomeSwiper)
Vue.component('Loading', Loading)
Vue.filter('thousands', thousandsFilter)
Vue.prototype.$bus = new Vue()
// vee-validate
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})

localize('tw', zhTW)

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
