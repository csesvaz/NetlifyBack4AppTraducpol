<script>
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
    
        <div class="row mb-12" >
        <span class="col-2 bg-ligth border border-dark">nombreEmpresa</span>
        <span class="col-2 bg-ligth border border-dark">Idioma</span>
        <span class="col-3 bg-ligth border border-dark">
          tipoDocumento
        </span>
        <span class="col-2 bg-ligth border border-dark">tiempoEntrega
        </span>
        <span class="col-2 bg-ligth border border-dark">
          traduccionJurada
        </span>
        <span
          class="col-1 mt-2"
          >
            <fa class="lapiz" icon="fa-solid fa-pencil" size="2xl"
          />
          <fa
            class="bin"
            icon="fa-solid fa-trash-arrow-up"
            size="2xl"
            style="color: #c01c28"
          />
        </span>
      </div>
    </div>
 

</template>

<style scoped>
.container-fluid {
  width: 100%;
  margin-left: 2em;
}

.lapiz {
  color: rgb(110, 60, 60);
  padding-right: 0.5em;
}

span {
  display: flex;
  justify-content: center;
  align-items: center;
}
.bin {
  margin-right: 1em;
}
</style>
