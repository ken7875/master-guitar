<template>
  <div class="coursePage">
    <loading :active.sync="isLoading">
      <loadingStyle />
    </loading>
    <div
      class="fullImg row mb-11"
      style="
        background-image: url('https://images.unsplash.com/photo-1514213949578-58fe7b8ff146?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80');
      "
    >
      <div class="col-5 offset-lg-7 offset-md-6 offset-1 align-self-end">
        <div
          class="title bg-danger py-2 px-4 d-inline-block bannerSlogan"
        >
          <h2 class="bold text-lg-7xl text-5xl text-white text-nowrap">精選課程</h2>
          <p class="text-lg-xl text-md text-white">
            多名專業教師從零開始帶你學到會。<br /><span class="d-none d-md-block">專業課程規劃帶你無痛進入音樂之路。</span>
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <h2 class="border-bottom pt-10 d-flex pr-8 pb-4">所有課程</h2>
      <ul class="list-unstyled row pt-8">
        <li class="col-lg-4 mb-4" v-for="product in filterCourse" :key="product.id">
          <div class="card border-0 shadow">
            <img
              :src="`${ product.imageUrl[0] }`"
              class="card-img-top"
              alt="course1"
            />
            <div class="card-body position-relative">
              <div class="position-absolute left-50 top-0 transform-center">
                <img
                  :src="`${ product.imageUrl[1] }`"
                  alt=""
                  class="rounded-circle card_headshot"
                />
              </div>
              <h3 class="mt-8">授課老師:{{ product.options.teacher }}</h3>
              <h4 class="mt-8 mb-5">課程名稱: {{ product.title }}</h4>
              <p class="mt-8 mb-4" v-html="product.content"></p>
              <div>
                <p class="text-md-md text-right mb-1">
                  <del class="text-lg-md text-sm text-gray">原價: ${{product.origin_price | thousands}}</del>
                </p>
                <p class="text-lg-lg text-md-md text-right mb-1">價格: ${{ product.price }}</p>
              </div>
            </div>
            <div class="card-footer d-flex justify-content-between">
              <router-link :to="`/product/${product.id}`" class="btn btn-outline-gray px-4 py-2 btn-sm">
                查看課程
              </router-link>
              <a href="#" class="btn btn-outline-primary px-4 py-2 btn-sm d-flex align-items-center"
              @click.prevent="addToCart(product.id)">
                加入購物車
                <i class="ml-2 spinner-grow spinner-grow-sm d-md-none d-lg-block"
                 style="width:12px; height:12px" v-if="loadingItem == product.id"></i>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="container">
      <h3 class="border-bottom pt-10 d-flex pr-8 pb-4">最強師資</h3>
    </div>
    <div class="teachers-bg row h-100 position-relative">
      <div class="col-6 d-lg-block d-none">
        <div class="logo-block bg-danger d-flex justify-content-end align-items-center w-100 h-100">
          <h2 class="teachers-logo text-light text-9xl text-right bold" data-aos="fade-right">MASTER<br>GUITAR</h2>
        </div>
      </div>
      <ul class="list-unstyled col-lg-6 col-12 mt-10 position-relative">
        <li class="mb-10 d-flex flex-md-nowrap flex-wrap justify-content-center">
          <div
            class="square img rounded-circle overflow-hidden position-relative"
            style="
              background-image: url('https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');
            "
          >
            <div
              class="toggleBg bg-dark w-100 h-100 opacity-normal animate__animated d-none"
            ></div>
            <div
              class="content text-white position-absolute z-index100 left-50 top-50 transform-center text-left d-none"
            >
              <h4>王小明</h4>
              <p>學歷: 台灣藝術大學</p>
              <p>重要經歷:</p>
              <ul class="list-unstyled">
                <li class="pl-3">YAM 音樂教室老師 3 年</li>
                <li class="pl-3">Star PUB 駐點表演者</li>
                <li class="pl-3">多家電視台配音老師</li>
              </ul>
            </div>
          </div>
          <div
            class="w-50 d-flex align-items-center mx-md-2 mt-5 mt-md-0" data-aos="fade-right"
          ><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima unde alias, totam maiores neque voluptatem ipsa repudiandae eveniet culpa nisi asperiores quisquam suscipit, libero possimus officiis inventore animi tempora autem?</p></div>
        </li>
        <li class="line line-line315 position-absolute d-md-block d-none"></li>
        <li class="d-flex flex-row-reverse flex-md-nowrap flex-wrap justify-content-center">
          <div
            class="square img border border-white rounded-circle overflow-hidden position-relative" style="
              background-image: url('https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnRvb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');
            "
          >
            <div
              class="toggleBg bg-dark w-100 h-100 opacity-normal animate__animated d-none"
            ></div>
            <div
              class="content text-white position-absolute z-index100 left-50 top-50 transform-center text-left d-none"
            >
              <h4>王大維</h4>
              <p>學歷: 台灣藝術大學</p>
              <p>重要經歷:</p>
              <ul class="list-unstyled">
                <li class="pl-3">YAM 音樂教室老師 3 年</li>
                <li class="pl-3">Star PUB 駐點表演者</li>
                <li class="pl-3">多家電視台配音老師</li>
              </ul>
            </div>
          </div>
          <div
            class="w-50 d-flex flex-column justify-content-center align-items-center mx-md-2 mt-5 mt-md-0" data-aos="fade-left"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae tenetur ipsum modi molestias, labore vero aliquam vitae molestiae praesentium, veniam aliquid soluta laborum cupiditate perferendis fugit asperiores unde! Ab, nihil!
          </div>
        </li>
        <li class="line line-line45 position-absolute d-md-block d-none"></li>
        <li class="d-flex flex-md-nowrap flex-wrap justify-content-center">
          <div
            class="square img border border-white rounded-circle overflow-hidden position-relative z-index100" style="background-image: url('https://images.unsplash.com/photo-1589254066213-a0c9dc853511?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTl8fHRveXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');"
          >
          <div
            class="toggleBg bg-dark w-100 h-100 opacity-normal animate__animated d-none"
          ></div>
          <div
            class="content text-white position-absolute z-index100 left-50 top-50 transform-center text-left d-none"
          >
            <h4>林小美</h4>
            <p>學歷: 台灣藝術大學</p>
            <p>重要經歷:</p>
            <ul class="list-unstyled">
              <li class="pl-3">YAM 音樂教室老師 3 年</li>
              <li class="pl-3">Star PUB 駐點表演者</li>
              <li class="pl-3">多家電視台配音老師</li>
            </ul>
          </div>
          </div>
          <div
            class="w-50 d-flex flex-column justify-content-center align-items-center mx-md-2 mt-5 mt-md-0" data-aos="fade-right"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas velit nihil est accusamus dolorum, facere perferendis laudantium. Adipisci molestias, sint quasi, ea ab quas beatae exercitationem dolores iste aliquam sed.
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
import { mapActions, mapGetters } from 'vuex'
import loadingStyle from '@/components/Loading.vue'

