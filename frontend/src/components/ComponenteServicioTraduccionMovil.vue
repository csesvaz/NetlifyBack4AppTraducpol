<script>
import { mapActions, mapState } from "pinia";
import { useEmpresaStore } from "@/stores/EmpresaStore";
import ComponenteIdiomas from "@/components/ComponenteIdiomas.vue";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import Card from "primevue/card";
import ComponenteTipoDocumento from "@/components/ComponenteTipoDocumento.vue";
import ComponenteEmpresa from "@/components/ComponenteEmpresa.vue";

export default {
  components: {
    Button,
    Card,
    ComponenteEmpresa,
    ComponenteIdiomas,
    ComponenteTipoDocumento,
    Dialog,
  },
  data() {
    return {
      idiomaSeleccionado: "",
      tipoDocumentoSeleccionado: "",
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
    ...mapActions(useEmpresaStore, [
      "convertirBooleano",
      "getEmpresaDeServicio",
    ]),
    actualizarServiciosFiltradosPorIdioma(idioma) {
      if (idioma) {
        this.serviciosFiltrados = this.servicios.filter(
          (servicio) => servicio.idioma === idioma
        );
      } else {
        this.serviciosFiltrados = [...this.servicios];
      }
    },
    actualizarServiciosFiltradosPorTipoDocumento(tipoDocumento) {
      if (tipoDocumento) {
        this.serviciosFiltrados = this.servicios.filter(
          (servicio) => servicio.tipoDocumento === tipoDocumento
        );
      } else {
        this.serviciosFiltrados = [...this.servicios];
      }
    },
    async filtrarEmpresa(servicio) {
      this.empresaSeleccion = await this.getEmpresaDeServicio(servicio.id);
    },
  },

  beforeMount() {
    this.actualizarServiciosFiltradosPorIdioma();
    this.actualizarServiciosFiltradosPorTipoDocumento();
  },
};
</script>

<template>
  <div class="row">
    <p>
      &nbspBuscador por idioma
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Buscador
      por Tipo de Documento
    </p>
  </div>
  <div class="row">
    <ComponenteIdiomas
      :idiomaSeleccionado="idiomaSeleccionado"
      @idiomaSeleccionado="actualizarServiciosFiltradosPorIdioma($event)"
    />
    <ComponenteTipoDocumento
      ref="componenteTipoDocumento"
      :tipoDocumentoSeleccionado="tipoDocumentoSeleccionado"
      @tipoDocumentoSeleccionado="
        actualizarServiciosFiltradosPorTipoDocumento($event)
      "
    />
  </div>
  <div v-for="servicio in serviciosFiltrados">
    <div v-if="servicio.tipo == 'TRADUCCION'" class="row mb-12">
      <div class="card">
        <Card style="background-color: #e4e4d5">
          <template #content>
            <p>
              Idioma: <strong>{{ servicio.idioma }}</strong>
            </p>
            <p>
              Tipo de Documento
              <strong>{{ servicio.tipoDocumento }}</strong>
            </p>
            <p>
              Plazo de Entrega: <strong>{{ servicio.plazoEntrega }}</strong
              >&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Traducción Jurada:
              <strong>{{ convertirBooleano(servicio.traductorJurado) }}</strong>
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
                <ComponenteEmpresa :empresaEntrada="empresaSeleccion" />
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
