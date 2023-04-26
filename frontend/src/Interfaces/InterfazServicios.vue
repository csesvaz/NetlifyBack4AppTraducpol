<script>
export default {
  data() {
    return {
      opcionInicial: true,
    };
  },
  methods: {
    cambioOpcion() {
      this.opcionInicial = !this.opcionInicial;
    },
  },
};
</script>

<template>
  <div class="d-block fixed-top">
    <BarraNavegacion />
    <div class="container align-items-start">
      <br />
      <h3 class="listado">
        Listado de todos los servicios lingüisticos disponibles:
      </h3>
      <br />

      <div class="form-check ml-0">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          @click="cambioOpcion"
          :checked="opcionInicial"
          :disabled="opcionInicial"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Visualizar Servicios de Interpretación.
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          @click="cambioOpcion"
          :checked="!opcionInicial"
          :disabled="!opcionInicial"
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Visualizar Servicios de Traducción.
        </label>
      </div>
    </div>
    <br />
    <div v-if="this.opcionInicial">
     <!-- //Componente1 -->
    </div>
    <div v-else>
        <!-- //Componente2 -->
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-bottom: 1em;
  margin-left: 4em;
}
.form-check-label {
  justify-content: start;
}
</style>
