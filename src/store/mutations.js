export const SET_PRODUCTS = (state, products) => {
  state.products = products;
};

export const SET_PRODUCT = (state, product) => {
  state.product = product;
};

export const ADD_TO_CART = (state, { product, quantity }) => {
  let productInCart = state.cart.find((obj) => {
    return obj.product.id == product.id;
  });

  if (productInCart) {
    productInCart.quantity = productInCart.quantity + quantity;
    return;
  }
  state.cart.push({ product, quantity });
};

export const SET_CART = (state, cartItems) => {
  state.cart = cartItems;
};

export const REMOVE_PRODUCT_FROM_CART = (state, cartItem) => {
  let productIndex = state.cart.findIndex((item) => {
    return item.id === cartItem.id;
  });

  state.cart.splice(productIndex, 1);
};

export const CLEAR_CART_ITEMS = (state) => {
  state.cart = [];
};
