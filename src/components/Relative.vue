<template>
  <swiper class="swiper row mt-lg-8 mt-6" ref="mySwiper" :options="swiperOption">
    <swiper-slide v-for="item in identical" :key="item.id" class="swiper-slide col-lg-3">
      <div class="card border-0">
        <div class="product border-0 mb-4" @click="getDetail(item.id)">
          <img :src="`${item.imageUrl[0]}`" class="card-img-top" alt="top-choice 1">
          <div class="card-body py-2 px-0">
            <p class="font-lg text-left">{{item.title}}</p>
            <p class="mb-0 font-md text-left">特價:{{item.price | thousands}}</p>
            <p class="text-muted mt-1 text-left"><del>原價:{{item.origin_price | thousands}}</del></p>
          </div>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import 'swiper/components/pagination/pagination.scss'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    showproduct: {
      type: Object
    }
  },
  data () {
    return {
      products: [],
      swiperOption: {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 2,
        speed: 2000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true,
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        freeMode: true,
        breakpoints: {
          // when window width is >= 992px
          992: {
            slidesPerView: 4
          },
          // when window width is >= 767px
          767: {
            slidesPerView: 3
          },
          // when window width is >= 414px
          414: {
            slidesPerView: 2
          }
        }
      }
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts () {
      this.isloading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products?paged=99`
      this.$http.get(url)
        .then(res => {
          this.isloading = false
          this.products = res.data.data
        })
    },
    getDetail (id) {
      this.$router.push(`/product/${id}`)
      this.$emit('update')
    }
  },
  computed: {
    identical () {
      return this.products.filter((item) =>
        item.id !== this.showproduct.id && item.category === this.showproduct.category
      )
    }
  }
}
</script>
