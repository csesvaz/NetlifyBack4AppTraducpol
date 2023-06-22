package es.mdef.traducpol.entidades;

import es.mdef.traducpol.repositorios.ServicioRepositorio;

import org.springframework.stereotype.Service;

import java.time.LocalTime;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ServicioService {

    private final ServicioRepositorio servicioRepositorio;

    public ServicioService(ServicioRepositorio servicioRepositorio) {
        this.servicioRepositorio = servicioRepositorio;
    }

    private static boolean horaEsEntreHoras(String horaInicio, String horaFin, String hora) {
        LocalTime inicio = LocalTime.parse(horaInicio);
        LocalTime fin = LocalTime.parse(horaFin);
        LocalTime seleccionada = LocalTime.parse(hora);
        if (fin.isAfter(inicio)) {
            return seleccionada.isAfter(inicio) && seleccionada.isBefore(fin);
        }
        return seleccionada.isAfter(fin) || seleccionada.isBefore(inicio);

    }

    public List<ServicioConId> buscarServicios(String idioma, String provincia, String hora, boolean online) {
        List<ServicioConId> servicios = this.servicioRepositorio.findAll();
        return servicios.stream()
                .filter(serv -> serv instanceof ServicioInterpretacionImpl && serv.getIdioma().equals(idioma)
                        && ((ServicioInterpretacionImpl) serv).getProvincia().equals(provincia)
                        && horaEsEntreHoras(((ServicioInterpretacionImpl) serv).getHorarioInicioServicio(),
                        ((ServicioInterpretacionImpl) serv).getHorarioFinServicio(), hora)
                        && (online ? ((ServicioInterpretacionImpl) serv).isServicioOnline() : true))
                .collect(Collectors.toList());
    }
}
