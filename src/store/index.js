import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: {
      name: {},
      content: {},
      meta: {},
    },
    categoryItem: [],
  },
  getters: {
    pageName(state) {
      return state.page.name;
    },
  },
  mutations: {
    SET_PAGE(state, data) {
      state.page.name = data.name;
      state.page.content = data.content;
      state.page.meta = data.meta;
    },
    SET_CATEGORY_ITEM(state, data) {
      state.categoryItem = data.products;
    },
    SORT_BY_PRICE_CATEGORY_ITEM(state, isDesc) {
      if (isDesc) {
        state.categoryItem.sort(function (a, b) {
          return a.priceUAH - b.priceUAH;
        });
      } else {
        state.categoryItem.sort(function (a, b) {
          return b.priceUAH - a.priceUAH;
        });
      }
    },
  },
  actions: {
    async getPage ({ commit }, { alias, cb, error }) {
      fetch(`https://dev.alcotec.com.ua/api/pages/${alias}`)
        .then((response) => response.json())
        .then((response) => {
          if (response.success === false) {
            error();
          } else if (response.success === true) {
            commit('SET_PAGE', response);
            cb();
          }
        })
        .catch((err) => console.error(err));
    },
    async getCategoryItem({ commit, dispatch }, {
      cb, categoryId, page = 1, filter = {}, PER_PAGE = 15, sorting = { sortBy: 'rating', isDesc: true }, error,
    }) {
      fetch(`https://dev.alcotec.com.ua/api/products/${categoryId}`, {
        method: 'POST',
        headers: {},
        body: JSON.stringify({
          sorting,
          page,
          perpage: PER_PAGE,
          filter,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.products) {
            cb(response);
            commit('SET_CATEGORY_ITEM', response);
          } else {
            error();
          }
        })
        .catch((err) => console.error(err));
    },
  },
  modules: {
  }
})
