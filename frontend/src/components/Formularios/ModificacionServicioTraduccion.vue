<script>
import { mapActions, mapState } from "pinia";
import { useEmpresaStore } from "@/stores/EmpresaStore";
import ComponenteIdiomas from "@/components/ComponenteIdiomas.vue";
import ComponentePlazoEntrega from "@/components/ComponentePlazoEntrega.vue";
import ComponenteTipoDocumento from "@/components/ComponenteTipoDocumento.vue";

export default {
  components: {
    ComponenteIdiomas,
    ComponentePlazoEntrega,
    ComponenteTipoDocumento,
  },
  data() {
    return {
      servicio: {
        tipo: "TRADUCCION",
        idioma: "",
        tipoDocumento: "",
        plazoEntrega: "",
        traductorJurado: false,
        id: 0,
      },
      servicioEntrada: null,
      empresa: { nombre: "" },
    };
  },
  computed: {
    ...mapState(useEmpresaStore, ["empresas", "servicios"]),
  },
  methods: {
    ...mapActions(useEmpresaStore, [
      "updateServicio",
      "getEmpresas",
      "getServicio",
      "getEmpresaDeServicio",
    ]),
    borrarDatos() {
      this.servicio = {
        ...this.servicioEntrada,
      };
      this.$refs.componenteIdiomas.idiomaSeleccionado = this.servicio.idioma;
      this.$refs.componenteTipoDocumento.tipoDocumentoSeleccionado =
        this.servicio.tipoDocumento;
      this.$refs.componentePlazoEntrega.plazoEntregaSeleccionado =
        this.servicio.plazoEntrega;
    },
    async modificarServicio() {
      this.servicio.tipo = "TRADUCCION";
      await this.updateServicio(this.servicio);
      this.$router.push("/interfazGestionServicios");
    },
  },
  async beforeMount() {
    this.id = this.$route.params.id;
    this.servicio = await this.getServicio(this.id);
    this.servicioEntrada = { ...this.servicio };
    this.empresa = await this.getEmpresaDeServicio(this.id);
    this.$refs.componenteIdiomas.idiomaSeleccionado = this.servicio.idioma;
    this.$refs.componenteTipoDocumento.tipoDocumentoSeleccionado =
      this.servicio.tipoDocumento;
    this.$refs.componentePlazoEntrega.plazoEntregaSeleccionado =
      this.servicio.plazoEntrega;
  },
};
</script>
<template>
  <div class="container">
    <div class="row justify-content inicial">
      <h3>Formulario de Modificación de un Servicio de Traducción</h3>
      <form @submit.prevent="modificarServicio">
        <div class="row formulario">
          <div class="col-md-11 text-left">
            Introduzca los datos del servicio de traducción que desea modificar:
          </div>
        </div>
        <div class="row formulario">
          <div class="col-md-4">
            <label class="form-label" for="empresa1">Empresa</label>
          </div>
          <div class="col-md-4">
            <input
              id="nombre1"
              v-model="empresa.nombre"
              class="form-control"
              disabled
              type="text"
            />
          </div>
        </div>
        <div class="row formulario">
          <div class="col-md-2">
            <label class="form-label" for="idioma">Idioma</label>
          </div>
          <ComponenteIdiomas
            ref="componenteIdiomas"
            :idiomaSeleccionado="servicio.idioma"
            @idiomaSeleccionado="servicio.idioma = $event"
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
            :tipoDocumentoSeleccionado="servicio.tipoDocumento"
            @tipoDocumentoSeleccionado="servicio.tipoDocumento = $event"
          />
        </div>
        <div class="row formulario">
          <div class="col-md-3">
            <label class="form-label" for="plazoEntrega"
              >Plazo de Entrega</label
            >
          </div>
          <ComponentePlazoEntrega
            ref="componentePlazoEntrega"
            :plazoEntregaSeleccionado="servicio.plazoEntrega"
            @plazoEntregaSeleccionado="servicio.plazoEntrega = $event"
          />
          <div class="col-md-1"></div>
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
                Dispone de Traducción Jurada.
              </label>
            </div>
          </div>
          <div class="row formulario">
            <div class="col-md-2">
              <button class="btn btn-primary" type="submit">
                Guardar Cambios
              </button>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-2">
              <button
                class="btn btn-warning"
                type="button"
                @click="borrarDatos"
              >
                Restaurar Valores Iniciales
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
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
