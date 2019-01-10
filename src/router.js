import Home from './views/Home.vue';
import Products from './components/products.vue';
import ProductDetail from './components/productDetail.vue';

export const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/products', component: Products },
  { path: '/product/:id', name: "productDetails", component: ProductDetail }
];
