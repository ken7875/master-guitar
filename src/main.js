import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import jquery from 'jquery'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import App from './App.vue'
import router from './router'
import store from './store'
import thousandsFilter from './assets/JS/thousands.js'
import 'bootstrap'
import './bus'
// vee-validate
import {
  ValidationObserver,
  ValidationProvider, configure, localize, extend
} from 'vee-validate'
// 驗證規則
import * as rules from 'vee-validate/dist/rules'
import zhTW from 'vee-validate/dist/locale/zh_TW.json'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
// configure Swiper to use modules
Swiper.use([Navigation, Pagination, Autoplay])
Vue.config.productionTip = false
window.$ = jquery
Vue.use(VueAxios, axios)
Vue.use(Loading)
Vue.use(VueAwesomeSwiper /* { default options with global component } */)
Vue.component('Loading', Loading)
Vue.filter('thousands', thousandsFilter)
Vue.prototype.$bus = new Vue()
// vee-validate
// 所有驗證規則
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
  store,
  render: h => h(App)
}).$mount('#app')
