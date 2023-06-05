<script>
import Calendar from "primevue/calendar";
import { mapState, mapActions } from "pinia";
import { useEmpresaStore } from "../stores/EmpresaStore";
import ComponenteIdiomas from "../components/ComponenteIdiomas.vue";
import BarraNavegacion from "../components/BarraNavegacion.vue";
import ComponentePlazoEntrega from "../components/ComponentePlazoEntrega.vue";
import ComponenteTipoDocumento from "../components/ComponenteTipoDocumento.vue";
export default {
  components: {
    BarraNavegacion,
    Calendar,
    ComponentePlazoEntrega,
    ComponenteTipoDocumento,
    ComponenteIdiomas
  },
  computed: {
    ...mapState(useEmpresaStore, ["servicios","opcionInicial"]),
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
        const nuevoServicio = { ...this.servicio }; 
        nuevoServicio.idioma = this.idiomas[i];
        this.addServicio(nuevoServicio);
      }
      this.opcionInicial = false;
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
      this.$refs.componenteTipoDocumento.tipoDocumentoSeleccionado = "";
      this.$refs.componentePlazoEntrega.plazoEntregaSeleccionado = "";
    },
  },
};
</script>
<template>
  <div class="container-fluid">
    <div class="d-flex flex-column">
      <BarraNavegacion class="fixed-top" />
    </div>

    <div class="row justify-content inicial">
      <h3 class="formulario inicial">
        Formulario de Alta de un Servicio de Traducción
      </h3>
      <div class="row inicial">
        <div class="col-md-11">
          <div class="text-left">
            Introduzca los datos del servicio de traducción que desea dar de
            alta:
          </div>
        </div>
      </div>
      <div class="row inicial">
        <div class="col-md-4">
          <label for="empresa2" class="form-label">Empresa</label>
        </div>
        <div class="col-md-2">
          <label for="idioma1" class="form-label">Idioma</label>
        </div>
        <div class="col-md-2"></div>
      </div>
      <div class="row">
        <div class="col-md-3">
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
        <div class="col-md-1"></div>

        <ComponenteIdiomas
            ref="componenteIdiomas"
            :idiomaSeleccionado="idiomas"
            @idiomaSeleccionado="idiomas = $event"
          />  </div>

      <div class="row inicial">
        <div class="col-md-4">
          <label for="tipoDocumento" class="form-label"
            >Tipo de Documento</label
          >
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-4">
          <label for="tiempoMaxEntrega" class="form-label"
            >Tiempo máximo de Entrega</label
          >
        </div>
      </div>
      <div class="row inicial">
        <ComponenteTipoDocumento
        ref="componenteTipoDocumento"
            :tipoDocumentoSeleccionado="servicio.tipoDocumento"
          @tipoDocumentoSeleccionado="servicio.tipoDocumento = $event"
        />
        <div class="col-md-1"></div>
        <ComponentePlazoEntrega

        ref="componentePlazoEntrega"
            :plazoEntregaSeleccionado="servicio.plazoEntrega"
          @plazoEntregaSeleccionado="servicio.plazoEntrega = $event"
        />
      </div>
      <div class="row inicial">
        <div class="col-7">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="servicio.traductorJurado"
              id="flexCheckDefault"
              required
            />
            <label class="form-check-label" for="flexCheckDefault">
              Dispone de traducción Jurada.
            </label>
          </div>
        </div>
        <br />

        <div class="row mt-4">
          <div class="col-md-3">
            <button
              type="button"
              class="btn btn-primary"
              @click="guardarServicio"
            >
              Guardar Cambios
            </button>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-2">
              <button
                type="button"
                class="btn btn-warning"
                @click="borrarDatos"
              >
                Borrar Datos
              </button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.row {
  margin-left: 2vw;
}
.inicial {
  margin-top: 3vh;
}
.final {
  margin-top:4vh;
}
</style>
