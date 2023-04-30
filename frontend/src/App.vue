<script>
// import InterfazInicio from './Interfaces/InterfazInicio.vue';
import InterfazServicios from './Interfaces/InterfazServicios.vue';
import {useEmpresaStore} from './stores/EmpresaStore.js';
export default {
  components: { InterfazServicios }, 
 
  beforeMount(){  
   useEmpresaStore().fetchEmpresas() ;
  }
};
  
</script>

<template>
  <InterfazServicios />
</template>

<style scoped>

</style>
