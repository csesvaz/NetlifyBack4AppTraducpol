<script>
import { useEmpresaStore } from "../stores/EmpresaStore";
import { mapActions, mapState } from "pinia";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import { FilterMatchMode } from "primevue/api";
import ComponenteEmpresa from "./ComponenteEmpresa.vue";

export default {
  computed: {
    ...mapState(useEmpresaStore, ["empresas"]),
  },
  data() {
    return {
      visible: false,
      servicios: [],
      empresaSeleccion: {
        id: null,
        nombre: null,
        direccion: null,
        telefono: null,
        email: null,
      },
      empresaNombre: null,
      customers: null,
      filters: {
        idioma: { value: null, matchMode: FilterMatchMode.CONTAINS },
        provincia: { value: null, matchMode: FilterMatchMode.CONTAINS },
      },
    };
  },
  components: {
    Column,
    DataTable,
    InputText,
    Button,
    Dialog,
    ComponenteEmpresa,
  },
  methods: {
    ...mapActions(useEmpresaStore, [
      "convertirBooleano",
      "getEmpresaDeServicio",
    ]),
    serviciosInterpretacion() {
      let serviciosInterpretacion = [];
      for (let i = 0; i < this.servicios.length; i++) {
        if (this.servicios[i].tipo == "INTERPRETACION") {
          serviciosInterpretacion.push(this.servicios[i]);
        }
      }
      return serviciosInterpretacion;
    },

    async filtrarEmpresa(servicio) {
      
      this.empresaSeleccion = await this.getEmpresaDeServicio(servicio.id);
      
    },
  },

  async created() {
    const empresaStore = useEmpresaStore();
    this.servicios = await empresaStore.getServicios();
    this.servicios = this.serviciosInterpretacion();
  },
};
</script>

<template>
  <div class="card">
    <DataTable
      v-model:filters="filters"
      :value="servicios"
      paginator
      :rows="10"
      filterDisplay="row"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      showGridlines
      removableSort
      tableStyle="min-width: 50rem"
      Fields="[
        'idioma',
        'horarioInicioServicio',
        'horarioFinServicio',
        'provincia',
        'servicioOnline',
      ]"
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
            type="text"
            @input="filterCallback()"
            class="p-column-filter"
            placeholder="Búsqueda por idioma"
            :title="'Introduce el idioma a buscar.'"
          /> </template
      ></Column>
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
        ><template #body="{ data }">
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
            type="text"
            @input="filterCallback()"
            class="p-column-filter"
            placeholder="Búsqueda por provincia"
            :title="'Introduce la provincia a buscar.'"
          /> </template
      ></Column>
      <Column
        field="servicioOnline"
        header="Servicio OnLine"
        dataType="boolean"
        bodyClass="text-center"
        style="width: 15%"
      >
        <template #body="{ data }">
          <i
            class="pi"
            :class="{
              'pi-check-circle': data.servicioOnline,
              'pi-times-circle': !data.servicioOnline,
            }"
          ></i>
        </template>
      </Column>
      <Column
        bodyClass="text-center"
        field="eye"
        header="Visualizar Empresa"
        style="width: 15%"
      >
        <template #body="{ data }" v-if="$route.path === '/servicio'">
          <Button
            type="button"
            icon="pi pi-eye"
            @click="(visible = true), filtrarEmpresa(data)"
            :title="'Visualizar datos de contacto de la empresa.'"
          />
          <Dialog
            v-model:visible="visible"
            modal
            header="Datos de la empresa"
            :style="{ width: '50vw' }"
            :breakpoints="{ '960px': '75vw', '641px': '100vw' }"
          >
            <ComponenteEmpresa :empresaEntrada="empresaSeleccion" />
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
