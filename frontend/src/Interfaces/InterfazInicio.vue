<script>
import LogoComponent from "../components/LogoComponent.vue";
import PlaceHolders from "../components/PlaceHolders.vue";
import BarraNavegacion from "../components/BarraNavegacion.vue";
import FooterInicio from "../components/FooterInicio.vue";
export default {
  components: { LogoComponent, PlaceHolders, BarraNavegacion, FooterInicio },
};
</script>

<template>
  <div class="logo-container">
    <BarraNavegacion class="fixed-top" />
  </div>
  <main>
    <div class="logo-container">
      <LogoComponent />
    </div>
    <PlaceHolders />
  </main>
  <footer>
    <FooterInicio />
  </footer>
</template>
<style scoped>
.logo-container {
  margin-bottom: 1em;
}

.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

main {
  margin-top: 2em;
}

footer {
  margin-top: 2em;
}
</style>
