<script>
import {mapActions, mapState} from "pinia";
import {useEmpresaStore} from "@/stores/EmpresaStore";
import ComponenteEmpresa from "@/components/ComponenteEmpresa.vue";
import Button from "primevue/button";
import Dialog from "primevue/dialog";

export default {
  components: {Button, Dialog, ComponenteEmpresa},
  data() {
    return {
      visible: false,
      empresaSeleccion: null,
    };
  },
  computed: {
    ...mapState(useEmpresaStore, ["empresas", "servicios"]),
  },
  methods: {
    ...mapActions(useEmpresaStore, [
      "convertirBooleano",
      "getServicios",
      "deleteServicio",
    ]),
    eliminarServicio(id) {
      this.deleteServicio(id);
    },
    empresaSeleccionada(empresa) {
      this.empresaSeleccion = empresa;
    },
  },
};
</script>

<template>
  <div class="container mt-4">
    <h3>SERVICIOS DE INTERPRETACIÓN.</h3>
    <div class="row mb-12">
      <span class="col-2 pt-3 pb-3 bg-primary border border-dark"
      >Empresa
      </span>
      <span class="col-2 bg-primary border border-dark">Idioma </span>
      <span class="col-1 bg-primary border border-dark">Hora Inicio </span>
      <span class="col-1 bg-primary border border-dark">Hora Fin </span>
      <span class="col-2 bg-primary border border-dark">Provincia </span>
      <span class="col-2 bg-primary border border-dark">Servicio ONLINE </span>
    </div>
    <div v-for="empresa in empresas" :key="empresa.id">
      <div v-for="servicio in empresa.servicios" :key="servicio.id">
        <div v-if="servicio.tipo == 'INTERPRETACION'" class="row mb-12">
          <span class="col-2 bg-ligth border border-dark">{{
              empresa.nombre
            }}</span>
          <span class="col-2 bg-ligth border border-dark">{{
              servicio.idioma
            }}</span>
          <span class="col-1 bg-ligth border border-dark">{{
              servicio.horarioInicioServicio
            }}</span>
          <span class="col-1 bg-ligth border border-dark">{{
              servicio.horarioFinServicio
            }}</span>
          <span class="col-2 bg-ligth border border-dark">{{
              servicio.provincia
            }}</span>
          <span class="col-2 bg-ligth border border-dark">{{
              convertirBooleano(servicio.servicioOnline)
            }}</span>
          <span v-if="$route.path === '/servicio'" class="col-2 mt-2">
            <Button
                icon="pi pi-eye"
                label="Ver"
                @click="(visible = true), empresaSeleccionada(empresa)"
            />
            <Dialog
                v-model:visible="visible"
                :breakpoints="{ '960px': '75vw', '641px': '100vw' }"
                :style="{ width: '50vw' }"
                header="Datos de la empresa"
                modal
            >
              <ComponenteEmpresa :empresaEntrada="empresaSeleccion"/>
            </Dialog>
          </span>
          <span
              v-if="$route.path === '/interfazGestionServicios'"
              class="col-1 mt-2"
          >
            <router-link
                :to="{
                name: 'modificacionServicioInterpretacion',
                params: { id: servicio.id },
              }"
            >
              <font-awesome-icon class="lapiz" icon="fa-solid fa-pencil" size="2xl"/>
            </router-link>
            <font-awesome-icon
                class="bin"
                icon="fa-solid fa-trash-alt"
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

.lapiz {
  cursor: pointer;
  color: rgb(110, 60, 60);
}

.col-2 {
  width: 17%;
  text-align: center;
}

.col-1 {
  width: 10%;
  text-align: center;
}


@media (max-width: 768px) {
  h3 {
    font-size: 2vh;
  }

  .col-2 {
    font-size: 3vw;
  }

  .col-1 {
    font-size: 3vw;
  }

  .bin {
    font-size: large;
  }

  .lapiz {
    font-size: large;
  }
}
</style>
