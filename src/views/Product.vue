<template>
  <div>
    <AppHeader />
    <v-container>
      <v-row>
        <v-col cols="12" sm="4">
          <v-img :src="items[0].avatar"></v-img>
        </v-col>
        <v-col cols="12" sm="8">
          <v-col>
            <h1>Product Name</h1>
          </v-col>
          <v-col>
            <h3>${{ items[0].price }}</h3>
          </v-col>

          <v-row>
            <v-col cols="3">
              <v-text-field
                outlined
                v-model="items[0].price"
                type="number"
                label="Price"
                required
              ></v-text-field
            ></v-col>
            <v-col
              ><v-btn large rounded depressed class="mx-auto"
                >ADD TO CART</v-btn
              ></v-col
            >
          </v-row>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            modi dignissimos saepe nihil fugit a omnis odit obcaecati reiciendis
            amet voluptate earum, eaque dolor. Voluptate magni adipisci odio ab
            quibusdam!
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
export default {
  name: "Product",
  props: ["id"],
  components: { AppHeader },

  data() {
    return {
      items: [
        {
          quantity: "1x",
          avatar: "https://pngimg.com/uploads/men_shoes/men_shoes_PNG7475.png",
          price: "35.00",
        },
        {
          quantity: "2x",
          avatar: "https://pngimg.com/uploads/men_shoes/men_shoes_PNG7475.png",
          price: "35.00",
        },
      ],
    };
  },
};
</script>
