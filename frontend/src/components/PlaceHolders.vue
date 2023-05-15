<script>
export default {
    data() {
        return {
            isMobile: window.innerWidth < 576,
        };
    },
    mounted() {
        window.addEventListener('dimensionar', this.calcularTamano);
    },
    beforeDestroy() {
        window.removeEventListener('dimensionar', this.calcularTamano);
    },
    methods: {
        calcularTamano() {
            this.isMobile = window.innerWidth < 576;
        },
    },
};
</script>
<template>
    <div class="card-container">
        <div :class="['card', 'bg-warning', isMobile ? 'col-12' : 'col-md-4']">
            <img src="../images/ESM-scaled.jpg" class="card-img-top" alt="Lista servicios">

            <div class="card-body" title="Servicios disponibles">
                <h5 class="card-title">Consulta Servicios</h5>
                <p class="card-text">Consulta todos nuestros servicios.</p>
                <div class="boton">
                    <router-link class="btn btn-primary" to="/servicio">Servicios Disponibles</router-link>
                </div>
            </div>
        </div>
        <div :class="['card', 'bg-info', isMobile ? 'col-12' : 'col-md-4']">
            <img src="../images/La-Busqueda-de-Informacion.png" class="card-img-top" alt="Lista servicios">

            <div class="card-body" title="Busqueda Servicios">
                <h5 class="card-title">Busqueda Servicios</h5>
                <p class="card-text">Realice las búsquedas del servicio de interpretación que más se ajuste a sus
                    necesidades</p>
                <div class="boton">
                    <router-link class="btn btn-primary" to="/busqueda">Búsqueda</router-link>
                </div>
            </div>
        </div>
        <div :class="['card', 'bg-danger', isMobile ? 'col-12' : 'col-md-4']">
            <img src="../images/ayuda.jpg" class="card-img-top" alt="Lista servicios">

            <div class="card-body" title="Ayuda">
                <h5 class="card-title">Ayuda</h5>
                <p class="card-text">Preguntas y respuestas más frencuentes.</p>
                <div class="boton">
                    <router-link class="btn btn-primary" to="/ayuda">Ayuda</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
  
  
  


<style scoped>
.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
}

.card-title {
    text-align: center;
}

.card-text {
    text-align: center;
}

.boton {
    text-align: center;
}
</style>