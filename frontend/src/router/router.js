//Importar Router
import { createRouter, createWebHashHistory } from "vue-router";

//Importar componentes y sus rutas
import Inicio from "@/Interfaces/InterfazInicio.vue";
import Servicios from "@/Interfaces/InterfazServicios.vue";
import Alta from "@/Interfaces/InterfazAlta.vue";
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
  },,
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
