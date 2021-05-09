import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import jquery from 'jquery'
import Loading from 'vue-loading-overlay'
import VueCookies from 'vue-cookie'
import 'vue-loading-overlay/dist/vue-loading.css'
import App from './App.vue'
import router from './router'
import store from './store'
import thousandsFilter from './assets/JS/thousands.js'
import VueI18n from 'vue-i18n'
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
import en from './locale/en.js' // 存放英文翻譯
import tw from './locale/zh_tw.js'
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
// configure Swiper to use modules
Swiper.use([Navigation, Pagination, Autoplay])
Vue.config.productionTip = false
window.$ = jquery
Vue.use(VueAxios, axios)
Vue.use(Loading)
Vue.use(VueCookies)
Vue.use(VueAwesomeSwiper /* { default options with global component } */)
Vue.use(VueI18n)
Vue.component('Loading', Loading)
Vue.filter('thousands', thousandsFilter)
Vue.prototype.$bus = new Vue()

// i18n
const messages = {
  en,
  zh_tw: tw
}
const i18n = new VueI18n({
  locale: localStorage.getItem('lang'),
  messages
})

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
extend('name', {
  validate (value) {
    return /^[\u4E00-\u9FA5A-Za-z]+$/gi.test(value)
  },
  message: () => '請填入正確姓名'
})
extend('phone', {
  validate (value) {
    return /^09\d{8}$/gi.test(value)
  },
  message: '請輸入正確手機號碼'
})
extend('id', {
  validate (value) {
    return /^[A-Z]{1}[1-2]{1}[0-9]{8}$/gi.test(value)
  },
  message: '請輸入正確身份證字號 Please enter correct ID number'
})
localize('tw', zhTW)

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
