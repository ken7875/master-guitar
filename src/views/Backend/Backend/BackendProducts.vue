<template>
  <div>
    <Loading :active.sync="isLoading" />
    <div class="mt-4 d-flex justify-content-between">
      <div class="form-group mb-0 d-flex">
        <label for="搜尋" class="text-left mr-4 text-nowrap">搜尋</label>
        <input type="text" class="form-control" name="搜尋" >
      </div>
      <button
        class="btn btn-wood"
        @click="openModal('new')"
      >
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">
            分類
          </th>
          <th>產品名稱</th>
          <th width="120">
            原價
          </th>
          <th width="120">
            售價
          </th>
          <th width="100">
            是否啟用
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody class="products" v-for="product in getProductsData" :key="product.id">
        <tr
        >
          <td>{{ product.category }}</td>
          <td>{{ product.title }}</td>
          <td class="text-right">
            {{ product.origin_price | thousands }}
          </td>
          <td class="text-right">
            {{ product.price | thousands }}
          </td>
          <td>
            <span v-if="product.enabled"
              class="text-success"
            >啟用</span>
            <span v-if="!product.enabled">未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-wood btn-sm"
                @click="openModal('edit', product)"
              >
                <p>編輯</p>
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                @click="openModal('delete', product)"
              >
                <p>刪除</p>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Modal -->
    <div
      id="productModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="productModal"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-xl"
        role="document"
      >
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5
              id="productModal"
              class="modal-title"
            >
              <span>新增產品</span>
              <span>編輯產品</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div
                  class="form-group"
                  v-for="i in 5"
                  :key="i + 'img'"
                >
                  <label :for="'img' + i">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                    v-model="tempProducts.imageUrl[i - 1]"
                  >
                </div>
                <div class="form-group">
                  <label for="customFile">
                    或 上傳圖片
                    <i
                      class="fas fa-spinner fa-spin"
                    />
                  </label>
                  <input
                    id="customFile"
                    ref="file"
                    type="file"
                    class="form-control"
                    @change="upLoadingFile"
                  >
                </div>
                <img
                  class="img"
                  alt
                  :src="tempProducts.imageUrl[0]"
                >
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">{{ $t('backendTitle') }}</label>
                  <input
                    id="title"
                    type="text"
                    class="form-control"
                    placeholder="請輸入標題"
                    v-model="tempProducts.title"
                    required
                  >
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input
                      id="category"
                      type="text"
                      class="form-control"
                      placeholder="請輸入分類"
                      v-model="tempProducts.category"
                      required
                    >
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input
                      id="unit"
                      type="text"
                      class="form-control"
                      placeholder="請輸入單位"
                      v-model="tempProducts.unit"
                    >
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      id="origin_price"
                      type="number"
                      class="form-control"
                      placeholder="請輸入原價"
                      v-model="tempProducts.origin_price"
                    >
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      id="price"
                      type="number"
                      class="form-control"
                      placeholder="請輸入售價"
                      v-model="tempProducts.price"
                    >
                  </div>
                </div>
                <hr>
                <div class="form-group">
                  <label for="teacher">老師名稱</label>
                  <input
                    id="teacher"
                    type="text"
                    class="form-control"
                    placeholder="請輸入老師名稱"
                  />
                </div>
                <div class="form-group">
                  <label for="description">產品說明</label>
                  <textarea
                    id="description"
                    type="text"
                    class="form-control"
                    placeholder="請輸入產品說明"
                    v-model="tempProducts.description"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="content">產品描述</label>
                  <vue-editor
                    id="content"
                    v-model="tempProducts.content"
                  />
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      id="is_enabled"
                      class="form-check-input"
                      type="checkbox"
                      v-model="tempProducts.enabled"
                    >
                    <label
                      class="form-check-label"
                      for="is_enabled"
                    >是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateProducts(tempProducts.id)"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      id="delProductModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog"
        role="document"
      >
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5
              id="exampleModalLabel"
              class="modal-title"
            >
              <span>刪除產品</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempProducts.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteProduct(tempProducts.id)"
            >
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
import { VueEditor } from 'vue2-editor/dist/vue2-editor.core'
// import { apiGetDetail } from '@/assets/api/index.js'
// import Pagination from '@/components/Pagination.vue'

