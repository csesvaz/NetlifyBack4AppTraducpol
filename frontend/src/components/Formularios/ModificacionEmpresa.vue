<script>
import { mapActions } from "pinia";
import { useEmpresaStore } from "@/stores/EmpresaStore.js";

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
          <label class="form-label" for="nombre">Nombre</label>
        </div>
        <div class="col-md-5">
          <input
            id="nombre"
            v-model="empresa.nombre"
            class="form-control"
            type="text"
          />
        </div>

        <div class="col-md-"></div>
      </div>
      <div class="row formulario">
        <div class="col-md-2">
          <label class="form-label" for="direccion">Dirección</label>
        </div>
        <div class="col-md-8">
          <input
            id="direccion"
            v-model="empresa.direccion"
            class="form-control"
            type="text"
          />
        </div>
      </div>
      <div class="row formulario">
        <div class="col-md-3">
          <label class="form-label" for="telefono">Teléfono de contacto</label>
        </div>
        <div class="col-md-4">
          <input
            id="telefono"
            v-model="empresa.telefono"
            class="form-control"
            type="telephone"
          />
        </div>
      </div>
      <div class="row formulario">
        <div class="col-md-2">
          <label class="form-label" for="email">Dirección E-mail</label>
        </div>
        <div class="col-md-4">
          <input
            id="email"
            v-model="empresa.email"
            class="form-control"
            type="email"
          />
        </div>
      </div>
      <div class="row formulario">
        <div class="col-md-2">
          <button class="btn btn-primary" type="submit">Guardar Cambios</button>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-2">
          <button class="btn btn-warning" type="button" @click="borrarDatos">
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
