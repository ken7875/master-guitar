<template>
  <div class="wrap">
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <div class="productList row align-items-center">
        <div class="ProductImg col-md-6">
          <img :src="imageUrl" alt="">
        </div>
        <div class="col-md-6">
          <h2 class="productTitle font-weight-bold h2 mb-5">{{showProduct.title}}</h2>
          <p class="h4 font-weight-bold text-left mt-5 mb-5">{{showProduct.description}}</p>
          <p class="h5 mb-2 text-muted text-left"><del>${{showProduct.origin_price}}</del></p>
          <p class="h4 font-weight-bold text-left text-primary">${{showProduct.price}}</p>
          <p class="h6 text-right text-primary">*樂器與音箱有一年售後維修保固</p>
          <div class="cart d-flex row align-items-center">
            <div class="justify-content-center input-group my-3 mr-2 bg-light rounded">
              <div class="input-group-prepend">
                <button class="minus-btn btn-outline-dark border-5 py-2" type="button" id="button-addon1"
                @click="quantity = (quantity - 1)" :disabled="quantity === 1">
                  -
                </button>
              </div>
              <input type="number" class="productQty border-5 text-center my-auto shadow-none bg-light" aria-label="Example text with button addon" aria-describedby="button-addon1"  :value="quantity">
              <div class="input-group-append">
                <button class="add-btn border-5 btn-outline-dark py-2" type="button" id="button-addon2" @click="quantity = (quantity + 1)">
                  +
                </button>
              </div>
            </div>
            <div class="cart-btn col-9">
              <button class="btn btn-dark btn-block" @click="addToCart(showProduct.id, quantity)">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-dark py-5 mt-5">
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
.productList{
    margin-top: 80px;
}

.ProductImg img{
    height: 450px;
    width: 430px;
    }

.productTitle{
    margin-top: 70px;
}

.cart{
    margin-top: 40px;
}

.minus-btn{
    width: 40px;
}

.add-btn{
    width:40px
}

.productQty{
    width: 318px;
    height: 50px;
}

.cart-btn{
    margin: 0 auto;
}

</style>

<script>
export default {
  data () {
    return {
      products: [],
      showProduct: [],
      imageUrl: '',
      carts: [],
      quantity: 1,
      isLoading: false
    }
  },
  created () {
    this.getProducts()
    this.getSingleProduct()
  },
  methods: {
    getProducts () {
      this.isloading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products?paged=99`
      this.$http.get(url)
        .then(res => {
          this.isloading = false
          this.products = res.data.data
        })
    },
    getCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(url)
        .then((res) => {
          this.cart = res.data.data
          this.isLoading = false
        })
    },
    getSingleProduct () {
      this.isLoading = true
      const id = this.$route.params.id
      this.showProduct = []
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`
      this.$http.get(url)
        .then((res) => {
          this.isLoading = false
          this.showProduct = res.data.data
          this.imageUrl = this.showProduct.imageUrl[0]
        })
    },
    addToCart (id, quantity = 1) {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.isLoading = true
      this.axios.post(url, {
        product: this.showProduct.id,
        quantity: quantity
      })
        .then((res) => {
          this.isLoading = false
          this.getCart()
          this.$bus.$emit('get-cart')
        })
    }
  }
}

</script>
