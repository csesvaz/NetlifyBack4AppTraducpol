<script>
import BarraNavegacion from '../components/BarraNavegacion.vue'
import FormularioBusqueda from '../components/FormularioBusqueda.vue';


export default {
    components: { BarraNavegacion, FormularioBusqueda }
}
</script>

<template>
    <div class="d-block fixed-top">
        <BarraNavegacion />
</div>
    <div class="container">
        <FormularioBusqueda />
    </div>
</template>
<style scoped>
.container {
    margin-left: 3em;
    margin-top: 2em;
}
@media (max-width: 576px) {
    .container {
    margin-left: 2vw;
    margin-top: 8vw;
}
  
}
</style>