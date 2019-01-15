<template>
<div>
  <button @click="addItem()" :disabled="item.quantity === 0" class="btn btn-success" data-toggle="modal" data-target="#shoppingCart">Add To Cart</button>

</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['products', 'item']),
    item() {
      let id = this.$route.params.id;
      if (this.products.length >= id) {
        let filterArr = this.products.filter((item) => {
          return item.id == id
        });
        if (filterArr.length > 0) {
          return filterArr[0];
        }
      }
      return {};
    }
  },
  methods: {
    ...mapActions(['updateCart']),
    addItem() {
      const order = {
        item: Object.assign({}, this.item),
        quantity: 1,
        isAdd: true
      };
      console.log(order);
      this.updateCart(order);
    }
  }
}
</script>
