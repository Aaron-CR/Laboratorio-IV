<template>
  <div>
    <div>
      <b-breadcrumb>
        <b-breadcrumb-item href="/">Home</b-breadcrumb-item>
        <b-breadcrumb-item active>Productos</b-breadcrumb-item>
      </b-breadcrumb>
    </div>
    <div>
      <b-container class="mt-5">
        <h1>Productos</h1>
        <div v-for="instrumento in instrumentos" :key="instrumento.id">
          <product-card :instrumento="instrumento"></product-card>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import axios from "axios";

export default {
  name: "ProductList",
  components: {
    "product-card": ProductCard
  },
  data() {
    return {
      instrumentos: []
    };
  },
  methods: {
    getInstrumentos() {
      axios
        .get("http://localhost:8080/api/v1/instrumentos")
        .then(res => {
          this.instrumentos = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getInstrumentos();
  }
};
</script>
