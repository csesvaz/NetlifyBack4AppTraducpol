<script></script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary bg-primary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Inicio</router-link>
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
            <router-link class="nav-link" aria-current="page" to="servicio"
              >Servicios Disponibles</router-link
            >

          </li>
          <li class="nav-item">
          <router-link class="nav-link" to="/alta">Gestión</router-link>
        </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-brand:hover {
  color: rgb(201, 243, 14);
}
.navbar-brand {
  color: blue;
}

.nav-link:hover {
  color: rgb(201, 243, 14);
}
.nav-link {
  color: blue;
}
</style>
