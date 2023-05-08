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
  props: ["filtrarServicio"],
  methods: {
    ...mapActions(useEmpresaStore, ["convertirBooleano", "deleteServicio"]),
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
    <h3>SERVICIOS DE INTERPRETACIÓN.</h3>
    <div class="row mb-12">
      <span class="col-2 pt-3 pb-3 bg-primary border border-dark"
        >Empresa
      </span>
      <span class="col-2 bg-primary border border-dark">Idioma </span>
      <span class="col-1 bg-primary border border-dark">Hora Inicio </span>
      <span class="col-1 bg-primary border border-dark">Hora Fin </span>
      <span class="col-2 bg-primary border border-dark">Provincia </span>
      <span class="col-1 bg-primary border border-dark">Servicio ONLINE </span>
      <span v-if="$route.path === '/alta'" class="col-1 mt-3 lapiz h5"
        >Editar</span
      >
    </div>
    <!-- Aqui va un v-for de los servicios de Interpretacion-->

    <div v-for="empresa in empresas" :key="empresa.id">
      <div v-for="servicio in empresa.servicios" :key="servicio.id">
        <div v-if="servicio.tipo == 'interpretacion'" class="row mb-12">
          <span class="col-2 bg-ligth border border-dark">{{
            empresa.nombre
          }}</span>
          <span class="col-2 bg-ligth border border-dark">{{
            servicio.idioma
          }}</span>
          <span class="col-1 bg-ligth border border-dark">{{
            servicio.horarioInicio
          }}</span>
          <span class="col-1 bg-ligth border border-dark">{{
            servicio.horarioFin
          }}</span>
          <span class="col-2 bg-ligth border border-dark">{{
            servicio.provincia
          }}</span>
          <span class="col-1 bg-ligth border border-dark">{{
            convertirBooleano(servicio.servicioOnline)
          }}</span>
          <span v-if="$route.path === '/servicio'" class="col-2 mt-2">
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
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  width: 100%;
  margin-left: 2%;
  overflow: hidden;
}
span {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.bin {
  margin-left: 1vw;
  cursor: pointer;
}
.col-2 {
  width: 17%;
}

.col-1 {
  width: 10%;
}

.lapiz {
  color: rgb(110, 60, 60);
}
@media (max-width: 768px) {
  .container-fluid {
    width: 100%;
    margin-left: 2%;
    font-size: 0.7rem;
  }
}
</style>
