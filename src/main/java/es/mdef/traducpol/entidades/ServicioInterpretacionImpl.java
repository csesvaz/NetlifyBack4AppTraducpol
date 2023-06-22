package es.mdef.traducpol.entidades;

import traducpolPruebaLibreria.ServicioInterpretable;


public class ServicioInterpretacionImpl extends ServicioConId implements ServicioInterpretable {
    private String horarioInicioServicio;
    private String horarioFinServicio;
    private String provincia;
    private boolean servicioOnline;

    @Override
    public String getHorarioInicioServicio() {
        return horarioInicioServicio;
    }

    @Override
    public void setHorarioInicioServicio(String horarioInicioServicio) {
        this.horarioInicioServicio = horarioInicioServicio;
    }

    @Override
    public String getHorarioFinServicio() {
        return horarioFinServicio;
    }

    @Override
    public void setHorarioFinServicio(String horarioFinServicio) {
        this.horarioFinServicio = horarioFinServicio;
    }

    @Override
    public String getProvincia() {
        return provincia;
    }

    @Override
    public void setProvincia(String provincia) {
        this.provincia = provincia;
    }

    @Override
    public boolean isServicioOnline() {
        return servicioOnline;
    }

    @Override
    public void setServicioOnline(boolean servicioOnline) {
        this.servicioOnline = servicioOnline;
    }

    @Override
    public Tipo getTipo() {
        return Tipo.INTERPRETACION;
    }
}
