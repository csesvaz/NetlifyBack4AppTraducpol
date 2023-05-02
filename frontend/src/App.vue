<script>
import InterfazInicio from './Interfaces/InterfazInicio.vue';
// import InterfazServicios from './Interfaces/InterfazServicios.vue';
import {useEmpresaStore} from './stores/EmpresaStore.js';
export default {
  components: { InterfazInicio }, 
 
  beforeMount(){  
   useEmpresaStore().fetchEmpresas() ;
  }
};
  
</script>

<template>
  <InterfazInicio />
</template>

<style scoped>

</style>
