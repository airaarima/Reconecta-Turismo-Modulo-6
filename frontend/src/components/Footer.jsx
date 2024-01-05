import React from "react";
import logo from "../assets/Logo/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Logo Reconecta Turismo" />

      <div className="links">
        <a href="../home/index.html">HOME</a>
        <a href="../destino/destino.html">DESTINO</a>
        <a href="../promocoes/promocoes.html">PROMOÇÕES</a>
        <a href="../contato/contato.html">CONTATO</a>
        <a href="../cadastro/cadastro.html">CADASTRO</a>
      </div>

      <p>Copyright ©2023 Todos os direitos reservados</p>
    </footer>
  );
};

export default Footer;
