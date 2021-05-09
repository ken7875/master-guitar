import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import productsModules from './products'
import backendApi from './backend'
Vue.use(Vuex)
const state = {
  carts: [],
  isLoading: false,
  cartsTotal: 0,
  payTotal: 0,
  originTotal: 0
}

const actions = {
  getCart (context) {
    context.commit('ISLOADING', true)
    const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
    let cartsData
    axios.get(url).then((res) => {
      cartsData = res.data.data
      context.commit('GETCART', cartsData)
      context.commit('ISLOADING', false)
      context.commit('cartsTotalPrice', state.cartsTotal)
      context.commit('PayTotalPrice', state.payTotal, state.originTotal)
    }).catch(() => {
      context.commit('ISLOADING', false)
    })
  }
}
const mutations = {
  GETCART (state, payload) {
    state.carts = payload
  },
  ISLOADING (state, payload) {
    state.isLoading = payload
  },
  cartsTotalPrice (state) {
    state.cartsTotal = 0
    state.carts.forEach(item => {
      state.cartsTotal += item.product.price * item.quantity
    })
  },
  PayTotalPrice (state) {
    state.originTotal = 0
    state.payTotal = 0
    state.carts.forEach((item) => {
      state.originTotal += item.product.price * item.quantity
      if (state.originTotal < 10000) {
        state.payTotal = (state.originTotal + 200)
      } else {
        state.payTotal = (state.originTotal + 0)
      }
    })
  }
}
const getters = {
  isLoading (state) {
    return state.isLoading
  },
  getCartsDone: state => state.carts,
  cartsTotal: state => state.cartsTotal,
  payTotal: state => state.payTotal,
  originTotal: state => state.originTotal
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    productsModules,
    backendApi
  }
})
