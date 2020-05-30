<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item href="/">Home</b-breadcrumb-item>
      <b-breadcrumb-item href="/product-list">Productos</b-breadcrumb-item>
      <b-breadcrumb-item active>{{ instrumento.instrumento }}</b-breadcrumb-item>
    </b-breadcrumb>
    <b-container class="mt-5">
      <b-row>
        <b-col cols="8">
          <img
            :src="require('../assets/images/' + instrumento.imagen)"
            :img-alt="instrumento.id"
            class="img-details"
          />
          <br />
          <small>{{ instrumento.descripcion }}</small>
        </b-col>
        <b-col>
          <small class="text-muted">{{ instrumento.cantidadVendida }} vendidos</small>
          <h3>{{ instrumento.instrumento }}</h3>
          <h1 class="font-weight-light">{{ instrumento.precio | currency }}</h1>
          <small class="font-weight-bold">Marca: {{ instrumento.marca }}</small>
          <br />
          <small class="font-weight-bold">Modelo: {{ instrumento.modelo }}</small>
          <br />
          <br />
          <small>Costo Envio:</small>
          <shipping-cost :cost="instrumento.costoEnvio"></shipping-cost>
          <br />
          <b-button variant="outline-primary">Agregar al carrito</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ShippingCost from "@/components/ShippingCost.vue";
import Json from "../data/instrumentos.json";

export default {
  name: "ProductDetails",
  components: {
    "shipping-cost": ShippingCost
  },
  data() {
    return {
      instrumento: Json.instrumentos[this.$route.params.id - 1]
    };
  }
};
</script>

<style scoped>
.img-details {
  min-height: 100%;
  max-height: 100%;
  max-width: 100%;
  width: auto;
  display: flex;
  margin: 0 auto;
}
</style>
