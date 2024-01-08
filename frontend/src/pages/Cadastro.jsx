import React from 'react'
import styles from '../styles/Cadastro.module.css'

import {Link} from "react-router-dom";

const Cadastro = () => {
  return (
    <div className={styles.divCadastro}>
      <h2>Cadastre-se e aproveite o melhor da REConecta Turismo</h2>
        <form className={styles.formCadastro}>
        <fieldset className={styles.fieldsetCadastro}><h4>Dados Pessoais</h4>
              <div className={styles.divInputs}>
                <label className={styles.nomeLabel}>Nome Completo<input type="text" className="form-control" name="nome_completo"/></label>
                <label>Data de Nascimento <input type="date" className="form-control" name="data_nascimento"/></label>
              </div>

              <div className={styles.divInputs}>
                <label className={styles.CPFlabel}>CPF <input type="text" className="form-control" name="CPF"/></label>
                <label className={styles.RGlabel}>RG <input type="text" className="form-control" name="RG"/></label>
                
              </div>
            </fieldset>

            <fieldset className={styles.fieldsetCadastro}><h4>Endereço</h4>
              <div className={styles.divInputs}>
                <label className={styles.ruaLabel}>Rua <input type="text" className="form-control" name="rua"/></label>
                <label className={styles.numeroLabel}>Número <input type="text" className="form-control" name="numero"/></label>
                <label>Bairro <input type="text" className="form-control" name="bairro"/></label>
              </div>
              
              <div className={styles.divInputs}>
                <label className={styles.cidadeLabel}>Cidade <input type="text" className="form-control" name="cidade"/></label>
                <label className={styles.UFlabel}>UF <input type="text" className="form-control" name="UF"/></label>
              </div>
            </fieldset>

            <fieldset className={styles.fieldsetCadastro}><h4>Login</h4>
              <div className={styles.divInputs}>
                <label className={styles.emailLabel}>E-mail <input type="email" className="form-control" name="email"/></label>
                <label>Crie uma senha <input type="text" className="form-control" name="senha"/></label>
              </div>
            </fieldset>

            <div className="divButton"><button className="btnLogin" type="submit">Cadastre-se</button></div>
        </form>

        <div className="divButton">
            <p>Já possui uma conta?</p>
            <Link to="/login" id="cadastro">Fazer login</Link>
        </div>
    </div>
  )
}

export default Cadastro