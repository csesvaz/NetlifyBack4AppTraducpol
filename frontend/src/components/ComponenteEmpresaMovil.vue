<script>
import Card from "primevue/card";

export default {
  props: ["empresa"],
  components: {Card},
};
</script>

<template>
  <div class="card">
    <Card style="background-color: #d5d9e4;">
      <template #title>{{ empresa.nombre }}</template>
      <template #content>
        <h4>
          Nombre de la empresa: {{ empresa.nombre }}
        </h4>
        <h4>
          Dirección: {{ empresa.direccion }}
        </h4>
        <h4>
          Teléfono: {{ empresa.telefono }}
        </h4>
        <h4>
          email: {{ empresa.email }}
        </h4>
      </template>
    </Card>
  </div>
  <br>
</template>

<style scoped>
</style>
