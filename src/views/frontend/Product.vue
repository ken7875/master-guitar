<template>
  <div class="wrap">
    <loading :active.sync="isLoading">
      <loadingStyle />
    </loading>
    <div class="container py-3" style="backgroundColor:#FFFDD0;">
      <div class="productList row align-items-center">
        <div class="singleProductImg col-md-6 mb-6 mb-lg-0" v-if="showProduct.category !== '課程'">
          <img :src="imageUrl" alt="product" class="h-100">
        </div>
        <div class="singleProductImg col-md-6 mb-6 mb-lg-0" v-if="showProduct.category == '課程'">
          <img :src="courseImageUrl" alt="product" class="h-100">
        </div>
        <div class="col-md-6">
          <h3 class="productTitle font-weight-bold mb-lg-10 mb-8">
            {{showProduct.title}}
          </h3>
          <p class="h4 font-weight-bold text-left mt-5 mb-5">
            {{showProduct.description}}
          </p>
          <p class="h5 mb-2 text-muted text-left">
            <del>原價: ${{showProduct.origin_price}}</del>
          </p>
          <p class="h4 font-weight-bold text-left text-primary">
            特價: ${{showProduct.price}}
          </p>
          <p class="h6 text-right text-primary mb-lg-10 mb-8">*樂器與音箱有一年售後維修保固</p>
          <div class="input-group px-8 mb-lg-5 mb-4">
            <div class="input-group-prepend">
              <button class="addBtn btn btn-outline-secondary px-3" type="button" id="quality" @click="quantity = (quantity - 1)" :disabled="quantity === 1"><i class="fas fa-minus"></i></button>
            </div>
            <input type="text" class="form-control h-100 py-3 quality text-center" :value="quantity" aria-label="Recipient's username" aria-describedby="quality">
            <div class="input-group-append">
              <button class="minusBtn btn bg-wood px-3" type="button" id="quality" @click="quantity = (quantity + 1)"><i class="fas fa-plus"></i></button>
            </div>
          </div>
          <div class="cart-btn px-8">
              <button class="btn btn-wood btn-block" @click="addToCart(showProduct.id, quantity)">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
    <h2 class="second_title mt-lg-12 mt-10">相關商品</h2>
    <Relative :showproduct="showProduct" @update="getSingleProduct"></Relative>
  </div>
</template>

<script>
import Relative from '@/components/Relative.vue'
import { mapGetters, mapActions } from 'vuex'
import loadingStyle from '@/components/Loading.vue'
export default {
  components: {
    Relative,
    loadingStyle
  },
  data () {
    return {
      showProduct: {
        imageUrl: [],
        courseImageUrl: [],
        num: 1,
        options: {}
      },
      products: [],
      imageUrl: '',
      carts: [],
      quantity: 1,
      isLoading: false
    }
  },
  created () {
    this.getProducts()
    this.getSingleProduct()
    this.getCart()
    console.log(this.$route)
  },
  methods: {
    ...mapActions(['getCart']),
    ...mapActions('productsModules', ['getProducts']),
    getSingleProduct () {
      this.$store.state.isLoading = true
      const id = this.$route.params.id
      this.showProduct = {}
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`
      this.$http.get(url)
        .then((res) => {
          this.$store.state.isLoading = false
          this.showProduct = res.data.data
          this.imageUrl = this.showProduct.imageUrl[0]
          this.courseImageUrl = this.showProduct.imageUrl[2]
        })
    },
    addToCart (id, quantity = 1) {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.$store.state.isLoading = true
      this.isLoading = true
      this.axios.post(url, {
        product: this.showProduct.id,
        quantity: quantity
      })
        .then((res) => {
          this.isLoading = false
          this.getCart()
          this.$bus.$emit('get-cart')
          this.$bus.$emit('message:push', '商品成功加入購物車!', 'success')
          this.$store.dispatch('getCart')
        })
        .catch((error) => {
          this.isLoading = false
          this.$bus.$emit('message:push', `加入失敗!${error.response.data.errors}`, 'danger')
        })
    }
  },
  computed: {
    ...mapGetters('productsModules', ['getProductsDone']),
    ...mapGetters(['getCartsDone'])
  }
}

</script>
