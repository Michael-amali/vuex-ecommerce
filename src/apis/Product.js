import Api from "./Api";

const END_POINT = "products";

export default {
  all() {
    return Api.get(END_POINT);
  },
  show(productId) {
    return Api.get(`products/${productId}`);
  },
  // Another way of writing the show() function code above
  //   show(productId) {
  //     return Api.get(`${END_POINT}/${productId}`);
  //   },
};
