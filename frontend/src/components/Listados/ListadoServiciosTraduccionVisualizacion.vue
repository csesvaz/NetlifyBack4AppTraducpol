<script>
import { useEmpresaStore } from "@/stores/EmpresaStore";
import { mapActions, mapState } from "pinia";
import Button from "primevue/button";
import Column from "primevue/column";
import ComponenteEmpresa from "@/components/ComponenteEmpresa.vue";
import DataTable from "primevue/datatable";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import { FilterMatchMode } from "primevue/api";

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
      serviciosTraduccion: [],
      empresaSeleccion: {
        id: null,
        nombre: null,
        direccion: null,
        telefono: null,
        email: null,
      },
      empresaNombre: null,
      filters: {
        idioma: { value: null, matchMode: FilterMatchMode.CONTAINS },
        tipoDocumento: { value: null, matchMode: FilterMatchMode.CONTAINS },
        plazoEntrega: { value: null, matchMode: FilterMatchMode.CONTAINS },
        traductorJurado: { value: null, matchMode: FilterMatchMode.CONTAINS },
      },
    };
  },
  computed: {
    ...mapState(useEmpresaStore, ["empresas", "servicios"]),
  },

  methods: {
    ...mapActions(useEmpresaStore, ["getEmpresaDeServicio"]),
    filtrarServiciosTraduccion() {
      for (let i = 0; i < this.servicios.length; i++) {
        if (this.servicios[i].tipo == "TRADUCCION") {
          this.serviciosTraduccion.push(this.servicios[i]);
        }
      }
      return this.serviciosTraduccion;
    },
    async filtrarEmpresa(servicio) {
      this.empresaSeleccion = await this.getEmpresaDeServicio(servicio.id);
    },
  },
  async created() {
    this.filtrarServiciosTraduccion();
  },
};
</script>

<template>
  <div class="card">
    <DataTable
      v-model:filters="filters"
      :rows="10"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      :value="serviciosTraduccion"
      Fields="[
        'idioma',
        'tipoDocumento',
        'tiempoEntrega',
        'traductorJurado',
      ]"
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
          <span class="text-xl text-900 font-bold"
            >Servicios de Traducción.</span
          >
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
        </template>
      </Column>
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
            :title="'Introduce el tipo de documento a buscar.'"
            class="p-column-filter"
            placeholder="Búsqueda por tipo de Documento"
            type="text"
            @input="filterCallback()"
          />
        </template>
      </Column>
      <Column
        bodyClass="text-center"
        field="plazoEntrega"
        header="Tiempo de entrega"
        sortable
        style="width: 15%"
      >
        <template #body="{ data }">
          {{ data.plazoEntrega }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <InputText
            v-model="filterModel.value"
            :title="'Introduce el tiempo de entrega a buscar.'"
            class="p-column-filter"
            placeholder="Búsqueda por tiempo de entrega"
            type="text"
            @input="filterCallback()"
          />
        </template>
      </Column>

      <Column
        bodyClass="text-center"
        dataType="boolean"
        field="traductorJurado"
        header="Traducción Jurada"
        style="width: 15%"
      >
        <template #body="{ data }">
          <i
            :class="{
              'pi-check-circle text-green-500 ': data.traductorJurado,
              'pi-times-circle text-red-500': !data.traductorJurado,
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
            type="button"
            @click="(visible = true), filtrarEmpresa(data)"
          />
          <Dialog
            v-model:visible="visible"
            :breakpoints="{ '960px': '75vw', '641px': '100vw' }"
            :style="{ width: '50vw' }"
            header="Datos de la empresa"
            modal
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
