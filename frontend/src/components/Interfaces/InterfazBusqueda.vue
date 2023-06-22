<script>
import Calendar from "primevue/calendar";
import ComponenteIdiomas from "@/components/ComponenteIdiomas.vue";
import ComponenteProvincias from "@/components/ComponenteProvincias.vue";
import ComponenteEmpresa from "@/components/ComponenteEmpresa.vue";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import {mapActions, mapState} from "pinia";
import {useEmpresaStore} from "@/stores/EmpresaStore";

export default {
  components: {
    Calendar,
    ComponenteIdiomas,
    ComponenteProvincias,
    ComponenteEmpresa,
    Button,
    Dialog,
  },
  data() {
    return {
      servicio: {
        horaSeleccionada: new Date(),
        idioma: "",
        provincia: "",
        servicioOnline: false,
        id: "",
        empresa: [],
      },
      idiomaSeleccionado: null,
      empresasConServicio: [],
      mostrarModal: false,
      visible: false,
      visibleSegundoModal: false,
      empresaSeleccionada: null,
    };
  },
  computed: {
    ...mapState(useEmpresaStore, ["empresas"]),
  },
  methods: {
    ...mapActions(useEmpresaStore, [
      "convertirBooleano",
      "busquedaAvanzada",
      "convertirHora",
      "getEmpresaDeServicio",
    ]),
    provincia(provinciaSeleccionada) {
      this.servicio.provincia = provinciaSeleccionada;
    },
    idioma(idiomaSeleccionado) {
      this.servicio.idioma = idiomaSeleccionado;
    },
    async filtrarEmpresa(servicio) {
      this.empresaSeleccionada = await this.getEmpresaDeServicio(servicio.id);
    },
    async buscarEmpresas() {
      let serviciosDeBusqueda = [];
      serviciosDeBusqueda = await this.busquedaAvanzada(
          this.convertirHora(this.servicio.horaSeleccionada),
          this.servicio.idioma,
          this.servicio.provincia,
          this.servicio.servicioOnline
      );
      this.empresasConServicio = serviciosDeBusqueda;
      this.visible = true;
      return this.empresasConServicio;
    },
  },
};
</script>

<template>
  <div class="container">
    <h3 class="formulario">
      Búsqueda de Servicio Lingüístico de Interpretación.
    </h3>
    <form @submit.prevent="buscarEmpresas">
      <p>
        1. Seleccione la hora a la que necesita el apoyo de Servicio Lingüístico
        de Interpretación:
      </p>
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-3 col-md-3">
          <div class="text-left">Hora*</div>
        </div>
        <div class="col-4 col-md-2">
          <Calendar
              id="calendar-timeonly"
              v-model="servicio.horaSeleccionada"
              required
              timeOnly
          />
        </div>
        <div class="col-1 col-md-2"></div>
      </div>
      <br/>
      <p>
        2. Seleccione la localización en la que necesita el apoyo de Servicio
        Lingüítico.
      </p>
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-2">Provincia*</div>
        <div class="col-1"></div>
        <div class="col-9 col-md-6">
          <ComponenteProvincias required @provinciaSeleccionada="provincia"/>
        </div>
      </div>

      <br/>
      <p>3. Seleccione el idioma y el tipo de servicio que necesita.</p>
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-3 col-md-2">Idioma*</div>
        <ComponenteIdiomas required @idiomaSeleccionado="idioma"/>
      </div>
      <div class="row">
        <div class="col-12 mt-4">
          <div class="form-check">
            <input
                id="flexCheckDefault"
                v-model="servicio.servicioOnline"
                class="form-check-input"
                type="checkbox"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Selecciona si desea ver únicamente los servicios que tienen
              asistencia Online.
            </label>
          </div>
        </div>
      </div>
      <br/>
      <p>
        4. Una vez comprobado que tiene todos los campos obligatorios (Marcados
        con *) rellenos seleccione el botón de Búsqueda.
      </p>
      <div class="row mt-4">
        <div class="col-3"></div>
        <div class="col-3 col-md-4">
          <button
              :disabled="
              !servicio.provincia ||
              !servicio.idioma ||
              !servicio.horaSeleccionada
            "
              class="btn btn-primary"
              type="submit"
          >
            Búsqueda
          </button>
        </div>
      </div>
    </form>
    <Dialog
        v-model:visible="visible"
        :breakpoints="{ '960px': '75vw', '641px': '100vw' }"
        :style="{ width: '50vw' }"
        header="Datos de las empresas que tienen ese servicio"
        modal
    >
      <p>
        La hora seleccionada ha sido
        <strong>{{ convertirHora(servicio.horaSeleccionada) }}</strong>.
      </p>
      <p>La provincia seleccionada ha sido <strong>{{ servicio.provincia }}</strong>.</p>
      <p>El idioma seleccionado ha sido <strong>{{ servicio.idioma }}</strong>.</p>
      <p>
        Necesidad de Servicio online <strong>({{
          convertirBooleano(servicio.servicioOnline)
        }})</strong>.
      </p>
      <div v-if="empresasConServicio.length == 0" class="Not Found">
        <p>
          <strong>No se ha encontrado ninguna empresa que cumpla sus requisitos.</strong>
          <p>Puede
            contactar con el servicio central de interpretes enviando un mensaje a
            la dirección apoyoTraucpol@mmmm.com o llamando al teléfono +34
            655-566778 (Horario telefónico de 9:00 a 15:00)
          </p>
        </p>
      </div>
      <div v-else>
        <p><strong>Las empresas que cumplen sus requisitos son:</strong></p>
        <p v-for="servicio in empresasConServicio">
          - {{ servicio.empresa.nombre }} con telefono
          {{ servicio.empresa.telefono }}, con dirección
          {{ servicio.empresa.direccion }}&nbsp;&nbsp;&nbsp;&nbsp;<Button
            :title="'Visualizar datos de contacto de la empresa.'"
            icon="pi pi-eye"
            type="button"
            @click="(visibleSegundoModal = true), filtrarEmpresa(servicio)"
        />
          <Dialog
              v-model:visible="visibleSegundoModal"
              :breakpoints="{ '960px': '75vw', '641px': '100vw' }"
              :style="{ width: '50vw' }"
              header="Datos de la empresa"
              modal
          >
            <ComponenteEmpresa :empresaEntrada="empresaSeleccionada"/>
          </Dialog>
        </p>
      </div>
    </Dialog>
  </div>
</template>

<style scoped>
.container {
  margin-left: 3vw;
  margin-top: 2vh;
}

form {
  width: 90vw;
}

h3 {
  margin-top: 2vh;
  margin-bottom: 2vh;
}

.row {
  font-size: x-large;
}

p {
  font-size: x-large;
}

@media (max-width: 768px) {
  p {
    text-align: center;
    font-style: oblique;
    font-size: medium;
  }

  .row {
    font-size: medium;
  }

  h3 {
    text-align: center;
    margin-top: 4vh;
  }
}

.container {
  margin-top: 10vh;
}
</style>
