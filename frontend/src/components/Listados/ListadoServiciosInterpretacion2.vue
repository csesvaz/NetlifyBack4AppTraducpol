<script>
import {useEmpresaStore} from "@/stores/EmpresaStore";
import {mapActions, mapState} from "pinia";
import Button from "primevue/button";
import Column from "primevue/column";
import ComponenteEmpresa from "../ComponenteEmpresa.vue";
import DataTable from "primevue/datatable";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import {FilterMatchMode} from "primevue/api";

export default {
  components: {
    Button,
    Column,
    ComponenteEmpresa,
    DataTable,
    Dialog,
    InputText,
  },
  data() {
    return {
      visible: false,
      empresaSeleccion: {
        id: null,
        nombre: null,
        direccion: null,
        telefono: null,
        email: null,
      },
      serviciosInterpretacion: [],
      empresaNombre: null,
      customers: null,
      filters: {
        idioma: {value: null, matchMode: FilterMatchMode.CONTAINS},
        provincia: {value: null, matchMode: FilterMatchMode.CONTAINS},
      },
    };
  },
  computed: {
    ...mapState(useEmpresaStore, ["empresas", "servicios"]),
  },
  methods: {
    ...mapActions(useEmpresaStore, [
      "getEmpresaDeServicio",
    ]),
    filtrarServiciosInterpretacion() {
      for (let i = 0; i < this.servicios.length; i++) {
        if (this.servicios[i].tipo == "INTERPRETACION") {
          this.serviciosInterpretacion.push(this.servicios[i]);
        }
      }
  ;
    },
    async filtrarEmpresa(servicio) {

     let a = await this.getEmpresaDeServicio(servicio.id);
     this.empresaSeleccion = a;
    
    },
  },
  created() {
    this.filtrarServiciosInterpretacion();
  }
};
</script>

<template>
  <div class="card">
    <DataTable
        v-model:filters="filters"
        :rows="10"
        :rowsPerPageOptions="[5, 10, 20, 50]"
        :value="serviciosInterpretacion"
        Fields="[
        'idioma',
        'horarioInicioServicio',
        'horarioFinServicio',
        'provincia',
        'servicioOnline',
      ]"
        filterDisplay="row"
        paginator
        removableSort
        showGridlines
        tableStyle="min-width: 50rem"
    >
      <template #header>
        <div class="flex flex-wrap justify-content-between gap-2">
          <span class="font-bold">Servicios de Interpretación.</span>
        </div>
      </template>
      <Column
          bodyClass="text-center"
          field="idioma"
          header="Idioma"
          sortable
          style="width: 15%"
      >
        <template #body="{ data }">
          {{ data.idioma }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <InputText
              v-model="filterModel.value"
              :title="'Introduce el idioma a buscar.'"
              class="p-column-filter"
              placeholder="Búsqueda por idioma"
              type="text"
              @input="filterCallback()"
          />
        </template
        >
      </Column>
      <Column
          bodyClass="text-center"
          field="horarioInicioServicio"
          header="Hora de Inicio"
          style="width: 15%"
      >
        <template #body="{ data }">
          {{ data.horarioInicioServicio }}
        </template>
      </Column>
      <Column
          bodyClass="text-center"
          field="horarioFinServicio"
          header="Hora de Fin"
          style="width: 15%"
      >
        <template #body="{ data }">
          {{ data.horarioFinServicio }}
        </template>
      </Column>
      <Column
          bodyClass="text-center"
          field="provincia"
          header="Provincia"
          sortable
          style="width: 15%"
      >
        <template #body="{ data }">
          {{ data.provincia }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <InputText
              v-model="filterModel.value"
              :title="'Introduce la provincia a buscar.'"
              class="p-column-filter"
              placeholder="Búsqueda por provincia"
              type="text"
              @input="filterCallback()"
          />
        </template
        >
      </Column>
      <Column
          bodyClass="text-center"
          dataType="boolean"
          field="servicioOnline"
          header="Servicio OnLine"
          style="width: 15%"
      >
        <template #body="{ data }">
          <i
              :class="{
              'pi-check-circle': data.servicioOnline,
              'pi-times-circle': !data.servicioOnline,
            }"
              class="pi"
          ></i>
        </template>
      </Column>
      <Column
          bodyClass="text-center"
          field="eye"
          header="Visualizar Empresa"
          style="width: 15%"
      >
        <template v-if="$route.path === '/servicio'" #body="{ data }">
          <Button
              :title="'Visualizar datos de contacto de la empresa.'"
              icon="pi pi-eye"
              type="Button"
              @click="(visible = true), filtrarEmpresa(data)"
          />
          <Dialog
              v-model:visible="visible"
              :breakpoints="{ '960px': '75vw', '641px': '100vw' }"
              :style="{ width: '50vw' }"
              header="Datos de la empresa"
              modal
          >
            <ComponenteEmpresa :empresaEntrada="empresaSeleccion"/>
          </Dialog>
        </template>
      </Column>
      <template #footer>
        Hay un total de {{ servicios ? servicios.length : 0 }} servicios de
        interpretación.
      </template>
    </DataTable>
  </div>
</template>

<style>
</style>