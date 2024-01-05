import React from "react";
import logo2 from "../assets/Logo/logo2.png";

import { BrowserRouter, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <BrowserRouter>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="../home/index.html">
              <img src={logo2} alt="Logo Reconecta Turismo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    to="/home"
                    className="nav-link active"
                    aria-current="page"
                    href="../home/index.html"
                  >
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="../destino/destino.html">
                    DESTINO
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="../promocoes/promocoes.html">
                    PROMOÇÕES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="../contato/contato.html">
                    CONTATO
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="../cadastro/cadastro.html">
                    CADASTRO
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </BrowserRouter>
  );
};

export default NavBar;
