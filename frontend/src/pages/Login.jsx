import React from "react";
import styles from "../styles/Login.module.css";

import { Link } from "react-router-dom";

const Cadastro = () => {
  return (
    <div className={styles.form}>
      <h2>Que bom ver você de novo!</h2>
      <form>
        <fieldset>
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" />
          <label htmlFor="senha">Senha</label>
          <input type="password" name="senha" />
        </fieldset>

        <div className="divButton">
        <button className="btnLogin" type="submit">
          Fazer login
        </button>
</div>
      </form>

      <div className={styles.senha}>
        <a href="#">Esqueceu sua senha?</a>
      </div>

      <div className="divButton">
        
        <p>Ainda não tem uma conta?</p>
        <Link to="/cadastro" id="cadastro">
          Cadastre-se
        </Link>
      </div>
    </div>
  );
};

export default Cadastro;
