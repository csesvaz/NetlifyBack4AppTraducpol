<script>
import { mapActions, mapState } from "pinia";
import { useEmpresaStore } from "../stores/EmpresaStore";

import ComponenteEmpresa from "./ComponenteEmpresa.vue";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
export default {
  computed: {
    ...mapState(useEmpresaStore, ["empresas", "servicios"]),
  },
  methods: {
    ...mapActions(useEmpresaStore, ["convertirBooleano", "deleteServicio"]),
    eliminarServicio(id) {
      this.deleteServicio(id);
    },
    empresaSeleccionada(empresa) {
      this.empresaSeleccion = empresa;
    },
  },
  data() {
    return {
      visible: false,
      empresaSeleccion: null,
    };
  },
  components: { Button, Dialog, ComponenteEmpresa },
};
</script>
<template>
  <div class="container-fluid mt-4">
    <h3>SERVICIOS DE TRADUCCIÓN</h3>
    <div class="row mb-12">
      <span class="col-2 pt-3 pb-3 bg-primary border border-dark">Empresa</span>
      <span class="col-2 bg-primary border border-dark">Idioma</span>
      <span class="col-2 bg-primary border border-dark">Tipo de Documento</span>
      <span class="col-2 bg-primary border border-dark">Plazo de Entrega</span>
      <span class="col-2 bg-primary border border-dark">Traducción Jurada</span>
      <!-- <span v-if="$route.path === '/alta'" class="col-1 mt-2 lapiz h5"
        >Editar</span
      > -->
    </div>
    <!-- v-for de los servicios de Traducción-->
    <div v-for="empresa in empresas" :key="empresa.id">
      <div v-for="servicio in empresa.servicios" :key="servicio.id">
        <div v-if="servicio.tipo == 'TRADUCCION'" class="row mb-12">
          <span class="col-2 bg-ligth border border-dark">{{
            empresa.nombre
          }}</span>
          <span class="col-2 bg-ligth border border-dark">{{
            servicio.idioma
          }}</span>
          <span class="col-2 bg-ligth border border-dark">{{
            servicio.tipoDocumento
          }}</span>
          <span class="col-2 bg-ligth border border-dark">{{
            servicio.plazoEntrega
          }}</span>
          <span class="col-2 bg-ligth border border-dark">{{
            convertirBooleano(servicio.traductorJurado)
          }}</span>
          <span v-if="$route.path === '/servicio'" class="col-1 mt-2">
            <Button
              label="Ver"
              icon="pi pi-eye"
              @click="(visible = true), empresaSeleccionada(empresa)"
            />
            <Dialog
              v-model:visible="visible"
              modal
              header="Dartos de la empresa"
              :style="{ width: '50vw' }"
              :breakpoints="{ '960px': '75vw', '641px': '100vw' }"
            >
              <ComponenteEmpresa :empresaEntrada="empresaSeleccion" />
            </Dialog>
          </span>
          <span
            v-if="$route.path === '/interfazGestionServicios'"
            class="col-1 mt-2"
          >
            <router-link
              :to="{
                name: 'modificacionServicioTraduccion',
                params: { id: servicio.id },
              }"
            >
              <fa class="lapiz" icon="fa-solid fa-pencil" size="2xl"
            /></router-link>
            <fa
              class="bin"
              icon="fa-solid fa-trash-arrow-up"
              size="2xl"
              style="color: #c01c28"
              @click="eliminarServicio(servicio.id)"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  width: 100%;
  margin-left: 2%;
}
span {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.col-2 {
  width: 17%;
  text-align: center;
}

.col-1 {
  width: 10%;
  text-align: center;
}

.col-3 {
  width: 25%;
  text-align: center;
}

.lapiz {
  color: rgb(110, 60, 60);
}
.bin {
  margin-left: 1vw;
  cursor: pointer;
  margin-right: 1%;
}
@media (max-width: 768px) {
  .container-fluid {
    width: 100%;
    margin-left: 2%;
    font-size: 0.7rem;
  }
}
</style>
