// import productList from '../../data/products';

const state = {
  productList: []
};

const getters = {
  products: state => {
    return state.productList;
  },
};

const mutations = {
  'UPDATE_PRODUCT_LIST'(state, productList) {
    state.productList = productList;
  }
};

const actions = {
  listenProductList: ({
    commit
  }) => {
    commit('UPDATE_PRODUCT_LIST', productList)
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
