<template>
  <button @click="addItem" :disabled="item.quantity === 0" class="btn btn-success">Add To Cart</button>
</template>


<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['products']),
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
