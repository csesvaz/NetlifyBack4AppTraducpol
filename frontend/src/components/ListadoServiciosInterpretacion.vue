<script></script>
<template>
  <div class="container-fluid mt-4">
    <h3>SERVICIOS DE INTERPRETACIÓN.</h3>
    <div class="row mb-12">
      <span class="col-2 pt-3 pb-3 bg-primary border border-dark"
        >Empresa
      </span>
      <span class="col-2 bg-primary border border-dark">Idioma </span>
      <span class="col-1 bg-primary border border-dark">Hora Inicio </span>
      <span class="col-1 bg-primary border border-dark">Hora Fin </span>
      <span class="col-3 bg-primary border border-dark">Provincia </span>
      <span class="col-2 bg-primary border border-dark">Servicio ONLINE </span>
    </div>
    <!-- Aqui va un v-for de los servicios de Interpretacion-->

    <div class="row mb-12">
      <span class="col-2 bg-ligth border border-dark"> nombreEmpresa </span>
      <span class="col-2 bg-ligth border border-dark"> Idioma </span>
      <span class="col-1 bg-ligth border border-dark"> horarioInicio </span>
      <span class="col-1 bg-ligth border border-dark"> horarioFin </span>
      <span class="col-3 bg-ligth border border-dark"> provincia </span>
      <span class="col-2 bg-ligth border border-dark">servicioOnline</span>
   
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
}

.col-1 {
  width: 10%;
}

.col-3 {
  width: 25%;
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
