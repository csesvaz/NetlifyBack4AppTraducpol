<script>
import BarraNavegacion from "../components/BarraNavegacion.vue";
import ListadoServiciosInterpretacion from "../components/ListadoServiciosInterpretacion.vue";
import ListadoServiciosTraduccion from "../components/ListadoServiciosTraduccion.vue";
import { mapState, mapActions } from "pinia";
import { useEmpresaStore } from "../stores/EmpresaStore";
export default {
  components: {
    BarraNavegacion,
    ListadoServiciosInterpretacion,
    ListadoServiciosTraduccion,
  },
  computed: {
    ...mapState(useEmpresaStore, ["opcionInicial"]),
  },
  methods: {
    ...mapActions(useEmpresaStore, ["cambioOpcion"]),


  },
};
</script>

<template>
  <div class="d-block fixed-top">
    <BarraNavegacion />
  </div>
    <div class="container mt-3 align-items-start">
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
      <ListadoServiciosInterpretacion/>
    </div>
    <div v-else>
      <ListadoServiciosTraduccion/>
    </div>
 
</template>

<style scoped>
.container {
  margin-bottom: 1vw;
  margin-left: 4vw;
}
.form-check-label {
  justify-content: start;
}
:disabled{
 background-color: blue;
}
:disabled+label {
color: blue;
}
@media (max-width: 768px) {
  .container {
    margin-left: 1vw;
    margin-right: 1vw;
  }
  .busqueda {
    margin-left: 2vw;
  }

  span.col-4 {
    width: 80%;
  }
}
</style>
