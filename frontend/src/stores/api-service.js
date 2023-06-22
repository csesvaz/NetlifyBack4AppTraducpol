import axios from "axios";

//const host = "https://traducpol-camilocococo.b4a.run/api/"
const host = "http://localhost:8085/api/";

export function cambiarHttpPorHttps(enlace) {
  //Importante cambiar en BAck4App a https y a http en h2
  return enlace.replace("http", "http");
}
export function getIdURL(url) {
  return parseInt(url.split("/").pop());
}
export function llamadaApi(path, method, body) {
  return llamadaApiConConfiguracion(
    configuracionPorDefecto(path, method, body)
  );
}

function llamadaApiConConfiguracion(config) {
  return axios.request(config);
}

function configuracionPorDefecto(path, method, body) {
  let config = {
    method: method ?? "get",
    maxBodyLength: Infinity,
    url: path,
    headers: {},
  };

  if (body) {
    (config.data = body), (config.headers["Content-Type"] = "application/json");
  }

  return config;
}

export async function getEmpresas() {
  let empresas = [];
  const empresasData = await getEntidades("empresas");

  if (empresasData.data._embedded) {
    empresas = empresasData.data._embedded.empresas;
    empresas.map(async (empresa) => {
      empresa.id = getIdURL(empresa._links.self.href);
      empresa.servicios = [];
      const serviciosData = await llamadaApi(
        import.meta.env.VITE_APP_API + "empresas/" + empresa.id + "/servicios"
      );
      if (serviciosData.data._embedded) {
        empresa.servicios = serviciosData.data._embedded.servicios;
        empresa.servicios.map((servicio) => {
          servicio.id = getIdURL(servicio._links.self.href);
        });
      }
      empresas.sort((a, b) => a.nombre.localeCompare(b.nombre));
    });
  }

  return empresas;
}

export async function getEmpresa(id) {
  const empresaData = await getEntidades(`empresas/${id}`);
  empresaData.data.id = getIdURL(empresaData.data._links.self.href);
  return empresaData.data;
}

export async function addEmpresa(empresa) {
  const empresaData = await llamadaApi(host + "empresas", "post", empresa);

  empresa.id = getIdURL(empresaData.data._links.self.href);
  return empresa;
}

export async function updateEmpresa(empresa) {
  await llamadaApi(
    cambiarHttpPorHttps(empresa._links.self.href),
    "put",
    empresa
  );
}

export async function getServicios() {
  let servicios = [];
  const serviciosData = await getEntidades("servicios");

  if (serviciosData.data._embedded) {
    servicios = serviciosData.data._embedded.servicios;
    servicios.map((servicio) => {
      servicio.id = getIdURL(servicio._links.self.href);
    });
  }

  return servicios;
}

export async function getServicio(id) {
  const servicioData = await getEntidades(`servicios/${id}`);
  servicioData.data.id = getIdURL(servicioData.data._links.self.href);
  return servicioData.data;
}

export async function addServicio(servicio) {
  servicio.empresa = host +"empresas/" + servicio.empresa.id;
  const servicioData = await llamadaApi(host + "servicios", "post", servicio);
  servicioData.data.id = getIdURL(servicioData.data._links.self.href);
  return servicioData.data;
}

export async function updateServicio(servicio) {
  await llamadaApi(cambiarHttpPorHttps(servicio._links.self.href), "put", servicio);
}

export async function busquedaAvanzada(hora, idioma, provincia, online) {
  let serviciosBusqueda = await llamadaApi(
    host +
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
}

export function borrarEntidad(entidad) {
  return llamadaApi(cambiarHttpPorHttps(entidad._links.self.href), "delete");
}

export function getEntidades(nombre) {
  return llamadaApi(`${host}${nombre}`);
}
export async function getServiciosDeEmpresa(id) {
  let servicios = [];
  let serviciosEmpresa = await getEntidades(`empresas/${id}/servicios`);
  if (serviciosEmpresa.data._embedded) {
    servicios = serviciosEmpresa.data._embedded.servicios;
    servicios.map((servicio) => {
      servicio.id = getIdURL(servicio._links.self.href);
    });
  }
  return servicios;
}
