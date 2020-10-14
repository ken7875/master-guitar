<template>
    <nav class="navbar navbar-expand-lg navbar-light">
          <div class="nav-title"><a class="navbar-brand" href="./index.html"><p><i class="fas fa-guitar"></i>Master Guitar<p/></a></div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <ul class="navbar-nav">
               <li class="home nav-link mr-4"><router-link class="nav-link" to="/"><p>首頁</p></router-link></li><li class="products nav-link mr-4"><router-link class="nav-link" to="/products/all-Products"><p>產品列表</p></router-link></li><li class="logIn nav-link mr-4"><router-link class="nav-link" to="/login"><p>管理頁面</p></router-link></li><li class="favorite"><router-link class="nav-link" to="/favorite"><i class="fas fa-heart text-light"></i></router-link></li><li class="nav-item nav-link mr-4"><router-link class="nav-link" to="/carts"><i class="fas fa-shopping-cart"></i><span class="badge badge-pill badge-danger" v-if="carts.length">{{carts.length}}</span></router-link></li>
              </ul>
            </div>
          </div>
    </nav>
</template>

<style lang="scss">
  .navbar{
    background-color:#a76641;
    height: 130px;
  }
  .nav-title i{
    color: #000;
    font-size: 50px;
  }
  .nav-title a{
    font-size: 40px;
    font-family: 'Special Elite', cursive;
  }
  .fa-shopping-cart{
    font-size: 25px;
    margin-right: 20px;
    margin-top: 15px;
    color: white;
  }
  .fa-heart{
    font-size: 28px;
    margin-right: 20px;
    margin-top: 22px;
    margin-left: 35px;
  }
  .badge{
    transform: translateX(-24px) translateY(5px);
    font-size: 13px;
  }
  .navbar-nav .home{
    margin-top: 15px;
  }
  .navbar-nav .products{
    margin-top: 15px;
  }
  .navbar-nav .logIn{
    margin-top: 15px;
  }
  .nav-link p{
    font-size: 18px;
    color: white;
  }
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
