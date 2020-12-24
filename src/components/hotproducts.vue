<template>
    <swiper class="swiper row" ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="hotProduct in hotProducts" :key="'hotProduct' + hotProduct.id" class="swiper-slide col-lg-3">
        <div class="card border-0">
          <router-link :to="`/product/${hotProduct.id}`">
            <img :src="`${hotProduct.img[0]}`" class="card-img-top" alt="top-choice 1">
            <div class="card-body py-2 px-0">
              <p class="font-lg text-left">{{hotProduct.title}}</p>
              <p class="mb-0 font-md text-left">特價:{{hotProduct.price | thousands}}</p>
              <p class="text-muted mt-1 text-left"><del>原價:{{hotProduct.origin_price | thousands}}</del></p>
            </div>
          </router-link>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<style lang="scss" scoped>
</style>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import 'swiper/components/pagination/pagination.scss'
export default {
  components: {
    Swiper,
    SwiperSlide
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
      },
      hotProducts: [
        {
          id: 'Rm4nNTRDi6iX5AJCSKtKbhKmiuIssqv2ZrHI6nXPdNZdPtpjKCQEm1uVlGl9QjDD',
          img: [
            'https://images.unsplash.com/photo-1585373432847-aef525292177?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
          ],
          title: '杜克17',
          price: 70000,
          origin_price: 72000
        },
        {
          id: 'FKx0op2eXeD4uOwMSasAox5uWZmG2zcpQmSiTj73Mn54FlRO1sMtgvGeX5UizCQn',
          img: [
            'https://images.unsplash.com/photo-1558098329-a11cff621064?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1836&q=80'
          ],
          title: '路易斯民謠吉他',
          price: 28500,
          origin_price: 30000
        },
        {
          id: 'Ozr8HLOVG1HITeU4FRONFCJcli0wTgpARrRvQSoA3QVcPz7CDNIjlaDorGiUmqj7',
          img: [
            'https://images.unsplash.com/photo-1514649923863-ceaf75b7ec00?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80'
          ],
          title: '經典民謠吉他(黑)',
          price: 10000,
          origin_price: 12000
        },
        {
          id: 'P7JtatPetkJznuGsLwXSU6Hj4VBxbzNyi7EpR91wGD27OE1aohtp2q6fzELpi9Vs',
          img: [
            'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
          ],
          title: '經典民謠吉他',
          price: 6000,
          origin_price: 7500
        },
        {
          id: 'EXJUrfVAHUXV6riozsuBtjkzaD5kaF6oXqVx3ZALuzOCZ5BfgtHru8SG5l4e2lNA',
          img: [
            'https://images.unsplash.com/photo-1550985616-10810253b84d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=671&q=80'
          ],
          title: '辛普森電吉他P02',
          price: 13000,
          origin_price: 12500
        },
        {
          id: 'psxSbMdcnAmoAeKHf6pwrMQtRbnC66p0W1t8aH4fRe72Am6b4VJHez4PW1xOeRiF',
          img: [
            'https://images.unsplash.com/photo-1587898427355-5d8f51725d13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
          ],
          title: '傑克森電吉他',
          price: 20000,
          origin_price: 24000
        }
      ]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    this.swiper.slideTo(1, 2000, true)
  }
}
</script>
