<script>
export default {
  data() {
    return {
      tipoDocumentoSeleccionadoMultiple: [],
      tipoDocumentoSeleccionado: "",
      documentos: [
        "Carta",
        "Informe Policial",
        "Informe Forense",
        "Declaración de Testigo",
        "Certificado de Antecedentes",
        "Orden Judicial",
        "Registro de Propiedad",
        "Expediente Penal",
        "Permiso de Residencia",
        "Memorando Interno",
        "Parte de Accidente",
        "Autorización Expresa",
        "Documento de Identidad",
        "Carnet de Conducir",
        "Pasaporte",
        "Otros",
      ],
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
