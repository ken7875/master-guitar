<template>
  <div class="wrap">
    <loading :active.sync="isLoading"></loading>
    <h2 class="mt-12 mb-6">我的最愛</h2>
    <div class="container mt-md-5 mt-3 mb-7">
      <div class="row">
        <div
          class="productList col-lg-3 col-md-6"
          v-for="product in favorProduts"
          :key="product.id"
          :disabled="myFavor.indexOf(product.id) === -1"
        >
          <div class="card border-4 mb-4">
            <div
              class="img rounded-0 position-relative"
              :style="`background-image: url(${product.imageUrl[0]});`"
            >
              <div
                class="favor position-absolute"
                @click="delFavor(product.id)"
              >
                <i
                  class="fas fa-heart text-danger"
                  v-if="myFavor.indexOf(product.id) > -1"
                ></i>
              </div>
            </div>
            <div class="card-body p-0">
              <h4 class="mb-0 mt-3">
                <a href="./detail.html">{{ product.title }}</a>
              </h4>
              <div class="price">
                <p class="card-text mb-0" style="font-size: 20px">
                  特價:{{ product.price }}
                </p>
              </div>
              <div class="text-muted mb-4">
                <del>原價:{{ product.origin_price }}</del>
              </div>
            </div>
            <div class="card-footer d-flex">
              <router-link
                :to="`/product/${product.id}`"
                class="btn btn-outline-secondary btn-sm"
              >
                詳細資訊
              </router-link>
              <button
                class="btn btn-outline-primary btn-sm ml-auto d-flex align-items-center"
                @click.prevent="addToCart(product.id)"
                :disabled="status.loadingItem === product.id"
              >
                加入購物車
                <i
                  class="ml-2 spinner-grow spinner-grow-sm d-md-none d-lg-block"
                  v-if="status.loadingItem === product.id"
                  style="width: 12px; height: 12px"
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      myFavor: JSON.parse(localStorage.getItem('favorItem')) || [],
      favorProduts: [],
      products: [],
      isLoading: false,
      status: {
        loadingItem: ''
      }
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts () {
      this.isloading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products?paged=99`
      this.$http.get(url)
        .then(res => {
          this.products = res.data.data
          this.getFavor()
        })
      this.isloading = false
    },
    getFavor () {
      this.favorProduts = this.products.filter((product) =>
        this.myFavor.indexOf(product.id) > -1
      )
      this.isloading = false
    },
    delFavor (id) {
      const followId = this.myFavor.indexOf(id)
      if (followId !== -1) {
        this.myFavor.splice(followId, 1)
        console.log(this.myFavor)
        this.isloading = false
        this.getFavor()
      }
      localStorage.setItem('favorItem', JSON.stringify(this.myFavor))
    },
    addToCart (id, quantity = 1) {
      this.status.loadingItem = id
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.isLoading = true
      this.axios.post(url, {
        product: id,
        quantity
      })
        .then((res) => {
          this.status.loadingItem = ''
          this.$bus.$emit('get-cart')
          this.$bus.$emit('message-push', '商品成功加入購物車!', 'success')
          this.isLoading = false
        })
        .catch((error) => {
          this.status.loadingItem = ''
          this.$bus.$emit('message-push', `加入失敗!${error.response.data.errors}`, 'danger')
        })
      this.isLoading = false
    }
  }
}
</script>
