package es.mdef.traducpol.rest;

import java.util.List;

import org.slf4j.Logger;
import org.springframework.hateoas.CollectionModel;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import es.mdef.traducpol.TraducpolApplication;
import es.mdef.traducpol.entidades.EmpresaConId;
import es.mdef.traducpol.entidades.ServicioConId;
import es.mdef.traducpol.entidades.ServicioInterpretacionImpl;
import es.mdef.traducpol.entidades.ServicioService;
import es.mdef.traducpol.entidades.ServicioTraduccionImpl;
import es.mdef.traducpol.repositorios.ServicioRepositorio;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/servicios")
public class ServicioController {
	private final ServicioRepositorio repositorio;
	private final EmpresaAssembler assemblerEmpresa;
	private final ServicioAssembler assembler;
	private final ServicioListaAssembler listaAssembler;
	private final Logger log;
	private final ServicioService servicioService;

	ServicioController(ServicioRepositorio repositorio, ServicioAssembler assembler,
			ServicioListaAssembler listaAssembler, EmpresaAssembler assemblerEmpresa, ServicioService servicioService) {
		this.repositorio = repositorio;
		this.assembler = assembler;
		this.listaAssembler = listaAssembler;
		this.assemblerEmpresa = assemblerEmpresa;
		this.log = TraducpolApplication.log;
		this.servicioService = servicioService;
	}

	@GetMapping("{id}")
	public ServicioModel one(@PathVariable Long id) {
		ServicioConId servicio = repositorio.findById(id).orElseThrow();
		log.info("Recuperado " + servicio);
		return assembler.toModel(servicio);
	}

	@GetMapping
	public CollectionModel<ServicioListaModel> all() {
		return listaAssembler.toCollection(repositorio.findAll());
	}

	@GetMapping("/busqueda")
	public CollectionModel<ServicioListaModel> busquedaAvanzada(@RequestParam String idioma,
			@RequestParam String provincia, @RequestParam boolean online, @RequestParam String hora) {

		List<ServicioConId> serviciosEncontrados = servicioService.buscarServicios(idioma, provincia, hora, online);

		CollectionModel<ServicioListaModel> servicioLista = listaAssembler.toCollection(serviciosEncontrados);

		return servicioLista;
	}

	@GetMapping("{id}/empresa")
	public EmpresaModel empresaDeServicio(@PathVariable Long id) {
		ServicioConId servicio = repositorio.findById(id).orElseThrow();
		EmpresaConId empresa = (EmpresaConId) servicio.getEmpresa();
		return assemblerEmpresa.toModel(empresa);
	}

	@PostMapping
	public ServicioModel add(@RequestBody ServicioPostModel model) {
		ServicioConId servicio = repositorio.save(assembler.toEntity(model));
		log.info("Añadido " + servicio);
		return assembler.toModel(servicio);
	}

	@PutMapping("{id}")
	public ServicioModel edit(@PathVariable Long id, @RequestBody ServicioPostModel model) {
		ServicioConId servicio = repositorio.findById(id).map(ped -> {
			ped.setIdioma(model.getIdioma());
			switch (ped.getTipo()) {
			case TRADUCCION: {
				ServicioTraduccionImpl traductor = (ServicioTraduccionImpl) ped;
				traductor.setPlazoEntrega(model.getPlazoEntrega());
				traductor.setTipoDocumento(model.getTipoDocumento());
				traductor.setTraductorJurado(model.isTraductorJurado());
				ped = traductor;
				break;
			}
			case INTERPRETACION: {
				ServicioInterpretacionImpl interprete = (ServicioInterpretacionImpl) ped;
				interprete.setProvincia(model.getProvincia());
				interprete.setHorarioInicioServicio(model.getHorarioInicioServicio());
				interprete.setHorarioFinServicio(model.getHorarioFinServicio());
				interprete.setServicioOnline(model.isServicioOnline());
				ped = interprete;
				break;
			}
			default:
				throw new IllegalArgumentException("Unexpected value: " + ped.getTipo());
			}

			return repositorio.save(ped);
		}).orElseThrow();
		log.info("Actualizado " + servicio);
		return assembler.toModel(servicio);
	}

	@DeleteMapping("{id}")
	public void delete(@PathVariable Long id) {
		log.info("Borrado Servicio " + id);
		repositorio.deleteById(id);
	}

}
