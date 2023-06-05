package es.mdef.traducpol.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import es.mdef.traducpol.entidades.EmpresaConId;
import es.mdef.traducpol.entidades.ServicioConId;



@Repository
public interface ServicioRepositorio extends JpaRepository<ServicioConId, Long> {

	List<ServicioConId> findByServicioId(Long id);

	List<ServicioConId> findByEmpresa(EmpresaConId empresa);
	
	

}
