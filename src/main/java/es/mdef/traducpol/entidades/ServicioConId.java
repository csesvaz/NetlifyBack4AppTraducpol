package es.mdef.traducpol.entidades;

import traducpolPruebaLibreria.Serviciable;
import traducpolPruebaLibreria.Servicio;

public class ServicioConId extends Servicio implements Serviciable {
	private Long servicioId;

	public Long getId() {
		return servicioId;
	}

	public void setId(Long servicioId) {
		this.servicioId = servicioId;

	}

}
