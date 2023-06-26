<script>
import {mapActions, mapState} from "pinia";
import {useEmpresaStore} from "@/stores/EmpresaStore.js";
import ListadoServicios from "@/components/servicios/ListadoServicios.vue";
import VisualizacionServicios from "@/components/servicios/VisualizacionServicios.vue";

export default {
  components: {
    VisualizacionServicios,
    ListadoServicios,
  },
  data() {
    return {
      tipoServicio: "INTERPRETACION"
    }
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
  <div class="row inicial ms-4">
    <div class="col-6 col-md-3">
      <h6>Creación de nuevo Servicio de Interpetación</h6>
    </div>
    <div class="col-2 col-md-2">
      <router-link class="btn btn-primary" to="/altaServicioInterpretacion">
        Servicio Interpertación
      </router-link
      >
    </div>
  </div>
  <div class="row mt-2 ms-4">
    <div class="col-6 col-md-3">
      <h6>Creación de nuevo Servicio de Traducción</h6>
    </div>
    <div class="col-2 col-md-2">
      <router-link class="btn btn-primary" to="/altaServicioTraduccion">
        Servicio Traducción
      </router-link
      >
    </div>
  </div>
  <VisualizacionServicios :esAdministrador="true"></VisualizacionServicios>
</template>

<style scoped>
.container {
  margin-bottom: 1vh;
  margin-left: 4vw;
}

.inicial {
  margin-top: 10vh;
}
</style>
