<template>
  <div class="container">
    <table id="cart" class="table table-hover table-condensed">
      <h1>Cart Shopping</h1>
      <app-cart-item v-for="cartItem in cartItemList" :cartItem="cartItem" :key="cartItem.id"></app-cart-item>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CartItem from './cartItem';

export default {
  components: {
    appCartItem: CartItem,
  },
  computed: {
    ...mapGetters(['cartItemList', 'products']),
  },
}
</script>
