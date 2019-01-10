import products from '../../data/products';

const state = {
  products: []
};

const getters = {
  products: state => {
    return state.products;
  },
};

const mutations = {
  'SET_PRODUCTS'(state, products) {
    state.products = products;
  }
};

const actions = {
  initProducts: ({
    commit
  }) => {
    commit('SET_PRODUCTS', products)
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
