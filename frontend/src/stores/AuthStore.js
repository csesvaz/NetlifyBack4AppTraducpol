import {defineStore} from 'pinia';

export const useAuthStore = defineStore('authStore', {
    state: () => ({esAdminintrador: false}),
    getters: {
        getIsAdmin() {
            return this.esAdminintrador;
        }
    },
    actions: {
        cambiarAdmin(admin) {
            this.esAdminintrador = admin;
        },
    },
})