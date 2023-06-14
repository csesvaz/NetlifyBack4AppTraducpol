<script>
import ComponenteEmpresas from "@/components/ComponenteEmpresas.vue";
import ComponenteEmpresaMovil from "@/components/ComponenteEmpresaMovil.vue";
import { mapState } from "pinia";
import { useEmpresaStore } from "@/stores/EmpresaStore";

export default {
  components: { ComponenteEmpresas, ComponenteEmpresaMovil },
  data() {
    return {
      isMobile: window.innerWidth < 576,
    };
  },
  computed: {
    ...mapState(useEmpresaStore, ["empresas"]),
  },
  methods: {
    calcularTamano() {
      this.isMobile = window.innerWidth < 576;
    },
  },
  mounted() {
    window.addEventListener("dimensionar", this.calcularTamano);
  },
  beforeDestroy() {
    window.removeEventListener("dimensionar", this.calcularTamano);
  },
};
</script>

<template>
  <div class="contenedor">
    <br />
    <div class="row mt-3">
      <h3 class="IntroduccionAyuda">
        Consulta de datos de Empresas de Servicios Lingüísticos.
      </h3>
    </div>
  </div>
  <div v-if="!isMobile">
    <ComponenteEmpresas />
  </div>
  <div v-else v-for="empresa in empresas" :key="empresa.id">
    <ComponenteEmpresaMovil :empresa="empresa" />
  </div>
</template>

<style scoped>
.contenedor {
  margin-bottom: 1vh;
  margin-left: 2vw;
}
@media (max-width: 768px) {
  .contenedor {
    margin-top: 4vh;
    margin-left: 2vw;
  }
}
</style>
