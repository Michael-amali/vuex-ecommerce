<template>
  <div class="ma-2">
    <v-card width="320">
      <v-img
        contain
        class="white--text"
        height="250px"
        src="https://pngimg.com/uploads/men_shoes/men_shoes_PNG7475.png"
      >
        <v-container fill-height fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox> </v-flex>
          </v-layout>
        </v-container>
      </v-img>
      <v-card-title>
        <div class="mx-5">
          <span class="title blue--text">{{ data.name }}</span
          ><br />
          <v-rating
            readonly
            small
            dense
            background-color="orange"
            color="orange"
            v-model="data.rating"
          ></v-rating>
          <span class="title"> ${{ data.price }}</span>
          <div class="body-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ut
          </div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn large rounded depressed class="mx-auto">ADD TO CART</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  components: {},

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
  },
};
</script>
