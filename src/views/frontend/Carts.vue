<template>
  <div class="carts container">
    <loading :active.sync="isLoading"></loading>
    <h2 class="mt-5 mb-5 section_title">購物車</h2>
    <div class="row">
      <div class="col-12" v-for="item in carts" :key="item.product.id + 'carts'">
        <div class="card justify-content-md-start mb-lg-8 mb-6">
          <div class="row align-items-center no-gutters">
            <div class="img col-lg-2 col-md-3">
              <img :src="`${item.product.imageUrl[0]}`" />
            </div>
            <div class="font-md col-md-3 col-8">
              <p class="title text-md-center text-left">{{item.product.title}}</p>
            </div>
            <div class="input-group mb-3 col-md-3 col-7">
              <div class="input-group-prepend">
                <button class="btn btn-outline-secondary px-lg-3 px-2" type="button" id="quantity" @click="item.quantity--;updateQty( item.product.id, item.quantity)">
                  <i class="fas fa-minus font-sm"></i>
                </button>
              </div>
              <input type="number" class="form-control h-100 py-3 text-center" :value="item.quantity" aria-label="quantity" aria-describedby="quantity" id="quantity" @keyup="updateQty(item.product.id,item.quantity)">
              <div class="input-group-append">
                <button class="btn btn-wood px-lg-3 px-2" type="button" id="quantity" @click="item.quantity++;updateQty( item.product.id, item.quantity)">
                  <i class="fas fa-plus font-sm"></i>
                </button>
              </div>
            </div>
            <div class="price col-md-2 col-5">
              <p>$ {{item.product.price * item.quantity}}</p>
            </div>
            <div class="delPic col-md-1 font-lg pb-3">
              <a href="#" @click.prevent="delData(item.product.id)">
                <i class="fas fa-trash-alt text-danger"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" total flex-wrap row no-gutters">
      <p class="text-right font-xl col-lg-12">總計$: {{total}}</p>
      <button class="btn btn-primary col-md-3 offset-md-9 py-2 font-md" @click="goPay">前往結帳</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: [],
      carts: [],
      total: 0,
      isLoading: false
    }
  },
  created () {
    this.getCart()
  },
  methods: {
    getProducts () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products?paged=99`
      this.$http.get(url).then((res) => {
        this.isLoading = false
        this.products = res.data.data
      })
    },
    getCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(url).then((res) => {
        this.isLoading = false
        this.carts = res.data.data
        this.getTotalPrice()
      })
    },
    getTotalPrice () {
      this.total = 0
      this.carts.forEach((item) => {
        this.total += item.product.price * item.quantity
      })
    },
    updateQty (id, quantity = 1) {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.axios.patch(url, {
        product: id,
        quantity
      })
        .then(() => {
          this.getCart()
        })
    },
    delData (id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/${id}`
      this.axios.delete(url)
        .then(() => {
          this.isLoading = false
          this.$bus.$emit('get-cart')
          this.getCart()
        })
    },
    goPay () {
      this.$router.push('/pay')
    }
  }
}
</script>
