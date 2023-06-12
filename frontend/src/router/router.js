import { createRouter, createWebHashHistory } from "vue-router";
import Inicio from "../components/Interfaces/InterfazInicio.vue";
const Servicios = () =>
  import("../components/Interfaces/InterfazServicios.vue");
const Busqueda = () => import("../components/Interfaces/InterfazBusqueda.vue");
const Alta = () => import("../components/Interfaces/InterfazAlta.vue");
const AltaEmpresa = () => import("../FormulariosAlta/AltaEmpresa.vue");
const Ayuda = () => import("../components/Interfaces/InterfazAyuda.vue");
const ModificacionEmpresa = () =>
  import("../FormulariosAlta/ModificacionEmpresa.vue");
const AltaServicioInterpretacion = () =>
  import("../FormulariosAlta/AltaServicioInterpretacion.vue");
const AltaServicioTraduccion = () =>
  import("../FormulariosAlta/AltaServicioTraduccion.vue");
const InterfazGestionEmpresa = () =>
  import("../components/Interfaces/InterfazGestionEmpresa.vue");
const InterfazGestionServicios = () =>
  import("../components/Interfaces/InterfazGestionServicios.vue");
const ModificacionServicioInterpretacion = () =>
  import("../FormulariosAlta/ModificacionServicioInterpretacion.vue");
const ModificacionServicioTraduccion = () =>
  import("../FormulariosAlta/ModificacionServicioTraduccion.vue");
const InterfazEmpresas = () =>
  import("../components/Interfaces/InterfazEmpresas.vue");
const routes = [
  {
    path: "/",
    component: Inicio,
  },
  {
    path: "/servicio",
    component: Servicios,
  },
  {
    path: "/busqueda",
    component: Busqueda,
  },
  {
    path: "/alta",
    component: Alta,
  },
  {
    path: "/empresas",
    component: InterfazEmpresas,
  },
  {
    path: "/ayuda",
    component: Ayuda,
  },
  {
    path: "/altaEmpresa",
    component: AltaEmpresa,
    name: "altaEmpresa",
  },
  {
    path: "/modificacionEmpresa/:id",
    component: ModificacionEmpresa,
    name: "modificacionEmpresa",
  },
  {
    path: "/altaServicioInterpretacion",
    component: AltaServicioInterpretacion,
  },
  {
    path: "/modificacionServicioInterpretacion/:id",
    component: ModificacionServicioInterpretacion,
    name: "modificacionServicioInterpretacion",
  },
  {
    path: "/modificacionServicioTraduccion/:id",
    component: ModificacionServicioTraduccion,
    name: "modificacionServicioTraduccion",
  },
  {
    path: "/altaServicioTraduccion",
    component: AltaServicioTraduccion,
  },
  {
    path: "/interfazGestionEmpresa",
    component: InterfazGestionEmpresa,
  },
  {
    path: "/interfazGestionServicios",
    component: InterfazGestionServicios,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
