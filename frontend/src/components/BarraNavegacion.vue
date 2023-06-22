<script>
import Menubar from "primevue/menubar";

export default {
  components: {Menubar},
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
  <div class="fixed-top">
    <div class="card relative z-2">
      <Menubar :model="items">
        <template #start>
          <img
              alt="logo"
              class="mr-2"
              height="60"
              src="../images/LogoEmpresa.png"
          />
        </template>
      </Menubar>
    </div>
  </div>
</template>

<style scoped>
fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  width: 100%;
}

.card .p-menubar {
  font-size: 2.1vh;
  font-weight: bold;
}

.p-menubar {
  background-color: var(--primary-200);
  border-color: var(--primary-200);
  color: #000000;
}
</style>
