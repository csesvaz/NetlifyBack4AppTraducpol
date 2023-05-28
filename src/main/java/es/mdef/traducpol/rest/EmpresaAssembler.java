package es.mdef.traducpol.rest;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import org.springframework.hateoas.server.RepresentationModelAssembler;

import org.springframework.stereotype.Component;

import es.mdef.traducpol.entidades.EmpresaConId;

@Component
public class EmpresaAssembler implements RepresentationModelAssembler<EmpresaConId, EmpresaModel> {

	public EmpresaConId toEntity(EmpresaModel model) {
		EmpresaConId empresa = new EmpresaConId();
		empresa.setNombre(model.getNombre());
		empresa.setDireccion(model.getDireccion());
		empresa.setTelefono(model.getTelefono());
		empresa.setEmail(model.getEmail());
		empresa.setCif(model.getCif());

		return empresa;
	}

	public EmpresaConId toEntity(EmpresaPostModel model) {
		EmpresaConId empresa = new EmpresaConId();
		empresa.setNombre(model.getNombre());
		empresa.setDireccion(model.getDireccion());
		empresa.setTelefono(model.getTelefono());
		empresa.setEmail(model.getEmail());
		empresa.setCif(model.getCif());

		return empresa;
	}

	@Override
	public EmpresaModel toModel(EmpresaConId entity) {
		EmpresaModel model = new EmpresaModel();
		model.setNombre(entity.getNombre());
		model.setDireccion(entity.getDireccion());
		model.setTelefono(entity.getTelefono());
		model.setEmail(entity.getEmail());
		model.setCif(entity.getCif());
		model.add(linkTo(methodOn(EmpresaController.class).one(entity.getId())).withSelfRel(),
				linkTo(methodOn(EmpresaController.class).getServiciosEmpresa(entity.getId())).withRel("servicios")

		);
		return model;
	}

}
