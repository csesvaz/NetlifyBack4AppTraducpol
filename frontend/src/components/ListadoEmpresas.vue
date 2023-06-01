<script>
import { mapState, mapActions } from "pinia";
import { useEmpresaStore } from "../stores/EmpresaStore";
export default {
  computed: {
    ...mapState(useEmpresaStore, ["empresas"]),
  },
  methods: {
    ...mapActions(useEmpresaStore, ["deleteEmpresa"]),

    eliminarEmpresa(id) {
      this.deleteEmpresa(id);
    },
  },
};
</script>
<template>
  <h3>Listado de todas las empresas disponibles</h3>
  <div class="table-responsive">
    <table class="table table-bordered table-hover border border-dark">
      <thead class="thead-dark bg-primary">
        <tr>
          <th class="text-center">Nombre de la Empresa</th>
          <th class="text-center">Dirección</th>
          <th class="text-center">Teléfono</th>
          <th class="text-center">Email</th>
          <th class="text-center">Editar</th>
          <th class="text-center">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="empresa in empresas" :key="empresa.id">
          <td class="text-center">{{ empresa.nombre }}</td>
          <td class="text-center">{{ empresa.direccion }}</td>
          <td class="text-center">{{ empresa.telefono }}</td>
          <td class="text-center">{{ empresa.email }}</td>
          <td class="text-center">
            <router-link
              :to="{ name: 'modificacionEmpresa', params: { id: empresa.id } }"
            >
              <fa class="lapiz" icon="fa-solid fa-pencil-alt" size="lg" />
            </router-link>
          </td>
          <td class="text-center">
            <fa
              class="bin"
              icon="fa-solid fa-trash-alt"
              size="lg"
              style="color: #c01c28"
              @click="eliminarEmpresa(empresa.id)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.lapiz {
  color: rgb(110, 60, 60);
  padding-right: 1em;
  margin-top: 1vh;
}

.bin {
  margin-right: 1em;
  margin-top: 1vh;
  cursor: pointer;
}
@media (max-width: 768px) {
  .table-responsive {

    margin-left: -5vw;
  
    font-size: 2vw;
  }
  h3{
    margin-left: -5vw;
  }
  
}
</style>
