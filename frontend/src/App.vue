<script>
import {useEmpresaStore} from "@/stores/EmpresaStore.js";
import {mapActions} from "pinia";
import BarraNavegacion from "@/components/BarraNavegacion.vue";

export default {
  components: {BarraNavegacion},
  methods: {
    ...mapActions(useEmpresaStore, ["fetchEmpresas", "fetchServicios"]),
  },
  beforeMount() {
    this.fetchEmpresas();
    this.fetchServicios();
  },

};
</script>

<template>
  <div class="d-block fixed-top">
    <BarraNavegacion/>
  </div>
  <router-view></router-view>
</template>

<style scoped></style>
