<script>
import BarraNavegacion from "../components/BarraNavegacion.vue";
import ComponentePregunta from "../components/ComponentePregunta.vue";

export default {
  components: { BarraNavegacion, ComponentePregunta },
}
</script>

<template>
  <div class="d-block fixed-top">
    <BarraNavegacion />
  </div>
    <div class="contenedor">
      <br />
      <div class="row mt-3">
        <h3 class="IntroduccionAyuda">
         Preguntas más frecuentes acerca de la aplicación.
        </h3>
      </div>
    </div>
    <ComponentePregunta/>

  
</template>
<style scoped>
.contenedor {
  margin-bottom: 1em;
  margin-left: 2em;
}
</style>
