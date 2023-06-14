<script>
import { mapState, mapActions } from "pinia";
import { useEmpresaStore } from "@/stores/EmpresaStore";
import ComponenteIdiomas from "./ComponenteIdiomas.vue";

import Card from "primevue/card";
import ComponenteProvincias from "./ComponenteProvincias.vue";
export default {
  components: { Card, ComponenteIdiomas, ComponenteProvincias },
  data() {
    return {
      idiomaSeleccionado: "",
      provinciaSeleccionada: "",
      serviciosFiltrados: [],
    };
  },
  computed: {
    ...mapState(useEmpresaStore, ["servicios"]),
  },
  methods: {
    ...mapActions(useEmpresaStore, ["convertirBooleano"]),
    actualizarServiciosFiltradosPorIdioma(idioma) {
      if (idioma) {
        this.serviciosFiltrados = this.servicios.filter(
          (servicio) => servicio.idioma === idioma
        );
      } else {
        this.serviciosFiltrados = [...this.servicios];
      }
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
      @idiomaSeleccionado="actualizarServiciosFiltradosPorIdioma($event)
      "
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
