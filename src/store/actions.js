import axios from "axios";
import Product from "../apis/Product";
import Cart from "../apis/Cart";

export const getProducts = ({ commit }) => {
  Product.all().then((response) => {
    commit("SET_PRODUCTS", response.data);
  });
};

export const getProduct = ({ commit }, productId) => {
  Product.show(productId).then((response) => {
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
  Cart.all().then((response) => {
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
