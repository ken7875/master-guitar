<template>
  <div id="app">
    <Toasts/>
    <router-view/>
  </div>
</template>

<style lang="scss">

@import './assets/SCSS/all';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
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
