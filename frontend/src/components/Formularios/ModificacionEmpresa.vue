<script>
import { mapActions } from "pinia";
import { useEmpresaStore } from "../../stores/EmpresaStore.js";

export default {
  data() {
    return { id: 0, empresa: null, empresaEntrada: null };
  },
  methods: {
    ...mapActions(useEmpresaStore, ["updateEmpresa", "getEmpresa"]),
    borrarDatos() {
      this.empresa = { ...this.empresaEntrada };
    },
    modificarEmpresa() {
      this.updateEmpresa(this.empresa);
      this.$router.push("/interfazGestionEmpresa");
    },
  },
  async beforeMount() {
    this.id = this.$route.params.id;
    this.empresa = await this.getEmpresa(this.id);
    this.empresaEntrada = { ...this.empresa };
  },
};
</script>
<template>
  <div v-if="empresa" class="container-fluid">
    <div class="row justify-content inicial">
      <h3 class="formulario inicial">Formulario de Modificación de empresa.</h3>
    </div>
    <form @submit.prevent="modificarEmpresa">
      <div class="row formulario">
        <div class="col-md-2">
          <label for="nombre" class="form-label">Nombre</label>
        </div>
        <div class="col-md-5">
          <input
            type="text"
            class="form-control"
            id="nombre"
            v-model="empresa.nombre"
          />
        </div>

        <div class="col-md-"></div>
      </div>
      <div class="row formulario">
        <div class="col-md-2">
          <label for="direccion" class="form-label">Dirección</label>
        </div>
        <div class="col-md-8">
          <input
            type="text"
            class="form-control"
            id="direccion"
            v-model="empresa.direccion"
          />
        </div>
      </div>
      <div class="row formulario">
        <div class="col-md-3">
          <label for="telefono" class="form-label">Teléfono de contacto</label>
        </div>
        <div class="col-md-4">
          <input
            type="telephone"
            class="form-control"
            id="telefono"
            v-model="empresa.telefono"
          />
        </div>
      </div>
      <div class="row formulario">
        <div class="col-md-2">
          <label for="email" class="form-label">Dirección E-mail</label>
        </div>
        <div class="col-md-4">
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="empresa.email"
          />
        </div>
      </div>
      <div class="row formulario">
        <div class="col-md-2">
          <button type="submit" class="btn btn-primary">Guardar Cambios</button>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-2">
          <button type="button" class="btn btn-warning" @click="borrarDatos">
            Valores Iniciales
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.row {
  margin-left: 0.5vw;
}
.inicial {
  margin-top: 6vh;
}
.formulario {
  margin-top: 3vh;
}
</style>
