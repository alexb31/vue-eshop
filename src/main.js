import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store/store';
import { routes } from './router';
import filters from './filters';

Vue.use(VueRouter);

for(let name in filters) {
  Vue.filter(name, filters[name]);
}

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
