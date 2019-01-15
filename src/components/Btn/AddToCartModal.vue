<template>
  <div id="shoppingCart" class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Shopping cart</h5>
        <button class="close" data-dismiss="modal">
          &times;
        </button>
      </div>
      <div class="modal-body">
        The item has been added to your basket.
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-dismiss="modal">Keep shopping</button>
        <router-link to="/cart" tag="button" class="btn btn-primary" data-dismiss="modal">Check out</router-link>
      </div>
    </div>
  </div>
</div>
</template>
