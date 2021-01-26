<template>
  <div class="products">
    <loading :active.sync="isLoading"></loading>
    <ul class="mobile_categoryList row no-gutters list-unstyled d-md-none mb-0">
      <li class="col-6 bg-wood py-1  border" @click.prevent="category ='所有商品'">
        <a href="#" class="text-white">所有產品</a>
      </li>
      <li class="col-6 bg-wood py-1 border" @click.prevent="category ='電吉他|貝斯'">
        <a href="#" class="text-white">電吉他/貝斯</a>
      </li>
      <li class="col-6 bg-wood py-1 border" @click.prevent="category ='木吉他|烏克麗麗'">
        <a href="#" class="text-white">木吉他/烏克麗麗</a>
      </li>
      <li class="col-6 bg-wood py-1 border" @click.prevent="category ='周邊商品'">
        <a href="#" class="text-white">周邊商品</a>
      </li>
    </ul>
    <!-- desktop_categoryList -->
    <div class="container font-md mb-8">
      <h2 class="title mt-12 mb-6 pb-lg-6 pb-4 title_border">產品列表</h2>
      <ul class="category list-unstyled d-md-flex d-none justify-content-center">
        <li @click.prevent="category ='所有商品'" class="px-6 text-lg-xl text-lg border-right border-wood">
          <a class="text-wood">
            所有產品
          </a>
        </li>
        <li @click.prevent="category ='電吉他|貝斯'" class="px-6 text-lg-xl text-lg border-right border-wood">
          <a class="text-wood">
            電吉他/貝斯
          </a>
        </li>
        <li @click.prevent="category ='木吉他|烏克麗麗'" class="px-6 text-lg-xl text-lg border-right border-wood">
          <a class="text-wood">
            木吉他/烏克麗麗
          </a>
        </li>
        <li @click.prevent="category ='周邊商品'" class="px-6 text-lg-xl text-lg border-right border-wood">
          <a class="text-wood">
            周邊商品
          </a>
        </li>
      </ul>
    </div>
    <div class="products container mt-md-5 mt-3 mb-7">
      <div class="row">
        <div class="col-lg-3 col-md-6" v-for="product in showCategory" :key="product.id">
          <div class="card border-4 mb-4">
            <div class="favor position-absolute" @click="addToFavor(product.id)">
              <i class="fas fa-heart text-light" v-if="myFavor.indexOf(product.id) === -1"></i>
              <i class="fas fa-heart text-danger" v-else></i>
            </div>
            <router-link :to="`/product/${product.id}`">
              <div class="productImg img rounded-0 position-relative" :style="`background-image: url(${product.imageUrl[0]});`">
                <p class="font-xl text-white bg-gray">查看商品</p>
              </div>
            </router-link>
            <div class="card-body p-0 text-left">
              <h5 class="mb-2 mt-3">
                {{product.title}}
              </h5>
              <p>{{product.category}}</p>
              <p class="card-text mb-2">
                特價:{{product.price | thousands}}
                <del class="font-sm ml-2">原價:{{product.origin_price | thousands}}</del>
              </p>
            </div>
            <div class="card-footer d-flex justify-content-between">
              <router-link :to="`/product/${product.id}`"
              class="btn btn-outline-secondary btn-sm py-2">
                詳細資訊
              </router-link>
              <button class="btn btn-outline-primary btn-sm
              py-2 d-flex align-items-center" @click.prevent="addToCart(product.id)">
                加入購物車
                <i class="ml-2 spinner-grow spinner-grow-sm d-md-none d-lg-block"
                 style="width:12px;height:12px" v-if="loadingItem == product.id"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pagination @update="getProducts"></pagination>
  </div>
</template>

<script>
import pagination from '@/components/Pagination.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    pagination
  },
  data () {
    return {
      status,
      loadingItem: '',
      category: '',
      myFavor: JSON.parse(localStorage.getItem('favorItem')) || []
    }
  },
  created () {
    if (this.$route.query.category) {
      this.category = this.$route.query.category
    }
    this.router = this.$router.history.current.name
    this.getProducts()
    this.getCart()
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
    addToFavor (id, error) {
      const followId = this.myFavor.indexOf(id)
      if (followId === -1) {
        this.myFavor.push(id)
        this.$bus.$emit('message:push', '商品成功加入收藏!', 'success')
      } else {
        this.myFavor.splice(followId, 1)
        this.$bus.$emit('message:push', '取消收藏', 'danger')
        this.$bus.$emit('get-cart')
      }
      localStorage.setItem('favorItem', JSON.stringify(this.myFavor))
    }
  },
  computed: {
    ...mapGetters('productsModules', ['getProductsDone']),
    ...mapGetters(['isLoading', 'getCartsDone']),
    showCategory () {
      let showProducts = []
      this.getProductsDone.filter(item => {
        switch (this.category) {
          case '所有商品':
            showProducts.push(item)
            break
          case '電吉他|貝斯':
            if (item.category === this.category) {
              showProducts.push(item)
            }
            break
          case '木吉他|烏克麗麗':
            if (item.category === this.category) {
              showProducts.push(item)
            }
            break
          case '周邊商品':
            if (item.category === this.category) {
              showProducts.push(item)
            }
            break
          default:
            showProducts = this.getProductsDone
            break
        }
      })
      return showProducts
    }
  }
}
</script>
