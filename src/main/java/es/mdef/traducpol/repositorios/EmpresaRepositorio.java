package es.mdef.traducpol.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import es.mdef.traducpol.entidades.EmpresaConId;

@RepositoryRestResource(path = "empresas", collectionResourceRel = "empresas")
public interface EmpresaRepositorio extends JpaRepository<EmpresaConId, Long> {

}
