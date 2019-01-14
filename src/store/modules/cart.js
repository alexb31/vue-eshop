const state = {
  cartItemList: []
}

const mutations = {
  'UPDATE_CART' (state, {item, quantity, isAdd}) {
		const record = state.cartItemList.find(element => element.id == item.id);
		if (record) {
			if (isAdd) {
				record.quantity += quantity;
			} else {
				record.quantity = quantity;
			}
		} else {
			state.cartItemList.push({
				...item,
				quantity
			});
		}
	}
};

const actions = {
  clearCart: ({commit}) => {
		commit('SET_CART', []);
  }
  }

const getters = {
  cartItemList: (state) => {
    return state.cartItemList;
  },
  cartValue: (state) => {
    let res = 0;
    state.cartItemList.map(item => {
      res += item.price * item.quantity;
    });
    return res;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
}
