import axios from "axios";

export const getProducts = ({ commit }) => {
  axios.get("http://localhost:3000/products").then((response) => {
    commit("SET_PRODUCTS", response.data);
  });
};

export const getProduct = ({ commit }, productId) => {
  axios.get(`http://localhost:3000/products/${productId}`).then((response) => {
    commit("SET_PRODUCT", response.data);
  });
};

export const addToCart = ({ commit }, { product, quantity }) => {
  commit("ADD_TO_CART", { product, quantity });

  axios.post("http://localhost:3000/cart", {
    product,
    quantity,
    product_id: product.id,
  });
  location.reload();
};

export const getCartItems = ({ commit }) => {
  axios.get("http://localhost:3000/cart").then((response) => {
    commit("SET_CART", response.data);
  });
};

export const removeProductFromCart = ({ commit }, cartItem) => {
  commit("REMOVE_PRODUCT_FROM_CART", cartItem);
  location.reload();
  axios.delete(`http://localhost:3000/cart/${cartItem.id}`);
};

export const clearCartItems = ({ commit }) => {
  commit("CLEAR_CART_ITEMS");

  axios.delete("http://localhost:3000/cart");
};
