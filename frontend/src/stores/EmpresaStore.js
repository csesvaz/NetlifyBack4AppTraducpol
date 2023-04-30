import { defineStore } from "pinia";
import DatosEmpresas from "../objetos/Empresa.json";

export const useEmpresaStore = defineStore("empresas", {
  state: () => ({
    empresas: [],
  }),
  actions: {
    fetchEmpresas() {
      this.empresas = DatosEmpresas._embedded.empresa;
      return this.empresas;
    },
    
    
  },
});
