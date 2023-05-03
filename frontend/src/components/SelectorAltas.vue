<script>
import AccesoAltas from "./AccesoAltas.vue";
import { useAuthStore } from "../stores/AuthStore";
import { mapActions, mapState } from "pinia";

export default {
  components: { AccesoAltas },
  computed: {
    ...mapState(useAuthStore, { isAdmin: "isAdmin" }),
  },
  methods: {
    ...mapActions(useAuthStore, { cambiarAdmin: "cambiarAdmin" }),
    validarPassword() {
      if (this.password === "1234") {
        this.cambiarAdmin(true);
        this.error = false;
      } else {
        this.error = true;
        this.cambiarAdmin(false);
      }
    },
  },
  data() {
    return {
      password: "",
      error: null,
    };
  },
};
</script>
<template>
  <div class="row mb-12">
    <div class="col-6">
      Para dar de alta o modificar una empresa o un servicio debe entrar en MODO
      ADMINISTRADOR
    </div>
    <!-- Button trigger modal -->
    <div class="col-6">
      <button
        type="button"
        class="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref="myModal"
      >
        Entrar como administrador.
      </button>
    </div>
    <div
      class="modal fade success"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      ref="modal"
    >
      <div class="modal-dialog" @keydown.enter="validarPassword()">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Entrar como administrador
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              id="password"
              class="form-control"
              aria-labelledby="passwordHelpBlock"
              v-model="password"
            />
            <div id="passwordHelpBlock" class="form-text">
              Introduzca su password de administrador y seleccione Aceptar
            </div>
            <div v-if="error" class="text-danger">
              Código incorrecto. Por favor, inténtalo de nuevo.
            </div>
            <div
              v-else-if="error != null"
              class="text-success text-align-center"
            >
              Código Correcto. Ya puede seleccionar la empresa o servicio para
              dar de alta. Por favor cierre el modal.
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="validarPassword()"
              
              :data-bs-dismiss="isAdmin ? 'modal' : null"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isAdmin">
      <AccesoAltas />
    </div>
  </div>
</template>
<style scoped>
.row {
  margin-top: 2em;
}

.text-align-center {
  text-align: center;
}
@media (max-width: 576px) {
  .col-6 {
    width: 100%;
  }
}
</style>
