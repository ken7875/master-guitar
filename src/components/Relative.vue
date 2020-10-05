<template>
     <div class="container mt-5">
        <div class="title h3 border-bottom">相關商品</div>
        <div class="row mt-5">
          <div class="col-md-3 mt-md-4" v-for="item in identical" :key="item.id">
            <div class="product border-0 mb-4" @click="getDetail(item.id)">
              <div class="img" :style="{backgroundImage:`url(${(item.imageUrl[0])})`}">
                <div class="text">查看此商品</div>
              </div>
              <div class="card-body text-center">
                <h4>{{item.title}}</h4>
                <div class="d-flex justify-content-end mt-5">
                  <p class="card-text text-primary mb-0" style="font-size:20px;">
                    特價:{{item.price}}
                  </p>
                </div>
                <div class="d-flex justify-content-end">
                  <p class="card-text text-muted mb-0">
                    <del>原價:{{item.origin_price}}</del>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<style lang="scss" scoped>
.product .img{
  position: relative;
  height: 200px;
  background-position: center;
  background-size: cover;
}
.text{
  display: none;
}
.product:hover .text{
  position: absolute;
  margin-top: 80px;
  font-size: 25px;
  width: 100%;
  height: 40px;
  display: block;
  color: #fff;
  border: 1px solid #000;
  background-color: gray;
}
.product:hover{
  box-shadow: 3px 3px 3px;
  cursor: pointer;
  opacity: 0.6;
}
</style>

<script>
export default {
  props: {
    showproduct: {
      type: Object
    }
  },
  data () {
    return {
      products: []
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
