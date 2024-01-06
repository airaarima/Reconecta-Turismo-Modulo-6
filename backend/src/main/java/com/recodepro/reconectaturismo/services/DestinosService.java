package com.recodepro.reconectaturismo.services;

import com.recodepro.reconectaturismo.model.Destinos;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DestinosService {
    List<Destinos> getAllDestinos();
    Destinos getDestinoById(Long id);
    Destinos saveDestino(Destinos destino);
    Destinos updateDestino(Long id, Destinos updateDestino);
    Destinos deleteById(Long id);
}
