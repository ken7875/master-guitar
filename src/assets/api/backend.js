import axios from 'axios'
import VueCookies from 'vue-cookie'
const uuid = process.env.VUE_APP_UUID
const token = `Bearer ${VueCookies.get('myToken')}`

const backendApi = axios.create({
  baseURL: `${process.env.VUE_APP_APIPATH}${uuid}/admin/ec/`,
  headers: {
    Authorization: token
  }
})
const backendStorageApi = axios.create({
  baseURL: `${process.env.VUE_APP_APIPATH}${uuid}/admin/`,
  headers: {
    Authorization: `Bearer ${VueCookies.get('myToken')}`
  }
})
// 所有後台商品
export const getProduct = (page) => {
  return backendApi.get(`products?page=${page}`)
}
// 後台單一商品
export const getDetail = (id) => backendApi.get(`product/${id}`)
// 新增商品
export const postProducts = (data) => backendApi.post('product', data)
// 更新商品
export const patchDetail = (data, id) => backendApi.patch(`product/${id}`, data)
// 刪除商品
export const deleteProduct = (id) => backendApi.delete(`product/${id}`)
// 上傳圖片
export const upLoadFile = (file) => backendStorageApi.post('storage', file, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})
// 取得圖片
export const getFile = () => backendStorageApi.get('storage')
// 刪除圖片
export const delFile = (id) => backendStorageApi.delete(`storage/${id}`)
