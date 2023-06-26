<script>
export default {
  data() {
    return {
      plazoEntregaSeleccionado: "",
    };
  },
};
</script>

<template>
  <div class="col-md-4">
    <select
      v-model="plazoEntregaSeleccionado"
      aria-label=".form-select-sm example"
      class="form-select form-select-sm"
      required
      @change="$emit('plazoEntregaSeleccionado', plazoEntregaSeleccionado)"
    >
      <option value="">Seleccione Plazo de entrega</option>
      <option value="1 hora">1 hora</option>
      <option value="2 horas">2 horas</option>
      <option value="4 horas">4 horas</option>
      <option value="6 horas">6 horas</option>
      <option value="8 horas">8 horas</option>
      <option value="12 hora">12 horas</option>
      <option value="1 día">1 día</option>
      <option value="2 días">2 días</option>
      <option value="3 días">3 días</option>
      <option value="1 semana">1 semana</option>
      <option value="2 semanas">2 semanas</option>
      <option value="3 semanas">3 semanas</option>
      <option value="1 mes">1 mes</option>
      <option value="2 mes">2 mes</option>
      <option value="3 meses">3 meses</option>
      <option value="6 meses">6 meses</option>
      <option value="9 meses">9 meses</option>
      <option value="1 año">1 año</option>
      <option value="Mayor a 1 año">Mayor a 1 año</option>
    </select>
  </div>
</template>
