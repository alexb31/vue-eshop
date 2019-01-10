<template>
  <div>
    <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
    <ul class="products">
      <app-product v-for="product in products" :product="product" >
      </app-product>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import Product from './product.vue';

export default {
  components: {
    appProduct: Product,
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
  methods: {
    navigateToHome() {
      this.$router.push('/');
    }
  }
};
</script>

<style>
.products {
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
  list-style-type: none;
}
</style>
