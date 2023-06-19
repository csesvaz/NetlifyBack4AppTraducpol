<script>
import ProgressSpinner from "primevue/progressspinner";

export default {
  components: {
    ProgressSpinner,
  },
};
</script>

<template>
  <div class="card flex justify-content-center">
    <p>Cargando datos de la empresa.</p>
    <p>Por favor espere.</p>
  </div>
  <div class="card flex justify-content-center">
    <ProgressSpinner />
  </div>
</template>

<style scoped>
p {
  text-align: center;
}
</style>
