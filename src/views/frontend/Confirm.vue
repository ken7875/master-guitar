<template>
  <div class="confirm container">
    <loading :active.sync="isLoading"></loading>
    <h2
      class="title font-weight-bold mt-12 mb-6 pb-lg-6 pb-md-4"
      v-if="page === 1"
    >
      確認帳單
    </h2>
    <div
      @submit.prevent="payOrder"
      class="row flex-row-reverse justify-content-center pb-5"
      :class="{ show1: page === 1, none: page === 2 }"
    >
      <div class="checklist col-lg-4 offset-lg-1 col-md-5 mb-6 mb-md-0 ml-md-5">
        <div class="border p-4 mb-4">
          <h3 class="title border-bottom pb-3 mb-5">確認明細</h3>
          <div
            class="d-flex mb-4"
            v-for="product in order.products"
            :key="product.id"
          >
            <img :src="`${product.product.imageUrl[0]}`" class="mr-2" />
            <div class="w-100">
              <div class="d-flex justify-content-between">
                <p class="mb-0 font-weight-bold">{{ product.product.title }}</p>
                <p class="mb-0">{{ product.product.price | thousands }}</p>
              </div>
              <p class="mb-0 font-weight-bold">X{{ product.quantity }}</p>
            </div>
          </div>
          <div class="d-flex justify-content-between mt-4 border-top">
            <p class="mb-0 mt-4 h4 font-weight-bold">Total</p>
            <p class="mb-0 mt-4 h4 font-weight-bold">
              NT${{ parseInt(order.amount) | thousands }}
            </p>
          </div>
        </div>
      </div>
      <div class="form-group col-md-7 row">
        <h3 class="checkFormTitle mb-lg-6 mb-5 pb-lg-4 pb-3 col-12">訂購人資料</h3>
        <div class="checkForm col-12 mb-5">
          <div class="name row justify-content-center mb-md-9 mb-6">
            <div class="col-6 font-xxl">姓名:</div>
            <div class="col-6 font-xxl">{{ order.user.name }}</div>
          </div>
          <div class="Email row justify-content-center mb-md-9 mb-6">
            <div class="col-6 font-xxl">郵件:</div>
            <div class="col-6 font-xxl">{{ order.user.email }}</div>
          </div>
          <div class="tel row justify-content-center mb-md-9 mb-6">
            <div class="col-6 font-xxl">電話:</div>
            <div class="col-6 font-xxl">{{ order.user.tel }}</div>
          </div>
          <div class="address row justify-content-center mb-md-9 mb-6">
            <div class="col-6 font-xxl">地址:</div>
            <div class="col-6 font-xxl">{{ order.user.address }}</div>
          </div>
          <div class="payment row justify-content-center mb-md-9 mb-6">
            <div class="col-6 font-xxl">付款方式:</div>
            <div class="col-6 font-xxl">{{ order.payment }}</div>
          </div>
        </div>
        <button class="btn btn-primary col-5 offset-7" @click="page = 2" v-if="order.paid === false">確認訂單</button>
      </div>
    </div>
    <!-- success page -->
    <div class="success" :class="{ show2: page === 2 }">
        <div class="row">
          <div class="col-7 img d-flex flex-column justify-content-center mb-5">
            <div class="currect">
              <i class="fas fa-check-circle text-success"></i>
            </div>
            <h2 class="text-light">感謝您,</h2>
            <p class="text-light font-xl">付款成功,商品將會在3天後寄到指定地址。</p>
          </div>
          <div class="col-12 button">
            <button class="home btn btn-primary" @click="backToProducts">
              繼續選購
            </button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      order: {
        user: {}
      },
      orderId: '',
      page: 1,
      isLoading: false
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  },
  methods: {
    getOrder () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        this.order = res.data.data
        this.origin_total = res.data.data.amount
        this.isLoading = false
      })
    },
    payOrder () {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}/paying`
      this.isLoading = true
      this.$http.post(url).then((res) => {
        if (res.data.data.paid) {
          this.getOrder()
          this.isLoading = false
        }
      })
    },
    backToProducts () {
      this.$router.push('/products')
    }
  }
}
</script>
