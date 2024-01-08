import React from "react";
import styles from "../styles/Contato.module.css"

const Contato = () => {
  return (
    <div>
      <main className={styles.grid_container}>
        <section className={styles.mensagem}>
          <h3>QUER DEIXAR UMA MENSAGEM?</h3>
          <p>Dar sugestões, fazer uma reclamação ou tem alguma dúvida?</p>
        </section>

        <section className={styles.formulario}>
          <h4>ENVIAR MENSAGEM</h4>
          <form className="container">
            <label htmlFor="nome">Nome completo</label>
            <input type="text" className="form-control" />
            <label htmlFor="email">E-mail</label>
            <input type="text" className="form-control" />
            <label htmlFor="assunto">Assunto</label>
            <select className="form-select">
              <option defaultValue>Selecione...</option>
              <option value="1">Sugestão</option>
              <option value="2">Feedback</option>
              <option value="3">Dúvida</option>
              <option value="4">Reclamação</option>
              <option value="5">Problemas com meu cadastro</option>
              <option value="6">
                Problemas com o cadastro da minha viagem
              </option>
            </select>
            <label htmlFor="mensagem">Mensagem</label>
            <textarea className="form-control" rows="3"></textarea>
            <label htmlFor="docs">Anexar documento</label>
            <input type="file" className="form-control" />
            <button className={`btn btn-light ${styles.btn}`}type="submit">
              Enviar
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Contato;
