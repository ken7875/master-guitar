<template>
  <swiper class="swiper row mt-lg-8 mt-6" ref="mySwiper" :options="swiperOption">
    <swiper-slide v-for="item in identical" :key="item.id" class="swiper-slide col-lg-3">
      <div class="card border-0">
        <a href="#" class="product border-0 mb-4" @click.prevent="getDetail(item.id)">
          <img :src="`${item.imageUrl[0]}`" class="card-img-top" alt="top-choice 1" v-if="item.category !== '課程'">
          <img :src="`${item.imageUrl[2]}`" class="card-img-top" alt="top-choice 1" v-if="item.category === '課程'">
          <div class="card-body py-2 px-0">
            <p class="font-lg text-left">{{item.title}}</p>
            <p class="mb-0 font-md text-left">特價:{{item.price | thousands}}</p>
            <p class="text-muted mt-1 text-left"><del>原價:{{item.origin_price | thousands}}</del></p>
          </div>
        </a>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import 'swiper/components/pagination/pagination.scss'
import { mapActions, mapGetters } from 'vuex'

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
    ...mapActions('productsModules', ['getProducts']),
    getDetail (id) {
      this.$router.push(`/product/${id}`)
      this.$emit('update')
    }
  },
  computed: {
    identical () {
      return this.getProductsDone.filter((item) =>
        item.id !== this.showproduct.id && item.category === this.showproduct.category
      )
    },
    ...mapGetters('productsModules', ['getProductsDone'])
  }
}
</script>
