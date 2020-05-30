<template>
  <router-link :to="{ name: 'Product Details', params: { id: instrumento.id }}">
    <b-card
      :img-src="require('../assets/images/' + instrumento.imagen)"
      :img-alt="instrumento.id"
      img-left
      class="mb-3 img-list"
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
a {
  color: black;
}

a:hover {
  text-decoration: none !important;
}
</style>
