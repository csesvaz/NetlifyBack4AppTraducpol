<script>
import Calendar from "primevue/calendar";
import { mapState, mapActions } from "pinia";
import { useEmpresaStore } from "../../stores/EmpresaStore";
import ComponenteIdiomas from "../ComponenteIdiomas.vue";
import ComponenteProvincias from "../ComponenteProvincias.vue";
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
        }
      }

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
  <div class="container">
    <div class="row justify-content inicial">
      <h3 class="formulario inicial">
        Formulario de Alta de un Servicio de Interpretación
      </h3>
    </div>
    <form @submit.prevent="guardarServicio">
      <div class="row formulario">
        <div class="col-md-11 text-left">
          Introduzca los datos del servicio de interpretación que desea dar de
          alta:
        </div>
      </div>
      <div class="row mb-3 mt-3">
        <div class="col-md-2">
          <label for="empresa" class="form-label">Empresa</label>
        </div>
        <div class="col-md-4">
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
      </div>
      <div class="row mb-3 mt-3">
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
          <label for="horarioInicioServicio" class="form-label"
            >Horario de Inicio del Servicio</label
          >
        </div>
        <div class="col-md-2">
          <Calendar
            id="calendar-timeonly"
            v-model="servicio.horarioInicioServicio"
            timeOnly
          />
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-3">
          <label for="horarioFinServicio" class="form-label"
            >Horario de Finalización del Servicio</label
          >
        </div>
        <div class="col-md-2">
          <Calendar
            id="calendar-timeonly"
            v-model="servicio.horarioFinServicio"
            timeOnly
          />
        </div>
      </div>
      <div class="row formulario">
        <div class="col-md-2">
          <label for="provincia" class="form-label">Provincia</label>
        </div>
        <ComponenteProvincias
          ref="componenteProvincias"
          :provinciaSeleccionada="provincias"
          @provinciaSeleccionada="provincias = $event"
        />
      </div>
      <div class="row formulario">
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

        <div class="row formulario">
          <div class="col-md-2">
            <button type="submit" class="btn btn-primary">
              Guardar Cambios
            </button>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-2">
            <button type="button" class="btn btn-warning" @click="borrarDatos">
              Borrar Datos
            </button>
          </div>
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
  margin-top: 5vh;
}
.formulario {
  margin-top: 3vh;
}
.final {
  margin-top: 4vh;
}

@media (max-width: 768px) {
  .inicial {
    margin-top: 6vh;
  }
}
</style>
