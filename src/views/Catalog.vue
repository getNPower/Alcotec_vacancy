<template>
  <div class="catalog">
    <table class="grid">
      <tr>
        <th>Изображение</th>
        <th>Наименование</th>
        <th>Наличие</th>
        <th><a @click="sort">Цена</a></th>
      </tr>
      <tr v-for="item in categoryItem" :key="item.id" class="item">
        <td><img :src="`https://dev.alcotec.com.ua${item.img}`" /></td>
        <td>{{ item.title }}</td>
        <td>{{ item.availability.ru }}</td>
        <td>{{ item.priceUAH }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '@/store'

export default {
  name: 'Catalog',
  data() {
    return {
      isSort: true,
    };
  },
  computed: {
    ...mapState({
      categoryItem: (state) => state.categoryItem
    })
  },
  methods: {
    sort() {
      store.commit('SORT_BY_PRICE_CATEGORY_ITEM', this.isSort);
      this.isSort = !this.isSort;
    },
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch('getCategoryItem', {
      categoryId: to.params.id,
      cb() {
        next();
      },
      error() {
        next((vm) => vm.$router.push('/404-error'));
      },
    });
  },
  beforeRouteUpdate(to, from, next) {
    store.dispatch('getCategoryItem', {
      categoryId: to.params.id,
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

<style scoped lang="scss">
.grid{
  width: 1000px;
  margin: 0 auto;
  border-bottom: 1px solid #2c3e50;
  border-top: 1px solid #2c3e50;
  border-collapse: collapse;
  border-spacing: 0;
  & tr{
    height: 30px;
    border-bottom: 1px solid #2c3e50;
    & td{
      & img{
        height: 50px;
      }
    }
    & th{
      background-color: #42b983;
      height: 50px;
      & a{
        text-decoration: underline;
        cursor: pointer;
        color: #0e0ecc;
      }
    }
  }
}

</style>
