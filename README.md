# traducpol

## Descripción

Esta aplicación servirá como gestor de todos los servicios lingüísticos que un cuerpo policial tiene contratados y pone a disposición de sus agentes a nivel nacional.

El objetivo es que cuando una patrulla de seguridad ciudadana, o cualquier otro agente que esté de servicio, y que por cualquier motivo se encuentre con la necesidad de hacer uso de un servicio lingüístico, gracias a esta aplicación pueda buscar el servicio que mejor se adapte a sus necesidades en un único lugar, en cualquier momento del día y de una forma sencilla.

Por ello, la página debe permitir dar de alta las empresas contratadas con sus datos de contacto, así como los servicios de interpretación o de traducción (con sus propiedades particulares que serán de interés para el agente) que hayan sido contratados a través de esa empresa.

## Diagrama de clases

![DiagramaClases](https://git.institutomilitar.com/Cpsgar/traducpol/-/wikis/imagenes/DiagramaClases.png)

**Cumplimiento de requisitos**

1. **Herencia**: Se encuentra entre la clase abstracta `ServicioLinguistico` y sus subtipos: `Interpretacion` y `Traduccion`.
2. **Relación One-To-Many**: Se encuentra entre `Empresa` y los servicios que ofrece la misma `ServicioLinguistico`.
3. **Método personalizado**: El método recogerá como parámetros un idioma, una hora y un lugar donde se quiere hacer uso de un servicio de Interpretación, y devolverá los servicios de interpretación de ese idioma que son prestados a esa hora y en ese lugar, además de los servicios que son prestados online en ese idioma y a esa hora.
4. **Listado**: Se mostrarán todos los servicios que presta una empresa determinada.
5. **CRUD**: Se realizará sobre los servicios.
6. **URLs** del proyecto:
   1. Repositorio proyecto: https://git.institutomilitar.com/Cpsgar/traducpol 
   2. Librería: 
7. **Despliegue** en Internet:
   1. API: 
   2. Web: 

   #Inicio de Trabajos creación de Rama InterfazInicio- >Finalizado InterfazInicio
