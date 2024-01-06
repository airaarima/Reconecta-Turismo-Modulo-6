package com.recodepro.reconectaturismo.model;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
public class Destinos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable=false)
    private String imagem;

    @Column(nullable=false)
    private double valor;

    @Column(nullable=false)
    private String estado;

    @Column(nullable=false)
    private String cidade;

    @OneToMany(mappedBy = "destino", fetch = FetchType.EAGER, cascade = CascadeType.REMOVE, orphanRemoval = true)
    private Set<Passagens> passagem = new HashSet<>();

    public Destinos() {}

    public Destinos(String imagem, double valor, String estado, String cidade) {
        this.imagem = imagem;
        this.valor = valor;
        this.estado = estado;
        this.cidade = cidade;
    }

    public Destinos(Long id, String imagem, double valor, String estado, String cidade) {
        this.id = id;
        this.imagem = imagem;
        this.valor = valor;
        this.estado = estado;
        this.cidade = cidade;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getImagem() {
        return imagem;
    }
    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public double getValor() {
        return valor;
    }
    public void setValor(double valor) {
        this.valor = valor;
    }

    public String getEstado() {
        return estado;
    }
    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getCidade() {
        return cidade;
    }
    public void setCidade(String cidade) {
        this.cidade = cidade;
    }
}
