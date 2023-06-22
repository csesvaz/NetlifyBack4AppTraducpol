<script>
import ListadoServiciosInterpretacionEdicion from "@/components/Listados/ListadoServiciosInterpretacionEdicion.vue";
import ListadoServiciosTraduccionEdicion from "@/components/Listados/ListadoServiciosTraduccionEdicion.vue";
import {mapActions, mapState} from "pinia";
import {useEmpresaStore} from "@/stores/EmpresaStore";

export default {
  components: {
    ListadoServiciosInterpretacionEdicion,
    ListadoServiciosTraduccionEdicion,
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

  <div class="container align-items-start">
    <br/>
    <h3 class="listado">
      Listado de todos los servicios lingüisticos disponibles:
    </h3>

    <div class="form-check ml-0">
      <input
          id="flexRadioDefault3"
          :checked="opcionInicial"
          :disabled="opcionInicial"
          class="form-check-input"
          name="flexRadioDefault"
          type="radio"
          @click="cambioOpcion"
      />
      <label class="form-check-label" for="flexRadioDefault3">
        Visualizar Servicios de Interpretación.
      </label>
    </div>
    <div class="form-check">
      <input
          id="flexRadioDefault4"
          :checked="!opcionInicial"
          :disabled="!opcionInicial"
          class="form-check-input"
          name="flexRadioDefault"
          type="radio"
          @click="cambioOpcion"
      />
      <label class="form-check-label" for="flexRadioDefault4">
        Visualizar Servicios de Traducción.
      </label>
    </div>
  </div>
  <div v-if="opcionInicial">
    <ListadoServiciosInterpretacionEdicion/>
  </div>
  <div v-else>
    <ListadoServiciosTraduccionEdicion/>
  </div>
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
