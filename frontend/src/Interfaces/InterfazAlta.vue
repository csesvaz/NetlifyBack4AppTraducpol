<script>
import BarraNavegacion from '../components/BarraNavegacion.vue'
import SelectorAltas from '../components/SelectorAltas.vue';


export default {
    components: { BarraNavegacion, SelectorAltas}
}
</script>

<template>
    <div class="d-block fixed-top">
        <BarraNavegacion />
    </div>
    <SelectorAltas />
  
</template>
<style scoped>
</style>