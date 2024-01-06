package com.recodepro.reconectaturismo.serviceimpl;

import com.recodepro.reconectaturismo.exception.DestinoNotFoundException;
import com.recodepro.reconectaturismo.model.Destinos;
import com.recodepro.reconectaturismo.repository.DestinosRepository;
import com.recodepro.reconectaturismo.services.DestinosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DestinosServiceImpl implements DestinosService {

    @Autowired
    private DestinosRepository dr;

    @Override
    public List<Destinos> getAllDestinos() {
        return dr.findAll();
    }

    @Override
    public Destinos getDestinoById(Long id) {
        return dr.findById(id).orElseThrow(() -> new DestinoNotFoundException());
    }

    @Override
    public Destinos saveDestino(Destinos destino) {
        return dr.save(destino);
    }

    @Override
    public Destinos updateDestino(Long id, Destinos updateDestino) {
        Destinos destinoExists=dr.findById(id).orElseThrow(() -> new DestinoNotFoundException());
        destinoExists.setImagem(updateDestino.getImagem());
        destinoExists.setCidade(updateDestino.getCidade());
        destinoExists.setEstado(updateDestino.getEstado());
        destinoExists.setValor(updateDestino.getValor());

        return dr.save(destinoExists);
    }

    @Override
    public Destinos deleteById(Long id) {
        Destinos destino = dr.findById(id).orElseThrow(() -> new DestinoNotFoundException());
        dr.deleteById(destino.getId());
        return destino;
    }
}
