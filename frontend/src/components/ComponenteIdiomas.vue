<script>
export default {
  data() {
    return {
      idiomaSeleccionado: "",
    };
  },
};
</script>
<template>
  <div class="col-8 col-md-4">
    <select v-model="idiomaSeleccionado"
      class="form-select form-select-sm"
      aria-label=".form-select-sm example"
      @change="$emit('idiomaSeleccionado', idiomaSeleccionado)"
    >
      <option value="">Elige Idioma</option>
      <option value="Alemán">Alemán</option>
      <option value="Árabe">Árabe</option>
      <option value="Bengalí">Bengalí</option>
      <option value="Birmano">Birmano</option>
      <option value="Bhojpuri">Bhojpuri</option>
      <option value="Chino mandarín">Chino mandarín</option>
      <option value="Coreano">Coreano</option>
      <option value="Español">Español</option>
      <option value="Francés">Francés</option>
      <option value="Gujarati">Gujarati</option>
      <option value="Hindi">Hindi</option>
      <option value="Indonesio">Indonesio</option>
      <option value="Inglés">Inglés</option>
      <option value="Italiano">Italiano</option>
      <option value="Japonés">Japonés</option>
      <option value="Javanés">Javanés</option>
      <option value="Kannada">Kannada</option>
      <option value="Khmer">Khmer</option>
      <option value="Malayalam">Malayalam</option>
      <option value="Marathi">Marathi</option>
      <option value="Neerlandés">Neerlandés</option>
      <option value="Oriya">Oriya</option>
      <option value="Pastún">Pastún</option>
      <option value="Persa">Persa</option>
      <option value="Polaco">Polaco</option>
      <option value="Portugués">Portugués</option>
      <option value="Punjabi">Punjabi</option>
      <option value="Rumano">Rumano</option>
      <option value="Ruso">Ruso</option>
      <option value="Serbio">Serbio</option>
      <option value="Sundanés">Sundanés</option>
      <option value="Swahili">Swahili</option>
      <option value="Tamil">Tamil</option>
      <option value="Telugu">Telugu</option>
      <option value="Thai">Thai</option>
      <option value="Turco">Turco</option>
      <option value="Ucraniano">Ucraniano</option>
      <option value="Urdu">Urdu</option>
      <option value="Vietnamita">Vietnamita</option>
      <option value="Wu (shanghainés)">Wu (shanghainés)</option>
    </select>
  </div>
</template>
