import React from "react";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className={styles.divHome}>
        
      <NavBar />

      <main>
        <section className={styles.apresentacao}>
          <h1>REConecta Turismo</h1>
          <p>
            Você está há um passo de conhecer diferentes culturas, maravilhar-se
            com novas paisagens e criar boas memórias. Viaje com confiança,
            viaje conosco!
          </p>

          <div className={styles.consulta}>
            <input
              type="text"
              className="form-control"
              placeholder="Destino..."
            />
            <div className="input-group mb-3">
              <input type="date" className="form-control" />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Pesquisar
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
