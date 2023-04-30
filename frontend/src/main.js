import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './scss/styles.scss'
import * as bootstrap from 'bootstrap'


// Importar fontawesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas);
library.add(far);
library.add(fab);

createApp(App)
.component("fa", FontAwesomeIcon)
.use(pinia)
.mount('#app')
