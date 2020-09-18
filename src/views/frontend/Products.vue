<template>
  <div class="wrap">
    <loading :active.sync="isLoading"></loading>
    <div style="margin-top: 50px;"><h2>產品列表</h2></div>
    <div class="container mt-md-5 mt-3 mb-7">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="productList col-md-4" v-for="product in showProducts" :key="product.id">
              <router-link :to="`/product/${product.id}`">
              <div class="card border-4 mb-4 position-relative position-relative">
                <div class="card-img rounded-0" :style="`background-image: url(${product.imageUrl[0]});`">
                </div>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3"><a href="./detail.html">{{product.title}}</a></h4>
                  <div class="price"><p class="card-text mb-0" style="font-size:20px;">特價:{{product.price}}</p></div><div class="text-muted"><del>原價:{{product.origin_price}}</del></div>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pagination :pages="pagination" @update="getProduct"></pagination>
    <div class="bg-dark py-5">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4">
          <a class="text-white h4" href="./index.html">LOGO</a>
          <ul class="d-flex list-unstyled mb-0 h4">
            <li><a href="#" class="text-white mx-3"><i class="fab fa-facebook"></i></a></li>
            <li><a href="#" class="text-white mx-3"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#" class="text-white ml-3"><i class="fab fa-line"></i></a></li>
          </ul>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white">
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
  .card-img{
    height: 350px;
    width: 100%;
    background-position: center;
    background-size: cover;
  }
  .card{
    cursor: pointer;
    transition: all .3s;
  }
  .card:hover{
    opacity: 0.5;
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
      isLoading: false
    }
  },

  created () {
    this.getProduct()
  },
  methods: {
    getProduct (num = 1) {
      this.isLoading = true
      const category = this.$route.params.category
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products?pages=${num}`
      this.axios.get(url).then((res) => {
        this.isLoading = false
        this.showProducts = []
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
    }

  }
}
</script>
