<script>
import Calendar from "primevue/calendar";
import { mapState, mapActions } from "pinia";
import { useEmpresaStore } from "../../stores/EmpresaStore";
import ComponenteIdiomas from "../ComponenteIdiomas.vue";
import ComponentePlazoEntrega from "../ComponentePlazoEntrega.vue";
import ComponenteTipoDocumento from "../ComponenteTipoDocumento.vue";
export default {
  components: {
    Calendar,
    ComponentePlazoEntrega,
    ComponenteTipoDocumento,
    ComponenteIdiomas,
  },
  computed: {
    ...mapState(useEmpresaStore, ["servicios"]),
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
  async beforeMount() {
    this.empresas = await this.getEmpresas();
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
          <label for="empresa" class="form-label">Empresa</label>
        </div>
        <div class="col-md-4">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            v-model="servicio.empresa"
            required
          >
            <option value="" selected="">Seleccione una empresa</option>

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
          <label for="idioma" class="form-label">Idioma</label>
        </div>
        <ComponenteIdiomas
          ref="componenteIdiomas"
          :idiomaSeleccionado="idiomas"
          @idiomaSeleccionado="idiomas = $event"
        />
      </div>


      <div class="row formulario">
        <div class="col-md-3">
          <label for="tipoDocumento" class="form-label"
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
          <label for="tiempoMaxEntrega" class="form-label"
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
              class="form-check-input"
              type="checkbox"
              v-model="servicio.traductorJurado"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Dispone de traducción Jurada.
            </label>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-3">
          <button type="submit" class="btn btn-primary">Guardar Cambios</button>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-2">
          <button type="button" class="btn btn-warning" @click="borrarDatos">
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
