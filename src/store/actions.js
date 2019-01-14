export const updateCart = ({
  commit
}, {item, quantity, isAdd}) => {
  // TODO: Call service
  commit('UPDATE_CART', {item, quantity, isAdd});
}
