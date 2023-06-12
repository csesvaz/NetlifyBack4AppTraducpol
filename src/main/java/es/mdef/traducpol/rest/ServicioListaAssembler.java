package es.mdef.traducpol.rest;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import es.mdef.traducpol.entidades.EmpresaConId;
import es.mdef.traducpol.entidades.ServicioConId;
import es.mdef.traducpol.entidades.ServicioInterpretacionImpl;
import es.mdef.traducpol.entidades.ServicioTraduccionImpl;
import traducpolPruebaLibreria.Servicio.Tipo;

@Component
public class ServicioListaAssembler implements RepresentationModelAssembler<ServicioConId, ServicioListaModel> {

	public ServicioListaModel toModel(ServicioConId entity) {
		ServicioListaModel model = new ServicioListaModel();
		model.setIdioma(entity.getIdioma());
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
		model.setEmpresa((EmpresaConId) entity.getEmpresa());
		model.add(linkTo(methodOn(ServicioController.class).one(entity.getId())).withSelfRel());
		return model;

	}

	public CollectionModel<ServicioListaModel> toCollection(List<ServicioConId> lista) {
		CollectionModel<ServicioListaModel> collection = CollectionModel
				.of(lista.stream().map(this::toModel).collect(Collectors.toList()));
		collection.add(linkTo(methodOn(ServicioController.class).all()).withRel("servicios"));
		return collection;
	}
}
