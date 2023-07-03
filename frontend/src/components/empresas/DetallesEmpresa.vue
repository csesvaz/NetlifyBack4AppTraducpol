<script>
import {mapActions} from "pinia";
import {useEmpresaStore} from "@/stores/EmpresaStore.js";
import Cargando from '@/components/Cargando.vue';
import {convertirBooleano} from '@/utils/utils.js';

export default {
  props: ["empresaEntrada"],
  components: {Cargando},
  data() {
    return {
      cargando: true,
      serviciosFiltro: null,
      empresa: {
        id: null,
        nombre: null,
        direccion: null,
        telefono: null,
        email: null,
      },
      hayServiciosInterpretacion: false,
      hayServiciosTraduccion: false,
    };
  },
  methods: {
    ...mapActions(useEmpresaStore, [
      "getServiciosDeEmpresa",
    ]),
    convertirBooleano(a) {
      return convertirBooleano(a);
    },
   
  },
  async beforeMount() {
    this.serviciosFiltro = await this.getServiciosDeEmpresa(
        this.empresaEntrada.id
    );
    this.hayServiciosInterpretacion = this.serviciosFiltro.some(
        (element) => element.tipo === "INTERPRETACION"
    );
    this.hayServiciosTraduccion = this.serviciosFiltro.some(
        (element) => element.tipo === "TRADUCCION"
    );
    this.cargando = false;
  },
};
</script>
<template>
  <div v-if="!cargando" class="fondo">
    <div class="row ms-2 mt-2">
      <h4>Nombre de la empresa: {{ empresaEntrada.nombre }}</h4>
    </div>
    <div class="row ms-2">
      <h5>Dirección: {{ empresaEntrada.direccion }}</h5>
    </div>
    <div class="row ms-2">
      <h5>Teléfono de contacto: {{ empresaEntrada.telefono }}</h5>
    </div>
    <div class="row ms-2">
      <h5>Email de contacto: {{ empresaEntrada.email }}</h5>
    </div>
    <div class="row mb-3">
      <div class="col-12 ms-2 mt-3">
        <h5>SERVICIOS</h5>
        <div v-if="hayServiciosInterpretacion" class="interpretacion">
          <div class="row mt-1">
            <span class="col-1"></span>
            <div class="col-12 col-md-6">
              <h4>Interpretación</h4>
            </div>
          </div>
          <div class="row mb-1 mt-1">
            <span class="col-md-1"></span>
            <span class="col-2 col-md-2">Idioma</span>
            <span class="col-2 col-md-2">Hora Inicio</span>
            <span class="col-2 col-md-2">Hora Fin</span>
            <span class="col-3 col-md-2">Provincia</span>
            <span class="col-1 col-md-3">Servicio ONLINE</span>
          </div>
          <div v-for="(interprete, index) in serviciosFiltro" :key="index">
            <div v-if="interprete.tipo == 'INTERPRETACION'">
              <div class="row">
                <span class="col-md-1"></span>
                <span class="col-2 col-md-2">{{ interprete.idioma }}</span>
                <span class="col-2 col-md-2">{{
                    interprete.horarioInicioServicio
                  }}</span>
                <span class="col-2 col-md-2">{{
                    interprete.horarioFinServicio
                  }}</span>
                <span class="col-3 col-md-2">{{ interprete.provincia }}</span>
                <span class="col-2 col-md-3">{{
                    convertirBooleano(interprete.servicioOnline)
                  }}</span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="hayServiciosTraduccion" class="traduccion">
          <div class="row">
            <div class="col-md-6 mt-3">
              <h4>Traducción</h4>
            </div>
          </div>
          <div class="row mb-1">
            <span class="col-md-1"></span>
            <span class="col-2 col-md-2">Idioma</span>
            <span class="col-3 col-md-3">Tipo de Documento</span>
            <span class="col-3 col-md-3">Plazo de Entrega</span>
            <span class="col-2 col-md-3">Traducción Jurada</span>
          </div>
          <div v-for="(traductor, index) in serviciosFiltro" :key="index">
            <div v-if="traductor.tipo == 'TRADUCCION'" class="row mb-12">
              <span class="col-md-1"></span>
              <span class="col-2 col-md-2">{{ traductor.idioma }}</span>
              <span class="col-3 col-md-3">{{ traductor.tipoDocumento }}</span>
              <span class="col-3 col-md-3">{{ traductor.plazoEntrega }}</span>
              <span class="col-2 col-md-3">{{
                  convertirBooleano(traductor.traductorJurado)
                }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <Cargando/>
  </div>
</template>

<style scoped>
.fondo {
  background-color: rgb(191, 202, 202);
  margin-left: 1em;
  border: 1px solid black;
}

@media (max-width: 768px) {
  h4 {
    font-size: 1.5vh;
  }

  h5 {
    font-size: 1.7vh;
  }

  span {
    font-size: 1.2vh;
  }
}
</style>
