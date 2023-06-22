<script>
import Calendar from "primevue/calendar";
import { mapActions, mapState } from "pinia";
import { useEmpresaStore } from "@/stores/EmpresaStore";
import ComponenteIdiomas from "@/components/ComponenteIdiomas.vue";
import ComponenteProvincias from "@/components/ComponenteProvincias.vue";

export default {
  components: {
    Calendar,
    ComponenteProvincias,
    ComponenteIdiomas,
  },

  data() {
    return {
      servicio: {
        tipo: "INTERPRETACION",
        idioma: "",
        horarioInicioServicio: new Date(),
        horarioFinServicio: new Date(),
        provincia: "",
        servicioOnline: false,
        id: 0,
      },
      empresa: { nombre: "" },
      servicioEntrada: null,
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
      this.$refs.componenteProvincias.provinciaSeleccionada =
        this.servicio.provincia;
    },
    formatearHora(hora) {
      if (typeof hora === "string") {
        return hora;
      }

      const hora1 = hora.getHours();
      const minutos = hora.getMinutes();
      return `${hora1.toString().padStart(2, "0")}:${minutos
        .toString()
        .padStart(2, "0")}`;
    },
    async modificarServicio() {
      this.servicio.tipo = "INTERPRETACION";
      this.servicio.horarioInicioServicio = this.formatearHora(
        this.servicio.horarioInicioServicio
      );
      this.servicio.horarioFinServicio = this.formatearHora(
        this.servicio.horarioFinServicio
      );
      await this.updateServicio(this.servicio);
      this.$router.push("/interfazGestionServicios");
    },
  },
  async beforeMount() {
    this.id = this.$route.params.id;
    this.servicio = await this.getServicio(this.id);
    this.servicioEntrada = { ...this.servicio };
    this.$refs.componenteIdiomas.idiomaSeleccionado = this.servicio.idioma;
    this.$refs.componenteProvincias.provinciaSeleccionada =
      this.servicio.provincia;
    this.empresa = await this.getEmpresaDeServicio(this.id);
  },
};
</script>
<template>
  <div class="container">
    <div class="row justify-content inicial">
      <h3>Formulario de Modificación de un Servicio de Interpretación</h3>
      <form @submit.prevent="modificarServicio">
        <div class="row formulario">
          <div class="col-md-11 text-left">
            Introduzca los datos del servicio de interpretación que desea dar de
            alta:
          </div>
        </div>
        <div class="row formulario">
          <div class="col-md-4">
            <label class="form-label" for="empresa1">Empresa</label>
          </div>
          <div class="col-md-4">
            <input
              id="nombre"
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
            <label class="form-label" for="tiempoInicio"
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
            <label class="form-label" for="tiempoFinal"
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
            <label class="form-label" for="provincia">Provincia</label>
          </div>
          <ComponenteProvincias
            ref="componenteProvincias"
            :provinciaSeleccionada="servicio.provincia"
            @provinciaSeleccionada="servicio.provincia = $event"
          />
        </div>
        <div class="row formulario">
          <div class="col-7">
            <div class="form-check">
              <input
                id="flexCheckDefault"
                v-model="servicio.servicioOnline"
                class="form-check-input"
                type="checkbox"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Dispone de asistencia Online.
              </label>
            </div>
          </div>
          <br />
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
