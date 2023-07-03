<script>
import { constantes } from "@/constantes/constantes.js";
export default {
  data() {
    return {
      provinciaSeleccionada: "",
      provinciaSeleccionadoMultiple: [],
      provincias: constantes.provincias,
    };
  },
};
</script>

<template>
  <div class="col-6 col-md-4">
    <select
      v-if="$route.path === '/altaServicioInterpretacion'"
      v-model="provinciaSeleccionadoMultiple"
      aria-label=".form-select-sm example"
      class="form-select form-select-sm"
      multiple="provinciaSeleccionadoMultiple"
      required
      @change="$emit('provinciaSeleccionada', provinciaSeleccionadoMultiple)"
    >
      <option disabled value="">Elige Provincia</option>
      <option
        v-for="provincia in provincias"
        :key="provincia"
        :value="provincia"
      >
        {{ provincia }}
      </option>
    </select>
    <select
      v-else
      v-model="provinciaSeleccionada"
      aria-label=".form-select-sm example"
      class="form-select form-select-sm"
      required
      @change="$emit('provinciaSeleccionada', provinciaSeleccionada)"
    >
      <option value="">Elige Provincia</option>
      <option
        v-for="provincia in provincias"
        :key="provincia"
        :value="provincia"
      >
        {{ provincia }}
      </option>
    </select>
  </div>
</template>
