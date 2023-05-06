<script>
import BarraNavegacion from "../components/BarraNavegacion.vue";
import ComponenteEmpresa from "../components/ComponenteEmpresa.vue";
import { mapState } from "pinia";
import { useEmpresaStore } from "../stores/EmpresaStore";

export default {
  components: { BarraNavegacion, ComponenteEmpresa },
  computed: {
    ...mapState(useEmpresaStore, ["empresas"]),
  },
  data() {
    return {
      empresaSelect: "Seleccione una empresa",
    };
  },
  }
</script>

<template>
  <div class="d-block fixed-top">
    <BarraNavegacion />
    <div class="contenedor">
      <br />
      <div class="row">
        <h3 class="IntroduccionAyuda">
          Consulta de datos de Empresa de Servicios Lingüísticos
        </h3>
      </div>
      <div class="row">
        <div class="col-8">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            v-model="empresaSelect"
          >
            <option disable selected="">Seleccione una empresa</option>
            <option
              v-for="empresa in empresas"
              :key="empresa.id"
              :value="empresa"
            >
              {{ empresa.nombre }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <ComponenteEmpresa :empresa="empresaSelect" />
  </div>
</template>
<style scoped>
.contenedor {
  margin-bottom: 1em;
  margin-left: 2em;
}
</style>
