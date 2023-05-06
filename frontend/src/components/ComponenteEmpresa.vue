<script>
import { mapActions } from "pinia";
import { useEmpresaStore } from "../stores/EmpresaStore";
export default {
  props: ["empresa"],
  methods: {
    ...mapActions(useEmpresaStore, ["convertirBooleano"]),
    calcularTamano() {
            this.isMobile = window.innerWidth < 576;
        },
    },
  data() {
        return {
            isMobile: window.innerWidth < 576,
        };
    },
    mounted() {
        window.addEventListener('dimensionar', this.calcularTamano);
    },
    beforeDestroy() {
        window.removeEventListener('dimensionar', this.calcularTamano);
    }
  }
</script>

<template>
  <div class="fondo">
    <div class="row">
      <div class="col-md-4">
        <h3>Nombre de la empresa:</h3>
      </div>
      <div class="col-md-2">
        <h3>{{ empresa.nombre }}</h3>
      </div>
    </div>
    <div class="row">
      <h5>Dirección: &ensp; &ensp;   {{ empresa.direccion }}</h5>
    </div>
    <div class="row">
      <div class="col-md-4">
        Teléfono de contacto:  &ensp; {{ empresa.telefono }}
      </div>
      <div class="col-md-8">
        Email de contacto:  &ensp;    {{ empresa.email }}
      </div>
    </div>
    <div class="row mb-3 mt-3">
      <div class="col-md-12">
        <h6> Listado de todos los Servicios:</h6>
        <div class="row mt-3 tipoServicio">
          <span class="col-1"></span>
          <div class="col-md-6">
            <h6>Interpretación</h6>
          </div>
        </div>
        <div class="row mb-1 mt-1">
          <span class="col-1"></span>
          <span class="col-2 bg-border border-dark border">Idioma</span>
          <span class="col-2 bg-border border-dark border">Hora Inicio</span>
          <span class="col-2 bg-border border-dark border">Hora Fin</span>
          <span class="col-2 bg-border border-dark border">Provincia</span>
          <span class="col-2 bg-border border-dark border">Servicio ONLINE</span>
        </div>
        <!-- Aqui va un v-for de los servicios de Interpretacion-->

        <div
          v-for="(interprete, index) in empresa.servicios"
          :key="index"
        >
        <div v-if="interprete.tipo=='interpretacion'">
          <div class="row mb-12">
            <span class="col-1"></span>
            <span class="col-2 bg-border border-dark border">{{ interprete.idioma }}</span>
            <span class="col-2 bg-border border-dark border">{{ interprete.horarioInicio }}</span>
            <span class="col-2 bg-border border-dark border">{{ interprete.horarioFin }}</span>
            <span class="col-2 bg-border border-dark border">{{ interprete.provincia }}</span>
            <span class="col-2 bg-border border-dark border">{{
              convertirBooleano(interprete.servicioOnline)
            }}</span>
          </div>
        </div>
        </div>
        <div class="row mt-3 tipoServicio">
          <span class="col-1"></span>
          <div class="col-md-6">
            <h6>Traducción</h6>
          </div>
        </div>
        <div class="row mb-1 mt-1">
          <span class="col-1"></span>
          <span class="col-2 bg-border border-dark border">Idioma</span>
          <span class="col-3 bg-border border-dark border">Tipo de Documento</span>
          <span class="col-3 bg-border border-dark border">Plazo de Entrega</span>
          <span class="col-2 bg-border border-dark border">Traducción Jurada</span>
        </div>
        <div
          v-for="(traductor, index) in empresa.servicios"
          :key="index"
        > <div v-if="traductor.tipo=='traduccion'">
          <div class="row mb-12">
            <span class="col-1"></span>
            <span class="col-2 bg-border border-dark border">{{
              traductor.idioma
            }}</span>
            <span class="col-3 bg-border border-dark border">{{
              traductor.tipoDocumento
            }}</span>
            <span class="col-3 bg-border border-dark border">{{
              traductor.tiempoEntrega
            }}</span>
            
            <span class="col-2 bg-border border-dark border">{{
              convertirBooleano(traductor.servicioOnline)
            }}</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fondo {
  background-color:cyan;
  margin-left: 1vw;
  margin-right: 2vw;
  border: 1px solid black;
  padding-left: 2vw;
}

@media (max-width: 576px) {
  .fondo {
    font-size: 3vw;
  }
 
}
</style>
