package es.mdef.traducpol.rest;

import org.springframework.hateoas.RepresentationModel;
import org.springframework.hateoas.server.core.Relation;

import es.mdef.traducpol.entidades.EmpresaConId;
import traducpolPruebaLibreria.Servicio.Tipo;

@Relation(collectionRelation = "servicios")
public class ServicioListaModel extends RepresentationModel<ServicioListaModel> {
	private String idioma;
	private Tipo tipo;
	private String tipoDocumento;
	private String plazoEntrega;
	private boolean traductorJurado;
	private String horarioInicioServicio;
	private String horarioFinServicio;
	private String provincia;
	private boolean servicioOnline;
	private EmpresaConId empresa;

	public String getIdioma() {
		return idioma;
	}

	public void setIdioma(String idioma) {
		this.idioma = idioma;
	}

	public Tipo getTipo() {
		return tipo;
	}

	public void setTipo(Tipo tipo) {
		this.tipo = tipo;
	}

	public String getTipoDocumento() {
		return tipoDocumento;
	}

	public void setTipoDocumento(String tipoDocumento) {
		this.tipoDocumento = tipoDocumento;
	}

	public String getPlazoEntrega() {
		return plazoEntrega;
	}

	public void setPlazoEntrega(String plazoEntrega) {
		this.plazoEntrega = plazoEntrega;
	}

	public boolean isTraductorJurado() {
		return traductorJurado;
	}

	public void setTraductorJurado(boolean traductorJurado) {
		this.traductorJurado = traductorJurado;
	}

	public String getHorarioInicioServicio() {
		return horarioInicioServicio;
	}

	public void setHorarioInicioServicio(String horarioInicioServicio) {
		this.horarioInicioServicio = horarioInicioServicio;
	}

	public String getHorarioFinServicio() {
		return horarioFinServicio;
	}

	public void setHorarioFinServicio(String horarioFinServicio) {
		this.horarioFinServicio = horarioFinServicio;
	}

	public String getProvincia() {
		return provincia;
	}

	public void setProvincia(String provincia) {
		this.provincia = provincia;
	}

	public boolean isServicioOnline() {
		return servicioOnline;
	}

	public void setServicioOnline(boolean servicioOnline) {
		this.servicioOnline = servicioOnline;
	}

	public EmpresaConId getEmpresa() {
		return empresa;
	}

	public void setEmpresa(EmpresaConId empresa) {
		this.empresa = empresa;
	}

}
