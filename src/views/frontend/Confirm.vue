<template>
  <div class="container">
    <loading :active.sync="isLoading"></loading>
    <div class="row justify-content-center">
      <div class="col-md-10">
        <h3 class="title font-weight-bold" v-if="page === 1">確認帳單</h3>
      </div>
    </div>
    <form
      @submit.prevent="payOrder"
      class="checklist row flex-row-reverse justify-content-center pb-5"
      :class="{'show1' : page === 1}"
    >
      <div class="col-md-5">
        <div class="border p-4 mb-4">
          <div
            class="checklist-content d-flex mb-4"
            v-for="product in order.products"
            :key="product.id"
          >
            <img
              :src="`${product.product.imageUrl[0]}`"
              class="mr-2"
              style="width: 48px; height: 48px; object-fit: cover"
            />
            <div class="w-100">
              <div class="d-flex justify-content-between">
                <p class="mb-0 font-weight-bold">{{product.product.title}}</p>
                <p class="mb-0">{{product.product.price}}</p>
              </div>
              <p class="mb-0 font-weight-bold">X{{product.quantity}}</p>
            </div>
          </div>
          <table class="table mt-4 border-top border-bottom text-muted">
            <tbody>
              <tr>
                <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">$總計</th>
                <td class="text-right border-0 px-0 pt-4">NT${{order.amount}}</td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 font-weight-bold">Total</p>
            <p class="mb-0 h4 font-weight-bold">NT${{order.amount}}</p>
          </div>
        </div>
        <div class="confirm" v-if="order.paid === false">
          <button class="btn btn-dark" @click="page = 2">確認訂單</button>
        </div>
      </div>
      <div class="form-group col-md-7">
        <div class="form-title h4">
          <p>訂購人資料</p>
        </div>
        <div class="container">
          <div class="checkForm">
            <div class="name row justify-content-center">
              <div class="col-4">姓名:</div>
              <div class="col-4">{{order.user.name}}</div>
            </div>
            <div class="Email row justify-content-center">
              <div class="col-4">郵件:</div>
              <div class="col-4">{{order.user.email}}</div>
            </div>
            <div class="tel row justify-content-center">
              <div class="col-4">電話:</div>
              <div class="col-4">{{order.user.tel}}</div>
            </div>
            <div class="address row justify-content-center">
              <div class="col-4">地址:</div>
              <div class="col-4">{{order.user.address}}</div>
            </div>
            <div class="payment row justify-content-center">
              <div class="col-4">付款方式:</div>
              <div class="col-4">{{order.payment}}</div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div class="success" :class="{ 'show2': page === 2 }">
      <div class="container">
        <div class="content">
          <div class="currect">
            <i class="fas fa-check-circle"></i>
          </div>
          <div class="title">
            <h2>感謝您,</h2>
          </div>
          <div class="text">
            <p>付款成功,商品將會在3天後寄到指定地址。</p>
          </div>
          <div class="img"></div>
        </div>
      </div>
      <div class="button">
        <button class="home btn btn-primary" @click="backToProducts">繼續選購</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-title {
  padding-bottom: 18px;
  padding-left: 53px;
  margin-left: -50px;
  border-bottom: #000 solid;
}
.title {
  margin-top: 50px;
  margin-bottom: 80px;
}
.checklist {
  display: none;
}
.success {
  display: none;
}
.show1 {
  display: flex;
}
.show2 {
  display: block;
}
.checkForm {
  border: 1px #dee2e6 solid;
  font-size: 20px;
  line-height: 70px;
}
.content {
  position: relative;
  padding-top: 100px;
  display: flex;
  justify-content: center;
  height: 450px;
}
.content .currect {
  position: absolute;
  margin-top: 90px;
}
.content i {
  margin-left: 10px;
  font-size: 50px;
  color: green;
}
.content .title {
  margin-top: 170px;
}
.content .text {
  font-size: 25px;
  position: absolute;
  padding-top: 230px;
}
.content .img {
  position: absolute;
  background-image: url("https://images.unsplash.com/photo-1558323838-22bc79c1e750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60");
  width: 600px;
  height: 400px;
  opacity: 0.2;
}
.home {
  border-radius: 1rem;
  width: 150px;
  height: 50px;
  margin-top: 100px;
  margin-right: 900px;
  margin-bottom: 100px;
  font-size: 17px;
}
</style>

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
      this.$router.push('/products/all-Products')
    }
  }
}
</script>
