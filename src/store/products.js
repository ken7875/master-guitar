import axios from 'axios'

export default {
  namespaced: true,
  state: {
    products: [],
    pagination: {}
  },
  actions: {
    getProducts (context, num = 1) {
      context.commit('ISLOADING', true, { root: true })
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products?pages=${num}`
      axios.get(url).then((res) => {
        const data = res.data.data
        const pagination = res.data.meta.pagination
        context.commit('productsData', data)
        context.commit('page', pagination)
        context.commit('ISLOADING', false, { root: true })
      }).catch(() => {
        context.commit('ISLOADING', false, { root: true })
      })
    }
  },
  mutations: {
    // playload 記錄mutation
    productsData (state, payload) {
      state.products = payload
    },
    page (state, payload) {
      state.pagination = payload
    }
  },
  getters: {
    getProductsDone: state => state.products,
    pagination: state => state.pagination
  }
}
