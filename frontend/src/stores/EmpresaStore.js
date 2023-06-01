import { defineStore } from "pinia";
import axios from "axios";
import getIdURL from "../service/ApiService";

export const useEmpresaStore = defineStore("empresas", {
  state: () => ({
    empresas: [],
    opcionInicial: true,
    servicios: [],
  }),
  actions: {
    async fetchEmpresas() {
      const empresasData = await axios.get(
        import.meta.env.VITE_APP_API + "empresas"
      );
      if (empresasData.data._embedded) {
        this.empresas = empresasData.data._embedded.empresas;
        this.empresas.map(async (empresa) => {
          empresa.id = getIdURL(empresa._links.self.href);
          empresa.servicios = [];
          const serviciosData = await axios.get(
            import.meta.env.VITE_APP_API +
              "empresas/" +
              empresa.id +
              "/servicios"
          );
          if (serviciosData.data._embedded) {
            empresa.servicios = serviciosData.data._embedded.servicios;
            empresa.servicios.map((servicio) => {
              servicio.id = getIdURL(servicio._links.self.href);
            });
          }
        });
      }
    },
    async getEmpresas() {
      if (this.empresas.length === 0) {
        await this.fetchEmpresas();
      }
      return this.empresas;
    },
    async getEmpresa(id) {
      const empresaData = await axios.get(
        import.meta.env.VITE_APP_API + "empresas/" + id
      );
      empresaData.data.id = getIdURL(empresaData.data._links.self.href);
      return empresaData.data;
    },
    async addEmpresa(empresa) {
      const empresaData = await axios.post(
        import.meta.env.VITE_APP_API + "empresas",
        empresa
      );
      empresa.id = getIdURL(empresaData.data._links.self.href);
      this.empresas.push(empresa);
    },

    async updateEmpresa(empresa) {
      await axios.put(
        import.meta.env.VITE_APP_API + "empresas/" + empresa.id,
        empresa
      );

      const index = this.empresas.findIndex((emp) => emp.id === empresa.id);
      this.empresas[index] = empresa;
      return this.empresas;
    },
    async deleteEmpresa(id) {
      // Eliminar servicios relacionados
      const empresa = this.empresas.find((emp) => emp.id === id);
    

      // Eliminar empresa
      await axios.delete(import.meta.env.VITE_APP_API + "empresas/" + id);

      // Actualizar la lista de empresas
      const index = this.empresas.findIndex((emp) => emp.id === id);
      this.empresas.splice(index, 1);

      return this.empresas;
    },

    async fetchServicios() {
      const serviciosData = await axios.get(
        import.meta.env.VITE_APP_API + "servicios"
      );

      if (serviciosData.data._embedded) {
        this.servicios = serviciosData.data._embedded.servicios;
        this.servicios.map((servicio) => {
          servicio.id = getIdURL(servicio._links.self.href);
        });
      }
      this.servicios.sort((a, b) => a.idioma.localeCompare(b.idioma));

      return this.servicios;
    },
    async getServicios() {
      if (this.servicios.length === 0) {
        await this.fetchServicios();
      }
      return this.servicios;
    },







    convertirBooleano(a) {
      if (a == true) {
        return "Si";
      } else {
        return "No";
      }
    },
    cambioOpcion() {
      this.opcionInicial = !this.opcionInicial;
    },
    generarIDUnico() {
      // Utilizar una función de generación de números aleatorios
      // en conjunto con la fecha actual para generar un ID único
      const randomNum = Math.floor(Math.random() * 1000000);
      const date = new Date();
      const timestamp = date.getTime();
      const id = `${randomNum}-${timestamp}`;

      return id;
    },
    convertirHora(fecha) {
      const hora = fecha.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      return hora;
    },
  },
});
