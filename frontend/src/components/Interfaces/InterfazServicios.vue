<script>
import ComponenteServicioInterpretacionMovil from "@/components/ComponenteServicioInterpretacionMovil.vue";
import ComponenteServicioTraduccionMovil from "@/components/ComponenteServicioTraduccionMovil.vue";
import ListadoServiciosInterpretacionVisualizacion from "@/components/Listados/ListadoServiciosInterpretacionVisualizacion.vue";
import ListadoServiciosTraduccionVisualizacion from "@/components/Listados/ListadoServiciosTraduccionVisualizacion.vue";
import {mapActions, mapState} from "pinia";
import {useEmpresaStore} from "@/stores/EmpresaStore";

export default {
  components: {
    ListadoServiciosInterpretacionVisualizacion,
    ListadoServiciosTraduccionVisualizacion,
    ComponenteServicioInterpretacionMovil,
    ComponenteServicioTraduccionMovil
  },
  data() {
    return {
      esMovil: window.innerWidth < 576,
    };
  },
  computed: {
    ...mapState(useEmpresaStore, ["opcionInicial"]),
  },
  methods: {
    ...mapActions(useEmpresaStore, ["cambioOpcion"]),
    calcularTamano() {
      this.esMovil = window.innerWidth < 576;
    },
  },
  mounted() {
    window.addEventListener("dimensionar", this.calcularTamano);
  },
  beforeDestroy() {
    window.removeEventListener("dimensionar", this.calcularTamano);
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
          :checked="opcionInicial"
          :disabled="opcionInicial"
          class="form-check-input"
          name="flexRadioDefault"
          type="radio"
          @click="cambioOpcion"
      />
      <label class="form-check-label" for="flexRadioDefault1">
        <h6>Visualizar Servicios de Interpretación.</h6>
      </label>
    </div>
    <div class="form-check">
      <input
          id="flexRadioDefault2"
          :checked="!opcionInicial"
          :disabled="!opcionInicial"
          class="form-check-input"
          name="flexRadioDefault"
          type="radio"
          @click="cambioOpcion"
      />
      <label class="form-check-label" for="flexRadioDefault2">
        <h6>Visualizar Servicios de Traducción.</h6>
      </label>
    </div>
  </div>
  <br/>
  <div v-if="esMovil">
    <div v-if="this.opcionInicial">
      <ComponenteServicioInterpretacionMovil/>
    </div>
    <div v-else>
      <ComponenteServicioTraduccionMovil/>
    </div>
  </div>
  <div v-else>
    <div v-if="this.opcionInicial">
      <ListadoServiciosInterpretacionVisualizacion/>
    </div>
    <div v-else>
      <ListadoServiciosTraduccionVisualizacion/>
    </div>
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
