//Importar Router
import { createRouter, createWebHashHistory } from "vue-router";

//Importar componentes y sus rutas
import Inicio from "@/Interfaces/InterfazInicio.vue";
import Servicios from "@/Interfaces/InterfazServicios.vue";

const routes = [
  {
    path: "/",
    component: Inicio,
  },
  {
    path: "/servicio",
    component: Servicios,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
