<script>
export default {
  data() {
    return {
      provinciaSeleccionada: "",
      provinciaSeleccionadoMultiple: [],
      provincias: [
        "Álava/Araba",
        "Albacete",
        "Alicante",
        "Almería",
        "Asturias",
        "Ávila",
        "Badajoz",
        "Baleares",
        "Barcelona",
        "Burgos",
        "Cáceres",
        "Cádiz",
        "Cantabria",
        "Castellón",
        "Ceuta",
        "Ciudad Real",
        "Córdoba",
        "Cuenca",
        "Gerona/Girona",
        "Granada",
        "Guadalajara",
        "Guipúzcoa/Gipuzkoa",
        "Huelva",
        "Huesca",
        "Jaén",
        "La Coruña/A Coruña",
        "La Rioja",
        "Las Palmas",
        "León",
        "Lérida/Lleida",
        "Lugo",
        "Madrid",
        "Málaga",
        "Melilla",
        "Murcia",
        "Navarra",
        "Orense/Ourense",
        "Palencia",
        "Pontevedra",
        "Salamanca",
        "Segovia",
        "Sevilla",
        "Soria",
        "Tarragona",
        "Tenerife",
        "Teruel",
        "Toledo",
        "Valencia",
        "Valladolid",
        "Vizcaya/Bizkaia",
        "Zamora",
        "Zaragoza",
      ],
    };
  },
};
</script>

<template>
  <div class="col-6 col-md-4">
    <select
      v-if="$route.path === '/altaServicioInterpretacion'"
      v-model="provinciaSeleccionadoMultiple"
      class="form-select form-select-sm"
      aria-label=".form-select-sm example"
      multiple="provinciaSeleccionadoMultiple"
      required
      @change="$emit('provinciaSeleccionada', provinciaSeleccionadoMultiple)"
    >
      <option value="" disabled>Elige Provincia</option>
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
      class="form-select form-select-sm"
      aria-label=".form-select-sm example"
      required
      @change="$emit('provinciaSeleccionada', provinciaSeleccionada)"
    >
      <option value="" disabled>Elige Provincia</option>
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
