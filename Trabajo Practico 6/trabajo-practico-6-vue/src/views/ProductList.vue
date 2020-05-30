<template>
  <div>
    <div>
      <b-breadcrumb :items="items"></b-breadcrumb>
    </div>
    <div>
      <div class="container mt-5">
        <h1>Productos</h1>
        <div v-for="instrumento in instrumentos" :key="instrumento.id">
          <product-card :instrumento="instrumento"></product-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import Json from "../data/instrumentos.json";

export default {
  name: "ProductList",
  components: {
    "product-card": ProductCard
  },
  data() {
    return {
      instrumentos: Json.instrumentos,
      items: [
        {
          text: "Home",
          href: "/"
        },
        {
          text: "Productos",
          active: true
        }
      ]
    };
  }
};
</script>
