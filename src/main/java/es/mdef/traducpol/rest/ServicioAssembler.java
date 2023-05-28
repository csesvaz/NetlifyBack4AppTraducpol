package es.mdef.traducpol.rest;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import org.slf4j.Logger;

import org.springframework.stereotype.Component;

import es.mdef.traducpol.TraducpolApplication;
import es.mdef.traducpol.entidades.EmpresaConId;
import es.mdef.traducpol.entidades.ServicioConId;
import es.mdef.traducpol.entidades.ServicioInterpretacionImpl;
import es.mdef.traducpol.entidades.ServicioTraduccionImpl;

import traducpolPruebaLibreria.Servicio.Tipo;



@Component
public class ServicioAssembler {

	private final Logger log=TraducpolApplication.log;
	

	public ServicioConId toEntity(ServicioModel model) {
		ServicioConId servicio;

		switch (model.getTipo()) {
		case TRADUCCION: {
			servicio = new ServicioTraduccionImpl();
			((ServicioTraduccionImpl) servicio).setTipoDocumento(model.getTipoDocumento());
			((ServicioTraduccionImpl) servicio).setPlazoEntrega(model.getPlazoEntrega());
			((ServicioTraduccionImpl) servicio).setTraductorJurado(model.isTraductorJurado());
			break;
		}
		case INTERPRETACION: {
			servicio = new ServicioInterpretacionImpl();
			((ServicioInterpretacionImpl) servicio).setProvincia(model.getProvincia());
			((ServicioInterpretacionImpl) servicio).setHorarioInicioServicio(model.getHorarioInicioServicio());
			((ServicioInterpretacionImpl) servicio).setHorarioFinServicio(model.getHorarioFinServicio());
			((ServicioInterpretacionImpl) servicio).setServicioOnline(model.isServicioOnline());
			break;
		}
		default:
			throw new IllegalArgumentException("Unexpected value: " + model.getTipo());
		}
		servicio.setIdioma(model.getIdioma());
		servicio.setEmpresa(model.getEmpresa());
		return servicio;
	}
	public ServicioConId toEntity(ServicioPostModel model) {
		ServicioConId servicio;

		switch (model.getTipo()) {
		case TRADUCCION: {
			servicio = new ServicioTraduccionImpl();
			((ServicioTraduccionImpl) servicio).setTipoDocumento(model.getTipoDocumento());
			((ServicioTraduccionImpl) servicio).setPlazoEntrega(model.getPlazoEntrega());
			((ServicioTraduccionImpl) servicio).setTraductorJurado(model.isTraductorJurado());
			break;
		}
		case INTERPRETACION: {
			servicio = new ServicioInterpretacionImpl();
			((ServicioInterpretacionImpl) servicio).setProvincia(model.getProvincia());
			((ServicioInterpretacionImpl) servicio).setHorarioInicioServicio(model.getHorarioInicioServicio());
			((ServicioInterpretacionImpl) servicio).setHorarioFinServicio(model.getHorarioFinServicio());
			((ServicioInterpretacionImpl) servicio).setServicioOnline(model.isServicioOnline());
			break;
		}
		default:
			throw new IllegalArgumentException("Unexpected value: " + model.getTipo());
		}
		servicio.setIdioma(model.getIdioma());
		servicio.setEmpresa(model.getEmpresa());
		return servicio;
	}

	public ServicioModel toModel(ServicioConId entity) {
		ServicioModel model = new ServicioModel();
		model.setIdioma(entity.getIdioma());
		model.setEmpresa((EmpresaConId) entity.getEmpresa());
		
		switch (entity.getTipo()) {
		case TRADUCCION: {
			ServicioTraduccionImpl traductor = (ServicioTraduccionImpl) entity;
			model.setTipoDocumento(traductor.getTipoDocumento());
			model.setPlazoEntrega(traductor.getPlazoEntrega());
			model.setTraductorJurado(traductor.isTraductorJurado());
			model.setTipo(Tipo.TRADUCCION);
			break;
		}
		case INTERPRETACION: {
			ServicioInterpretacionImpl interprete = (ServicioInterpretacionImpl) entity;
			model.setProvincia(interprete.getProvincia());
			model.setHorarioInicioServicio(interprete.getHorarioInicioServicio());
			model.setHorarioFinServicio(interprete.getHorarioFinServicio());
			model.setServicioOnline(interprete.isServicioOnline());
			model.setTipo(Tipo.INTERPRETACION);
	
			break;
		}
		default:
			throw new IllegalArgumentException("Unexpected value: " + entity.getTipo());
		}

		model.add(
				linkTo(methodOn(ServicioController.class).one(entity.getId())).withSelfRel(),
				linkTo(methodOn(EmpresaController.class).one(((EmpresaConId) entity.getEmpresa()).getId())).withRel("empresa"));
		log.info(model.toString());
		return model;
	}

}
