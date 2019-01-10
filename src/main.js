import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store/store';
import { routes } from './router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
