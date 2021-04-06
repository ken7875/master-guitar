<template>
  <swiper class="swiper mt-lg-8 mt-6" ref="mySwiper" :options="swiperOption">
    <swiper-slide class="swiper-slide" v-for="item in identical" :key="item.id">
      <a href="javascript:;" class="card border-0" @click="changeId(item.id)">
        <div class="product border-0 mb-4" >
          <img :src="`${item.imageUrl[0]}`" class="card-img-top" alt="top-choice 1" v-if="item.category !== '課程'">
          <img :src="`${item.imageUrl[2]}`" class="card-img-top" alt="top-choice 1" v-if="item.category === '課程'">
          <div class="card-body py-2 px-0">
            <p class="font-lg text-left">{{item.title}}</p>
            <p class="mb-0 font-md text-left">特價:{{item.price | thousands}}</p>
            <p class="text-muted mt-1 text-left"><del>原價:{{item.origin_price | thousands}}</del></p>
          </div>
        </div>
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import 'swiper/components/pagination/pagination.scss'
import { mapActions, mapGetters } from 'vuex'

// const vm = this.VueComponents

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
        slidesPerGroup: 2,
        speed: 2000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          // when window width is >= 992px
          992: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          // when window width is >= 767px
          767: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          // when window width is >= 414px
          414: {
            slidesPerView: 2,
            spaceBetween: 10
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
    changeId (id) {
      this.$router.push({ name: 'product', params: { id } })
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
