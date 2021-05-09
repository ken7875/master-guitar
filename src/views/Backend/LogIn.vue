<template>
  <div class="container">
    <Loading :active.sync="isLoading" />
    <form
      class="form-signin"
      @submit.prevent="signin"
    >
      <h1 class="h3 mb-3 font-weight-normal">
        請先登入
      </h1>
      <div class="form-group">
        <label
          for="inputEmail"
          class="sr-only"
        >Email address</label>
        <input
          id="inputEmail"
          v-model="user.email"
          type="email"
          class="form-control"
          placeholder="Email address"
          required
          autofocus
        >
      </div>
      <div class="form-group">
        <label
          for="inputPassword"
          class="sr-only"
        >Password</label>
        <input
          id="inputPassword"
          v-model="user.password"
          type="password"
          class="form-control"
          placeholder="Password"
          required
        >
      </div>
      <button
        class="btn btn-lg btn-wood btn-block"
        type="submit"
      >
        登入
      </button>
      <p class="mt-5 mb-3 text-muted">
        &copy; Master Guitar
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      token: '',
      isLoading: false
    }
  },
  methods: {
    async signin () {
      try {
        this.isLoading = true
        await this.$store.dispatch('backendApi/logInApi', this.user)
        // Axios 預設值
        this.axios.defaults.headers.common.Authorization = `Bearer ${this.getToken}`
        // this.$cookie.set('myToken', this.getToken, { expire: this.expireGetter })
        this.$router.push('/admin/BackendProducts')
        this.$bus.$emit('message:push',
          '登入成功',
          'success')
        this.isLoading = false
        // expire * 1000 為將一般timestap轉換成時間格式
        // document.cookie = `myToken=${token};expires=${new Date(expired * 1000)};`
      } catch (error) {
        this.$bus.$emit('message:push',
          `登入失敗瞜!
            ${error}`,
          'danger')
        this.isLoading = false
      }
    }
  },
  computed: {
    getToken () {
      return this.$store.getters['backendApi/tokenGetter']
    },
    expireGetter () {
      return this.$store.getters['backendApi/expireGetter']
    }
  }
}
</script>

<style lang="scss" scoped>
html,
body {
  height: 100%;
  text-align: center;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>
