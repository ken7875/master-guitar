<template>
  <div id="app">
    <Toasts/>
    <router-view/>
  </div>
</template>

<style lang="scss">

@import './assets/SCSS/all';

#app {
  text-align: center;
}
</style>

<script>
import Toasts from '@/components/Toasts.vue'

export default {
  name: 'App',
  components: {
    Toasts
  }
}
</script>
