import Home from './views/Home.vue';
import Store from './components/Store.vue';
import ProductDetails from './components/Products/productDetails.vue';

export const routes = [
  { path: '/', name: 'home', component: Store },
  { path: '/product/:id', name: "productDetails", component: ProductDetails }
];
