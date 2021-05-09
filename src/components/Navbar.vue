<template>
  <div class="wrap w-100 sticky-top">
    <nav class="navbar navbar-expand-lg bg-gray-500 py-5 navbar">
      <div class="container">
        <h1>
          <router-link class="navbar-brand text-dark" to="/">
            <i class="fas fa-guitar mr-3"></i>Master Guitar
          </router-link>
        </h1>
          <button class="btn d-lg-none font-xxl px-0" @click="showCollaspe">
            <i class="fas fa-bars"></i>
          </button>
            <ul class="navbar align-items-center d-none d-lg-flex list-unstyled mt-3">
              <li class="home mr-lg-8 mr-md-6 font-xl">
                <router-link class=" text-white" to="/">
                  <p class="mb-0">首頁</p>
                </router-link>
              </li>
              <li class="products mr-lg-8 mr-md-6 font-xl">
                <router-link class="text-white" to="/products">
                  <p class="mb-0">產品列表</p>
                </router-link>
              </li>
              <li class="logIn mr-lg-8 mr-md-6 font-xl">
                <router-link class=" text-white" :to='BackendLink'>
                    <p class="mb-0">管理頁面</p>
                </router-link>
              </li>
              <li class="favorite mr-lg-5 mr-md-3">
                <router-link class="" to="/favorite">
                    <i class="fas fa-heart text-light font-xxl"></i>
                </router-link>
              </li>
              <li class="d-flex">
                <router-link class="" to="/carts">
                  <i class="fas fa-shopping-cart font-xxl text-white"></i>
                  <span class="badge badge-pill badge-danger" v-if="getCartsDone.length">
                    {{getCartsDone.length}}
                  </span>
                </router-link>
              </li>
              <li class="d-flex">
                <select v-model="$i18n.locale" @change="setLang($i18n.locale)">
                  <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
                    {{ lang }}
                  </option>
                </select>
              </li>
            </ul>
      </div>
    </nav>
    <!-- mobile_collapse -->
    <transition name="slide">
      <div class="d-block d-lg-none" v-if="collapse">
        <div class="row no-gutters position-absolute w-100">
          <div class="col-12 bg-gray py-4" @click="showCollaspe">
            <router-link to="/" class="text-white font-xl">
              首頁
            </router-link>
          </div>
          <div class="col-12 bg-gray py-4" @click="showCollaspe">
            <router-link to="/products" class="text-white font-xl">
              產品列表
            </router-link>
          </div>
          <div class="col-12 bg-gray py-4" @click="showCollaspe">
            <router-link to="/login" class="text-white font-xl">
              管理頁面
            </router-link>
          </div>
          <div class="col-12 bg-gray py-4" @click="showCollaspe">
            <router-link to="/favorite" class="text-white font-xl">
                我的喜好
            </router-link>
          </div>
          <div class="col-12 bg-gray py-4" @click="showCollaspe">
            <router-link to="/carts" class="text-white font-xl">
              購物車
              <span v-if="getCartsDone.length">
                ( {{getCartsDone.length}} )
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">

</style>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      carts: [],
      favorProduts: [],
      myFavor: JSON.parse(localStorage.getItem('favorItem')) || [],
      collapse: false,
      langs: ['en', 'zh_tw']
    }
  },
  created () {
    this.getCart()
    this.$bus.$on('get-cart', () => {
      this.getCart()
    })
  },
  methods: {
    ...mapActions(['getCart']),
    getFavor () {
      this.favorProduts = this.products.filter((product) =>
        this.myFavor.indexOf(product.id) > -1
      )
      this.isloading = false
    },
    showCollaspe () {
      this.collapse = !this.collapse
    },
    // 保留語言 input
    setLang (lang) {
      localStorage.setItem('lang', lang)
    }
  },
  computed: {
    ...mapGetters(['getCartsDone']),
    BackendLink () {
      return this.$cookie.get('myToken') === null || this.$cookie.get('myToken') === '' ? '/login' : '/admin/BackendProducts'
    },
    getLang: {
      get () {
        return this.$store.getters.getLang
      },
      set (val) {
        return val
      }
    }
  }
}
</script>
