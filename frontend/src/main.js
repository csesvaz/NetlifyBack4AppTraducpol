import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './scss/styles.scss'
import * as bootstrap from 'bootstrap'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

// Importar Pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

// Importar fontawesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas);
library.add(far);
library.add(fab);

//Router
import { createRouter, createWebHashHistory } from "vue-router";
import Inicio from "./components/Interfaces/InterfazInicio.vue";
const Servicios = () =>
  import("./components/Interfaces/InterfazServicios.vue");
const Busqueda = () => import("./components/Interfaces/InterfazBusqueda.vue");
const Alta = () => import("./components/Interfaces/InterfazAlta.vue");
const AltaEmpresa = () => import("./components/Formularios/AltaEmpresa.vue");
const Ayuda = () => import("./components/Interfaces/InterfazAyuda.vue");
const ModificacionEmpresa = () =>
  import("./components/Formularios/ModificacionEmpresa.vue");
const AltaServicioInterpretacion = () =>
  import("./components/Formularios/AltaServicioInterpretacion.vue");
const AltaServicioTraduccion = () =>
  import("./components/Formularios/AltaServicioTraduccion.vue");
const InterfazGestionEmpresa = () =>
  import("./components/Interfaces/InterfazGestionEmpresa.vue");
const InterfazGestionServicios = () =>
  import("./components/Interfaces/InterfazGestionServicios.vue");
const ModificacionServicioInterpretacion = () =>
  import("./components/Formularios/ModificacionServicioInterpretacion.vue");
const ModificacionServicioTraduccion = () =>
  import("./components/Formularios/ModificacionServicioTraduccion.vue");
const InterfazEmpresas = () =>
  import("./components/Interfaces/InterfazEmpresas.vue");
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

// Importar PrimeVue
import PrimeVue from 'primevue/config'

createApp(App)
.component("fa", FontAwesomeIcon)
.use(pinia)
.use(PrimeVue)
.use(router)
.mount('#app')
