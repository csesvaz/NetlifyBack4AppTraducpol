<script>
import { mapActions } from "pinia";
import { useEmpresaStore } from "../stores/EmpresaStore";
import Card from "primevue/card";
import Button from "primevue/button";
import ComponenteEmpresa from "@/components/ComponenteEmpresa.vue";
import Dialog from "primevue/dialog";
export default {
  props: ["empresa"],
  data() {
    return {
      visible: false,
      datosEmpresa: undefined,
    };
  },
  components: { Button, Card, ComponenteEmpresa, Dialog },
  methods: {
    ...mapActions(useEmpresaStore, ["getEmpresa"]),
    async verServicios(empresa) {
      this.visible = true;
      this.datosEmpresa = await this.getEmpresa(empresa.id);
    },
  },
};
</script>

<template>
  <div class="card">
    <Card style="background-color: #d5d9e4">
      <template #title>{{ empresa.nombre }}</template>
      <template #content>
        <h4>Nombre de la empresa: {{ empresa.nombre }}</h4>
        <h4>Dirección: {{ empresa.direccion }}</h4>
        <h4>Teléfono: {{ empresa.telefono }}</h4>
        <h4>email: {{ empresa.email }}</h4>
        <div class="card flex justify-content-center">
          <Button label="Ver servicios"
            class="botonEmpresa p-d-flex p-jc-center"
            :title="'Visualizar servicios.'"
            icon="pi pi-eye"
            type="button"
            @click="verServicios(empresa)"
          />
        </div>
      </template>
    </Card>
    <Dialog
      v-model:visible="visible"
      :breakpoints="{ '960px': '75vw', '641px': '100vw' }"
      :style="{ width: '50vw' }"
      header="Datos de la empresa"
      modal
    >
      <ComponenteEmpresa :empresaEntrada="datosEmpresa" />
    </Dialog>
  </div>
  <br />
</template>

<style scoped>
.botonEmpresa {
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
