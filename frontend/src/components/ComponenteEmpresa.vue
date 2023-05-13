<script>
import { mapActions } from "pinia";
import { useEmpresaStore } from "../stores/EmpresaStore";
export default {
  props: ["empresaEntrada"],
  methods: {
    ...mapActions(useEmpresaStore, ["convertirBooleano"]),
  },
  data() {
    this.empresa = this.empresaEntrada;
}}
</script>
<template>
  <div class="fondo">
    <div class="row">
      <div class="col-md-6 col-lg-4 ms-2">
        <h3>Nombre de la empresa:</h3>
      </div>
      <div class="col-2 ms-2">
        <h3>{{ empresa.nombre }}</h3>
      </div>
    </div>
    <div class="row ms-2">
      <h5>Dirección:   {{ empresa.direccion }}</h5>
    </div>
    <div class="row ms-2">
      <div class="col-md-6 col-lg-4">
        Teléfono de contacto:  {{ empresa.telefono }}
      </div>
      <div class="col-md-6 col-lg-4">
        Email de contacto:    {{ empresa.email }}
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12 ms-2 mt-3">
        <h5>SERVICIOS</h5>
        <div class="row mt-1">
          <span class="col-1"></span>
          <div class="col-12 col-md-6">
            <h4>Interpretación</h4>
          </div>
        </div>
        <div class="row mb-1 mt-1">
          <span class="col-0 col-md-1"></span>
          <span class="col col-md-2 bg-border border-dark">Idioma</span>
          <span class="col col-md-2 bg-border border-dark">Hora Inicio</span>
          <span class="col col-md-2 bg-border border-dark">Hora Fin</span>
          <span class="col col-md-1 bg-border border-dark">Provincia</span>
          <span class="col col-md-1"></span>
          <span class="col col-md-2 bg-border border-dark">Servicio ONLINE</span>
        </div>
        <!-- Aqui va un v-for de los servicios de Interpretacion-->

        <div
          v-for="(interprete, index) in empresa.servicios"
          :key="index"
        >
        <div v-if="interprete.tipo=='interpretacion'">
          <div class="row">
            <span class="col-0 col-md-1"></span>
            <span class="col col-md-2 bg-ligth">{{ interprete.idioma }}</span>
            <span class="col col-md-2 bg-ligth">{{ interprete.horarioInicio }}</span>
            <span class="col col-md-2 bg-ligth">{{ interprete.horarioFin }}</span>
            <span class="col col-md-1  bg-ligth">{{ interprete.provincia }}</span>
            <span class="col col-md-1"></span>
            <span class="col col-md-2 bg-ligth">{{
              convertirBooleano(interprete.servicioOnline)
            }}</span>
          </div>
        </div>
        </div>
        <div class="row mt-5">
          <span class="col-1"></span>
          <div class="col-md-6">
            <h4>Traducción</h4>
          </div>
        </div>
        <div class="row mb-1 mt-3">
          <span class="col-0 col-md-1"></span>
          <span class="col col-md-2 bg-border border-dark">Idioma</span>
          <span class="col col-md-3 bg-border border-dark">Tipo de Documento</span>
          <span class="col col-md-2 bg-border border-dark">Plazo de Entrega</span>
          <span class="col col-md-1"></span>
          <span class="col col-md-2 bg-border border-dark">Traducción Jurada</span>
        </div>
        <div
          v-for="(traductor, index) in empresa.servicios"
          :key="index"
        > <div class="row mb-12" v-if="traductor.tipo=='traduccion'">
          
            <span class="col-0 col-md-1"></span>
            <span class="col col-md-2 bg-border border-dark">{{
              traductor.idioma
            }}</span>
            <span class="col col-md-3 bg-border border-dark">{{
              traductor.tipoDocumento
            }}</span>
            <span class="col col-md-2 bg-border border-dark">{{
              traductor.tiempoEntrega
            }}</span>
            <span class="col col-md-1"></span>
            <span class="col col-md-2 bg-border border-dark">{{
              convertirBooleano(traductor.traduccionJurada)
            }}</span>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
.fondo {
  background-color:cyan;
  margin-left: 1em;
  border: 1px solid black;
  
}
</style>
