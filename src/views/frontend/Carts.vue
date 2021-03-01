<template>
  <div class="cart container height100">
    <loading :active.sync="isLoading">
      <loadingStyle />
    </loading>
    <h2 class="mt-12 mb-6">購物車</h2>
    <div class="row">
      <div class="col-md-12 col-12" v-for="item in getCartsDone" :key="item.product.id + 'carts'">
        <div class="products border mb-lg-8 mb-6">
          <div class="row align-items-center no-gutters">
            <div class="img col-lg-2 col-md-3" v-show="item.product.category !== '課程'">
              <img :src="`${item.product.imageUrl[0]}`" />
            </div>
            <div class="img col-lg-2 col-md-3" v-show="item.product.category === '課程'">
              <img :src="`${item.product.imageUrl[2]}`" />
            </div>
            <div class="font-md col-md-3 col-12">
              <p class="productName font-xxl text-center text-left mb-1 mb-md-0 px-md-3">{{item.product.title}}</p>
              <p class="text-gray font-sm">{{item.product.category}}</p>
            </div>
            <div class="input-group mb-3 col-md-3 col-10 offset-1 offset-md-0">
              <div class="input-group-prepend">
                <button class="btn btn-outline-secondary px-lg-3 px-2" type="button" id="quantity" @click="updateQty( item.product.id, item.quantity -1);">
                  <i class="fas fa-minus font-sm"></i>
                </button>
              </div>
              <input type="number" class="form-control h-100 py-3 text-center" :value="item.quantity" aria-label="quantity" aria-describedby="quantity" id="quantity" @keyup="updateQty(item.product.id,item.quantity)">
              <div class="input-group-append">
                <button class="btn btn-wood px-lg-3 px-2" type="button" id="quantity" @click="updateQty( item.product.id, item.quantity +1)">
                  <i class="fas fa-plus font-sm"></i>
                </button>
              </div>
            </div>
            <div class="price col-md-2 col-12">
              <p>$ {{item.product.price * item.quantity | thousands}}</p>
            </div>
            <div class="delPic col-md-1 col-12 font-lg pb-3">
              <a href="#" @click.prevent="delData(item.product.id)">
                <i class="fas fa-trash-alt text-danger font-xxl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" total flex-wrap row no-gutters mb-5">
      <p class="font-xxl text-md-right col-md-12 col-6 offset-3 offset-md-0">總計$: {{cartsTotal}}</p>
      <button class="btn btn-primary col-md-3 offset-md-9 py-2 font-lg col-6 offset-3" @click="goPay">前往結帳</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import loadingStyle from '@/components/Loading.vue'

export default {
  components: {
    loadingStyle
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(['getCart']),
    updateQty (id, quantity = 1) {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.axios.patch(url, {
        product: id,
        quantity
      })
        .then(() => {
          if (quantity <= 0) {
            this.delData(id)
          } else {
            this.$store.dispatch('getCart')
          }
        })
    },
    delData (id) {
      this.$store.state.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/${id}`
      this.axios.delete(url)
        .then(() => {
          this.$store.state.isLoading = false
          this.$bus.$emit('get-cart')
          this.$store.dispatch('getCart')
          this.quantity = 0
        })
    },
    goPay () {
      this.$router.push('/pay')
    }
  },
  created () {
    this.getCart()
  },
  computed: {
    ...mapGetters(['getCartsDone', 'isLoading']),
    ...mapGetters(['cartsTotal'])
  }
}
</script>
