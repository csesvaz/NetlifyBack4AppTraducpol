<script>
import LogoComponent from "../components/LogoComponent.vue";
import PlaceHolders from "../components/PlaceHolders.vue";
export default {
  components: { LogoComponent, PlaceHolders },
};
</script>

<template>
  <div class="logo-container"></div>
  <main>
    <div class="logo-container">
      <LogoComponent />
    </div>
    <PlaceHolders />
  </main>
  <footer></footer>
</template>
<style scoped>
.logo-container {
  margin-bottom: 1em;
  
}
</style>
