<template>
  <div class="home">
    <loading :active.sync="isLoading"></loading>
    <div id="carouselNavbar" class="carousel slide w-100 mb-11" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselNavbar" data-slide-to="0" class="active"></li>
        <li data-target="#carouselNavbar" data-slide-to="1"></li>
        <li data-target="#carouselNavbar" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="img carouselImg_first d-block w-100" style="background-image: url('https://images.unsplash.com/photo-1572283006611-ab6a79293cb4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2296&q=80');">
            <div class="container h-100">
              <div class="row h-100 align-items-center">
                <div class="carouselContent col-lg-6 offset-lg-3">
                  <h2 class="title text-light">大師吉他</h2>
                  <p class="text text-light">
                  學音樂的孩子不會變壞。
                  選擇最好的吉他,開啟你的音樂之路
                  </p>
                  <router-link to="/products/all-Products">
                    <button class="btn btn-primary rounded-0 mt-6 font-lg">所有商品</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item position-relative">
          <div class="img carouselImg_second d-block w-100 row no-gutters">
            <img src="https://images.unsplash.com/photo-1568663041326-6348c761f7af?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1363&q=80" alt="salesImg" class="col-lg-7 position-absolute h-100">
            <div class="container h-100">
              <div class="row h-100 align-items-center">
                <div class="carouselContent col-lg-5 offset-lg-7 mt-4">
                  <h3 class="secondTitle text-light mb-5">
                    Master Guitar
                  </h3>
                  <p class="date bg-light d-inline-block px-5 py-2 mb-8">11.1 ~ 11.30</p>
                  <p class="text text-light">
                    歡慶大師吉他滿一周年，本月全館特價
                  </p>
                  <router-link to="/products/all-Products">
                    <button class="btn btn-primary rounded-0 mt-6 font-lg">所有商品</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="img img_active d-block w-100" style="background-image: url('https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80');">
            <div class="row h-100 align-items-center">
                <div class="carouselContent col-lg-5 offset-lg-7 mt-4">
                  <h3 class="secondTitle text-light mb-5">
                    年底慈善樂團表演
                  </h3>
                  <p class="date bg-light d-inline-block px-5 py-2 mb-8">12.28 ~ 12.31</p>
                  <p class="text text-light">
                    報名及活動介紹請點擊下面連結
                  </p>
                  <router-link to="/products/all-Products">
                    <button class="btn btn-primary rounded-0 mt-6 font-lg">查看活動</button>
                  </router-link>
                </div>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselNavbar" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselNavbar" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="hotProducts container mt-11">
      <h3 class="mb-5 section_title text-center">暢銷商品</h3>
      <hotproducts></hotproducts>
    </div>
    <div class="Bulletin d-flex justify-content-center mt-11">
      <div class="img">
        <p>歡慶實體店面開幕，凡是輸入優惠碼<span>GUITAR_0928</span>就享有三折優惠</p>
      </div>
    </div>
    <div class="productTitle mt-11">
      <div class="section_title mb-lg-8 mb-sm-6">產品列表</div>
    </div>
    <div class="category container">
      <div class="row mt-5">
        <div class="card border-0 col-lg-4 col-md-12 mb-4">
          <router-link to="/products/電吉他|貝斯">
            <div class="img w-100 card-img-top rounded-0" style="background-image: url('https://images.unsplash.com/photo-1592051147974-5dece921ff67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60');">
              <p class="text w-100">電吉他 | 貝斯</p>
            </div>
          </router-link>
        </div>
        <div class="card col-lg-4 col-md-12 border-0 mb-4">
          <router-link to="/products/木吉他|烏克麗麗">
            <div class="img w-100 card-img-top rounded-0" style="background-image: url('https://images.unsplash.com/photo-1525725296312-37c06d2338ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60');">
              <p class="text w-100">木吉他 | 烏克麗麗</p>
            </div>
          </router-link>
        </div>
        <div class="card col-lg-4 col-md-12 border-0 mb-4">
          <router-link to="/products/周邊商品">
            <div class="img w-100 card-img-top rounded-0" style="background-image: url('https://images.unsplash.com/photo-1431069767777-c37892aa0a07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60');">
              <p class="text w-100">周邊商品</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="introduce container mb-lg-11">
      <h3 class="section_title mb-lg-8 mb-sm-6 mt-11">認識我們</h3>
      <div class="row flex-lg-row-reverse no-gutters">
        <div class="col-md-6 mb-sm-8 mb-lg-0">
          <img src="https://images.unsplash.com/photo-1524650359799-842906ca1c06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60" alt="about us">
        </div>
        <div class="col-md-6 align-self-lg-center px-10">
          <div class="textContent">
            <h3 class="section_title mb-lg-8 mb-sm-6">關於我們</h3>
            <p class="text-muted">「大師吉他 Master Guitar」是以民謠吉他與生活設計為核心的臺灣原創品牌，主要販售民謠吉他與吉他相關的商品，也提供吉他維修與調整，希望和大家分享吉他所帶來的美好，讓生活充滿著音樂與設計，和我們一起成為吉他玩家吧！</p>
          </div>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-md-6 mb-sm-8">
          <img src="https://images.unsplash.com/photo-1512405173804-40c66c0ed709?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60" alt="music active">
        </div>
        <div class="col-md-6 align-self-lg-center px-10">
          <div class="textContent">
            <h3 class="mt-4">音樂活動</h3>
            <p class="text-muted">為了促進音樂文化，我們常常會與政府單位
              或其他私人企業聯合舉辦公益表演或樂團競賽，得到的費用都將捐贈
              給慈善機構。讓大家看到音樂人的熱血及熱心。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
import Hotproducts from '../../components/hotproducts.vue'
export default {
  components: {
    Hotproducts
  },
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
      $('.carousel').carousel({
        interval: 3000,
        wrap: true
      })
    )
  }
}
</script>
