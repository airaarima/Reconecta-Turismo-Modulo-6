package com.recodepro.reconectaturismo.seeder;

import com.recodepro.reconectaturismo.model.Destinos;
import com.recodepro.reconectaturismo.repository.DestinosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DatabaseSeeder implements CommandLineRunner {

    @Autowired
    private DestinosRepository destinosRepository;

    @Override
    public void run(String... args) throws Exception {
        if (destinosRepository.count() == 0) {
            seeder();
        }
    }

    public void seeder(){
        Destinos d1 = new Destinos("https://images.unsplash.com/photo-1469797384183-f961931553e9?q=80&w=1470" +
                "&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 893.0,
                "Mato Grosso do Sul", "Bonito");
        Destinos d2 = new Destinos("https://images.unsplash.com/photo-1679771651554-df7430ada73f?q=80&w=1470" +
                "&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                1023.73,
                "Paraná", "Foz do Iguaçu");
        Destinos d3 = new Destinos("https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Conjunto_arquitet" +
                "%C3%B4nico_e_urban%C3%ADstico_de_Ouro_Preto" +
                ".JPG/640px-Conjunto_arquitet%C3%B4nico_e_urban%C3%ADstico_de_Ouro_Preto.JPG", 902.56, "Minas Gerais",
                "Ouro Preto");
        Destinos d4 = new Destinos("https://www.vaidepromo.com.br/blog/wp-content/uploads/2023/06/Canela-RS" +
                ".jpg", 402.68, "Rio Grande do Sul", "Canela");
        Destinos d5 = new Destinos("https://www.abraceomundo.com/wp-content/uploads/2021/02/praias-porto-de" +
                "-galinhas.jpg", 1417.43, "Pernambuco", "Porto de Galinhas");
        Destinos d6 = new Destinos("https://www.melhoresdestinos.com" +
                ".br/wp-content/uploads/2019/02/passagens-aereas-joao-pessoa-capa2019-03-820x430.jpg", 934.84, "Para" +
                "íba", "João Pessoa");
        Destinos d7 = new Destinos("https://a.cdn-hotels.com/gdcs/production67/d1025/9c42e257-fce5-4600-97d1" +
                "-c3f3c6afd86b.jpg", 809.42, "Bahia", "Salvador");
        Destinos d8 = new Destinos("https://lh5.googleusercontent" +
                ".com/p/AF1QipOQ4M_EjqaC-nX50SWjUCc-XcSQOaCC4e4ms2Lx=w540-h312-n-k-no", 1227.53, "Ceará", "Fortaleza");

        destinosRepository.saveAll(Arrays.asList(d1, d2, d3, d4, d5, d6, d7, d8));
    }
}