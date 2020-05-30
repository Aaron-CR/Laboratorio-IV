<template>
  <div>
    <span v-if="cost === 'G'" class="free-shipping">
      <img src="../assets/images/camion.png" />
      <small>Envío gratis a todo el País</small>
    </span>
    <span v-else class="shipping-cost">
      <small>Costo de Envío Interior de Argentina: {{ cost | currency }}</small>
    </span>
  </div>
</template>

<script>
export default {
  name: "shipping-cost",
  props: {
    cost: String
  }
};
</script>

<style>
.free-shipping {
  color: green;
}

.shipping-cost {
  color: orangered;
}
</style>