<template>
  <div id="app">
    <div id="nav">
      <app-header></app-header>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Header from "./views/Header.vue";

export default {
  components: {
    appHeader: Header,
  },
  methods: {
      ...mapActions(['getShoppingCart', 'listenToProductList'])
    },
  created() {
    this.listenToProductList();
    // this.$store.dispatch("updateCart");
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
