//Importar Router
import { createRouter, createWebHashHistory } from "vue-router";

//Importar componentes y sus rutas
import Inicio from "@/Interfaces/InterfazInicio.vue";
import Servicios from "@/Interfaces/InterfazServicios.vue";
import Alta from "@/Interfaces/InterfazAlta.vue";
import Busqueda from "@/Interfaces/InterfazBusqueda.vue";
import Ayuda from "@/Interfaces/InterfazAyuda.vue";
import AltaEmpresa from "@/FormulariosAlta/AltaEmpresa.vue";
import InterfazGestionEmpresa from "@/Interfaces/InterfazGestionEmpresa.vue";
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
    path: "/alta",
    component: Alta,
  },
  {
    path: "/busqueda",
    component: Busqueda,
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
    path: "/interfazGestionEmpresa",
    component: InterfazGestionEmpresa,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
