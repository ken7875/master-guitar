<template>
    <nav class="navbar navbar-expand-lg navbar-light">
          <div class="nav-title"><a class="navbar-brand" href="./index.html"><p><i class="fas fa-guitar"></i>Master Guitar<p/></a></div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <ul class="navbar-nav">
               <li class="home nav-link mr-4"><router-link class="nav-link" to="/"><p>首頁</p></router-link></li><li class="products nav-link mr-4"><router-link class="nav-link" to="/products/all-Products"><p>產品列表</p></router-link></li><li class="nav-item nav-link mr-4"><router-link class="nav-link" to="/carts"><i class="fas fa-shopping-cart"></i><span class="badge badge-pill badge-danger" v-if="carts.length">{{carts.length}}</span></router-link></li>
              </ul>
            </div>
          </div>
    </nav>
</template>

<style lang="scss">
  .navbar{
    background-color:#a76641;
  }
  .nav-title i{
    color: #000;
    font-size: 50px;
  }
  .nav-title a{
    font-size: 40px;
    font-family: 'Special Elite', cursive;
  }
  .fas{
    font-size: 25px;
    margin-right: 20px;
    margin-top: 15px;
    color: white;
  }

  .badge{
    transform:translateX(-24px) translateY(5px);
    font-size: 13px;
  }
  .navbar-nav .home{
    margin-top: 15px;
  }
  .navbar-nav .products{
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
      carts: []
    }
  },
  created () {
    this.getCart()
    this.$bus.$on('get-cart', () => {
      this.getCart()
    })
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.axios.get(url)
        .then((res) => {
          this.carts = res.data.data
        })
    }
  }
}
</script>
