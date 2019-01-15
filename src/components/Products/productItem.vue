<template>
  <li class="product">
    <router-link tag="a" :to="'/product/' + item.id" class="product_link">
      <img :src="item.image" class="product_img" alt>
      <h2 class="product_name">{{item.title}}</h2>
    </router-link>
    <div class="product_description">
      <p>{{ item.description }}</p>
    </div>
    <div class="product_price">{{item.price | dollars}}</div>
    <div class="row justify-content-end">
      <button @click="addItem()" :disabled="item.quantity === 0" class="btn btn-success" data-toggle="modal" data-target="#shoppingCart">Add To Cart</button>
      <app-add-cart-modal></app-add-cart-modal>
    </div>
  </li>
</template>

<script>
import { mapActions } from 'vuex';
import Filters from '../../filters.js';
import AddCartBtn from '../Btn/AddToCartBtn.vue';
import AddCartModal from '../Btn/AddToCartModal.vue';

export default {
  props: ["item"],
  components: {
    appAddCartBtn: AddCartBtn,
    appAddCartModal: AddCartModal,
  },
  methods: {
    ...mapActions(['updateCart']),
    addItem() {
      const order = {
        item: Object.assign({}, this.item),
        quantity: 1,
        isAdd: true
      };
      this.updateCart(order);
    }
  },
  filters: {
    Filters,
  }
};
</script>

<style>
.product {
  display: flex;
  padding: 20px 0;
  align-items: center;
  flex-direction: column;
  flex-basis: calc(100% - 70%);
  background-color: white;
  border: 1px solid #000;
}

.product_img {
  width: 50%;
  height: 50%;
}

.product_link {
  cursor: pointer;
}
</style>
