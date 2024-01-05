package com.recodepro.reconectaturismo.services;

import com.recodepro.reconectaturismo.model.Passagens;

import java.util.List;

public interface PassagensService {
    List<Object[]> getAllPassagens();
    Passagens deleteById(Long id);
}
