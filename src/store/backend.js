import { apiGetProduct, apiPostProducts, apiPatchProducts, apiDeleteProduct, apiUpLoadFile, apiGetDetail } from '@/assets/api/index.js'
import axios from 'axios'
import VueCookies from 'vue-cookie'

export default {
  namespaced: true,
  state: {
    token: '',
    expire: '',
    products: [],
    tempProducts: {
      imageUrl: []
    },
    file: []
  },
  actions: {
    // 登入驗證
    async logInApi ({ commit }, user) {
      const api = `${process.env.VUE_APP_APIPATH}auth/login`
      const res = await axios.post(api, user)
      console.log(res)
      const { token } = res.data
      const { expired } = res.data
      VueCookies.set('myToken', token, { expire: expired })
      commit('logIn', { token, expired })
      console.log({ token, expired })
    },
    // 取得所有商品
    async getProductsApi ({ commit }, [page, token]) {
      const apiProducts = await apiGetProduct(page, token)
      const productsData = apiProducts.data.data
      this.isLoading = false
      commit('getProducts', productsData)
    },
    // 取得商品細節
    async getDetailapi ({ commit }, id) {
      const apiDetail = await apiGetDetail(id)
      const productsDetail = apiDetail.data.data
      commit('getDetail', productsDetail)
    },
    // 新增商品 post
    async updateProducts ({ commit, dispatch }, tempData) {
      try {
        console.log(tempData)
        await apiPostProducts(tempData)
        dispatch('getProductsApi')
      } catch (error) {
        console.log(error)
      }
    },
    // 更新商品 patch
    async patchProducts ({ commit, dispatch }, [tempData, id]) {
      try {
        console.log([tempData, id])
        await apiPatchProducts(tempData, id)
        dispatch('getProductsApi')
      } catch (error) {
        console.log(error)
      }
    },
    // 刪除商品
    async deleteProducts ({ commit, dispatch }, id) {
      try {
        await apiDeleteProduct(id)
        dispatch('getProductsApi')
      } catch (error) {
        console.log(error)
      }
    },
    async upLoadFile ({ commit }, file) {
      try {
        console.log(file)
        const res = await apiUpLoadFile(file)
        if (res.status === 200) {
          commit('commitFile', res.data.data.path)
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  mutations: {
    getProducts (state, payload) {
      state.products = payload
    },
    commitFile (state, payload) {
      state.file = payload
    },
    getDetail (state, payload) {
      state.tempProducts = payload
    },
    logIn (state, payload) {
      state.token = payload.token
      state.expire = payload.expire
    }
  },
  getters: {
    productsGetter: state => state.products,
    fileGetter: state => state.file,
    detailGetter: state => state.tempProducts,
    tokenGetter: state => state.token,
    expireGetter: state => state.expire
  }
}
