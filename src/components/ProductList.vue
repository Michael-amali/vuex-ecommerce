<template>
  <v-container>
    <div class="d-flex justify-center align-items-stretch flex-wrap">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
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
};
</script>
