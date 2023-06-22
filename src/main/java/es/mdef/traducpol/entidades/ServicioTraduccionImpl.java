package es.mdef.traducpol.entidades;

import traducpolPruebaLibreria.ServicioTraduccible;

public class ServicioTraduccionImpl extends ServicioConId implements ServicioTraduccible {
    private String tipoDocumento;
    private String plazoEntrega;
    private boolean traductorJurado;

    @Override
    public String getTipoDocumento() {
        return tipoDocumento;
    }

    @Override
    public void setTipoDocumento(String tipoDocumento) {
        this.tipoDocumento = tipoDocumento;
    }

    @Override
    public String getPlazoEntrega() {
        return plazoEntrega;
    }

    @Override
    public void setPlazoEntrega(String plazoEntrega) {
        this.plazoEntrega = plazoEntrega;
    }

    @Override
    public boolean isTraductorJurado() {
        return traductorJurado;
    }

    @Override
    public void setTraductorJurado(boolean traductorJurado) {
        this.traductorJurado = traductorJurado;
    }

    @Override
    public Tipo getTipo() {
        return Tipo.TRADUCCION;
    }
}
