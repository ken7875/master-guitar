<template>
  <div id="app">
    <Toasts/>
    <SpecialAlert/>
    <p>1</p>
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<style lang="scss">

@import './assets/SCSS/all';

#app {
  text-align: center;
  height: 100%;
  width: 100%;
}

</style>

<script>
import Toasts from '@/components/Toasts.vue'
import SpecialAlert from '@/components/SpecialAlert.vue'
export default {
  name: 'App',
  components: {
    Toasts,
    SpecialAlert
  }
}
</script>
