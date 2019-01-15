<template>
  <div>
    <ul class="products">
      <app-product-item v-for="product in products" :item="product" :key="product.id" >
      </app-product-item>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductItem from './Products/productItem.vue';

export default {
  components: {
    appProductItem: ProductItem,
  },
  computed: {
    ...mapGetters(['products']),
  },
  methods: {
    ...mapActions(['updateCart']),
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
