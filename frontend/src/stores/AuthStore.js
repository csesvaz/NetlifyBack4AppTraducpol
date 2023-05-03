import { defineStore } from 'pinia';

export const useAuthStore = defineStore('authStore', {
        state: () => ({ isAdmin: false }),
        getters: {
            getIsAdmin() {
                return this.isAdmin;
            }
        },
        actions: {
            cambiarAdmin(admin) {
                this.isAdmin = admin;
            },
        },
    })