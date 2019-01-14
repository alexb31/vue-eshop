<template>
  <div>
    <h1>Cart Shopping</h1>
    <app-cart-item v-for="cartItem in cartItemList" :cartItem="cartItem" :key="cartItem.id"></app-cart-item>
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
    totalValue() {
      let res = 0;
      this.cartItemList.map(item => {
        res += item.price * item.quantity;
      });
      return res;
    }
  },
}
</script>
