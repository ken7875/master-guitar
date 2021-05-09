<template>
  <div class="pay container">
    <loading :active.sync="isLoading">
      <loadingStyle />
    </loading>
    <h2 class="title font-weight-bold mt-12 mb-6 pb-lg-6 pb-md-4">結帳頁面</h2>
    <div class="row flex-row-reverse justify-content-center pb-5">
      <div class="checklist col-lg-5 col-md-6">
        <div class="border p-4 mb-4">
          <div class="row content mb-4 align-items-center" v-for="item in getCartsDone" :key="item.product.id">
            <div class="col-3" v-show="item.product.category !== '課程'">
              <img
                :src="`${item.product.imageUrl[0]}`"
                class="checklistImg"
              />
            </div>
            <div class="col-3"  v-show="item.product.category === '課程'">
              <img
                :src="`${item.product.imageUrl[2]}`"
                class="checklistImg"/>
            </div>
            <div class="mt-2 w-100 col-9">
                <div class="d-flex justify-content-between">
                  <p class="mb-0 font-weight-bold">{{item.product.title}}</p>
                  <p class="mb-0" v-if="item.product.price !== 0">{{item.product.price}}</p>
                </div>
                <p class="mb-0 font-weight-bold">X{{item.quantity}}</p>
            </div>
          </div>
          <div class="mt-4 border-top border-bottom text-muted">
              <div class="d-flex mt-4">
                <p class="border-0 font-weight-normal mr-8">$價格</p>
                <p class="border-0  font-weight-normal">NT${{originTotal}}</p>
              </div>
              <div class="d-flex" v-if="originTotal >= 10000" disabled>
                <p class="border-0 font-weight-normal mr-8">$運費</p>
                <p class="border-0  font-weight-normal">NT$0</p>
              </div>
              <div class="d-flex" v-if="originTotal < 10000" disabled>
                <p class="border-0 font-weight-normal mr-8">$運費</p>
                <p class="border-0 font-weight-normal">NT$200</p>
              </div>
              <div class="discount d-flex">
                <p class="border-0 font-weight-normal mr-8">$折扣</p>
                <p class="border-0 font-weight-normal">{{originTotal}}</p>
              </div>
              <div class="input-group mb-3 row no-gutters">
                <input type="text" class="form-control px-3 col-lg-5 col-md-6 col-5" placeholder="請輸入優惠碼" v-model="coupon_code" value="輸入優惠碼">
                <div class="input-group-append">
                  <button class="btn btn-wood" type="submit" @click="addCoupon">套用</button>
                </div>
              </div>
          </div>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 font-weight-bold">Total</p>
            <p class="mb-0 h4 font-weight-bold" v-if="coupon.enabled">NT${{parseInt(totalPrice) | thousands}}</p>
            <p class="mb-0 h4 font-weight-bold" v-else>NT${{parseInt(payTotal) | thousands}}</p>
          </div>
        </div>
      </div>
      <div class="form-group col-lg-7 col-md-6">
       <div class="form-title h4"><p>訂購人資料</p></div>
        <validation-observer v-slot="{ invalid }" class="col-md-6">
          <!--form表單驗證-->
          <form @submit.prevent="createOrder">
            <div class="form-group">
              <validation-provider v-slot="{ errors, classes, passed }" rules="required|name">
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
              <validation-provider v-slot="{ errors, classes, passed }" rules="required|phone">
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
            <button class="btn btn-primary" type="submit" @click="page = 1" :disabled="invalid">下一步</button>
          </form>
        </validation-observer>
      </div>
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
      form: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '',
        message: ''
      },
      coupon: {},
      coupon_code: ''
    }
  },
  created () {
    this.getCart()
  },
  methods: {
    ...mapActions(['getCart']),
    createOrder () {
      this.$store.state.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`
      const order = { ...this.form }
      if (this.coupon.enabled) {
        order.coupon = this.coupon.code
      } else {
        order.coupon = ''
      }
      this.axios.post(url, order)
        .then((res) => {
          this.$store.state.isLoading = false
          this.getCart()
          this.$bus.$emit('get-cart')
          this.$router.push(`/confirm/${res.data.data.id}`)
        })
    },
    addCoupon () {
      this.$store.state.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/coupon/search`
      this.axios.post(url, { code: this.coupon_code })
        .then((res) => {
          this.$store.state.isLoading = false
          this.coupon = res.data.data
        })
        .catch(error => {
          this.$store.state.isLoading = false
          this.$bus.$emit('message:push', `加入失敗!${error.response.data.errors}`, 'danger')
          this.coupon_code = ''
        })
    }
  },
  computed: {
    ...mapGetters(['getCartsDone', 'payTotal', 'originTotal', 'isLoading']),
    totalPrice () {
      return this.payTotal * (this.coupon.percent / 100)
    }
  }
}
</script>
