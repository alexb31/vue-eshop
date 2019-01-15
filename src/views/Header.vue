<template>
<div>
  <nav class="navbar" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Online Store</router-link>
      </div>
      <ul class="nav navbar-nav navbar-right">
        <router-link to="/register" tag="li"><a>Register</a></router-link>
        <router-link to="/login" tag="li"><a>Login</a></router-link>
        <li>
        <router-link to="/cart" class="btn btn-success navbar-btn" tag="button">
          Checkout <span class="badge">{{ numItems }} ({{ cartValue | dollars}})</span>
        </router-link>
      </li>
      </ul>
    </div>
  </nav>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Filters from '../filters.js';

export default {
  filters: {
    Filters
  },
  computed: {
    ...mapGetters(['cartValue', 'cartItemList']),
    numItems() {
      return this.cartItemList.reduce((total, item) => {
        total += item.quantity;
        return total;
        console.log(total)
      }, 0);
    },
  },
};
</script>

<style scoped lange="sass">
.navbar-btn a {
  color: white;
}
.li-pointer {
  cursor: pointer;
}
.li-pointer:hover {
  cursor: pointer;
}
</style>