export default {
  components: {
    loadingStyle
  },
  data () {
    return {
      status,
      loadingItem: ''
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
    }
  },
  created () {
    this.getProducts()
    this.getCart()
  },
  computed: {
    ...mapGetters('productsModules', ['getProductsDone']),
    ...mapGetters(['isLoading', 'getCartsDone']),
    filterCourse () {
      const showCourse = []
      this.getProductsDone.filter((course) => {
        return course.category === '課程' ? showCourse.push(course) : ''
      })
      return showCourse
    }
  },
  mounted () {
    const imgs = document.querySelectorAll('.square')
    const toggleBgs = document.querySelectorAll('.toggleBg')
    for (let i = 0; i < imgs.length; i++) {
      for (let i = 0; i < toggleBgs.length; i++) {
        imgs[i].addEventListener('mouseover', function () {
          toggleBgs[i].classList.add('animate__slideInDown')
          toggleBgs[i].classList.remove('animate__slideOutUp', 'd-none')
        })
        imgs[i].addEventListener('mouseleave', function () {
          toggleBgs[i].classList.add('animate__slideOutUp')
          toggleBgs[i].classList.remove('animate__slideInDown')
        })
      }
    }
    $(
      $('.img').on('mouseover', function () {
        $(this).find('.content').fadeIn().removeClass('d-none')
      })
    )
    $(
      $('.img').on('mouseleave', function () {
        $(this).find('.content').fadeOut()
      })
    )
  }
}
</script>
