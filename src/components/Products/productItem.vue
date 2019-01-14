<template>
  <li class="product">
    <router-link tag="a" :to="'/product/' + product.id" class="product_link">
      <img :src="product.image" class="product_img" alt>
      <h2 class="product_name">{{product.name}}</h2>
    </router-link>
    <div class="product_description">
      <p>{{ product.description }}</p>
    </div>
    <div class="product_price">{{product.price | dollars}}</div>
    <div class="row justify-content-end">
      <button class="btn btn-primary">Add to cart</button>
    </div>
  </li>
</template>

<script>
import { mapActions } from 'vuex';
import Filters from '../../filters.js';

export default {
  props: ["product"],
  filters: {
    Filters,
  },
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

