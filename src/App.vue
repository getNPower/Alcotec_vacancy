<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Главная</router-link>
      <router-link to="/catalog/322">Вакууматоры</router-link>
      <router-link to="/catalog/103">Дозаторы</router-link>
      <router-link to="/page/purchase-returns">Условия возврата</router-link>
      <router-link to="/page/payment">Условия оплаты</router-link>
    </div>
    <router-view class="content" />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  border-bottom: 2px solid #a3a3a3;
  max-width: 1200px;
  margin: 0 auto 30px auto;
  a {
    font-weight: bold;
    color: #2c3e50;
    margin-right: 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.content{
  max-width: 1200px;
  margin: 0 auto;
}
</style>
