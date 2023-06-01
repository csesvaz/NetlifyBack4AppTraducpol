//Importar Router
import { createRouter, createWebHashHistory } from "vue-router";

//Importar componentes y sus rutas
import Inicio from "@/Interfaces/InterfazInicio.vue";
import Servicios from "@/Interfaces/InterfazServicios.vue";
import Busqueda from "@/Interfaces/InterfazBusqueda.vue";
import Alta from "@/Interfaces/InterfazAlta.vue";
import Ayuda from "@/Interfaces/InterfazAyuda.vue";
import AltaEmpresa from "@/FormulariosAlta/AltaEmpresa.vue";
import ModificacionEmpresa from "@/FormulariosAlta/ModificacionEmpresa.vue";
import AltaServicioInterpretacion from "@/FormulariosAlta/AltaServicioInterpretacion.vue";
import AltaServicioTraduccion from "@/FormulariosAlta/AltaServicioTraduccion.vue";
import InterfazGestionEmpresa from "@/Interfaces/InterfazGestionEmpresa.vue";
import InterfazGestionServicios from "@/Interfaces/InterfazGestionServicios.vue";
import ModificacionServicioInterpretacion from "@/FormulariosAlta/ModificacionServicioInterpretacion.vue";
import ModificacionServicioTraduccion from "@/FormulariosAlta/ModificacionServicioTraduccion.vue";
import InterfazEmpresas from "@/Interfaces/InterfazEmpresas.vue";
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
