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
    <div class="hotProducts">
      <div class="hotProductsTitle">
        <div class="text">熱門商品</div>
      </div>
      <div class="container mt-md-5 mt-3 mb-7">
        <div class="row">
          <div class="col-md-3" v-for="hotProduct in hotProducts" :key="hotProduct.id">
            <router-link :to="`/product/${hotProduct.id}`">
            <div class="hotProduct border-0 mb-4 position-relative position-relative">
              <div class="img">
                <div class="text">查看此商品</div>
                <img :src="`${hotProduct.img[0]}`" class="card-img-top rounded-0" alt="">
              </div>
              <div class="card-body p-0">
                <h4 class="mb-4 mt-3">{{hotProduct.title}}</h4>
                <div class="price">
                  <p class="mb-0 h5">特價:{{hotProduct.price | thousands}}</p>
                  <p class="text-muted mt-1"><del>原價:{{hotProduct.origin_price | thousands}}</del></p>
                </div>
              </div>
            </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="introduce">
      <div class="introduceTitle">
        <div class="text">認識我們</div>
      </div>
      <div class="container my-7">
      <div class="row">
        <div class="col-md-6">
          <img src="https://images.unsplash.com/photo-1524650359799-842906ca1c06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60" alt="">
        </div>
        <div class="col-md-4 m-auto text-center">
          <h3 class="mt-4 mb-3">關於我們</h3>
          <p class="text-muted">「大師吉他 Master Guitar」是以民謠吉他與生活設計為核心的臺灣原創品牌，主要販售民謠吉他與吉他相關的商品，也提供吉他維修與調整，希望和大家分享吉他所帶來的美好，讓生活充滿著音樂與設計，和我們一起成為吉他玩家吧！</p>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-between mt-4">
        <div class="col-md-6">
          <img src="https://images.unsplash.com/photo-1512405173804-40c66c0ed709?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60" alt="">
        </div>
        <div class="col-md-4 m-auto text-center">
          <h3 class="mt-4">音樂活動</h3>
          <p class="text-muted">為了促進音樂文化，我們常常會與政府單位
            或其他私人企業聯合舉辦公益表演或樂團競賽，得到的費用都將捐贈
            給慈善機構。讓大家看到音樂人的熱血及熱心。
          </p>
        </div>
      </div>
    </div>
    </div>
    <div class="footer py-5">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4">
          <a class="title" href="./index.html">Master Gutair</a>
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
  margin-top: 20px;
}
.productTitle .text {
  margin-top: 50px;
  text-align: middle;
  font-size: 30px;
}
.category{
  background-color: #FFFFE0;
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
  box-shadow: 0 0 10px#8B008B, 0 0 40px #8B008B, 0 0 80px #8B008B;
  transition: 0.5s;
  opacity: 0.6;
}
.productTitle .card {
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
.hotProductsTitle{
  height: 150px;
  width: 90%;
  border-bottom: red solid;
  padding: 40px 0;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 80px;
}
.hotProductsTitle .text {
  margin-top: 50px;
  text-align: middle;
  font-size: 30px;
}
.hotProducts .price{
  margin-left: 145px;
}
.hotProducts a{
  text-decoration: none;
}
.hotProducts img{
  width: 100%;
  height: 250px;
}
.img .text{
  display: none;
}
.hotProduct:hover .img .text{
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
.hotProduct:hover{
  box-shadow: 3px 3px 3px;
  cursor: pointer;
  opacity: 0.3;
}
.introduce{
  margin-bottom: 80px;
}
.introduce .text {
  margin-bottom: 30px;
  text-align: middle;
  font-size: 30px;
}
.introduceTitle{
  margin-top: 80px;
  border-bottom: solid #a76641;
  width: 90%;
  margin: 80px auto;
}
.introduce p{
  line-height: 35px;
  font-size: 20px;
}
.introduce img{
  height:450px;
  width:500px;
}
.footer{
  background-color: #a76641;
}
.footer .title{
  font-size: 30px;
  color: #000;
  font-family: 'Special Elite', cursive;
}
</style>
<script>
import $ from 'jquery'
export default {
  data () {
    return {
      products: [],
      router: '',
      isLoading: false,
      hotProducts: [
        {
          id: 'Rm4nNTRDi6iX5AJCSKtKbhKmiuIssqv2ZrHI6nXPdNZdPtpjKCQEm1uVlGl9QjDD',
          img: [
            'https://images.unsplash.com/photo-1588449668365-d15e397f6787?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
          ],
          title: '杜克17',
          price: 70000,
          origin_price: 72000
        },
        {
          id: 'FKx0op2eXeD4uOwMSasAox5uWZmG2zcpQmSiTj73Mn54FlRO1sMtgvGeX5UizCQn',
          img: [
            'https://images.unsplash.com/photo-1583604518057-6c31e12d4e30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
          ],
          title: '路易斯民謠吉他REM-2886',
          price: 28500,
          origin_price: 30000
        },
        {
          id: 'Ozr8HLOVG1HITeU4FRONFCJcli0wTgpARrRvQSoA3QVcPz7CDNIjlaDorGiUmqj7',
          img: [
            'https://images.unsplash.com/photo-1547822281-a35ad7a23a38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
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
        }
      ]
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
          $(this).find('.hover-text').slideDown(500)
        },
        function () {
          $(this).find('.hover-text').slideUp(500)
        }
      )
    )
    $(
      $('.category .img2').hover(
        function () {
          $(this).find('.hover-text').slideDown(500)
        },
        function () {
          $(this).find('.hover-text').slideUp(500)
        }
      )
    )
    $(
      $('.category .img3').hover(
        function () {
          $(this).find('.hover-text').slideDown(500)
        },
        function () {
          $(this).find('.hover-text').slideUp(500)
        }
      )
    )
  }
}
</script>
