<script>
import { constantes } from "@/constantes/constantes.js";
export default {
  data() {
    return {
      idiomaSeleccionado: "",
      idiomaSeleccionadoMultiple: [],
      idiomas: constantes.idiomas
    };
  },
};
</script>

<template>
  <div class="col-md-2 col-6">
    <select
      v-if="
        $route.path === '/altaServicioInterpretacion' ||
        $route.path === '/altaServicioTraduccion'
      "
      v-model="idiomaSeleccionadoMultiple"
      aria-label=".form-select-sm example"
      class="form-select form-select-sm"
      multiple="idiomaSeleccionadoMultiple"
      required
      @change="$emit('idiomaSeleccionado', idiomaSeleccionadoMultiple)"
    >
      <option selected="" value="">Elige Idioma</option>
      <option v-for="idioma in idiomas" :key="idioma" :value="idioma">
        {{ idioma }}
      </option>
    </select>
    <select
      v-else
      v-model="idiomaSeleccionado"
      aria-label=".form-select-sm example"
      class="form-select form-select-sm"
      required
      @change="$emit('idiomaSeleccionado', idiomaSeleccionado)"
    >
      <option selected="" value="">Elige Idioma</option>
      <option v-for="idioma in idiomas" :key="idioma" :value="idioma">
        {{ idioma }}
      </option>
    </select>
  </div>
</template>
