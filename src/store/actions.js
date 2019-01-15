import { ref, firebaseAuth } from '../config/firebaseConfig';

export const updateCart = ({
  commit
}, {item, quantity, isAdd}) => {
  // TODO: Call service
  commit('UPDATE_CART', {item, quantity, isAdd});
}

export function listenToProductList({commit}) {
	return ref.child("products").on('value', (products) => {
		commit('UPDATE_PRODUCT_LIST', products.val());
	});
}
