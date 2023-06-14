<script>

</script>

<template>
  <main>
    <div class="logo-container">
      <figure class="figure">
        <img
          src="@/images/logoTraducpol.png"
          class="figure-img img-fluid rounded"
          width="200"
          height="200"
          alt="Logo TRADUCPOL"
        />
      </figure>
      <p>TRADUCPOL</p>
    </div>

    <div class="card-container">
      <div class="card bg-warning col-12 col-md-4">
        <img
          src="@/images/ESM-scaled.jpg"
          class="card-img-top"
          alt="Lista servicios"
        />

        <div class="card-body" title="Servicios disponibles">
          <h5 class="card-title">Consulta Servicios</h5>
          <p class="card-text">Consulta todos nuestros servicios.</p>
          <div class="boton">
            <router-link class="btn btn-primary" to="/servicio"
              >Servicios Disponibles</router-link
            >
          </div>
        </div>
      </div>
      <div class="card bg-info col-12 col-md-4">
        <img
          src="@/images/La-Busqueda-de-Informacion.png"
          class="card-img-top"
          alt="Lista servicios"
        />

        <div class="card-body" title="Busqueda Servicios">
          <h5 class="card-title">Busqueda Servicios</h5>
          <p class="card-text">
            Realice las búsquedas del servicio de interpretación que más se
            ajuste a sus necesidades
          </p>
          <div class="boton">
            <router-link class="btn btn-primary" to="/busqueda"
              >Búsqueda</router-link
            >
          </div>
        </div>
      </div>
      <div class="card bg-danger col-12 col-md-4">
        <img
          src="@/images/ayuda.jpg"
          class="card-img-top"
          alt="Lista servicios"
        />
        <div class="card-body" title="Ayuda">
          <h5 class="card-title">Ayuda</h5>
          <p class="card-text">Preguntas y respuestas más frencuentes.</p>
          <div class="boton">
            <router-link class="btn btn-primary" to="/ayuda">Ayuda</router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <p>
            ¡Bienvenido a TRADUCPOL, la aplicación para la gestión de servicios
            lingüísticos policiales!
          </p>
          <p>
            Ofrecemos una manera fácil y conveniente de acceder a una variedad
            de servicios lingüísticos para satisfacer las necesidades de las
            unidades. Ya sea que necesite un intérprete para una detección, un
            traductor para documentos importantes o una consulta técnica en
            alguna de sus operaciones, ¡nuestra aplicación estará aquí para
            ayudarlo!
          </p>
          <p>
            Nuestra interfaz de usuario intuitiva y fácil de usar hace que la
            navegación sea rápida y sencilla. Puede solicitar servicios de forma
            rápida y fácil o consultar los datos de las empresas que suministran
            los servicios.
          </p>
          <p>
            Nos enorgullece brindar servicios lingüísticos de alta calidad a las
            unidades y esperamos poder servirle a usted.
          </p>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-md-12 text-center">
          <p>Síguenos en:</p>
          <div class="socialMedia">
            <fa icon="fa-brands fa-square-facebook" />
            <fa icon="fa-brands fa-twitter" />
            <fa icon="fa-brands fa-linkedin" />
            <fa icon="fa-brands fa-instagram" />
          </div>
          <p>
            Contacto: email apoyoTraucpol@mmmm.com o teléfono (+34 655-566778
            Horario telefónico de 9:00 a 15:00)
          </p>
          <p>© TRADUCPOL 2023. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.logo-container {
  display: flex;
  align-items: normal;
  justify-content: center;
}
figure + p {
  font-size: 6vw;
  color: blue;
  margin-left: 2vw;
  margin-top: 2vh;
}
main {
  margin-top: 4vh;
}
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
footer {
  margin-top: 3vh;
}
.socialMedia > * {
  margin-right: 1vw;
  margin-bottom: 1vh;
}
@media (max-width: 768px) {
  .figure {
   
    margin-top: 4vh;
  }
}
</style>