export default {
  name: 'Products',
  components: {
    VueEditor
  },
  data () {
    return {
      uuid: process.env.VUE_APP_UUID,
      isLoading: false,
      isNew: false,
      tempProducts: {
        imageUrl: []
      },
      page: 1,
      test2: []
    }
  },
  computed: {
    getProductsData () {
      const allProducts = this.$store.getters['backendApi/productsGetter']
      // 中文排序 localeCompare
      allProducts.sort((a, b) => {
        return a.category.localeCompare(b.category)
      })
      return allProducts
    },
    getFileRes () {
      return this.$store.getters['backendApi/fileGetter']
    },
    detailGetter () {
      return this.$store.getters['backendApi/detailGetter']
    }
  },
  methods: {
    async getProducts () {
      const token = this.$cookie.get('myToken')
      await this.$store.dispatch('backendApi/getProductsApi', [this.page, token])
    },
    // 新增/編輯 modal
    async openModal (state, item) {
      switch (state) {
        case 'new':
          this.isNew = true
          this.tempProducts = {
            imageUrl: []
          }
          $('#productModal').modal('show')
          break
        case 'edit':
          this.isNew = false
          this.isLoading = true
          await this.$store.dispatch('backendApi/getDetailapi', item.id)
          this.tempProducts = this.detailGetter
          this.isLoading = false
          $('#productModal').modal('show')
          break
        case 'delete':
          this.isNew = false
          this.tempProducts = item
          $('#delProductModal').modal('show')
          break
        default:
          break
      }
    },
    async updateProducts (id) {
      const tempData = this.tempProducts
      this.isLoading = true
      // 新增/更新品項
      await this.isNew ? this.$store.dispatch('backendApi/updateProducts', tempData) : this.$store.dispatch('backendApi/patchProducts', [tempData, id])
      if (this.isNew === true) {
        this.$bus.$emit('message:push',
          '新增成功囉，好棒ヽ(＾Д＾)ﾉ ',
          'success')
      } else if (this.isNew === false) {
        this.$bus.$emit('message:push',
          '更新成功囉，好棒ヽ(＾Д＾)ﾉ ',
          'success')
      }
      this.isLoading = false
      $('#productModal').modal('hide')
    },
    deleteProduct (id) {
      this.isLoading = true
      this.$store.dispatch('backendApi/deleteProducts', id)
      this.isLoading = false
      this.$bus.$emit('message:push',
        '刪除成功囉，好棒ヽ(＾Д＾)ﾉ ',
        'success')
      $('#delProductModal').modal('hide')
    },
    async upLoadingFile () {
      const file = this.$refs.file.files[0]
      const createFile = new FormData()
      createFile.append('file', file)
      this.isLoading = true
      await this.$store.dispatch('backendApi/upLoadFile', createFile)
      this.tempProducts.imageUrl.push(this.getFileRes)
      this.isLoading = false
    }
    // 取得/刪除檔案
    // async getLoadingFile () {
    //   const res = await apiGetFile()
    //   console.log(res.data.data.id)
    //   res.data.data.forEach(item => {
    //     this.delLoadingFile(item.id)
    //   })
    // }
    // async delLoadingFile (id) {
    //   const delRes = await apiDelFile(id)
    //   console.log(delRes)
    // }
  },
  created () {
    // this.isLoading = true
    console.log(this.getProductsData)
    this.getProducts()
    // this.isLoading = false
  }
}
</script>
<style lang="scss">
  #productModal .img{
    width: 330px;
    height: 300px;
  }
  .btn-group .btn{
    height: 33px;
    box-sizing: border-box;
    padding-top: 5px;
  }
  .btn-group .btn p{
    white-space: nowrap;
    height: 10px;
  }
  .products td{
    vertical-align: middle;
  }
</style>

<style lang="css">
@import '~vue2-editor/dist/vue2-editor.css';
/* Import the Quill styles you want */
@import '~quill/dist/quill.core.css';
@import '~quill/dist/quill.bubble.css';
@import '~quill/dist/quill.snow.css';
</style>
