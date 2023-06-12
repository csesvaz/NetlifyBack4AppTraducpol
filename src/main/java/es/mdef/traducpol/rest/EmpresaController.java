package es.mdef.traducpol.rest;

import org.slf4j.Logger;

import java.util.List;

import org.springframework.hateoas.CollectionModel;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import es.mdef.traducpol.TraducpolApplication;
import es.mdef.traducpol.entidades.EmpresaConId;
import es.mdef.traducpol.entidades.ServicioConId;
import es.mdef.traducpol.repositorios.EmpresaRepositorio;
import es.mdef.traducpol.repositorios.ServicioRepositorio;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/empresas")
public class EmpresaController {

	private final EmpresaRepositorio repositorio;
	private final ServicioRepositorio repositorioServicio;
	private final EmpresaAssembler assembler;
	private final EmpresaListaAssembler listaAssembler;
	private final ServicioListaAssembler servicioListaAssembler;
	private final Logger log;

	EmpresaController(EmpresaRepositorio repositorio, EmpresaAssembler assembler, EmpresaListaAssembler listaAssembler,
			ServicioListaAssembler servicioListaAssembler, ServicioRepositorio repositorioServicio) {
		this.repositorio = repositorio;
		this.repositorioServicio = repositorioServicio;
		this.assembler = assembler;
		this.listaAssembler = listaAssembler;
		this.servicioListaAssembler = servicioListaAssembler;
		this.log = TraducpolApplication.log;
	}

	@GetMapping("{id}")
	public EmpresaModel one(@PathVariable Long id) {
		EmpresaConId empresa = repositorio.findById(id).orElseThrow();
		log.info("Recuperada " + empresa);
		return assembler.toModel(empresa);
	}

	@GetMapping
	public CollectionModel<EmpresaListaModel> all() {
		return listaAssembler.toCollection(repositorio.findAll());
	}

	@GetMapping("{id}/servicios")
	public CollectionModel<ServicioListaModel> getServiciosEmpresa(@PathVariable Long id) {
		EmpresaConId empresaConId = repositorio.findById(id)
				.orElseThrow(() -> new RegisterNotFoundException(id, "empresa"));
		List<ServicioConId> lista = repositorioServicio.findByEmpresa(empresaConId);

		return servicioListaAssembler.toCollection(lista)
				.add(linkTo(methodOn(EmpresaController.class).getServiciosEmpresa(id)).withSelfRel());
	}

	@PostMapping
	public EmpresaModel add(@RequestBody EmpresaPostModel model) {
		EmpresaConId empresa = repositorio.save(assembler.toEntity(model));
		log.info("Añadida " + empresa);
		return assembler.toModel(empresa);
	}

	@PutMapping("{id}")
	public EmpresaModel edit(@PathVariable Long id, @RequestBody EmpresaPostModel model) {
		EmpresaConId empresa = repositorio.findById(id).map(ped -> {
			ped.setNombre(model.getNombre());
			ped.setDireccion(model.getDireccion());
			ped.setTelefono(model.getTelefono());
			ped.setEmail(model.getEmail());
			ped.setCif(model.getCif());

			return repositorio.save(ped);
		}).orElseThrow();
		log.info("Actualizado " + empresa);
		return assembler.toModel(empresa);
	}

	@DeleteMapping("{id}")
	public void delete(@PathVariable Long id) {
		log.info("Borrada empresa " + id);
		repositorio.deleteById(id);
	}

}
