<script>
import Empresa from "@/components/empresas/Empresa.vue";
import {mapActions, mapState} from "pinia";
import {useEmpresaStore} from "@/stores/EmpresaStore.js";
import ComponenteEmpresa from "@/components/empresas/DetallesEmpresa.vue";
import Dialog from "primevue/dialog";
import Cargando from "@/components/Cargando.vue";

export default {
  components: {Cargando, ComponenteEmpresa, Empresa, Dialog},
  props: ["esAdministrador"],
  data() {
    return {
      visible: false,
      datosEmpresa: undefined,
      cargadosDatos: false,
    }
  },
  computed: {
    ...mapState(useEmpresaStore, ["empresas"]),
  },
  methods: {
    ...mapActions(useEmpresaStore, ["getEmpresa"]),
    async verServicios(empresa) {
      this.visible = true;
      this.datosEmpresa = await this.getEmpresa(empresa.id);
      this.cargadosDatos = true;

    },
  }
};
</script>

<template>
  <div>
    <div v-for="empresa in empresas" :key="empresa.id">
      <Empresa :empresa="empresa" :esAdministrador="esAdministrador" @verServicios="verServicios"/>
    </div>
    <Dialog
        v-model:visible="visible"
        :breakpoints="{ '960px': '75vw', '641px': '100vw' }"
        :style="{ width: '50vw' }"
        header="Datos de la empresa"
        modal
    >

      <ComponenteEmpresa v-if="cargadosDatos" :empresaEntrada="datosEmpresa"/>
      <Cargando v-else/>
    </Dialog>
  </div>
</template>

<style scoped>
</style>
