<template>
  <v-container>
    <div class="d-flex align-items-stretch flex-wrap">
      <ProductCard
        v-for="product in getProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </v-container>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
export default {
  name: "ProductList",
  components: { ProductCard },

  data() {
    return {
      data: {},
    };
  },
  computed: {
    getProducts() {
      return this.$store.state.products;
    },
  },

  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>
