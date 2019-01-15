<template>
  <div class="container">
    <table id="cart" class="table table-hover table-condensed">
      <h1>Cart Shopping</h1>
      <app-cart-item v-for="cartItem in cartItemList" :cartItem="cartItem" :key="cartItem.id"></app-cart-item>

      <tfoot>
      <tr class="visible-xs">
        <td class="text-center"><strong>Total {{ totalValue }}</strong></td>
      </tr>
      <tr>
        <td colspan="2" class="hidden-xs"></td>
        <td class="hidden-xs text-center"><strong>Total {{ totalValue | dollars }}</strong></td>
        <td>
          <button class="btn btn-success btn-block" @click="checkout">
							Checkout <i class="fa fa-angle-right"></i>
						</button>
        </td>
      </tr>
    </tfoot>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CartItem from './cartItem';
import Filter from '../../filters.js';

export default {
  filters: {
    Filter
  },
  components: {
    appCartItem: CartItem,
  },
  computed: {
    ...mapGetters(['cartItemList', 'products']),
    totalValue() {
      let res = 0;
      this.cartItemList.map((item) => {
        res += item.price * item.quantity;
      });
      return res;
    }
  },
}
</script>
