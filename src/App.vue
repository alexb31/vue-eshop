<template>
  <div id="app">
    <h1>Online Store</h1>
    <div id="nav">
      <app-header></app-header>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./views/Header.vue";

export default {
  components: {
    appHeader: Header,
  },
  created() {
    this.$store.dispatch("initProducts");
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
