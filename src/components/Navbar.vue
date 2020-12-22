<template>
  <div class="wrap w-100 sticky-top">
    <nav class="navbar navbar-expand-lg bg-wood py-5 navbar">
      <div class="container">
        <h1>
          <router-link class="navbar-brand text-dark" to="/">
            <i class="fas fa-guitar mr-3"></i>Master Guitar
          </router-link>
        </h1>
          <button class="btn d-lg-none font-xxl px-0" type="button" data-toggle="collapse" data-target="#Navmenu" aria-expanded="false" aria-controls="Navmenu">
            <i class="fas fa-bars"></i>
          </button>
            <ul class="navbar-nav align-items-center d-none d-lg-flex">
              <li class="home nav-item mr-lg-8 mr-md-6 font-xl">
                <router-link class="nav-link text-white" to="/">
                  <p class="mb-0">首頁</p>
                </router-link>
              </li>
              <li class="products nav-item mr-lg-8 mr-md-6 font-xl">
                <router-link class="nav-link text-white" to="/products/all-Products">
                  <p class="mb-0">產品列表</p>
                </router-link>
              </li>
              <li class="logIn nav-item mr-lg-8 mr-md-6 font-xl">
                <router-link class="nav-link text-white" to="/login">
                    <p class="mb-0">管理頁面</p>
                </router-link>
              </li>
              <li class="favorite nav-item mr-lg-5 mr-md-3">
                <router-link class="nav-link" to="/favorite">
                    <i class="fas fa-heart text-light font-xxl"></i>
                </router-link>
              </li>
              <li class="nav-item d-flex">
                <router-link class="nav-link" to="/carts">
                  <i class="fas fa-shopping-cart font-xxl text-white"></i>
                  <span class="badge badge-pill badge-danger" v-if="carts.length">
                    {{carts.length}}
                  </span>
                </router-link>
              </li>
            </ul>
      </div>
    </nav>
    <!-- mobile_categoryList -->
    <ul class="mobile_categoryList row no-gutters list-unstyled d-md-none mb-0">
      <li class="col-6 text-white bg-wood py-1">
        <router-link to='/products/all-Products' class="text-white">所有產品</router-link>
      </li>
      <li class="col-6 text-white bg-wood py-1">
        <router-link to='/products/電吉他|貝斯' class="text-white">電吉他/貝斯</router-link>
      </li>
      <li class="col-6 text-white bg-wood py-1">
        <router-link to='/products/木吉他|烏克麗麗' class="text-white">木吉他/烏克麗麗</router-link>
      </li>
      <li class="col-6  bg-wood py-1">
        <router-link to='/products/周邊商品' class="text-white">周邊商品</router-link>
      </li>
    </ul>
    <!-- collapse -->
    <div class="row no-gutters collapse" data-target="#Navmenu" id="Navmenu">
      <router-link to="/" class="col-12 bg-gray py-4 text-white font-xl">
        首頁
      </router-link>
      <router-link to="/products/all-Products" class="col-12 bg-gray py-4 text-white font-xl">
        產品列表
      </router-link>
      <router-link to="/login" class="col-12 bg-gray py-5 text-white font-xl">
        管理頁面
      </router-link>
      <router-link to="/favorite" class="col-12 bg-gray py-4 text-white font-xl">
          我的喜好
      </router-link>
      <router-link to="/carts" class="col-12 bg-gray py-4 text-white font-xl">
        購物車
        <span v-if="carts.length">
          ( {{carts.length}} )
        </span>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">

</style>

<script>
export default {
  data () {
    return {
      carts: [],
      products: [],
      favorProduts: [],
      myFavor: JSON.parse(localStorage.getItem('favorItem')) || []
    }
  },
  created () {
    this.getCart()
    this.$bus.$on('get-cart', () => {
      this.getCart()
    })
    this.getProducts()
  },
  methods: {
    getProducts () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`
      this.axios.get(url)
        .then((res) => {
          this.isLoading = false
          this.products = res.data.data
          this.getFavor()
        })
    },
    getCart () {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.axios.get(url)
        .then((res) => {
          this.carts = res.data.data
        })
    },
    getFavor () {
      this.favorProduts = this.products.filter((product) =>
        this.myFavor.indexOf(product.id) > -1
      )
      this.isloading = false
    }
  }
}
</script>
