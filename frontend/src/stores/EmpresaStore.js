import {defineStore} from "pinia";
import {
  addEmpresa,
  addServicio,
  borrarEntidad,
  busquedaAvanzada,
  cambiarHttpPorHttps,
  getEmpresa,
  getEmpresas,
  getIdURL,
  getServicio,
  getServicios,
  getServiciosDeEmpresa,
  llamadaApi,
  updateEmpresa,
  updateServicio,
} from "./api-service.js";

export const useEmpresaStore = defineStore("empresas", {
  state: () => ({
    empresas: [],
    servicios: [],
  }),
  actions: {
    async fetchEmpresas() {
      this.empresas = await getEmpresas();
    },
    async getEmpresas() {
      if (this.empresas.length === 0) {
        await this.fetchEmpresas();
      }

      return this.empresas;
    },
    async getEmpresa(id) {
      return await getEmpresa(id);
    },

    async addEmpresa(empresa) {
      empresa = await addEmpresa(empresa);
      this.empresas.push(empresa);
    },

    async updateEmpresa(empresa) {
      await updateEmpresa(empresa);
      const index = this.empresas.findIndex((emp) => emp.id == empresa.id);
      this.empresas[index] = empresa;
      return this.empresas;
    },

    async deleteEmpresa(id) {
      const empresa = this.empresas.find((emp) => emp.id == id);
      await borrarEntidad(empresa);

      const index = this.empresas.findIndex((emp) => emp.id == id);
      this.empresas.splice(index, 1);

      this.servicios = this.servicios.filter((serv) => {
        return !this.empresas.some(
          (emp) => emp._links.self.href === serv._links.empresa.href
        );
      });

      return this.empresas;
    },

    async fetchServicios() {
      this.servicios = await getServicios();

      this.servicios.sort((a, b) => {
        return (
          a.idioma.localeCompare(b.idioma) ||
          (a.tipo === "INTERPRETACION" && b.tipo === "INTERPRETACION"
            ? a.provincia.localeCompare(b.provincia)
            : a.tipo === "TRADUCCION" && b.tipo === "TRADUCCION"
              ? a.tipoDocumento.localeCompare(b.tipoDocumento)
              : 0)
        );
      });
      return this.servicios;
    },

    async getServicios() {
      if (this.servicios.length === 0) {
        await this.fetchServicios();
      }
      return this.servicios;
    },

    async getServicio(id) {
      return await getServicio(id);
    },

    async addServicio(servicio) {
      const empresa = this.empresas.find((emp) => emp.id == servicio.empresa.id);
      servicio = await addServicio(servicio);
      empresa.servicios.push(servicio);
      this.servicios.push(servicio);
    },

    async getServiciosDeEmpresa(id) {
      return await getServiciosDeEmpresa(id);
    },

    async getEmpresaDeServicio(servicio) {
      const empresa = await llamadaApi(
        cambiarHttpPorHttps(servicio._links.empresa.href)
      );
      empresa.data.id = getIdURL(empresa.data._links.self.href);

      return empresa.data;
    },

    async deleteServicio(id) {
      const servicio = this.servicios.find((serv) => serv.id == id);
      await borrarEntidad(servicio);

      const index = this.servicios.findIndex((serv) => serv.id == id);
      this.servicios.splice(index, 1);

      for (const empresa of this.empresas) {
        const index = empresa.servicios.findIndex((serv) => serv.id == id);
        if (index !== -1) {
          empresa.servicios.splice(index, 1);
          break;
        }
      }
    },

    async updateServicio(servicio) {
      await updateServicio(servicio);
      const empresaConServicio = this.empresas.find((emp) =>
        emp.servicios.some((ser) => ser.id == servicio.id)
      );

      const index = this.servicios.findIndex((serv) => serv.id == servicio.id);
      this.servicios[index] = servicio;
      const indexServicioEmpresa = empresaConServicio.servicios.findIndex((serv) => serv.id == servicio.id);
      empresaConServicio.servicios[indexServicioEmpresa] = servicio;
      return this.servicios;
    },

    async busquedaAvanzada(hora, idioma, provincia, online) {
      return await busquedaAvanzada(hora, idioma, provincia, online);
    },
  },
});
