<template>
  <div>
    <v-menu offset-y width="400">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="" text dark v-bind="attrs" v-on="on">
          {{ cartItemCount }} Cart <v-icon>mdi-chevron-down</v-icon></v-btn
        >
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in cart" :key="index">
          <v-list-item-avatar>
            <v-img :src="item.product.image"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-row>
              <v-col>
                <v-list-item-title v-html="item.quantity"></v-list-item-title>
              </v-col>
              <v-col>
                <v-list-item-title
                  v-html="item.product.price"
                ></v-list-item-title>
              </v-col>
              <v-col>
                <v-list-item-title
                  ><v-btn @click.prevent="removeProductFromCart(item)"
                    >remove</v-btn
                  ></v-list-item-title
                >
              </v-col>
            </v-row>
            <v-divider></v-divider>
          </v-list-item-content>
        </v-list-item>
        <!-- <v-list-item v-if="cart.length <= 0"> No item in Cart </v-list-item> -->
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-row>
              <v-col
                ><v-list-item-title
                  >Total Price: ${{ cartTotalPrice }}</v-list-item-title
                ></v-col
              >
              <v-col
                ><v-list-item-title
                  ><a href="#" @click.prevent="clearCartItems(cart)"
                    >Clear Cart</a
                  ></v-list-item-title
                ></v-col
              >
            </v-row>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "App",
  components: {},

  data() {
    return {
      items: [
        {
          quantity: "1x",
          avatar: "https://pngimg.com/uploads/men_shoes/men_shoes_PNG7475.png",
          price: "$35",
        },
        {
          quantity: "2x",
          avatar: "https://pngimg.com/uploads/men_shoes/men_shoes_PNG7475.png",
          price: "$35",
        },
      ],
    };
  },
  computed: {
    // ******* Not using mapState ********
    // cart() {
    //   return this.$store.state.cart;
    // },

    // ******* Using mapState ***********
    ...mapState(["cart"]),

    // ******* Not using mapGetters ********
    // cartItemCount() {
    //   return this.$store.getters.cartItemCount;
    // },

    // ******* Using mapGetters ***********
    ...mapGetters(["cartItemCount"]),

    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },

    product() {
      return this.$store.state.products;
    },
  },
  // ******** One way of setting getters *********
  // computed: mapGetters({
  //   cartItemCount: "cartItemCount",
  // }),

  // ******* Another way of setting getters ********
  // computed: mapGetters(["cartItemCount"]),

  methods: {
    // ******* Not using mapAction ********
    // removeProductFromCart(cartItem) {
    //   this.$store.dispatch("removeProductFromCart", cartItem);
    // },

    // ******* Not using mapAction ********
    ...mapActions(["removeProductFromCart"]),

    clearCartItems(cart) {
      this.$store.dispatch("clearCartItems", cart);
    },
  },

  mounted() {
    this.$store.dispatch("getCartItems");
    // the code above can be written without using dispatch() function  --->By calling this.getCartItems(); in the mounted() function and adding getCartItems in the mapActions array
  },
};
</script>
