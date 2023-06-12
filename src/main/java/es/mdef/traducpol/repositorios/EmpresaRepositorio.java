package es.mdef.traducpol.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import es.mdef.traducpol.entidades.EmpresaConId;

@Repository
public interface EmpresaRepositorio extends JpaRepository<EmpresaConId, Long> {
//List<EmpresaConId>findById(Long id);
}
