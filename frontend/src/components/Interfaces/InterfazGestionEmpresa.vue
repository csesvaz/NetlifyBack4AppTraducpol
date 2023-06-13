<script>
import ListadoEmpresas from "@/components/ListadoEmpresas.vue";
export default {
  components: { ListadoEmpresas },
}
</script>

<template>
  <div class="creacion row mb-12 mt-5 ms-3">
    <div class="col-sm-9 col-md-3">
      <h4>Creación de nueva Empresa</h4>
    </div>
    <div class="col-sm-3 col-md-2 text-md-end mt-2 ">
      <router-link class="btn btn-primary" to="/altaEmpresa">
        Nueva Empresa
      </router-link>
    </div>
</div>
  <div class="row ms-4 mt-4 me-3 listado">
    <ListadoEmpresas/>
  </div>


</template>

<style scoped>
@media (max-width: 768px) {
.creacion { 
  margin-top: 7vh!important;
}}
</style>
