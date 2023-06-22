<script>
export default {
  data() {
    return {
      idiomaSeleccionado: "",
      idiomaSeleccionadoMultiple: [],
      idiomas: [
        "Alemán",
        "Árabe",
        "Bengalí",
        "Birmano",
        "Bhojpuri",
        "Chino mandarín",
        "Coreano",
        "Español",
        "Francés",
        "Gujarati",
        "Hindi",
        "Indonesio",
        "Inglés",
        "Italiano",
        "Japonés",
        "Javanés",
        "Kannada",
        "Khmer",
        "Malayalam",
        "Marathi",
        "Neerlandés",
        "Oriya",
        "Pastún",
        "Persa",
        "Polaco",
        "Portugués",
        "Punjabi",
        "Rumano",
        "Ruso",
        "Serbio",
        "Sundanés",
        "Swahili",
        "Tamil",
        "Telugu",
        "Thai",
        "Turco",
        "Ucraniano",
        "Urdu",
        "Vietnamita",
        "Wu (shanghainés)",
      ],
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
