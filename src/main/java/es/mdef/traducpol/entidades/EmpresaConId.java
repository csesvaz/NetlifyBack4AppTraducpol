package es.mdef.traducpol.entidades;

import traducpolPruebaLibreria.Empresa;
import traducpolPruebaLibreria.Empresable;

public class EmpresaConId extends Empresa implements Empresable {

    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}
