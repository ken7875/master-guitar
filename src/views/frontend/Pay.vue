<template>
  <div class="container">
    <loading :active.sync="isLoading"></loading>
    <div class="row justify-content-center">
      <div class="col-md-10">
        <h3 class="title font-weight-bold">Checkout</h3>
      </div>
    </div>
    <div class="checklist row flex-row-reverse justify-content-center pb-5">
      <div class="col-md-5">
        <div class="border p-4 mb-4">
          <div class="checklist-content d-flex mb-4" v-for="item in carts" :key="item.product.id">
            <img
              :src="`${item.product.imageUrl[0]}`"
              class="mr-2"
              style="width: 48px; height: 48px; object-fit: cover"
            />
            <div class="w-100">
              <div class="d-flex justify-content-between">
                <p class="mb-0 font-weight-bold">{{item.product.title}}</p>
                <p class="mb-0">{{item.product.price}}</p>
              </div>
              <p class="mb-0 font-weight-bold">X{{item.quantity}}</p>
            </div>
          </div>
          <table class="table mt-4 border-top border-bottom text-muted">
            <tbody>
              <tr>
                <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">$總計</th>
                <td class="text-right border-0 px-0 pt-4">NT${{total}}</td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 font-weight-bold">Total</p>
            <p class="mb-0 h4 font-weight-bold">NT${{total}}</p>
          </div>
        </div>
      </div>
      <div class="form-group col-md-7">
       <div class="form-title h4"><p>訂購人資料</p></div>
        <validation-observer v-slot="{ invalid }" class="col-md-6">
          <!--form表單驗證-->
          <form @submit.prevent="createOrder">
            <div class="form-group">
              <validation-provider v-slot="{ errors, classes, passed }" rules="required">
                <label for="name">姓名</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="name"
                  class="form-control"
                  :class="classes"
                  v-model.trim="form.name"
                  name="姓名"
                />
                <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                <span v-if="passed" class="valid-feedback">名字 輸入正確</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <validation-provider v-slot="{ errors, classes, passed }" rules="required">
                <label for="email">郵件</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="form-control"
                  :class="classes"
                  v-model.trim="form.email"
                  name="郵件"
                />
                <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                <span v-if="passed" class="valid-feedback">郵件 輸入正確</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <validation-provider v-slot="{ errors, classes, passed }" rules="required|min:8">
                <label for="tel">電話</label>
                <input id="tel" v-model="form.tel" type="tel" class="form-control" :class="classes" v-model.trim="form.tel" name="電話"/>
                <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                <span v-if="passed" class="valid-feedback">電話 輸入正確</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <validation-provider v-slot="{ errors, classes, passed }" rules="required">
                <label for="address">地址</label>
                <input
                  id="address"
                  v-model="form.address"
                  type="text"
                  class="form-control"
                  :class="classes"
                />
                <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                <span v-if="passed" class="valid-feedback">地址 輸入正確</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <validation-provider v-slot="{ errors, classes, passed }" rules="required">
                <label for="payment">付款方式</label>
                <select v-model.trim="form.payment" class="form-control" :class="classes" required
                id="payment"  name="付款方式">
                  <option value disabled>請選擇付款方式</option>
                  <option value="WebATM">WebATM</option>
                  <option value="ATM">ATM</option>
                  <option value="CVS">CVS</option>
                  <option value="Barcode">Barcode</option>
                  <option value="Credit">Credit</option>
                  <option value="ApplePay">ApplePay</option>
                  <option value="GooglePay">GooglePay</option>
                </select>
                <span v-if="errors[0]" class="invalid-feedback">{{ errors[0] }}</span>
                <span v-if="passed" class="valid-feedback">已選擇付款方式</span>
              </validation-provider>
            </div>
            <div class="form-group">
              <label for="message">留言</label>
              <textarea id="message" v-model="form.message" class="form-control" cols="30" rows="3"></textarea>
            </div>
            <div class="text-right">
              <button type="submit" class="btn btn-primary pointer" @click="page = 1" :disabled="invalid">
                <!--若驗證失敗則無法送出-->
                下一步
              </button>
            </div>
          </form>
        </validation-observer>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    .title{
        margin-top: 50px;
        margin-bottom: 80px;
    }
    .form-title{
        padding-bottom: 18px;
        padding-left: 53px;
        margin-left: -50px;
        border-bottom: #000 solid;
    }
</style>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '',
        message: ''
      },
      isLoading: false,
      carts: [],
      total: 0
    }
  },
  created () {
    this.getCart()
  },
  methods: {
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
    createOrder () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`
      const order = { ...this.form }
      this.axios.post(url, order)
        .then((res) => {
          this.isLoading = false
          this.getCart()
          this.$bus.$emit('get-cart')
          this.$router.push(`/confirm/${res.data.data.id}`)
        })
    }
  }
}
</script>
