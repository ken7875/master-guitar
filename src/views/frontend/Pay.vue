<template>
  <div class="container">
    <loading :active.sync="isLoading"></loading>
    <div class="row justify-content-center">
      <div class="col-md-10">
        <h3 class="title font-weight-bold">Checkout</h3>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-center pb-5">
      <div class="checklist col-md-5">
        <div class="border p-4 mb-4">
          <div class="checklist-content d-flex mb-4" v-for="item in carts" :key="item.product.id">
            <img
              :src="`${item.product.imageUrl[0]}`"
              class="mr-2"
              style="width: 48px; height: 48px; object-fit: cover"
            />
            <div class="w-100">
              <div class="mt-2 d-flex justify-content-between">
                <p class="mb-0 font-weight-bold">{{item.product.title}}</p>
                <p class="mb-0 font-weight-bold">X{{item.quantity}}</p>
                <p class="mb-0">{{item.product.price}}</p>
              </div>
            </div>
          </div>
          <div class="mt-4 border-top border-bottom text-muted">
              <div class="origin_total d-flex">
                <div class="text1 border-0 font-weight-normal">$價格</div>
                <div class="text2 border-0  font-weight-normal">NT${{origin_total}}</div>
              </div>
              <div class="shipping d-flex" v-if="origin_total >= 10000" disabled>
                <div class="text1 border-0 font-weight-normal">$運費</div>
                <div class="text2 border-0  font-weight-normal">NT$0</div>
              </div>
              <div class="shipping d-flex" v-if="origin_total < 10000" disabled>
                <div class="text1 border-0 font-weight-normal">$運費</div>
                <div class="text2 border-0 font-weight-normal">NT$200</div>
              </div>
              <div class="discount d-flex">
                <div class="text1 border-0 font-weight-normal">$折扣</div>
                <div class="text2 border-0 font-weight-normal">{{origin_total}}</div>
              </div>
              <div class="coupon">
                <input type="text" v-model="coupon_code" value="輸入優惠碼" class="text-center text-muted ml-5">
                <button type="button" class="couponBtn" @click="addCoupon">套用</button>
              </div>
          </div>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 font-weight-bold">Total</p>
            <p class="mb-0 h4 font-weight-bold" v-if="coupon.enabled">NT${{parseInt(total * (coupon.percent / 100)) | thousands}}</p>
            <p class="mb-0 h4 font-weight-bold" v-else>NT${{parseInt(total) | thousands}}</p>
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
    .coupon{
      width: 300px;
      margin: 25px 0 25px 30px;
      margin-left: 30px;
      white-space: nowrap;
    }
    .origin_total{
      margin: 25px 0 25px 80px;
    }
    .shipping{
      margin:0 0 25px 80px;
    }
    .discount{
      margin-left: 80px;
    }
    .text1{
      margin-right: 152px;
    }
    .checklist .couponBtn{
      background-color: #a76641;
      width: 60px;
      height: 30px;
      border: 0px;
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
      origin_total: 0,
      total: 0,
      coupon: {},
      coupon_code: ''
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
      this.origin_total = 0
      this.total = 0
      this.carts.forEach((item) => {
        this.origin_total += item.product.price * item.quantity
        if (this.total < 10000) {
          this.total = (this.origin_total + 200)
        } else {
          this.total = (this.origin_total + 0)
        }
      })
    },
    createOrder () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`
      const order = { ...this.form }
      if (this.coupon.enabled) {
        order.coupon = this.coupon.code
      } else {
        order.coupon = ''
      }
      this.axios.post(url, order)
        .then((res) => {
          this.isLoading = false
          this.getCart()
          this.$bus.$emit('get-cart')
          this.$router.push(`/confirm/${res.data.data.id}`)
        })
    },
    addCoupon () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/coupon/search`
      this.axios.post(url, { code: this.coupon_code })
        .then((res) => {
          this.coupon = res.data.data
          this.isLoading = false
          console.log(this.coupon)
        })
        .catch(error => {
          this.$bus.$emit('message:push', `加入失敗!${error.response.data.errors}`, 'danger')
          this.coupon_code = ''
          this.isLoading = false
        })
    }
  }
}
</script>
