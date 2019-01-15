<template>
  <tr>
  <td data-th="Product">
    <div class="row">
      <div class="col-sm-2 hidden-xs">
        <img :src="cartItem.image" alt="" class="img-responsive"/>
        </div>
      <div class="col-sm-10">
        <h4 class="nomargin">{{ cartItem.title }}</h4>
        <p>{{ cartItem.description }}</p>
      </div>
    </div>
  </td>
  <td data-th="Price">{{ cartItem.price | dollars }}</td>
  <td data-th="Quantity">
    <input type="number" class="form-control text-center"
      :value="cartItem.quantity"
      min="0">
  </td>
  <td data-th="Subtotal" class="text-center">TOTAL</td>
  <td class="actions" data-th="">
    <button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>
  </td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex';
import Filters from '../../filters';

export default {
  props: ['cartItem'],
  filters: {
    Filters,
  },
  computed: {
    subtotal() {
      return this.cartItem.quantity * this.cartItem.price;
    },
  },
  methods: {
    ...mapActions(['updateCart']),
  }
}
</script>
