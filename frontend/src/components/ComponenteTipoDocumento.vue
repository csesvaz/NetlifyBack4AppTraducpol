<script>
export default {
  data() {
    return {
        tipoDocumentoSeleccionado: [],
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
        "Otros"
      ]
    };
  },
};
</script>
<template>
 <div class="col-md-4">
  
          <select v-if="$route.path === '/altaServicioTraduccion'" 
          v-model="tipoDocumentoSeleccionado"
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            multiple
            required
            @change="$emit('tipoDocumentoSeleccionado', tipoDocumentoSeleccionado)"
    >
    <option value="" disabled>Seleccione Tipo de Documento</option>
      <option v-for="documento in documentos" :key="documento" :value="documento">{{ documento }}</option>
    </select>
          <select v-else
          v-model="tipoDocumentoSeleccionado"
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            required
            @change="$emit('tipoDocumentoSeleccionado', tipoDocumentoSeleccionado)"
    >
    <option value="" disabled>Seleccione Tipo de Documento</option>
      <option v-for="documento in documentos" :key="documento" :value="documento">{{ documento }}</option>
    </select>
        </div>

</template>