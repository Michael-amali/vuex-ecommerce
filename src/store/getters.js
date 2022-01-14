export const cartItemCount = (state) => {
  return state.cart.length;
};

export const cartTotalPrice = (state) => {
  let sum = 0;
  state.cart.forEach((item) => {
    sum = sum + item.product.price * item.quantity;
  });
  return sum;
};
