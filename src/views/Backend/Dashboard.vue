<template>
  <div>
    <BackendNavbar></BackendNavbar>
    <div class="container-fluid">
      <div class="row">
        <main
          role="main"
          class="col-md-12 ml-sm-auto px-4"
        >
          <router-view
            v-if="checkSuccess"
            :token="token"
          />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import BackendNavbar from '@/components/BackendNavbar.vue'
export default {
  components: {
    BackendNavbar
  },
  name: 'Dashboard',
  data () {
    return {
      token: '',
      uuid: process.env.VUE_APP_UUID,
      checkSuccess: false
    }
  },
  created () {
    this.token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    const url = `${process.env.VUE_APP_APIPATH}auth/check`
    // Axios 預設值
    this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`
    this.$http.post(url, { api_token: this.token }).then((response) => {
      if (!response.data.success) {
        this.$router.push({
          path: 'login'
        })
        this.$bus.$emit('message:push',
          `出現錯誤瞜!
            ${response.data.message}`,
          'danger')
      }
      this.checkSuccess = true
    })
  }
}
</script>

<style lang="scss">
</style>
