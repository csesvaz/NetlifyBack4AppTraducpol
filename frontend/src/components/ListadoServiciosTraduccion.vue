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
      empresaSeleccion: null,
      empresaNombre: null,
      customers: null,
      filters: {
        idioma: { value: null, matchMode: FilterMatchMode.CONTAINS },
        tipoDocumento: { value: null, matchMode: FilterMatchMode.CONTAINS },
        tiempoEntrega: { value: null, matchMode: FilterMatchMode.CONTAINS },
        traduccionJurada: { value: null, matchMode: FilterMatchMode.CONTAINS },
      },
    };
  },
  components: { Column, DataTable, InputText, Button, Dialog, ComponenteEmpresa },
  methods: {
    ...mapActions(useEmpresaStore, ["convertirBooleano"]),
    serviciosTraduccion() {
      let serviciosTraduccion = [];
      for (let i = 0; i < this.servicios.length; i++) {
        if (this.servicios[i].tipo == "traduccion") {
          serviciosTraduccion.push(this.servicios[i]);
        }
      }
      return serviciosTraduccion;
    },
    filtrarEmpresa(nombreEmpresa) {
      this.empresaSeleccion = this.empresas.find(
        (empresa) => empresa.nombre === nombreEmpresa
      );
    },
  },
  created() {
    const empresaStore = useEmpresaStore();
    this.servicios = empresaStore.fetchServicios();
    this.servicios = this.serviciosTraduccion();
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
        'tipoDocumento',
        'tiempoEntrega',
        'traduccionJurada',
      ]"
    >
      <template #header>
        <div
          class="flex flex-wrap align-items-center justify-content-between gap-2"
        >
          <span class="text-xl text-900 font-bold"
            >Servicios de Traducción.</span
          >
        </div>
      </template>
      <Column bodyClass="text-center" 
      field="idioma" header="Idioma" sortable style="width: 15%">
        <template #body="{ data }" >
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
        field="tipoDocumento"
        header="Tipo de Documento"
        sortable
        style="width: 20%"
      >
        <template #body="{ data }">
          {{ data.tipoDocumento }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <InputText
            v-model="filterModel.value"
            type="text"
            @input="filterCallback()"
            class="p-column-filter"
            placeholder="Búsqueda por tipo de Documento"
            :title="'Introduce el tipo de documento a buscar.'"
          /> </template
      ></Column>
      <Column bodyClass="text-center" 
      field="tiempoEntrega" header="Tiempo de entrega" sortable style="width: 15%"
        ><template #body="{ data }">
          {{ data.tiempoEntrega }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <InputText
            v-model="filterModel.value"
            type="text"
            @input="filterCallback()"
            class="p-column-filter"
            placeholder="Búsqueda por tiempo de entrega"
            :title="'Introduce el tiempo de entrega a buscar.'"
          /> </template
      ></Column>
  
      <Column   field="traduccionJurada" header="Traducción Jurada" dataType="boolean" bodyClass="text-center"  style="width: 15%">
                <template #body="{ data }">
                    <i class="pi" :class="{ 'pi-check-circle text-green-500 ': data.traduccionJurada, 'pi-times-circle text-red-500': !data.traduccionJurada }"></i>
                </template>
               
      </Column>
      <Column bodyClass="text-center" 
      field="eye" header="Visualizar Empresa" style="width: 15%">
        <template  #body="{ data }" v-if="$route.path === '/servicio'">
          <Button type="button" icon="pi pi-eye" @click="visible = true, filtrarEmpresa(data.empresa)"  :title="'Visualizar datos de contacto de la empresa.'" />
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
        traducción.
      </template>
    </DataTable>
  </div>
</template>
