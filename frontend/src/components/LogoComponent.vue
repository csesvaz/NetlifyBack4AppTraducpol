<script>
</script>
<template>
    <div class="logo-container">
        <figure class="figure">
            <img src="../images/logoTraducpol.png" class="figure-img img-fluid rounded" width="200" height="200"
                alt="Logo TRADUCPOL">
        </figure>
        <p>TRADUCPOL</p>
    </div>
</template>


<style scoped>
.logo-container {
    display: flex;
    /* establecer un estilo de diseño de caja flexible */
    align-items:normal;
    /* centrar verticalmente los elementos */
    justify-content: center; /* centrar horizontalmente el contenedor */
}

figure+p {
    font-size: 6vw;
    color: blue;
    margin-left: 2vw;
   
}
</style>