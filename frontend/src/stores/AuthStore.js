import {defineStore} from 'pinia';

export const useAuthStore = defineStore('authStore', {
  state: () => ({esAdministrador: false}),
  actions: {
    cambiarAdmin(admin) {
      this.esAdministrador = admin;
    },
  },
})