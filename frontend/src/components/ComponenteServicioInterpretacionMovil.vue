<script>
import {mapActions, mapState} from "pinia";
import {useEmpresaStore} from "@/stores/EmpresaStore";
import Button from "primevue/button";
import Card from "primevue/card";
import ComponenteEmpresa from "./ComponenteEmpresa.vue";
import ComponenteIdiomas from "./ComponenteIdiomas.vue";
import ComponenteProvincias from "./ComponenteProvincias.vue";
import Dialog from "primevue/dialog";

export default {
  components: {Button, Card, ComponenteEmpresa, ComponenteIdiomas, ComponenteProvincias, Dialog},
  data() {
    return {
      idiomaSeleccionado: "",
      provinciaSeleccionada: "",
      serviciosFiltrados: [],
      visible: false,
      empresaSeleccion: {
        id: null,
        nombre: null,
        direccion: null,
        telefono: null,
        email: null,
      },
    };
  },
  computed: {
    ...mapState(useEmpresaStore, ["servicios"]),
  },
  methods: {
    ...mapActions(useEmpresaStore, ["convertirBooleano",
      "getEmpresaDeServicio"]),
    actualizarServiciosFiltradosPorIdioma(idioma) {
      if (idioma) {
        this.serviciosFiltrados = this.servicios.filter(
            (servicio) => servicio.idioma === idioma
        );
      } else {
        this.serviciosFiltrados = [...this.servicios];
      }
    },
    async filtrarEmpresa(servicio) {
      this.empresaSeleccion = await this.getEmpresaDeServicio(servicio.id);
    },
    actualizarServiciosFiltradosPorProvincia(provincia) {
      if (provincia) {
        this.serviciosFiltrados = this.servicios.filter(
            (servicio) => servicio.provincia === provincia
        );
      } else {
        this.serviciosFiltrados = [...this.servicios];
      }
    },
  },
  beforeMount() {
    this.actualizarServiciosFiltradosPorIdioma();
  },
};
</script>

<template>
  <div class="row">
    <p>
      &nbspBuscador por idioma
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
      Buscador por provincia
    </p>
  </div>
  <div class="row">
    <ComponenteIdiomas
        :idiomaSeleccionado="idiomaSeleccionado"
        @idiomaSeleccionado="actualizarServiciosFiltradosPorIdioma($event)"
    />
    <ComponenteProvincias
        :provinciaSeleccionada="provinciaSeleccionada"
        @provinciaSeleccionada="actualizarServiciosFiltradosPorProvincia($event)"
    />
  </div>
  <div v-for="servicio in serviciosFiltrados">
    <div v-if="servicio.tipo == 'INTERPRETACION'" class="row mb-12">
      <div class="card">
        <Card style="background-color: #e4e4d5">
          <template #content>
            <p>
              Idioma: <strong>{{ servicio.idioma }}</strong>
            </p>
            <p>
              Hora de Inicio:
              <strong>{{ servicio.horarioInicioServicio }}</strong>
              &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Hora de Fin:
              <strong>{{ servicio.horarioFinServicio }}</strong>
            </p>
            <p>
              Provincia: <strong>{{ servicio.provincia }}</strong
            >&nbsp&nbsp&nbsp servicioOnline:
              <strong>{{ convertirBooleano(servicio.servicioOnline) }}</strong>
            </p>
            <div class="card flex justify-content-center">
              <Button
                  icon="pi pi-external-link"
                  label="Mostrar Empresa"
                  @click="(visible = true), filtrarEmpresa(servicio)"
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
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  margin-bottom: 1vh;
}

p {
  font-size: 1.5vh;
}

strong {
  font-size: 1.5vh;
}
</style>
