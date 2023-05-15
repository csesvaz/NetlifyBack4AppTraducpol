import { defineStore } from "pinia";
import DatosEmpresas from "../objetos/Empresa.json";

export const useEmpresaStore = defineStore("empresas", {
  state: () => ({
    empresas: [],
    servicios: [],
    opcionInicial: true,
  }),
  actions: {
    fetchEmpresas() {
      this.empresas = DatosEmpresas._embedded.empresa;
      return this.empresas;
    },
    getEmpresas() {
      if (this.empresas.length === 0) {
        this.fetchEmpresas();
      }
      return this.empresas;
    },
    addEmpresa(empresa){  
      empresa.id=this.empresas.length+1;
      this.empresas.push(empresa);
      return this.empresas;
    },
    fetchServicios() {
      if (this.empresas.length === 0) {
        this.fetchEmpresas();
      }
      this.servicios = [];
      for (var i = 0; i < this.empresas.length; i++) {
        var empresa = this.empresas[i];

        for (var j = 0; j < empresa.servicios.length; j++) {
          var servicio = empresa.servicios[j];
          this.servicios.push(servicio);
        }
      }
      this.servicios.sort((a, b) => a.idioma.localeCompare(b.idioma));
      return this.servicios;
    }, 
    cambioOpcion() {
      this.opcionInicial = !this.opcionInicial;
    },
    convertirBooleano(a) {
      if (a == true) {
        return "Si";
      } else {
        return "No";
      }
    },
    convertirHora(fecha) {
      ;
      const hora = fecha.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      return hora;
    },
  },
});
