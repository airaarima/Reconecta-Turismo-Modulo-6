import React from "react";
import logo from "../assets/Logo/logo.png";

import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const homePage = location.pathname === "/";

  return (
    <footer>
      {homePage ? null : (
        <div className="divFooter">
          <img src={logo} alt="Logo Reconecta Turismo" />
          <div className="links">
            <Link to="/">HOME</Link>
            <Link to="/destinos">DESTINO</Link>
            <Link to="/login">LOGIN</Link>
            <Link to="/contato">CONTATO</Link>
            
          </div>
          <p>Copyright ©2023 Todos os direitos reservados</p>
        </div>
      )}
    </footer>
  );
};

export default Footer;
