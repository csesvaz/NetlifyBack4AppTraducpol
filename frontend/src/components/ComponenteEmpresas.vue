<script>
import { mapActions, mapState } from "pinia";
import { useEmpresaStore } from "@/stores/EmpresaStore";
import Button from "primevue/button";
import Column from "primevue/column";
import ComponenteEmpresa from "@/components/ComponenteEmpresa.vue";
import DataTable from "primevue/datatable";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import { FilterMatchMode } from "primevue/api";


export default {
  components: { Button, Column, ComponenteEmpresa, DataTable, Dialog, InputText },
  data() {
    return {
      visible: false,
      customers: null,
      filters: {
        nombre: { value: null, matchMode: FilterMatchMode.CONTAINS },
        direccion: { value: null, matchMode: FilterMatchMode.CONTAINS },
        telefono: { value: null, matchMode: FilterMatchMode.CONTAINS },
        email: { value: null, matchMode: FilterMatchMode.CONTAINS },
      },
      datosEmpresa: undefined,
    };
  },
  computed: {
    ...mapState(useEmpresaStore, ["empresas"]),
  },
  methods:{
    ...mapActions(useEmpresaStore, ["getEmpresa"]),
    async verServicios(data){
      this.visible = true;
      this.datosEmpresa = await this.getEmpresa(data.id);  
    }
  }
};
</script>

<template>
  <div class="card">
    <DataTable
      v-model:filters="filters"
      :globalFilterFields="['nombre', 'direccion', 'telefono', 'email']"
      :rows="10"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      :value="empresas"
      filterDisplay="row"
      paginator
      removableSort
      showGridlines
      tableStyle="min-width: 50rem"
    >
      <template #header>
        <div
          class="flex flex-wrap align-items-center justify-content-between gap-2"
        >
          <span class="text-xl text-900 font-bold">Empresas</span>
        </div>
      </template>
      <Column field="nombre" header="Nombre" sortable style="width: 15%">
        <template #body="{ data }">
          {{ data.nombre }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <InputText
            v-model="filterModel.value"
            class="p-column-filter"
            placeholder="Búsqueda por nombre"
            type="text"
            @input="filterCallback()"
          />
        </template>
      </Column>
      <Column field="direccion" header="Dirección" sortable style="width: 25%">
        <template #body="{ data }">
          {{ data.direccion }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <InputText
            v-model="filterModel.value"
            class="p-column-filter"
            placeholder="Búsqueda por dirección"
            type="text"
            @input="filterCallback()"
          />
        </template>
      </Column>
      <Column field="telefono" header="Telefono" sortable style="width: 25%">
        <template #body="{ data }">
          {{ data.telefono }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <InputText
            v-model="filterModel.value"
            class="p-column-filter"
            placeholder="Búsqueda por dirección"
            type="text"
            @input="filterCallback()"
          />
        </template>
      </Column>
      <Column field="email" header="Email" sortable style="width: 25%">
        <template #body="{ data }">
          {{ data.email }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <InputText
            v-model="filterModel.value"
            class="p-column-filter"
            placeholder="Búsqueda por nombre"
            type="text"
            @input="filterCallback()"
          />
        </template>
      </Column>
        <Column
        bodyClass="text-center"
        field="eye"
        header="Visualizar Servicios"
        style="width: 15%"
      >
        <template #body="{ data }">
          <Button
            :title="'Visualizar servicios.'"
            icon="pi pi-eye"
            type="button"
            @click="verServicios(data)"
          />
          
        </template>
      </Column>
      <template #footer>
        Hay un total de {{ empresas ? empresas.length : 0 }} empresas.
      </template>
    </DataTable>
    <Dialog
            v-model:visible="visible"
            :breakpoints="{ '960px': '75vw', '641px': '100vw' }"
            :style="{ width: '50vw' }"
            header="Datos de la empresa"
            modal
          >
          
            <ComponenteEmpresa :empresaEntrada="datosEmpresa" />
          </Dialog>
  </div>
</template>

<style></style>
