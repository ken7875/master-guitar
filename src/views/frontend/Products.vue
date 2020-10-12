<template>
  <div class="wrap">
    <loading :active.sync="isLoading"></loading>
    <div class="Title"><h2>產品列表</h2></div>
    <ul class="categoryList">
     <li @click="getProducts"><router-link to="/products/all-Products">所有產品</router-link></li>
      <li @click="getProducts"><router-link to="/products/電吉他|貝斯">電吉他/貝斯</router-link></li>
      <li @click="getProducts"><router-link to="/products/木吉他|烏克麗麗">木吉他/烏克麗麗</router-link></li>
      <li @click="getProducts"><router-link to="/products/周邊商品">周邊商品</router-link></li>
    </ul>
    <div class="container mt-md-5 mt-3 mb-7">
      <div class="row">
        <div class="products col-md-12">
          <div class="row">
            <div class="productList col-md-4" v-for="product in showProducts" :key="product.id">
              <div class="card border-4 mb-4">
                <div class="card-img rounded-0 position-relative" :style="`background-image: url(${product.imageUrl[0]});`">
                  <div class="favor" @click="addToFavor(product.id)"><i class="fas fa-heart text-light" v-if="myFavor.indexOf(product.id) === -1"></i><i class="fas fa-heart text-danger" v-else></i></div>
                </div>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3"><a href="./detail.html">{{product.title}}</a></h4>
                  <div class="price"><p class="card-text mb-0" style="font-size:20px;">特價:{{product.price | thousands}}</p></div><div class="text-muted mb-4"><del>原價:{{product.origin_price | thousands}}</del></div>
                </div>
                <div class="card-footer d-flex">
                   <router-link :to="`/product/${product.id}`"
                    class="btn btn-outline-secondary btn-sm">
                    詳細資訊
                  </router-link>
                  <button class="btn btn-outline-primary btn-sm ml-auto
                  d-flex align-items-center" @click.prevent="addToCart(product.id)" :disabled="status.loadingItem === product.id">
                    加入購物車
                    <i class="ml-2 spinner-grow spinner-grow-sm d-md-none d-lg-block"
                    v-if="status.loadingItem === product.id" style="width:12px;height:12px"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pagination :pages="pagination" @update="getProducts"></pagination>
    <div class="footer py-5">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4">
          <a class="title" href="./index.html">Master Gutair</a>
          <ul class="d-flex list-unstyled mb-0 h4">
            <li>
              <a href="#" class="text-white mx-3">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" class="text-white mx-3">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" class="text-white ml-3">
                <i class="fab fa-line"></i>
              </a>
            </li>
          </ul>
        </div>
        <div
          class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"
        >
          <div class="mb-md-0 mb-1">
            <p class="mb-0">02-3456-7890</p>
            <p class="mb-0">service@mail.com</p>
          </div>
          <p class="mb-0">© 2020 LOGO All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .Title{
    margin-top: 50px;
    border-bottom: #a76641 1px solid;
    margin-bottom: 30px;
  }
  .categoryList li{
    padding-right: 30px;
    padding-left: 30px;
    border-right: #a76641 1px solid;
    font-size: 20px;
    display: inline;
  }
  .categoryList a{
    color: #a76641;
  }
  .products{
    position: sticky;
  }
  .card-img{
    height: 350px;
    width: 100%;
    background-position: center;
    background-size: cover;
  }
  .card-img .favor{
    cursor: pointer;
    position:absolute;
    right: 8px; top: 10px
  }
  .footer{
    background-color: #a76641;
  }
  .footer .title{
    font-size: 30px;
    color: #000;
    font-family: 'Special Elite', cursive;
  }
</style>
<script>
import pagination from '@/components/Pagination.vue'
export default {
  components: {
    pagination
  },
  data () {
    return {
      products: [],
      showProducts: [],
      category: '',
      pagination: {},
      isLoading: false,
      status: {
        loadingItem: ''
      },
      myFavor: JSON.parse(localStorage.getItem('favorItem')) || []
    }
  },

  created () {
    this.getProducts()
    this.router = this.$router.history.current.name
  },
  methods: {
    getProducts (num = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products?pages=${num}`
      this.axios.get(url).then((res) => {
        this.showProducts = []
        const category = this.$route.params.category
        this.products = res.data.data
        this.pagination = res.data.meta.pagination
        this.products.forEach((product) => {
          if (category === product.category) {
            this.showProducts.push(product)
            this.category = category
          } else if (category === 'all-Products') {
            this.showProducts = this.products
            this.category = 'all Products'
          }
          this.category = category
        })
      })
      this.isLoading = false
    },
    addToCart (id, quantity = 1) {
      this.status.loadingItem = id
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.status.loadingItem = id
      this.isLoading = true
      this.axios.post(url, {
        product: id,
        quantity: quantity
      })
        .then((res) => {
          this.status.loadingItem = ''
          this.isLoading = false
          this.$bus.$emit('get-cart')
          this.$bus.$emit('message:push', '商品成功加入購物車!', 'success')
        })
        .catch((error) => {
          this.status.loadingItem = ''
          this.isLoading = false
          this.$bus.$emit('message:push', `加入失敗!${error.response.data.errors}`, 'danger')
        })
    },
    addToFavor (id, error) {
      const followId = this.myFavor.indexOf(id)
      if (followId === -1) {
        this.myFavor.push(id)
        this.$bus.$emit('message:push', '商品成功加入收藏!', 'success')
      } else {
        this.myFavor.splice(followId, 1)
        this.$bus.$emit('message:push', '取消收藏', 'danger')
        this.$bus.$emit('get-cart')
      }
      localStorage.setItem('favorItem', JSON.stringify(this.myFavor))
    }
  }
}
</script>
