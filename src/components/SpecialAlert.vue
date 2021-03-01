<template>
  <div class="wrap">
    <button
      class="alertBtn d-flex justify-content-center align-items-center rounded-circle z-index100 bg-danger text-white bold border-0 animate__animated"
    >
      優惠特報
    </button>
    <div
      class="specialAlert bg-white z-index-alert d-none animate__animated shadow rounded-lg"
    >
      <div class="d-flex justify-content-end fixed-top bg-white">
        <button class="closeAlert btn btn-white px-3" @click.prevent="closeAlert()">
          <i class="fas fa-times text-xl"></i>
        </button>
      </div>
      <div class="bg-danger pt-10">
        <h2>特別活動</h2>
        <p class="text-lg-xl text-lg">慶祝 Master Guitar 學生破 1000 人，所有課程打折，時間至 3 月底</p>
        <p class="text-lg-xxl">優惠倒數: {{day}}天 {{hr}}時 {{min}}分 {{sec}}秒</p>
        <ul class="list-unstyled row px-8">
          <li class="col-lg-4 mb-10 mb-lg-3" v-for="product in filterSaleCourse" :key="product.id">
            <div class="card border-0 shadow">
              <img
                :src="`${product.imageUrl[0]}`"
                class="card-img-top"
                alt="course"
              />
              <div class="card-body position-relative">
                <div class="position-absolute left-50 top-0 transform-center">
                  <img
                    :src="`${product.imageUrl[1]}`"
                    alt="teacher"
                    class="rounded-circle card_headshot"
                  />
                </div>
                <h4 class="mt-8">授課老師: {{product.options.teacher}}</h4>
                <p class="mt-5 mb-2" v-html="product.content"></p>
                <p class="text-left mb-0">
                  <del class="text-lg-md text-sm text-gray">原價: {{product.origin_price | thousands}}</del>
                </p>
                <p class="text-lg-lg text-md card-text mb-2 text-left mb-0">
                  特價: {{product.price | thousands}}
                </p>
              </div>
              <div class="card-footer d-flex justify-content-between">
                <button class="btn btn-outline-gray px-md-4 px-2 py-2 btn-sm" @click.prevent="goSingleProduct(product.id),closeAlert()">
                  查看課程
                </button>
                <a href="#" class="btn btn-outline-primary px-md-4 px-2 py-2 btn-sm d-flex flex-nowrap align-items-center" @click.prevent="addToCart(product.id)">
                  加入購物車
                  <i class="ml-2 spinner-grow spinner-grow-sm d-md-none d-lg-block"
                 style="width:12px; height:12px" v-if="loadingItem == product.id"></i>
                </a>
              </div>
            </div>
          </li>
        </ul>
        <div class="d-flex justify-content-end">
          <button class="btn btn-outline-light mr-8 mb-4" @click="goCourse(),closeAlert()">所有課程</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.alertBtn {
  position: fixed;
  height: 80px;
  width: 80px;
  top: 60%;
  right: 0;
  background-color: #fff;
}
.specialAlert {
  overflow: scroll;
  overflow-x: hidden;
  height: 100%;
  width: 80%;
  position: fixed;
  top: 2%;
  left: 9%;
  .card {
    .card-img-top {
      height: 125px;
    }
  }
}
.present {
  width: 200px;
  height: 200px;
}
</style>
<script>
import $ from 'jquery'
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      loadingItem: '',
      sec: 0,
      min: 0,
      hr: 0,
      day: 0
    }
  },
  methods: {
    ...mapActions('productsModules', ['getProducts']),
    ...mapActions(['getCart']),
    addToCart (id, quantity = 1) {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.loadingItem = id
      this.axios.post(url, {
        product: id,
        quantity: quantity
      })
        .then((res) => {
          this.$bus.$emit('get-cart')
          this.$bus.$emit('message:push', '商品成功加入購物車!', 'success')
          this.loadingItem = ''
          this.$store.dispatch('getCart')
        })
        .catch((error) => {
          this.$bus.$emit('message:push', `加入失敗!${error.response.data.errors}`, 'danger')
          this.loadingItem = ''
        })
    },
    countDown () {
      setInterval(() => {
        const time = new Date()
        const nowTime = time.getTime()
        time.setMonth(3)
        time.setDate(1)
        time.setHours(0)
        time.setMinutes(0)
        time.setSeconds(0)
        const endTime = time.getTime()
        const deadline = (endTime - nowTime) / 1000
        this.sec = parseInt(deadline % 60)
        this.min = parseInt((deadline / 60) % 60)
        this.hr = parseInt((deadline / 60 / 60) % 24)
        this.day = parseInt(deadline / 60 / 60 / 24)
      }, 1000)
    },
    closeAlert () {
      $('.specialAlert').addClass('animate__backOutLeft').removeClass('animate__backInRight')
      $('.alertBtn').addClass('animate__backInRight').removeClass('animate__backOutRight')
    },
    goSingleProduct (id) {
      this.$router.push(`/product/${id}`)
    },
    goCourse () {
      this.$router.push('/course')
    }
  },
  created () {
    this.getProducts()
    this.getCart()
    this.countDown()
  },
  computed: {
    ...mapGetters('productsModules', ['getProductsDone']),
    ...mapGetters(['isLoading', 'getCartsDone']),
    filterSaleCourse () {
      const showCourse = []
      this.getProductsDone.filter((course) => {
        return course.category === '課程' ? showCourse.push(course) : ''
      })
      return showCourse
    }
  },
  mounted () {
    $('.alertBtn').on('click', showAlert)
    function showAlert () {
      $('.specialAlert').addClass('animate__backInRight').removeClass('d-none')
      $('.specialAlert').removeClass('animate__backOutLeft')
      $(this).addClass('animate__backOutRight').removeClass('animate__backInRight')
    };
  }
}
</script>
