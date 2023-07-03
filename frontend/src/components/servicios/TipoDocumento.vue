<script>
import { constantes } from "@/constantes/constantes.js";
export default {
  data() {
    return {
      tipoDocumentoSeleccionadoMultiple: [],
      tipoDocumentoSeleccionado: "",
      documentos: constantes.documentos,
    };
  },
};
</script>

<template>
  <div class="col-6 col-md-4">
    <select
      v-if="$route.path === '/altaServicioTraduccion'"
      v-model="tipoDocumentoSeleccionadoMultiple"
      aria-label=".form-select-sm example"
      class="form-select form-select-sm"
      multiple
      required
      @change="
        $emit('tipoDocumentoSeleccionado', tipoDocumentoSeleccionadoMultiple)
      "
    >
      <option disabled value="">Seleccione Tipo de Documento</option>
      <option
        v-for="documento in documentos"
        :key="documento"
        :value="documento"
      >
        {{ documento }}
      </option>
    </select>
    <select
      v-else
      v-model="tipoDocumentoSeleccionado"
      aria-label=".form-select-sm example"
      class="form-select form-select-sm"
      required
      @change="$emit('tipoDocumentoSeleccionado', tipoDocumentoSeleccionado)"
    >
      <option value="">Seleccione Tipo de Documento</option>
      <option
        v-for="documento in documentos"
        :key="documento"
        :value="documento"
      >
        {{ documento }}
      </option>
    </select>
  </div>
</template>
