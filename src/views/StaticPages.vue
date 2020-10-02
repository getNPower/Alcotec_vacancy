<template>
  <div class="page">
    <div class="custom-container">
      <h1 class="about_title"> {{ page.name.ru }} </h1>
      <div class="static-content" v-html="page.content.ru"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import store from '@/store'

export default {
  name: 'StaticPages',
  computed: {
    ...mapState({
      page: (state) => state.page
    })
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch('getPage', {
      alias: to.params.alias,
      cb() {
        next();
      },
      error() {
        next((vm) => vm.$router.push('/404-error'));
      },
    });
  },
  beforeRouteUpdate(to, from, next) {
    store.dispatch('getPage', {
      alias: to.params.alias,
      cb() {
        next();
      },
      error() {
        next('/404-error');
      },
    });
  },
}
</script>

<style scoped>

</style>
