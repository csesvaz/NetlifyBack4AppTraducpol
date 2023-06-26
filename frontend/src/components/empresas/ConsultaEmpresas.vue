<script>
import Empresa from "@/components/empresas/Empresa.vue";
import ListadoEmpresas from "@/components/empresas/ListadoEmpresas.vue";

export default {
  components: {ListadoEmpresas, Empresa},
};
</script>

<template>
  <div>
    <div class="contenedor">
      <br/>
      <div class="row mt-3">
        <h3 class="IntroduccionAyuda">
          Consulta de datos de Empresas de Servicios Lingüísticos.
        </h3>
      </div>
    </div>
    <ListadoEmpresas :esAdministrador="false"/>
  </div>
</template>

<style scoped>
.contenedor {
  margin-bottom: 1vh;
  margin-left: 2vw;
  margin-top: 2vh;
  text-align: center;
}

@media (max-width: 768px) {
  .contenedor {
    margin-top: 4vh;
    margin-left: 2vw;
  }
}
</style>
