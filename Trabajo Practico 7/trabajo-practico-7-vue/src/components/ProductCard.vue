<template>
  <router-link :to="{ name: 'Product Details', params: { id: instrumento.id }}">
    <b-card
      :img-src="'http://localhost:8080/api/v1/instrumentos/images/' + instrumento.imagen"
      :img-alt="instrumento.instrumento"
      img-left
      class="mb-3"
    >
      <b-card-title class="font-weight-light">{{ instrumento.instrumento }}</b-card-title>
      <b-card-title>{{ instrumento.precio | currency }}</b-card-title>
      <shipping-cost :cost="instrumento.costoEnvio"></shipping-cost>
      <small class="text-muted">{{ instrumento.cantidadVendida }} Vendidos.</small>
    </b-card>
  </router-link>
</template>

<script>
import ShippingCost from "@/components/ShippingCost.vue";

export default {
  name: "product-card",
  components: {
    "shipping-cost": ShippingCost
  },
  props: {
    instrumento: Object
  }
};
</script>

<style scoped>
img {
  min-height: 160px;
  min-width: 160px;
  max-height: 160px;
  max-width: 160px;
}

a {
  color: black;
}

a:hover {
  text-decoration: none !important;
}
</style>
