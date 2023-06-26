<script>
import {mapActions, mapState} from "pinia";
import {useEmpresaStore} from "@/stores/EmpresaStore.js";
import Button from "primevue/button";
import Card from "primevue/card";
import ComponenteEmpresa from "@/components/empresas/DetallesEmpresa.vue";
import ComponenteIdiomas from "@/components/servicios/Idiomas.vue";
import ComponenteProvincias from "@/components/servicios/Provincias.vue";
import Dialog from "primevue/dialog";
import {convertirBooleano} from "../../utils/utils.js";
import ComponenteTipoDocumento from "@/components/servicios/TipoDocumento.vue";
import Cargando from "@/components/Cargando.vue";

export default {
  components: {
    Cargando,
    ComponenteTipoDocumento,
    Button,
    Card,
    ComponenteEmpresa,
    ComponenteIdiomas,
    ComponenteProvincias,
    Dialog,
  },
  props: ["tipoServicio", "esAdministrador"],
  data() {
    return {
      idiomaSeleccionado: "",
      provinciaSeleccionada: "",
      tipoDocumentoSeleccionado: "",
      visible: false,
      cargadosDatos: false,
      datosEmpresa: undefined,
    };
  },
  computed: {
    ...mapState(useEmpresaStore, ["servicios"]),
    serviciosFiltrados() {
      return this.servicios.filter((servicio) => {
        return servicio.tipo === this.tipoServicio.toUpperCase() &&
            (this.idiomaSeleccionado ? servicio.idioma === this.idiomaSeleccionado : true) &&
            this.filtroProvincia(servicio) &&
            this.filtroTipoDocumento(servicio)
      })
    },
  },
  methods: {
    ...mapActions(useEmpresaStore, ["getEmpresaDeServicio", "deleteServicio"]),
    convertirBooleano(a) {
      return convertirBooleano(a);
    },
    cambiarIdioma(idioma) {
      this.idiomaSeleccionado = idioma;
    },
    cambiarProvincia(provincia) {
      this.provinciaSeleccionada = provincia;
    },
    cambiarTipoDocumento(tipoDocumento) {
      this.tipoDocumentoSeleccionado = tipoDocumento;
    },
    filtroProvincia(servicio) {
      let filtro = true;
      if (servicio.tipo === 'INTERPRETACION') {
        if (this.provinciaSeleccionada !== '') {
          if (servicio.provincia !== this.provinciaSeleccionada) {
            filtro = false;
          }
        }
      }
      return filtro
    },
    filtroTipoDocumento(servicio) {
      let filtro = true;
      if (servicio.tipo === 'TRADUCCION') {
        if (this.tipoDocumentoSeleccionado !== '') {
          if (servicio.tipoDocumento !== this.tipoDocumentoSeleccionado) {
            filtro = false;
          }
        }
      }
      return filtro
    },
    async verEmpresa(servicio) {
      this.visible = true;
      this.datosEmpresa = await this.getEmpresaDeServicio(servicio);
      this.cargadosDatos = true;
    },
    modificarServicio(servicio) {
      if (servicio.tipo === "INTERPRETACION") {
        this.$router.push({name: 'modificacionServicioInterpretacion', params: {id: servicio.id}});
      } else {
        this.$router.push({name: 'modificacionServicioTraduccion', params: {id: servicio.id}});
      }
    },
    eliminarServicio(id) {
      this.deleteServicio(id);
    },
  },
};
</script>

<template>
  <div>
    <div class="row">
      <ComponenteIdiomas
          :idiomaSeleccionado="idiomaSeleccionado" @idiomaSeleccionado="cambiarIdioma"/>
      <template v-if="tipoServicio == 'INTERPRETACION'">
        <ComponenteProvincias
            :provinciaSeleccionada="provinciaSeleccionada" @provinciaSeleccionada="cambiarProvincia"
        />
      </template>
      <template v-if="tipoServicio == 'TRADUCCION'">
        <ComponenteTipoDocumento
            ref="componenteTipoDocumento"
            :tipoDocumentoSeleccionado="tipoDocumentoSeleccionado"
            @tipoDocumentoSeleccionado="
        cambiarTipoDocumento
      "
        />
      </template>
    </div>
    <div v-for="servicio in serviciosFiltrados">
      <div class="row mb-12">
        <div class="card">
          <Card style="background-color: #e4e4d5">
            <template #content>
              <p>
                Idioma: <strong>{{ servicio.idioma }}</strong>
              </p>
              <div v-if="servicio.tipo == 'INTERPRETACION'">
                <p>
                  Hora de Inicio:
                  <strong>{{ servicio.horarioInicioServicio }}</strong>
                  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Hora de Fin:
                  <strong>{{ servicio.horarioFinServicio }}</strong>
                </p>
                <p>
                  Provincia: <strong>{{ servicio.provincia }}</strong
                >&nbsp&nbsp&nbsp servicioOnline:
                  <strong>{{ convertirBooleano(servicio.servicioOnline) }}</strong>
                </p>
              </div>
              <div v-else>
                <p>
                  Tipo de Documento
                  <strong>{{ servicio.tipoDocumento }}</strong>
                </p>
                <p>
                  Plazo de Entrega: <strong>{{ servicio.plazoEntrega }}</strong
                >&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Traducción Jurada:
                  <strong>{{ convertirBooleano(servicio.traductorJurado) }}</strong>
                </p>
              </div>
              <div class="row d-flex justify-content-center flex-wrap gap-2">
                <Button
                    class="col-lg-3 col-md-12"
                    icon="pi pi-external-link"
                    label="Mostrar Empresa"
                    @click="verEmpresa(servicio)"
                />
                <Button
                    v-if="esAdministrador"
                    :title="'Editar'"
                    class="col-lg-3 col-md-12"
                    icon="pi pi-pencil"
                    label="Editar"
                    type="button"
                    @click="modificarServicio(servicio)"
                />
                <Button
                    v-if="esAdministrador"
                    :title="'Borrar'"
                    class="col-lg-3 col-md-12"
                    icon="pi pi-trash"
                    label="Borrar"
                    type="button"
                    @click="eliminarServicio(servicio.id)"
                />
              </div>
            </template>
          </Card>
        </div>
      </div>
    </div>
    <Dialog
        v-model:visible="visible"
        :breakpoints="{ '960px': '75vw', '641px': '100vw' }"
        :style="{ width: '50vw' }"
        header="Datos de la empresa"
        modal
    >

      <ComponenteEmpresa v-if="cargadosDatos" :empresaEntrada="datosEmpresa"/>
      <Cargando v-else/>
    </Dialog>
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
