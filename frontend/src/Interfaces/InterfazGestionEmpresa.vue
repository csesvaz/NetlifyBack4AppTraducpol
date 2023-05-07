<script>
import BarraNavegacion from "../components/BarraNavegacion.vue";
import ListadoEmpresas from "../components/ListadoEmpresas.vue";
export default {
  components: { BarraNavegacion, ListadoEmpresas},
};
</script>

<template>
<div class="d-block fixed-top">
  <BarraNavegacion />
  <div class="row mb-12 mt-4 ms-3">
    <div class="col-sm-9 col-md-6">
      <h6 class="mb-0">Creación de nueva Empresa</h6>
    </div>
    <div class="col-sm-3 col-md-2 text-md-end mt-2 mt-md-0">
      <router-link class="btn btn-primary" to="/altaEmpresa">
        Nueva Empresa
      </router-link>
    </div>
  </div>
  <div class="row mt-4 ms-4 me-3">
    <ListadoEmpresas />
  </div>
</div>

</template>

<style scoped></style>
