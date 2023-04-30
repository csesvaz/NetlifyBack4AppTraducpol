<script>
import { mapState } from "pinia";
import { useEmpresaStore } from "../stores/EmpresaStore";
export default {
  computed: {
    ...mapState(useEmpresaStore, ["empresas"]),
  },
};

</script>
<template>
  <div class="container-fluid mt-4">
    <h3>SERVICIOS DE TRADUCCIÓN</h3>
    <div class="row mb-12">
      <span class="col-2 pt-3 pb-3 bg-primary border border-dark">Empresa</span>
      <span class="col-2 bg-primary border border-dark">Idioma</span>
      <span class="col-3 bg-primary border border-dark">Tipo de Documento</span>
      <span class="col-2 bg-primary border border-dark">Plazo de Entrega</span>
      <span class="col-2 bg-primary border border-dark">Traducción Jurada</span>
    </div>
    <!-- v-for de los servicios de Traducción-->
    <div v-for="empresa in empresas" :key="empresa.id" >
      <div v-for="servicio in empresa.servicios" :key="servicio.id" >
        <div v-if="servicio.tipo == 'traduccion'" class="row mb-12" >
        <span class="col-2 bg-ligth border border-dark">{{
          empresa.nombre
        }}</span>
        <span class="col-2 bg-ligth border border-dark">{{
          servicio.idioma
        }}</span>
        <span class="col-3 bg-ligth border border-dark">{{
          servicio.tipoDocumento
        }}</span>
        <span class="col-2 bg-ligth border border-dark">{{
          servicio.tiempoEntrega
        }}</span>
        <span class="col-2 bg-ligth border border-dark">{{
          servicio.traduccionJurada
        }}</span>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.container-fluid {
  width: 100%;
  margin-left: 2%;
}
span {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.col-2 {
  width: 17%;
  text-align: center;
}

.col-1 {
  width: 10%;
  text-align: center;
}

.col-3 {
  width: 25%;
  text-align: center;
}

.lapiz {
  color: rgb(110, 60, 60);
  padding-right: 0.5%;
}
.bin {
  margin-right: 1%;
}
@media (max-width: 768px) {
  .container-fluid {
  width: 100%;
  margin-left: 2%;
  font-size: 0.7rem;
}
}
</style>
