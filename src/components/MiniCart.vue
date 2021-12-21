<template>
  <div>
    <v-menu offset-y width="400">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="" text dark v-bind="attrs" v-on="on">
          0 Cart <v-icon>mdi-chevron-down</v-icon></v-btn
        >
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-row>
              <v-col>
                <v-list-item-title v-html="item.quantity"></v-list-item-title>
              </v-col>
              <v-col>
                <v-list-item-title v-html="item.price"></v-list-item-title>
              </v-col>
              <v-col>
                <v-list-item-title><v-btn>remove</v-btn></v-list-item-title>
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-row>
              <v-col
                ><v-list-item-title>Total Price: $67</v-list-item-title></v-col
              >
              <v-col><v-list-item-title>Clear Cart</v-list-item-title></v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},

  data() {
    return {
      items: [
        {
          quantity: "1x",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          price: "$35",
        },
        {
          quantity: "2x",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          price: "$35",
        },
      ],
    };
  },
};
</script>
