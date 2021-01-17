<template>
    <nav class="d-flex justify-content-center">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link  {disable: page.current_page === 1}" href="#" @click.prevent="updatePage(pagination.current_page - 1)" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item active" v-for="page in pagination.total_pages" :key="page"><a class="page-link" href="#" @click.prevent="updatePage(page)">{{ page }}</a></li>
              <li class="page-item">
                <a class="page-link" href="#" @click.prevent="updatePage(pagination.current_page + 1)" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    ...mapActions('productsModules', ['getProducts']),
    updatePage (num) {
      this.$emit('update', num)
    }
  },
  computed: {
    ...mapGetters('productsModules', ['pagination'])
  }
}
</script>
