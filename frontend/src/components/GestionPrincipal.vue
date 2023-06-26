<script>
import {useAuthStore} from "@/stores/AuthStore.js";
import {mapActions, mapState} from "pinia";

export default {
  computed: {
    ...mapState(useAuthStore, ["esAdministrador"]),
  },
  methods: {
    ...mapActions(useAuthStore, {cambiarAdmin: "cambiarAdmin"}),
    login() {
      this.cambiarAdmin(true);
    }
  },
};
</script>

<template>
  <div class="row mb-12">
    <h4 class="col-6">
      Para dar de alta o modificar una empresa o un servicio debe entrar en MODO
      ADMINISTRADOR
    </h4>
    <div class="col-6">
      <button
          ref="myModal"
          class="btn btn-success"
          data-bs-target="#exampleModal"
          data-bs-toggle="modal"
          type="button"
          @click="login"
      >
        Entrar como administrador.
      </button>
    </div>
    <div
        id="exampleModal"
        ref="modal"
        aria-hidden="true"
        aria-labelledby="exampleModalLabel"
        class="modal fade success"
        tabindex="-1"
    >
    </div>
    <div v-if="esAdministrador">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 mb-4">
            <h4>Seleccione gestión de Empresas</h4>
            <router-link class="btn btn-primary" to="/GestionEmpresa">
              EMPRESA
            </router-link>
          </div>
          <div class="col-12 col-md-6 mb-4">
            <h4>Seleccione gestión de Servicios</h4>
            <router-link class="btn btn-primary" to="/interfazGestionServicios">
              Servicios
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.row {
  margin-top: 5vh;
}

.text-align-center {
  text-align: center;
}

.col-6 {
  margin-top: 3vh;
}

@media (max-width: 768px) {
  .col-6 {
    width: 100%;
    margin-top: 6vh;
  }
}
</style>
