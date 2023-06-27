import { createApp } from "vue";
import "@/style.css";
import App from "@/App.vue";
import "@/scss/styles.scss";
import Inicio from "@/components/Inicio.vue";
import * as bootstrap from "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faLinkedin,
  faSquareFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
library.add(faSquareFacebook, faTwitter, faLinkedin, faInstagram);

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import { createPinia } from "pinia";
const pinia = createPinia();

import { useAuthStore } from "@/stores/AuthStore";
import PrimeVue from "primevue/config";
import { createRouter, createWebHashHistory } from "vue-router";
const Servicios = () =>
  import("@/components/servicios/VisualizacionServicios.vue");
const Busqueda = () => import("@/components/BusquedaAvanzada.vue");
const GestionPrincipal = () => import("@/components/GestionPrincipal.vue");
const AltaEmpresa = () => import("@/components/empresas/AltaEmpresa.vue");
const Ayuda = () => import("@/components/Ayuda.vue");
const ModificacionEmpresa = () =>
  import("@/components/empresas/ModificacionEmpresa.vue");
const AltaServicioInterpretacion = () =>
  import("@/components/servicios/AltaServicioInterpretacion.vue");
const AltaServicioTraduccion = () =>
  import("@/components/servicios/AltaServicioTraduccion.vue");
const GestionEmpresa = () =>
  import("@/components/empresas/GestionEmpresas.vue");
const GestionServicios = () =>
  import("@/components/servicios/GestionServicios.vue");
const ModificacionServicioInterpretacion = () =>
  import("@/components/servicios/ModificacionServicioInterpretacion.vue");
const ModificacionServicioTraduccion = () =>
  import("@/components/servicios/ModificacionServicioTraduccion.vue");
const Empresas = () => import("@/components/empresas/ConsultaEmpresas.vue");
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
    component: Empresas,
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
    path: "/GestionServicios",
    component: GestionServicios,
    name: "GestionServicios",
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
      to.name === "GestionServicios" ||
      to.name === "GestionEmpresa" ||
      to.name === "modificacionServicioInterpretacion" ||
      to.name === "modificacionServicioTraduccion" ||
      to.name === "modificacionEmpresa")
  ) {
    return { name: "Inicio" };
  }
});
const app = createApp(App);
app.use(pinia);
app.use(PrimeVue);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
