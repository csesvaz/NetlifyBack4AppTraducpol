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
          this.empresas.sort((a, b) => a.nombre.localeCompare(b.nombre));
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
      const empresa = this.empresas.find((emp) => emp.id === id);
      if (empresa.servicios.length > 0) {
        for (const serv of empresa.servicios) {
          await axios.delete(
            import.meta.env.VITE_APP_API + "servicios/" + serv.id
          );
          const servIndex = this.servicios.findIndex((s) => s.id === serv.id);
          this.servicios.splice(servIndex, 1);
        }
      }
      await axios.delete(import.meta.env.VITE_APP_API + "empresas/" + id);

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
      this.servicios.sort((a, b) => {
        return a.idioma.localeCompare(b.idioma) ||
          ((a.tipo === "INTERPRETACION" && b.tipo === "INTERPRETACION") ?
            a.provincia.localeCompare(b.provincia) :
            ((a.tipo === "TRADUCCION" && b.tipo === "TRADUCCION") ?
              a.tipoDocumento.localeCompare(b.tipoDocumento) : 0));
      });

      return this.servicios;
    },
    async getServicios() {
      if (this.servicios.length === 0) {
        await this.fetchServicios();
      }
      return this.servicios;
    },
    async addServicio(servicio) {
      servicio.empresa =
        import.meta.env.VITE_APP_API + "empresas/" + servicio.empresa.id;
      const servicioData = await axios.post(
        import.meta.env.VITE_APP_API + "servicios",
        servicio
      );
      servicio.id = getIdURL(servicioData.data._links.self.href);
      this.servicios.push(servicio);
      await this.fetchEmpresas();
    },
    async getServicio(id) {
      const servicioData = await axios.get(
        import.meta.env.VITE_APP_API + "servicios/" + id
      );
      servicioData.data.id = getIdURL(servicioData.data._links.self.href);
      return servicioData.data;
    },
    async getServiciosDeEmpresa(id) {
      const empresaData = await axios.get(
        import.meta.env.VITE_APP_API + "empresas/" + id + "/servicios"
      );
      if (this.empresas.length === 0) {
        await this.fetchEmpresas();
      }
      if (this.servicios.length === 0) {
        this.fetchServicios();
      }
      const serviciosData = empresaData.data._embedded.servicios;
      return serviciosData;
    },
    async getEmpresaDeServicio(id) {
      const empresaData = await axios.get(
        import.meta.env.VITE_APP_API + "servicios/" + id + "/empresa"
      );
      if (this.empresas.length === 0) {
        await this.fetchEmpresas();
      }
      if (this.servicios.length === 0) {
        this.fetchServicios();
      }
      return empresaData.data;
    },

    async deleteServicio(id) {
      await axios.delete(import.meta.env.VITE_APP_API + "servicios/" + id);

      const index = this.servicios.findIndex((serv) => serv.id === id);
      this.servicios.splice(index, 1);

      const empresaConServicio = this.empresas.find((emp) =>
        emp.servicios.some((ser) => ser.id === id)
      );
      for (const empresa of this.empresas) {
        const index = empresa.servicios.findIndex((serv) => serv.id === id);
        if (index !== -1) {
          empresa.servicios.splice(index, 1);
          break; // Salir del bucle si se encuentra la empresa con el servicio
        }
      }
    },
    async updateServicio(servicio) {
      await axios.put(
        import.meta.env.VITE_APP_API + "servicios/" + servicio.id,
        servicio
      );
      const empresaConServicio = this.empresas.find((emp) =>
        emp.servicios.some((ser) => ser.id == servicio.id)
      );
      const index = this.servicios.findIndex((serv) => serv.id == servicio.id);
      empresaConServicio.servicios[index] = servicio;
      await this.fetchEmpresas();
      await this.fetchServicios();
      return this.servicios;
    },

    async busquedaAvanzada(hora, idioma, provincia, online) {
      let serviciosBusqueda = await axios.get(
        import.meta.env.VITE_APP_API +
          "servicios/busqueda?idioma=" +
          idioma +
          "&provincia=" +
          provincia +
          "&online=" +
          online +
          "&hora=" +
          hora
      );
      if (serviciosBusqueda.data._embedded) {
        serviciosBusqueda = serviciosBusqueda.data._embedded.servicios;
        serviciosBusqueda.map((servicio) => {
          servicio.id = getIdURL(servicio._links.self.href);
        });
      } else {
        serviciosBusqueda = [];
      }
      return serviciosBusqueda;
    },
    convertirBooleano(a) {
      let variable="Si"
      if (a == true) {
        variable= "Si"
      } else {
        variable= "No"
      }
      return variable
    },
    cambioOpcion() {
      this.opcionInicial = !this.opcionInicial;
    },
    cambioOpcionFalse() {
      this.opcionInicial = false;
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
