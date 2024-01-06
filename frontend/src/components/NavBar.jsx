import React from "react";
import logo1 from "../assets/Logo/logo.png"
import logo2 from "../assets/Logo/logo2.png";
import "../styles/Global.css"

import {Link, useLocation} from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const homePage = location.pathname === "/";

  return (
      <header>
        <nav className={`navbar navbar-expand-lg ${homePage? "fixed-top":""}`}>
          <div className="container-fluid">
            <Link to="/" className="navbar-brand" >
              <img src={`${homePage?logo1:logo2}`} alt="Logo Reconecta Turismo" />
            </Link>
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
                  <Link
                    to="/"
                    className={`nav-link active ${homePage?"navegacao":""}`}
                    aria-current="page"
                  >
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/destinos" className={`nav-link ${homePage?"navegacao":""}`} >
                    DESTINOS
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link to="/promocoes" className="nav-link">
                    PROMOÇÕES
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contato" className="nav-link" >
                    CONTATO
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/cadastro" className="nav-link" >
                    CADASTRO
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>
  );
};

export default NavBar;
