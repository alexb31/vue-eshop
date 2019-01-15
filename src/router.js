import Home from './views/Home.vue';
import Store from './components/Store.vue';
import ProductDetails from './components/Products/productDetails.vue';
import Cart from './components/cart/cartShopping.vue';
import Register from './components/auth/register.vue';
import Login from './components/auth/login.vue';

export const routes = [
  { path: '/', name: 'home', component: Store },
  { path: '/product/:id', name: "productDetails", component: ProductDetails },
  { path: '/cart', name: "CartShopping", component: Cart },
  { path: '/register', name: "Register", component: Register },
  { path: '/login', name: "Login", component: Login }
];
