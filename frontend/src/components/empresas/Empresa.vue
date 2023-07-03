<script>
import {mapActions} from "pinia";
import {useEmpresaStore} from "@/stores/EmpresaStore.js";
import Card from "primevue/card";
import Button from "primevue/button";
import ComponenteEmpresa from "@/components/empresas/DetallesEmpresa.vue";

export default {
  components: {Button, Card, ComponenteEmpresa},
  props: ["empresa", "esAdministrador"],
  emits: ["verServicios"],
  data() {
    return {
      datosEmpresa: undefined,
    };
  },
  methods: {
    ...mapActions(useEmpresaStore, ["deleteEmpresa"]),
    verServicios(empresa) {
      this.$emit("verServicios", empresa);
      
    },
    modificarEmpresa(empresa) {
      this.$router.push({name: 'modificacionEmpresa', params: {id: empresa.id}});
    }
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
        <h4>Email: {{ empresa.email }}</h4>
        <div class="row d-flex justify-content-center flex-wrap gap-2">
          <Button
              :title="'Visualizar servicios.'"
              class="col-lg-3 col-md-12"
              icon="pi pi-eye"
              label="Ver servicios"
              type="button"
              @click="verServicios(empresa)"
          />
          <Button
              v-if="esAdministrador"
              :title="'Editar'"
              class="col-lg-3 col-md-12"
              icon="pi pi-pencil"
              label="Editar"
              type="button"
              @click="modificarEmpresa(empresa)"
          />
          <Button
              v-if="esAdministrador"
              :title="'Borrar'"
              class="col-lg-3 col-md-12"
              icon="pi pi-trash"
              label="Borrar"
              type="button"
              @click="deleteEmpresa(empresa)"
          />
        </div>
      </template>
    </Card>
  </div>
  <br/>
</template>

<style scoped>
</style>
