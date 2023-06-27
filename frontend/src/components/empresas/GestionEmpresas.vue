<script>
import {mapActions, mapState} from "pinia";
import {useEmpresaStore} from "@/stores/EmpresaStore.js";
import ListadoEmpresas from "@/components/empresas/ListadoEmpresas.vue";

export default {
  components: {ListadoEmpresas},
  computed: {
    ...mapState(useEmpresaStore, ["empresas"]),
  },
  methods: {
    ...mapActions(useEmpresaStore, ["deleteEmpresa"]),
  },
};
</script>

<template>
  <div class="container row mb-2 mt-5 ms-3">
    <div class="col-sm-9 col-md-3 mt-4">
      <h4>Creación de nueva Empresa</h4>
    </div>
    <div class="col-sm-3 col-md-2 text-md-end mt-3">
      <router-link class="btn btn-primary" to="/altaEmpresa">
        Nueva Empresa
      </router-link>
    </div>
  </div>
  <div class="row ms-4 mt-4 me-3 listado">
    <ListadoEmpresas :esAdministrador="true"/>
  </div>
</template>

<style scoped>
</style>
