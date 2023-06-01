<script>
import ListadoServiciosInterpretacion from "../components/ListadoServiciosInterpretacion.vue";
import ListadoServiciosTraduccion from "../components/ListadoServiciosTraduccion.vue";
export default {
  components: {
    ListadoServiciosInterpretacion,
    ListadoServiciosTraduccion,
  }
};
</script>

<template>
<div class="container">
    <div class="row">
      <div class="col-12 col-md-6 mb-4">
        <h6>Seleccione gestión de Empresas</h6>
        <router-link class="btn btn-primary" to="/interfazGestionEmpresa">
          EMPRESA
        </router-link>
      </div>
      <div class="col-12 col-md-6 mb-4">
        <h6>Seleccione gestión de Servicios</h6>
        <router-link class="btn btn-primary" to="/interfazGestionServicios">
          Servicios
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row{
margin-top: 4vh;

}
</style>
