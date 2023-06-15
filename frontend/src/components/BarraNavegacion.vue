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
  <div class="fixed-top">
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
:deep(.p-menubar) {
  background-color: var(--primary-200);
  border-color: var(--primary-200);
  color: #000000;
}
:deep(a:hover) {
  background-color: var(--primary-400);
  color: white;
}
</style>
