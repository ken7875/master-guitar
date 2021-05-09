<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-gray-500">
          <div class="nav-title"><a class="navbar-brand" href="./index.html"><p><i class="fas fa-guitar"></i>Master Guitar<p/></a></div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <ul class="navbar-nav">
               <li class="home nav-link mr-4"><router-link class="nav-link" to="/"><p>前台首頁</p></router-link></li><li class="products nav-link mr-4"><router-link class="nav-link" to="/admin/backendProducts"><p>後台產品頁面</p></router-link></li><li class="coupons nav-link mr-4"><router-link class="nav-link" to="/admin/backendCoupons"><p>後台優惠卷頁面</p></router-link></li><li class="orders nav-link mr-4"><router-link class="nav-link" to="/admin/BackendOrders"><p>後台訂單頁面</p></router-link></li><li class="signOut nav-link mr-4" @click="signOut"><p>登出</p></li>
               <li class="d-flex">
                <select v-model="$i18n.locale" @change="setLang($i18n.locale)">
                  <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
                    {{ lang }}
                  </option>
                </select>
              </li>
              </ul>
            </div>
          </div>
    </nav>
</template>

<script>
export default {
  data () {
    return {
      langs: ['en', 'zh_tw']
    }
  },
  computed: {
    getLang () {
      return this.$store.getters.getLang
    }
  },
  methods: {
    signOut () {
      document.cookie = 'myToken = ; expires = ; path=/'
      this.$router.push('/')
      this.$bus.$emit('message:push',
        '登出成功',
        'success')
    },
    // 保留語言 input
    setLang (lang) {
      console.log(lang)
      localStorage.setItem('lang', lang)
    }
  },
  created () {
    console.log(this.getLang)
  }
}
</script>

<style lang="scss">
  .navbar{
    height: 130px;
  }
  .nav-title i{
    color: #000;
    font-size: 50px;
  }
  .nav-title a{
    font-size: 40px;
    font-family: 'Special Elite', cursive;
  }
  .navbar-nav .home{
    margin-top: 15px;
  }
  .navbar-nav .products{
    margin-top: 15px;
  }
  .navbar-nav .coupons{
    margin-top: 15px;
  }
  .navbar-nav .orders{
    margin-top: 15px;
  }
  .navbar-nav .signOut{
    margin-top: 15px;
  }
  .signOut p{
    margin-top: 8px;
    cursor: pointer;
  }
  .nav-link p{
    font-size: 18px;
    color: white;
  }
</style>
