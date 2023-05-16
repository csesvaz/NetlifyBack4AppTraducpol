<script>
import Card from "primevue/card";
export default {
  components: { Card },
};
</script>

<template>
  <Card class="card">
    <template #title>
      ¿Puedo solicitar un nuevo servicio que no esté incluido entre los
      ofertados?</template
    >
    <template #content>
      <p>
        Sí, puedes sugerir un nuevo servicio que no esté incluido entre los
        ofertados. Para hacerlo, envía un mensaje a la dirección
        apoyoTraucpol@mmmm.com o llama al teléfono (+34 655-566778) y contactará
        con el servicio de intérpretes (Horario telefónico de 9:00 a 15:00).
      </p>
    </template>
  </Card>

  <Card class="card">
    <template #title>
      ¿Que pasa si el servicio buscado no se encuentre dentro de los ofertados
      por las empresas?</template
    >
    <template #content>
      <p>
        En caso de que el servicio busacado no se encuentre dentro de los
        ofertados por las empresas, puedes sugerir la introducción del servicio.
        Para hacerlo, envía un mensaje a la dirección apoyoTraucpol@mmmm.com o
        llama al teléfono (+34 655-566778) y contactará con el servicio de
        intérpretes y traductores (Horario telefónico de 9:00 a 15:00).
      </p>
    </template>
  </Card>
  <Card class="card">
    <template #title>
      ¿Que ocurrre si necesito un servicio que se salga del horario fijado por
      la empresa?</template
    >
    <template #content>
      <p>
        En caso de que un servicio que se salga del horario fijado por la
        empresa existen dos posibilidades: La primera es que el servicio
        empiece dentro del horario marcado por al empresa, la empresa se
        compromete a prestar el servicio. El segundo caso es que el servicio solicitado empiece
        fuera del horario de la empresa pero finalice dentro del horario, en este caso la empresa no
        prestará este servicio por lo que deberá contactar con otra empresa que
        si que preste servicio en dicho horario o contactar con el servicio
        central de interpretes enviando un mensaje a la dirección
        apoyoTraucpol@mmmm.com o llamando al teléfono (+34 655-566778 Horario
        telefónico de 9:00 a 15:00)
      </p>
    </template>
  </Card>
  <Card class="card">
    <template #title>
      ¿Puedo solicitar un nuevo servicio de urgencia, con un tiempo menor a una
      hora para su activación?</template
    >
    <template #content>
      <p>
        Sí, no existen inconvenientes por parte de las empresas que dan apoyo a
        nuestras unidades policiales, siempre y cuando sea dentro del horario
        ofertado para el servicio. Los apoyos de servicios de traducción nunca se
        considerarán de urgencia.
      </p>
    </template>
  </Card>
  <Card class="card">
    <template #title>
      ¿Cómo puedo ver todos los servicios lingüísticos y las empresas
      contratadas por el cuerpo policial?
    </template>
    <template #content>
      <p>
        Puedes visualizar los servicios en el Listado de Servicios en la pestaña
        Servicios Disponibles o puedes visualizar las empresas en la pestaña
        empresas.
      </p>
    </template>
  </Card>
</template>

<style scoped>
.card{
background-color: #d4d0e0;
margin-bottom: 2vh;

}</style>
