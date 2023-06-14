<script>
import Menubar from "primevue/menubar";
export default {
  components: { Menubar },
  data() {
    return {
      items: [
        {
          label: "Inicio",
          icon: "pi pi-fw pi-home",
          to: "/",
        },
        {
          label: "Servicios Disponibles",
          icon: "pi pi-fw pi-language",
          to: "/servicio",
        },
        {
          label: "Búsqueda",
          icon: "pi pi-fw pi-search",
          to: "/busqueda",
        },
        {
          label: "Gestión",
          icon: "pi pi-fw pi-pencil",
          to: "/alta",
        },
        {
          label: "Empresas",
          icon: "pi pi-fw pi-users",
          to: "/empresas",
        },
        {
          label: "Ayuda",
          icon: "pi pi-fw pi-exclamation-triangle",
          to: "/ayuda",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="card relative z-2">
    <Menubar :model="items">
      <template #start>
        <img
          alt="logo"
          src="../images/LogoEmpresa.png"
          height="60"
          class="mr-2"
        />
      </template>
    </Menubar>
  </div>
  <!-- 
  <nav class="navbar navbar-expand-lg bg-body-tertiary bg-primary">
    <div class="container-fluid">
      <router-link class="navbar-brand text-white" to="/">Inicio</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link text-white"
              aria-current="page"
              to="servicio"
              >Servicios Disponibles</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/busqueda"
              >Búsqueda</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/alta"
              >Gestión</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/empresas"
              >Empresas</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/ayuda"
              >Ayuda</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav> -->
</template>

<style scoped>
.card .p-menubar {
  font-size: 2.1vh;
  font-weight: bold;
}
</style>
