<template>
  <v-card class="mx-auto overflow-hidden">
    <v-app-bar color="deep-purple" dark>
      <!-- <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon> -->

      <v-toolbar-title>LA</v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text @click="goToHome">Home</v-btn>
        <v-btn text>Products</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <MiniCart />
      <!-- <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="" text dark v-bind="attrs" v-on="on">
            Dropdown <v-icon>mdi-chevron-down</v-icon></v-btn
          >
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import MiniCart from "@/components/MiniCart.vue";
export default {
  name: "app",
  components: { MiniCart },
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
