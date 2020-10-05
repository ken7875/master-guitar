<template>
  <div class="wrap">
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <div class="mt-3">
        <h3 class="mt-5 mb-5">購物車</h3>
        <div class="container">
          <div class="col-md-12" style="margin:0 auto;" v-for="item in carts" :key="item.product.id + 'carts'">
            <div class="card">
              <div class="content row justify-content-md-start">
                <div class="img col-md-2 mr-4">
                  <img :src="`${item.product.imageUrl[0]}`">
                </div>
                <div class="title col-md-2 mr-4 justify-content-md-center">
                  <p>{{item.product.title}}</p>
                </div>
                <div class="input-group col-md-4">
                  <div class="input-group-prepend" style="width:30px;">
                    <button
                      class="minus-btn btn-outline-dark border-5"
                      type="button"
                      id="button-addon1"
                      @click="item.quantity--;updateQty( item.product.id, item.quantity)"
                      :disabled="item.quantity === 1"
                    >-</button>
                  </div>
                  <input
                    type="number"
                    class="productQty border-5 text-center my-auto shadow-none bg-light"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    v-model="item.quantity"
                    @keyup="updateQty(item.product.id,item.quantity)"
                  >
                  <div class="input-group-append" style="width:30px;">
                    <button
                      class="add-btn border-5 btn-outline-dark"
                      type="button"
                      id="button-addon2"
                      @click="item.quantity++;updateQty( item.product.id, item.quantity)"
                    >+</button>
                  </div>
                </div>
                <div class="price col-md-2">
                  <p>{{item.product.price}}</p>
                </div>
                <div class="delPic col-md-1">
                  <a href="#" @click.prevent="delData(item.product.id)"><i class="fas fa-trash-alt"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="checkOut">
      <div class="total">
        <p>總計$: {{total}}</p>
          <button class="btn btn-dark" @click="goPay">前往結帳</button>
      </div>
    </div>
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
.card img {
  width: 200px;
  height: 180px;
  display: flex;
  align-items: left;
}
.content .title {
  display: flex;
  align-items: center;
}
.minus-btn {
  width: 30px;
  height: 40px;
}
.add-btn {
  width: 30px;
  height: 40px;
}
.content .input-group{
  width: 200px;
  display: flex;
  align-items: center;
}
.content .productQty {
  width: 150px;
  height: 40px;
}
.content .price {
  display: flex;
  align-items: center;
}
.content .delPic{
  color: red;
  display: flex;
  align-items: center;
}
.content .delPic .fas {
  color: red;
}
.total{
  font-size: 25px;
  color: red;
  margin-left: 867px;
  margin-bottom: 100px;
  margin-top: 50px;
}
.total btn{
  width: 80px;
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
