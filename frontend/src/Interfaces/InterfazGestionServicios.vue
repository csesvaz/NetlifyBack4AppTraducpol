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
  <br>
  <div class="row mb-12 mt-4 ms-3">
    <div class="col-2">
      <h6>Creación de nuevo Servicio de Interpetación</h6>
    </div>
    <div class="col-2">
      <router-link class="btn btn-primary" to="/altaServicioInterpretacion">
        Servicio Interpertación</router-link
      >
    </div>
    <div class="col-1"></div>
    <div class="col-2">
      <h6>Creación de nuevo Servicio de Traducción</h6>
    </div>
    <div class="col-2">
      <router-link class="btn btn-primary" to="/altaServicioTraduccion">
        Servicio Traducción</router-link
      >
    </div>
  </div>

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
        id="flexRadioDefault3"
        @click="cambioOpcion"
        :checked="opcionInicial"
        :disabled="opcionInicial"
      />
      <label class="form-check-label" for="flexRadioDefault3">
        Visualizar Servicios de Interpretación.
      </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault4"
        @click="cambioOpcion"
        :checked="!opcionInicial"
        :disabled="!opcionInicial"
      />
      <label class="form-check-label" for="flexRadioDefault4">
        Visualizar Servicios de Traducción.
      </label>
    </div>
  </div>
  <div v-if="this.opcionInicial">
    <ListadoServiciosInterpretacion  />
  </div>
  <div v-else>
    <ListadoServiciosTraduccion  />
  </div>
</template>

<style scoped>
.container {
  margin-bottom: 1em;
  margin-left: 4em;
}
.row {
  margin-top: 3em;
  margin-left: 4em;
}
</style>
