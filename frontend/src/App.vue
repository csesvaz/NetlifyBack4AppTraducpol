<script>
import {useEmpresaStore} from './stores/EmpresaStore.js';
import BarraNavegacion from './components/BarraNavegacion.vue';
export default {
  components: { BarraNavegacion },
    beforeMount() {
        useEmpresaStore().fetchEmpresas();
        useEmpresaStore().fetchServicios();
    },
};
</script>

<template>
  <div class="d-block fixed-top">
    <BarraNavegacion />
  </div>
  <router-view></router-view>
</template>

<style scoped>
</style>