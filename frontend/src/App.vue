<script>
import {useEmpresaStore} from './stores/EmpresaStore.js';
export default {
    beforeMount() {
        useEmpresaStore().fetchEmpresas();
        useEmpresaStore().fetchServicios();
    },
};
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
</style>