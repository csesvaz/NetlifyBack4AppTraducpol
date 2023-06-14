<script>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
export default {
  components: { AccordionTab, Accordion },
};
</script>

<template>
  <div class="contenedor">
    <br />
    <div class="row mt-3">
      <h3 class="IntroduccionAyuda">
        Preguntas más frecuentes acerca de la aplicación.
      </h3>
    </div>
  </div>
  <Accordion :multiple="true" :activeIndex="[0]">
    <AccordionTab>
      <template #header class="preguntas">
        <i class="pi pi-search"></i>
        <p>&nbsp;</p>
        <span
          >¿Puedo solicitar un nuevo servicio que no esté incluido entre los
          ofertados?</span
        >
      </template>
      <p>
        Sí, puedes sugerir un nuevo servicio que no esté incluido entre los
        ofertados. Para hacerlo, envía un mensaje a la dirección
        apoyoTraucpol@mmmm.com o llama al teléfono (+34 655-566778) y contactará
        con el servicio de intérpretes (Horario telefónico de 9:00 a 15:00).
      </p>
    </AccordionTab>
    <AccordionTab>
      <template #header>
        <i class="pi pi-search"></i>
        <p>&nbsp;</p>
        <span
          >¿Que pasa si el servicio buscado no se encuentre dentro de los
          ofertados por las empresas?</span
        >
      </template>
      <p>
        En caso de que el servicio busacado no se encuentre dentro de los
        ofertados por las empresas, puedes sugerir la introducción del servicio.
        Para hacerlo, envía un mensaje a la dirección apoyoTraucpol@mmmm.com o
        llama al teléfono (+34 655-566778) y contactará con el servicio de
        intérpretes (Horario telefónico de 9:00 a 15:00).
      </p>
    </AccordionTab>
    <AccordionTab>
      <template #header>
        <i class="pi pi-search"></i>
        <p>&nbsp;</p>
        <span
          >¿Que ocurrre si necesito un servicio que se salga del horario fijado
          por la empresa?</span
        >
      </template>
      <p>
        En caso de que un servicio que se salga del horario fijado por la
        empresa, en este caso existen dos posibilidades: 1 si el servicio
        empieza dentro del horario marcado por al empresa, la empresa se
        compromete a prestar el servicio. 2 Si el servicio solicitado empieza
        fuera del horario de la empresa pero finaliza dentro, la empresa no
        prestará este servicio por lo que deberá contactar con otra empresa que
        si que preste servicio en dicho horario o contactar con el servicio
        central de interpretes enviando un mensaje a la dirección
        apoyoTraucpol@mmmm.com o llamando al teléfono (+34 655-566778 Horario
        telefónico de 9:00 a 15:00)
      </p>
    </AccordionTab>
    <AccordionTab>
      <template #header>
        <i class="pi pi-search"></i>
        <p>&nbsp;</p>
        <span
          >¿Puedo solicitar un nuevo servicio de urgencia, con un tiempo menor a
          una hora para su activación?</span
        >
      </template>
      <p>
        Sí, no existen inconvenientes por parte de las empresas que dan apoyo a
        nuestras unidades policiales, siempre y cuando sea dentro del horario
        ofertado para el sevricio Los apoyos de servicios de traducción nunca se
        considerarán de urgencia.
      </p>
    </AccordionTab>
    <AccordionTab>
      <template #header>
        <i class="pi pi-search"></i>
        <p>&nbsp;</p>
        <span
          >¿Cómo puedo ver todos los servicios lingüísticos y las empresas
          contratadas por el cuerpo policial?</span
        >
      </template>
      <p>
        Puedes visualizar los servicios en el Listado de Servicios en la pestaña
        Servicios Disponibles o puedes visualizar las empresas en la pestaña
        empresas.
      </p>
    </AccordionTab>
  </Accordion>
</template>

<style scoped>

.contenedor {
  margin-bottom: 2vh;
  text-align: center;
  margin-left: 3vw;
  margin-right: 3vw;
  margin-top: 2vh;
}
@media (max-width: 768px) {
  * {
    font-size: 1.5vh;
  }
  .contenedor {
    margin-top: 6vh;
  }
}
</style>
