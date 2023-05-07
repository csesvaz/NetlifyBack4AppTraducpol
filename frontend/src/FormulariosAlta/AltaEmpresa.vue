<script>
import BarraNavegacion from "../components/BarraNavegacion.vue";
import { mapActions, mapState } from "pinia";
import { useEmpresaStore } from "../stores/EmpresaStore";

export default {
  components: { BarraNavegacion },

  computed: {
    ...mapState(useEmpresaStore, ["empresas"]),
  },
  data() {
    return { empresa: { nombre: "", direccion: "", telefono: "", email: "" } };
  },
  methods: {
    ...mapActions(useEmpresaStore, ["addEmpresa"]),
    getEmpresa: function () {
      return this.empresas[this.id];
    },
    guardarEmpresa() {
      this.addEmpresa(this.empresa);
      this.$router.push("interfazGestionEmpresa");
    },
    borrarDatos() {
      this.empresa = { nombre: "", direccion: "", telefono: "", email: "" };
    },
  },
};
</script>
<template>
  <div class="container-fluid">
    <div class="d-flex flex-column">
      <BarraNavegacion class="fixed-top" />
    </div>

    <div class="row justify-content inicial">
      <h3 class="formulario inicial">Formulario de Creación de empresa.</h3>
      <form @submit.prevent="guardarEmpresa">
        <div class="row inicial">
          <div class="col-md-4">
            <label for="nombre" class="form-label">Nombre</label>
          </div>
          <div class="col-md-3">
            <label for="direccion" class="form-label">Dirección</label>
          </div>
          <div class="col-md-"></div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <input
              type="text"
              class="form-control"
              id="nombre"
              placeholder="Nombre"
              required
              v-model="empresa.nombre"
            />
          </div>
          <div class="col-md-1"></div>

          <div class="col-md-4">
            <input
              type="text"
              class="form-control"
              id="direccion"
              placeholder="Dirección"
              required
              v-model="empresa.direccion"
            />
          </div>
        </div>
        <div class="row inicial">
          <div class="col-md-4">
            <label for="telefono" class="form-label"
              >Teléfono de contacto</label
            >
          </div>
          <div class="col-md-3">
            <label for="email" class="form-label">Dirección E-mail</label>
          </div>
          <div class="col-md-4"></div>
        </div>
        <div class="row">
          <div class="col-md-2">
            <div class="mb-3">
              <input
                type="telephone"
                class="form-control"
                id="telefono"
                placeholder="Teléfono"
                required
                v-model="empresa.telefono"
              />
            </div>
          </div>
          <div class="col-md-2"></div>
          <div class="col-md-3">
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Dirección E-mail"
                required
                v-model="empresa.email"
              />
            </div>
          </div>
          <div class="col-md-4"></div>
        </div>

        <div class="row inicial">
          <div class="col-md-2">
            <button type="submit" class="btn btn-primary">
              Guardar Cambios
            </button>
          </div>

          <div class="col-md-2">
            <button type="button" class="btn btn-warning" @click="borrarDatos">
              Borrar Datos
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.row {
  margin-left: 0.5vw;
}
.inicial {
  margin-top: 3vw;
}
@media (max-width: 576px) {
  .inicial{
    margin-top: 6vw;
  }
  .btn {
    margin-bottom: 5vw;
  }
  
  /* Agregar espacio entre los campos de entrada */
  input[type="text"] {
    margin-top: 3vw;
  }
  
  /* Aumentar el espacio entre los campos "nombre" y "dirección" */
  #nombre {
    margin-bottom: 3vw;
  }
  
}
</style>
