<script>
import {useAuthStore} from "@/stores/AuthStore.js";
import {mapActions, mapState} from "pinia";

export default {
  data() {
    return {
      password: "",
      passwordIncorrecto: null,
    };
  },
  computed: {
    ...mapState(useAuthStore, {esAdminintrador: "getIsAdmin"}),
  },
  methods: {
    ...mapActions(useAuthStore, {cambiarAdmin: "cambiarAdmin"}),
    validarPassword() {
      if (this.password === "1234") {
        this.cambiarAdmin(true);
        this.passwordIncorrecto = false;
      } else {
        this.passwordIncorrecto = true;
        this.cambiarAdmin(false);
      }
    },
    login() {
      this.cambiarAdmin(true);
      this.passwordIncorrecto = false;
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
      <div class="modal-dialog" @keydown.enter="validarPassword()">
        <div class="modal-content">
          <div class="modal-header">
            <h1 id="exampleModalLabel" class="modal-title fs-5">
              Entrar como administrador
            </h1>
            <button
                aria-label="Close"
                class="btn-close"
                data-bs-dismiss="modal"
                type="button"
            ></button>
          </div>
          <div class="modal-body">
            <label class="form-label" for="password">Password</label>
            <input
                id="password"
                v-model="password"
                aria-labelledby="passwordHelpBlock"
                class="form-control"
                type="password"
            />
            <div id="passwordHelpBlock" class="form-text">
              Introduzca su password de administrador y seleccione Aceptar
            </div>
            <div v-if="passwordIncorrecto" class="text-danger">
              Código incorrecto. Por favor, inténtalo de nuevo.
            </div>
            <div
                v-else-if="passwordIncorrecto != null"
                class="text-success text-align-center"
            >
              Código Correcto. Ya puede seleccionar la empresa o servicio para
              dar de alta. Por favor cierre el modal.
            </div>
          </div>
          <div class="modal-footer">
            <button
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                type="button"
            >
              Cerrar
            </button>
            <button
                :data-bs-dismiss="esAdminintrador ? 'modal' : null"
                class="btn btn-primary"
                type="button"
                @click="validarPassword()"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="esAdminintrador">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 mb-4">
            <h4>Seleccione gestión de Empresas</h4>
            <router-link class="btn btn-primary" to="/interfazGestionEmpresa">
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
