<script>
import { mapState } from "pinia";
import { useEmpresaStore } from "../stores/EmpresaStore";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import InputText from "primevue/inputtext";
import { FilterMatchMode } from 'primevue/api';
export default {
  computed: {
    ...mapState(useEmpresaStore, ["empresas"]),
  },
  data() {
    return {
      customers: null,
      filters: {
        nombre: { value: null, matchMode: FilterMatchMode.CONTAINS },
        direccion: { value: null, matchMode: FilterMatchMode.CONTAINS },
        telefono: { value: null, matchMode: FilterMatchMode.CONTAINS },
        email: { value: null, matchMode: FilterMatchMode.CONTAINS }
      },
    };
  },
  components: { Column, DataTable, InputText },
};
</script>

<template>
  <div class="card">
    <DataTable
      v-model:filters="filters"
      :value="empresas"
      paginator
      :rows="10"
      filterDisplay="row"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      showGridlines
      removableSort
      tableStyle="min-width: 50rem"
      :globalFilterFields="['nombre', 'direccion', 'telefono', 'email']"
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
            type="text"
            @input="filterCallback()"
            class="p-column-filter"
            placeholder="Búsqueda por nombre"
          /> </template
      ></Column>
      <Column
        field="direccion"
        header="Dirección"
        sortable
        style="width: 25%"
      >  <template #body="{ data }">
          {{ data.direccion }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <InputText
            v-model="filterModel.value"
            type="text"
            @input="filterCallback()"
            class="p-column-filter"
            placeholder="Búsqueda por dirección"
          /> </template
      ></Column>
      <Column
        field="telefono"
        header="Telefono"
        sortable
        style="width: 25%"
      ><template #body="{ data }">
          {{ data.telefono }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <InputText
            v-model="filterModel.value"
            type="text"
            @input="filterCallback()"
            class="p-column-filter"
            placeholder="Búsqueda por dirección"
          /> </template
      ></Column>
      <Column field="email" header="Email" sortable style="width: 25%"> <template #body="{ data }">
          {{ data.email }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <InputText
            v-model="filterModel.value"
            type="text"
            @input="filterCallback()"
            class="p-column-filter"
            placeholder="Búsqueda por nombre"
          /> </template
      ></Column>
      <template #footer> Hay un total de {{ empresas ? empresas.length : 0 }} empresas. </template>
    </DataTable>
  </div>
</template>
