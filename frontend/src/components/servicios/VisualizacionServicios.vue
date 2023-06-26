<script>
import ServicioInterpretacion from "@/components/servicios/ListadoServicios.vue";
import ListadoServicios from "@/components/servicios/ListadoServicios.vue";

export default {
  components: {ListadoServicios, ServicioInterpretacion},
  props: ["esAdministrador"],
  data() {
    return {
      tipoServicio: "INTERPRETACION",
    }
  },
};
</script>

<template>
  <div class="container mt-3 align-items-start">
    <br/>
    <h3 class="listado mt-4">
      Listado de todos los servicios lingüisticos disponibles:
    </h3>
    <br/>
    <div class="form-check ml-0">
      <input
          id="flexRadioDefault1"
          v-model="tipoServicio"
          class="form-check-input"
          name="flexRadioDefault"
          type="radio"
          value="INTERPRETACION"
      />
      <label class="form-check-label" for="flexRadioDefault1">
        <h6>Visualizar Servicios de Interpretación.</h6>
      </label>
    </div>
    <div class="form-check">
      <input
          id="flexRadioDefault2"
          v-model="tipoServicio"
          class="form-check-input"
          name="flexRadioDefault"
          type="radio"
          value="TRADUCCION"
      />
      <label class="form-check-label" for="flexRadioDefault2">
        <h6>Visualizar Servicios de Traducción.</h6>
      </label>
    </div>
  </div>
  <br/>
  <div>
    <ListadoServicios :esAdministrador="esAdministrador" :tipoServicio="tipoServicio"/>
  </div>
</template>

<style scoped>
.container {
  margin-bottom: 1vw;
  margin-left: 4vw;
}

.form-check-label {
  justify-content: start;
  font-size: x-large;
}

:disabled {
  background-color: blue;
}

:disabled + label {
  color: blue;
}

@media (max-width: 768px) {
  .container {
    margin-left: 1vw;
    margin-right: 1vw;
    margin-top: 4vh !important;
    margin-bottom: -2vh;
  }

  h3 {
    font-size: 1.5vh;
  }
}
</style>
