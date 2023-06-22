<script>
import Calendar from "primevue/calendar";
import { mapActions, mapState } from "pinia";
import { useEmpresaStore } from "@/stores/EmpresaStore";
import ComponenteIdiomas from "@/components/ComponenteIdiomas.vue";
import ComponentePlazoEntrega from "@/components/ComponentePlazoEntrega.vue";
import ComponenteTipoDocumento from "@/components/ComponenteTipoDocumento.vue";

export default {
  components: {
    Calendar,
    ComponentePlazoEntrega,
    ComponenteTipoDocumento,
    ComponenteIdiomas,
  },
  data() {
    return {
      empresas: [],
      servicio: {
        tipo: "TRADUCCION",
        idioma: "",
        tipoDocumento: "",
        plazoEntrega: "",
        traductorJurado: false,
        empresa: "",
      },
      idiomas: [],
      documentos: [],
    };
  },
  computed: {
    ...mapState(useEmpresaStore, ["servicios"]),
  },
  methods: {
    ...mapActions(useEmpresaStore, ["addServicio", "getEmpresas"]),
    guardarServicio() {
      this.servicio.tipo = "TRADUCCION";
      for (let i = 0; i < this.idiomas.length; i++) {
        for (let j = 0; j < this.documentos.length; j++) {
          const nuevoServicio = { ...this.servicio };
          nuevoServicio.tipoDocumento = this.documentos[j];
          nuevoServicio.idioma = this.idiomas[i];
          this.addServicio(nuevoServicio);
        }
      }

      this.$router.push("/interfazGestionServicios");
    },
    borrarDatos() {
      this.servicio = {
        tipo: "",
        idioma: "",
        tipoDocumento: "",
        plazoEntrega: "",
        traductorJurado: false,
        empresa: "",
      };
      this.$refs.componenteIdiomas.idiomaSeleccionado = [];
      this.$refs.componenteTipoDocumento.tipoDocumentoSeleccionado = [];
      this.$refs.componentePlazoEntrega.plazoEntregaSeleccionado = "";
    },
  },
  async beforeMount() {
    this.empresas = await this.getEmpresas();
  },
};
</script>
<template>
  <div class="container">
    <div class="row justify-content inicial">
      <h3>Formulario de Alta de un Servicio de Traducción</h3>
    </div>
    <form @submit.prevent="guardarServicio">
      <div class="row formulario">
        <div class="col-md-11 text-left">
          Introduzca los datos del servicio de traducción que desea dar de alta:
        </div>
      </div>
      <div class="row mb-3 mt-3">
        <div class="col-md-2">
          <label class="form-label" for="empresa">Empresa</label>
        </div>
        <div class="col-md-4">
          <select
            v-model="servicio.empresa"
            aria-label=".form-select-sm example"
            class="form-select form-select-sm"
            required
          >
            <option selected="" value="">Seleccione una empresa</option>

            <option
              v-for="empresa in empresas"
              :key="empresa.id"
              :value="empresa"
            >
              {{ empresa.nombre }}
            </option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <label class="form-label" for="idioma">Idioma</label>
        </div>
        <ComponenteIdiomas
          ref="componenteIdiomas"
          :idiomaSeleccionado="idiomas"
          @idiomaSeleccionado="idiomas = $event"
        />
      </div>

      <div class="row formulario">
        <div class="col-md-3">
          <label class="form-label" for="tipoDocumento"
            >Tipo de Documento</label
          >
        </div>
        <ComponenteTipoDocumento
          ref="componenteTipoDocumento"
          :tipoDocumentoSeleccionado="documentos"
          @tipoDocumentoSeleccionado="documentos = $event"
        />
      </div>
      <div class="row formulario">
        <div class="col-md-3">
          <label class="form-label" for="tiempoMaxEntrega"
            >Tiempo máximo de Entrega</label
          >
        </div>
        <ComponentePlazoEntrega
          ref="componentePlazoEntrega"
          :plazoEntregaSeleccionado="servicio.plazoEntrega"
          @plazoEntregaSeleccionado="servicio.plazoEntrega = $event"
        />
      </div>
      <div class="row formulario">
        <div class="col-7">
          <div class="form-check">
            <input
              id="flexCheckDefault"
              v-model="servicio.traductorJurado"
              class="form-check-input"
              type="checkbox"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Dispone de traducción Jurada.
            </label>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-3">
          <button class="btn btn-primary" type="submit">Guardar Cambios</button>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-2">
          <button class="btn btn-warning" type="button" @click="borrarDatos">
            Borrar Datos
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<style scoped>
.row {
  margin-left: 0.5vw;
}

.inicial {
  margin-top: 8vh;
}

.formulario {
  margin-top: 3vh;
}

@media (max-width: 768px) {
  .inicial {
    margin-top: 10vh;
  }
}
</style>
