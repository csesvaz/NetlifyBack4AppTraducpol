<script>
import Calendar from "primevue/calendar";
import { mapState, mapActions } from "pinia";
import { useEmpresaStore } from "../stores/EmpresaStore";
import ComponenteIdiomas from "../components/ComponenteIdiomas.vue";
import ComponenteProvincias from "../components/ComponenteProvincias.vue";
export default {
  components: {
    Calendar,
    ComponenteIdiomas,
    ComponenteProvincias,
  },
  computed: {
    ...mapState(useEmpresaStore, ["servicios"]),
  },
  data() {
    return {
      empresas: [],
      servicio: {
        tipo: "INTERPRETACION",
        idioma: "",
        horarioInicioServicio: new Date(),
        horarioFinServicio: new Date(),
        provincia: "",
        servicioOnline: false,
        empresa: "",
      },
      idiomas: [],
      provincias: [],
    };
  },
  async beforeMount() {
    this.empresas = await this.getEmpresas();
  },
  methods: {
    ...mapActions(useEmpresaStore, [
      "addServicio",
      "getEmpresas",
      "formatearHora",
    ]),
    formatearHora(hora) {
      const hora1 = hora.getHours();
      const minutos = hora.getMinutes();
      return `${hora1.toString().padStart(2, "0")}:${minutos
        .toString()
        .padStart(2, "0")}`;
    },
    guardarServicio() {
      this.servicio.tipo = "INTERPRETACION";
      this.servicio.horarioInicioServicio = this.formatearHora(
        this.servicio.horarioInicioServicio
      );
      this.servicio.horarioFinServicio = this.formatearHora(
        this.servicio.horarioFinServicio
      );

      for (let i = 0; i < this.idiomas.length; i++) {
        for (let j = 0; j < this.provincias.length; j++) {
        const nuevoServicio = { ...this.servicio };
        nuevoServicio.provincia = this.provincias[j];
        nuevoServicio.idioma = this.idiomas[i];
        this.addServicio(nuevoServicio);
      }}

      this.$router.push("/interfazGestionServicios");
    },
    borrarDatos() {
      this.servicio = {
        tipo: "",
        idioma: "",
        horarioInicioServicio: new Date(),
        horarioFinServicio: new Date(),
        provincia: "",
        servicioOnline: false,
        empresa: "",
      };
      this.$refs.componenteIdiomas.idiomaSeleccionado = [];
      this.$refs.componenteProvincias.provinciaSeleccionada = [];
    },
  },
};
</script>
<template>
  <div class="container-fluid">
    <div class="row justify-content inicial">
      <h3 class="formulario inicial">
        Formulario de Alta de un Servicio de Interpretación
      </h3>
      <form @submit.prevent="guardarServicio">
        <div class="row inicial">
          <div class="col-md-11">
            <div class="text-left">
              Introduzca los datos del servicio de interpretación que desea dar
              de alta:
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
            <select
              required
              class="form-select form-select-sm"
              aria-label=".form-select-sm example"
              v-model="servicio.empresa"
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
          />
        </div>
        <div class="row inicial">
          <div class="col-md-2">
            <label for="horarioInicioServicio" class="form-label"
              >Horario de Inicio del Servicio</label
            >
          </div>
          <div class="col-md-3">
            <label for="horarioFinServicio" class="form-label"
              >Horario de Finalización del Servicio</label
            >
          </div>
          <div class="col-md-3">
            <label for="provincia" class="form-label">Provincia</label>
          </div>
          <div class="col-md-4"></div>
        </div>
        <div class="row">
          <div class="col-md-2">
            <div class="mb-3">
              <Calendar
                id="calendar-timeonly"
                v-model="servicio.horarioInicioServicio"
                timeOnly
              />
            </div>
          </div>

          <div class="col-md-2">
            <div class="mb-3">
              <Calendar
                id="calendar-timeonly"
                v-model="servicio.horarioFinServicio"
                timeOnly
              />
            </div>
          </div>
          <div class="col-md-1"></div>
          <ComponenteProvincias
            ref="componenteProvincias"
            :provinciaSeleccionada="provincias"
            @provinciaSeleccionada="provincias = $event"
          />
        </div>
        <div class="row inicial">
          <div class="col-7">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="servicio.servicioOnline"
                id="flexCheckDefault1"
              />
              <label class="form-check-label" for="flexCheckDefault1">
                Dispone de asistencia Online.
              </label>
            </div>
          </div>
          <br />

          <div class="row justify-content-center final">
            <div class="col-md-2">
              <button
                type="submit"
                class="btn btn-primary"
              >
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
  margin-left: 0.5em;
}
.inicial {
  margin-top: 1em;
}
.final {
  margin-top: 8em;
}
</style>
