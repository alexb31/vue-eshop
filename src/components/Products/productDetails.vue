<template>
  <div>
    <button @click="navigateToProducts">Go Back To products</button>
    <h3>Some Products Details</h3>
    <p>Product Detail: {{ this.$route.params.id }}</p>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToProducts() {
      this.$router.push("/products");
    }
  }
};
</script>
