<template>
  <div class="ma-7">
    <v-card width="320">
      <v-img contain class="white--text" height="250px" :src="product.image">
        <v-container fill-height fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox> </v-flex>
          </v-layout>
        </v-container>
      </v-img>
      <v-card-title>
        <div class="mx-5">
          <router-link :to="{ name: 'Product', params: { id: product.id } }">{{
            product.title
          }}</router-link>
          <!-- <span class="title blue--text">{{ data.name }}</span
          > -->
          <br />
          <v-rating
            readonly
            small
            dense
            background-color="orange"
            color="orange"
            v-model="data.rating"
          ></v-rating>
          <span class="title"> ${{ product.price }}</span>
          <div class="body-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ut
          </div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn large rounded depressed class="mx-auto" @click="addToCart()"
          >ADD TO CART</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  components: {},
  props: ["product"],

  data() {
    return {
      data: {
        name: "Black Shoes for Men",
        rating: 3,
        price: 57.0,
        reduc: 0.5,
        color: "grey lighten-2",
      },
    };
  },
  computed: {
    display_price() {
      return this.price * this.reduc;
    },
  },
  methods: {
    colchange() {
      this.color = this.color === "blue" ? "grey lighten-2" : "blue";
    },
    addToCart() {
      this.$store.dispatch("addToCart", { product: this.product, quantity: 1 });
    },
  },
};
</script>
