import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import StaticPages from '../views/StaticPages'
import Catalog from '../views/Catalog'
import NotFound from '../views/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page/:alias',
    component: StaticPages,
  },
  {
    path: '/catalog/:id',
    component: Catalog,
  },
  {
    path: '*',
    name: '404',
    component: NotFound,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
