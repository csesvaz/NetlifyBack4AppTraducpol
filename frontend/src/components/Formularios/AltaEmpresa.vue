<script>
import {mapActions, mapState} from "pinia";
import {useEmpresaStore} from "@/stores/EmpresaStore";

export default {
  data() {
    return {
      empresa: {
        nombre: "",
        direccion: "",
        telefono: "",
        email: "",
        servicios: [],
        cif: "",
      },
    };
  },
  computed: {
    ...mapState(useEmpresaStore, ["empresas"]),
  },

  methods: {
    ...mapActions(useEmpresaStore, ["addEmpresa"]),
    getEmpresa() {
      return this.empresas[this.id];
    },
    guardarEmpresa() {
      this.addEmpresa(this.empresa);
      this.$router.push("interfazGestionEmpresa");
    },
    borrarDatos() {
      this.empresa = {nombre: "", direccion: "", telefono: "", email: ""};
    },
  },
};
</script>
<template>
  <div class="container-fluid">
    <div class="row justify-content inicial">
      <h3 class="formulario inicial">Formulario de Creación de empresa.</h3>
      <form @submit.prevent="guardarEmpresa">
        <div class="row inicial">
          <div class="col-md-2">
            <label class="form-label" for="nombre">Nombre</label>
          </div>
          <div class="col-md-5">
            <input
                id="nombre"
                v-model="empresa.nombre"
                class="form-control"
                placeholder="Nombre"
                required
                type="text"
            />
          </div>
        </div>
        <div class="row inicial">
          <div class="col-md-2">
            <label class="form-label" for="direccion">Dirección</label>
          </div>
          <div class="col-md-6">
            <input
                id="direccion"
                v-model="empresa.direccion"
                class="form-control"
                placeholder="Dirección"
                required
                type="text"
            />
          </div>
        </div>
        <div class="row inicial">
          <div class="col-md-2">
            <label class="form-label" for="cif">Cif de la empresa.</label>
          </div>
          <div class="col-md-4">
            <input
                id="cif"
                v-model="empresa.cif"
                class="form-control"
                placeholder="Cif"
                required
                type="text"
            />
          </div>
        </div>
        <div class="row inicial">
          <div class="col-md-2">
            <label class="form-label" for="telefono"
            >Teléfono de contacto</label
            >
          </div>
          <div class="col-md-4">
            <input
                id="telefono"
                v-model="empresa.telefono"
                class="form-control"
                placeholder="Teléfono"
                required
                type="telephone"
            />
          </div>
        </div>
        <div class="row inicial">
          <div class="col-md-2">
            <label class="form-label" for="email">Dirección E-mail</label>
          </div>
          <div class="col-md-3">
            <input
                id="email"
                v-model="empresa.email"
                class="form-control"
                placeholder="Dirección E-mail"
                required
                type="email"
            />
          </div>
        </div>
        <div class="row inicial">
          <div class="col-md-2">
            <button class="btn btn-primary" type="submit">
              Guardar Cambios
            </button>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-2">
            <button class="btn btn-warning" type="button" @click="borrarDatos">
              Borrar Datos
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.inicial {
  margin-top: 3vw;
}

@media (max-width: 768px) {
  .formulario {
    margin-top: 20vw;
  }

  button {
    margin-top: 2vw;
  }
}
</style>
