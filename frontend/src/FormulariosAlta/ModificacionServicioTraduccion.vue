<script>
import { mapState, mapActions } from "pinia";
import { useEmpresaStore } from "../stores/EmpresaStore";
import ComponenteIdiomas from "../components/ComponenteIdiomas.vue";
import ComponentePlazoEntrega from "../components/ComponentePlazoEntrega.vue";
import ComponenteTipoDocumento from "../components/ComponenteTipoDocumento.vue";

import BarraNavegacion from "../components/BarraNavegacion.vue";
export default {
  components: {
    BarraNavegacion,
    ComponenteIdiomas,
    ComponentePlazoEntrega,
    ComponenteTipoDocumento,
  },
  computed: {
    ...mapState(useEmpresaStore, ["empresas", "servicios"]),
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
      empresa: { nombre: "" },
    };
  },
  async beforeMount() {
    this.id = this.$route.params.id;
    this.servicio = await this.getServicio(this.id);
    this.empresa = await this.getEmpresaDeServicio(this.id);
    this.$refs.componenteIdiomas.idiomaSeleccionado = this.servicio.idioma;
    this.$refs.componenteTipoDocumento.tipoDocumentoSeleccionado =
      this.servicio.tipoDocumento;
    this.$refs.componentePlazoEntrega.plazoEntregaSeleccionado =
      this.servicio.plazoEntrega;
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
        traductorJurado: null,
      };
      this.$refs.componenteIdiomas.idiomaSeleccionado = "";
      this.$refs.componenteTipoDocumento.tipoDocumentoSeleccionado = "";
      this.$refs.componentePlazoEntrega.plazoEntregaSeleccionado = "";
    },
    async modificarServicio() {
      this.servicio.tipo = "TRADUCCION";
      await this.updateServicio(this.servicio);
      this.$router.push("/interfazGestionServicios");
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
        Formulario de Modificación de un Servicio de Traducción
      </h3>
      <form @submit.prevent="modificarServicio">
        <div class="row inicial">
          <div class="col-md-11">
            <div class="text-left">
              Introduzca los datos del servicio de traducción que desea
              modificar:
            </div>
          </div>
        </div>
        <div class="row inicial">
          <div class="col-md-4">
            <label for="empresa1" class="form-label">Empresa</label>
          </div>
          <div class="col-md-2">
            <label for="idioma1" class="form-label">Idioma</label>
          </div>
          <div class="col-md-2"></div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <input
            disabled
              type="text"
              class="form-control"
              id="nombre1"
              v-model="empresa.nombre"
            />
          </div>
          <div class="col-md-1"></div>
          <ComponenteIdiomas
            ref="componenteIdiomas"
            :idiomaSeleccionado="servicio.idioma"
            @idiomaSeleccionado="servicio.idioma = $event"
          />
        </div>
        <div class="row inicial">
          <div class="col-md-4">
            <label for="tipoDocumento" class="form-label"
              >Tipo de Documento</label
            >
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-4">
            <label for="plazoEntrega" class="form-label"
              >Plazo de Entrega</label
            >
          </div>
          <div class="col-md-4"></div>
        </div>
        <div class="row">
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
          <div class="col-md-1"></div>
        </div>
        <div class="row inicial">
          <div class="col-7">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="servicio.traductorJurado"
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Dispone de Traducción Jurada.
              </label>
            </div>
          </div>
          <div class="row justify-content-center final">
            <div class="col-md-2">
              <button type="submit" class="btn btn-primary">
                Guardar Cambios
              </button>
            </div>
            <div class="col-md-2">
              <button
                type="button"
                class="btn btn-warning"
                @click="borrarDatos"
              >
                Borrar Datos
              </button>
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-6"></div>
          </div>
        </div>
      </form>
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
  margin-top: 4vh;
}
</style>
