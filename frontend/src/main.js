import {createApp} from "vue";
import "./style.css";
import App from "./App.vue";
import "./scss/styles.scss";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

// Importar Pinia
import {createPinia} from "pinia";
// Importar fontawesome
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";

import {faInstagram, faLinkedin, faSquareFacebook, faTwitter,} from "@fortawesome/free-brands-svg-icons";
import {faPencilAlt, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

//Router
import {createRouter, createWebHashHistory} from "vue-router";
import Inicio from "./components/Inicio.vue";
import {useAuthStore} from "./stores/AuthStore";
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

const Servicios = () => import("@/components/servicios/VisualizacionServicios.vue");
const Busqueda = () => import("@/components/BusquedaAvanzada.vue");
const GestionPrincipal = () => import("@/components/GestionPrincipal.vue");
const AltaEmpresa = () => import("@/components/Formularios/AltaEmpresa.vue");
const Ayuda = () => import("@/components/Ayuda.vue");
const ModificacionEmpresa = () =>
  import("@/components/Formularios/ModificacionEmpresa.vue");
const AltaServicioInterpretacion = () =>
  import("@/components/Formularios/AltaServicioInterpretacion.vue");
const AltaServicioTraduccion = () =>
  import("@/components/Formularios/AltaServicioTraduccion.vue");
const GestionEmpresa = () =>
  import("@/components/empresas/GestionEmpresas.vue");
const InterfazGestionServicios = () =>
  import("@/components/servicios/GestionServicios.vue");
const ModificacionServicioInterpretacion = () =>
  import("@/components/Formularios/ModificacionServicioInterpretacion.vue");
const ModificacionServicioTraduccion = () =>
  import("@/components/Formularios/ModificacionServicioTraduccion.vue");
const InterfazEmpresas = () =>
  import("@/components/empresas/ConsultaEmpresas.vue");
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
    path: "/gestion-principal",
    component: GestionPrincipal,
    name: "GestionPrincipal",
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
    path: "/GestionEmpresa",
    component: GestionEmpresa,
    name: "GestionEmpresa",
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
  const autorizado = useAuthStore().esAdministrador;
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
    return {name: "Inicio"};
  }
});

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(pinia)
  .use(PrimeVue)
  .use(router)
  .mount("#app");
