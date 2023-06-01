<script>
export default {
  data() {
    return {
        tipoDocumentoSeleccionado: "",
    };
  },
};
</script>
<template>
 <div class="col-md-4">
          <select v-model="tipoDocumentoSeleccionado"
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            required
            @change="$emit('tipoDocumentoSeleccionado', tipoDocumentoSeleccionado)"
    >
            <option value="" selected="">Seleccione Tipo de Documento</option>
            <option value="Carta">Carta</option>
            <option value="Informe Policial">Informe Policial</option>
            <option value="Informe Forense">Informe Forense</option>
            <option value="Declaración de Testigo">Declaración de Testigo</option>
            <option value="Certificado de Antecedentes">
              Certificado de Antecedentes
            </option>
            <option value="Orden Judicial">Orden Judicial</option>
            <option value="Registro de Propiedad">Registro de Propiedad</option>
            <option value="Expediente Penal">Expediente Penal</option>
            <option value="Permiso de Residencia">Permiso de Residencia</option>
            <option value="Memorando Interno">Memorando Interno</option>
            <option value="Parte de Accidente">Parte de Accidente</option>
            <option value="Autorización Expresa">Autorización Expresa</option>
            <option value="Documento de Identidad">Documento de Identidad</option>
            <option value="Carnet de Conducir">Licencia o carnet de Conducir</option>
            <option value="Pasaporte">Pasaporte</option>
            
            <option value="Otros">Otros</option>
          </select> 
        </div>

</template>