
<template>
<div class="container">
  <div class="col-md-12">
    <div class="thumbnail">
      <img class="img-responsive" :src="item.image" alt="">
      <div class="caption-full">
        <h4 class="pull-right">{{ item.price | dollars }}</h4>
        <h4> {{ item.title }}</h4>
        <p> {{ item.description }} </p>
      </div>
      <div class="ratings">
        <span>{{ item.quantity }} left in stock</span>
        <p class="pull-right">
          <app-add-cart-btn></app-add-cart-btn>
          <!-- <app-add-cart-modal></app-add-cart-modal> -->
        </p>
        <div class="clearfix"></div>
      </div>
    </div>


  </div>

</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AddCartBtn from '../Btn/AddToCartBtn.vue';
import AddCartModal from '../Btn/AddToCartModal.vue';
import Filters from '../../filters';

export default {
  components: {
    appAddCartBtn: AddCartBtn,
    appAddCartModal: AddCartModal,
  },
  filters: {
    Filters,
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
    },
    navigateToProducts() {
      this.$router.push("/products");
    },
  },
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
    },
  },
};
</script>

<style scoped>
.caption-full {
  padding-right: 10px;
  padding-left: 10px;
}

.ratings {
  padding-right: 10px;
  padding-left: 10px;
  color: #d17581;
}

</style>
