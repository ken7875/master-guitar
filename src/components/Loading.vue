<template>
  <div class="loading">
      <div class="loader-inner line-scale-pulse-out">
          <div></div>
      </div>
      <p class="text-lg-xl">loading...</p>
  </div>
</template>

<script>
import $ from 'jquery'
import '../../node_modules/loaders.css/loaders.min.css'
import '../../node_modules/loaders.css/loaders.css.js'
export default {
  mounted () {
    $(function () {
      $('.loader-inner').loaders()
    })
  }
}
</script>

<style lang="scss">
    .line-scale-pulse-out >div{
        background: #000;
        width: 8px;
        height: 70px;
    }
</style>
