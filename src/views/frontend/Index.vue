<template>
  <div class="home">
    <loading :active.sync="isLoading"></loading>
    <div class="position-relative">
      <div
        class="topicImg position-absolute"
        style="top:0; bottom:0; left:0; right:0; background-image: url(https://images.unsplash.com/photo-1422034681339-7b5dbb46db18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
      background-position: center center;"
      ></div>
      <div class="title-container d-flex flex-column" style="min-height: 80vh;">
        <div class="row justify-content-center my-auto">
          <div class="col-md-6 text-center">
            <p class="title text-light">大師吉他</p>
            <p class="text text-light">
              學音樂的孩子不會變壞。
              選擇最好的吉他,開啟你的音樂之路
            </p>
            <router-link to="/products/all-Products">
              <button class="btn-first btn btn-primary rounded-0 mt-6">所有商品</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="productTitle">
      <div class="text">產品列表</div>
    </div>
    <div class="container">
      <div class="category row mt-5">
        <div class="col-md-4 mt-md-4">
          <div class="card border-0 mb-4">
            <router-link to="/products/電吉他|貝斯">
              <div class="img1 card-img-top rounded-0">
                <div class="hover-text">電吉他/貝斯</div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-md-4 mt-md-4">
          <div class="card border-0 mb-4">
            <router-link to="/products/木吉他|烏克麗麗">
              <div class="img2 card-img-top rounded-0">
                <span class="hover-text">木吉他/烏克麗麗</span>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-md-4 mt-md-4">
          <div class="card border-0 mb-4">
            <router-link to="/products/周邊商品">
              <div class="img3 card-img-top rounded-0">
                <span class="hover-text">周邊商品</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-dark py-5">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4">
          <a class="text-white h4" href="./index.html">LOGO</a>
          <ul class="d-flex list-unstyled mb-0 h4">
            <li>
              <a href="#" class="text-white mx-3">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" class="text-white mx-3">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" class="text-white ml-3">
                <i class="fab fa-line"></i>
              </a>
            </li>
          </ul>
        </div>
        <div
          class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"
        >
          <div class="mb-md-0 mb-1">
            <p class="mb-0">02-3456-7890</p>
            <p class="mb-0">service@mail.com</p>
          </div>
          <p class="mb-0">© 2020 LOGO All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 60px;
}
.text {
  font-size: 30px;
}
.btn-first {
  font-size: 20px;
  margin-top: 15px;
}
.productTitle {
  height: 150px;
  width: 90%;
  border-bottom: orange solid;
  padding: 40px 0;
  margin: 0 auto;
  margin-top: 30px;
}
.productTitle .text {
  margin-top: 50px;
  text-align: middle;
  font-size: 30px;
}
.category .img1 {
  background-position: center;
  background-size: cover;
  align-items: flex-end;
  height: 330px;
  width: 350px;
  background-image: url("https://images.unsplash.com/photo-1592051147974-5dece921ff67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60");
}
.category .img2 {
  height: 330px;
  width: 350px;
  background-position: center;
  background-size: cover;
  align-items: flex-end;
  background-image: url("https://images.unsplash.com/photo-1525725296312-37c06d2338ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60");
}
.category .img3 {
  height: 330px;
  width: 350px;
  background-position: center;
  background-size: cover;
  align-items: flex-end;
  background-image: url("https://images.unsplash.com/photo-1431069767777-c37892aa0a07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60");
}
.category .img4 {
  height: 330px;
  width: 350px;
  background-position: center;
  background-size: cover;
  align-items: flex-end;
  background-image: url("https://images.unsplash.com/photo-1525725296312-37c06d2338ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60");
}
.category .card a:hover {
  cursor: pointer;
  opacity: 0.3;
}
.card {
  height: 330px;
  width: 330px;
  position: relative;
}
.card .hover-text {
  display: none;
  font-size: 33px;
  line-height: 180px;
  position: relative;
  color: white;
}
.main1 {
  background-image: url("");
}
.carousel .img1 {
  background-position: center;
  background-size: cover;
}
.carousel .img2 {
  background-position: center;
  background-size: cover;
}
</style>
<script>
import $ from 'jquery'
export default {
  data () {
    return {
      products: [],
      router: '',
      isLoading: false
    }
  },
  methods: {
    getProducts () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`
      this.axios.get(url)
        .then((res) => {
          this.isLoading = false
          this.products = res.data.data
        })
    }
  },
  created () {
    this.getProducts()
  },
  mounted () {
    $(
      $('.category .img1').hover(
        function () {
          $(this).find('.hover-text').show()
        },
        function () {
          $(this).find('.hover-text').hide()
        }
      )
    )
    $(
      $('.category .img2').hover(
        function () {
          $(this).find('.hover-text').show()
        },
        function () {
          $(this).find('.hover-text').hide()
        }
      )
    )
    $(
      $('.category .img3').hover(
        function () {
          $(this).find('.hover-text').show()
        },
        function () {
          $(this).find('.hover-text').hide()
        }
      )
    )
  }
}
</script>
