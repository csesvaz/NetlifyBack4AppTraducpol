import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./scss/styles.scss";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

// Importar Pinia
import { createPinia } from "pinia";
// Importar fontawesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faSquareFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

//Router
import { createRouter, createWebHashHistory } from "vue-router";
import Inicio from "./components/Interfaces/InterfazInicio.vue";
import { useAuthStore } from "./stores/AuthStore";
// Importar PrimeVue
import PrimeVue from "primevue/config";

const pinia = createPinia();

library.add(
  faSquareFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faPencilAlt,
  faTrashAlt
);

const Servicios = () => import("@/components/Interfaces/InterfazServicios.vue");
const Busqueda = () => import("@/components/Interfaces/InterfazBusqueda.vue");
const Alta = () => import("@/components/Interfaces/InterfazAlta.vue");
const AltaEmpresa = () => import("@/components/Formularios/AltaEmpresa.vue");
const Ayuda = () => import("@/components/Interfaces/InterfazAyuda.vue");
const ModificacionEmpresa = () =>
  import("@/components/Formularios/ModificacionEmpresa.vue");
const AltaServicioInterpretacion = () =>
  import("@/components/Formularios/AltaServicioInterpretacion.vue");
const AltaServicioTraduccion = () =>
  import("@/components/Formularios/AltaServicioTraduccion.vue");
const InterfazGestionEmpresa = () =>
  import("@/components/Interfaces/InterfazGestionEmpresa.vue");
const InterfazGestionServicios = () =>
  import("@/components/Interfaces/InterfazGestionServicios.vue");
const ModificacionServicioInterpretacion = () =>
  import("@/components/Formularios/ModificacionServicioInterpretacion.vue");
const ModificacionServicioTraduccion = () =>
  import("@/components/Formularios/ModificacionServicioTraduccion.vue");
const InterfazEmpresas = () =>
  import("@/components/Interfaces/InterfazEmpresas.vue");
const routes = [
  {
    path: "/",
    component: Inicio,
    name: "Inicio",
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
    name: "Alta",
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
    name: "altaServicioInterpretacion",
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
    name: "altaServicioTraduccion",
  },
  {
    path: "/interfazGestionEmpresa",
    component: InterfazGestionEmpresa,
    name: "interfazGestionEmpresa",
  },
  {
    path: "/interfazGestionServicios",
    component: InterfazGestionServicios,
    name: "interfazGestionServicios",
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from) => {
  const autorizado = useAuthStore().esAdminintrador;
  if (
    !autorizado &&
    (to.name === "altaEmpresa" ||
      to.name === "altaServicioInterpretacion" ||
      to.name === "altaServicioTraduccion" ||
      to.name === "interfazGestionServicios" ||
      to.name === "interfazGestionEmpresa" ||
      to.name === "modificacionServicioInterpretacion" ||
      to.name === "modificacionServicioTraduccion" ||
      to.name === "modificacionEmpresa")
  ) {
    return { name: "Inicio" };
  }
});

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(pinia)
  .use(PrimeVue)
  .use(router)
  .mount("#app");
