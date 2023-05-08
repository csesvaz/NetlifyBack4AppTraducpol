<script>
import BarraNavegacion from "../components/BarraNavegacion.vue";
import ComponenteEmpresa from "../components/ComponenteEmpresa.vue";
import ComponenteEmpresas from "../components/ComponenteEmpresas.vue";
import { mapState } from "pinia";
import { useEmpresaStore } from "../stores/EmpresaStore";

export default {
  components: { BarraNavegacion, ComponenteEmpresas },
  computed: {
    ...mapState(useEmpresaStore, ["empresas"]),
  }
}
</script>

<template>
  <div class="d-block fixed-top">
    <BarraNavegacion />
  </div>
    <div class="contenedor">
      <br />
      <div class="row mt-3">
        <h3 class="IntroduccionAyuda">
          Consulta de datos de Empresas de Servicios Lingüísticos.
        </h3>
      </div>
    </div>
      <ComponenteEmpresas/>

  
</template>
<style scoped>
.contenedor {
  margin-bottom: 1em;
  margin-left: 2em;
}
</style>
