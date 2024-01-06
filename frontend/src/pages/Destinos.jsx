import React, { useEffect, useState } from "react";
import styles from "../styles/Destinos.module.css"
import img from "../assets/maladeviagens.jpg"
import CardComponent from "../components/CardComponent";
import Footer from "../components/Footer";

const Destinos = () => {
  const [destinos,setDestinos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch('http://localhost:8080/destinos/listar');
        const result = await response.json();
        setDestinos(result);
      }catch(error){
        console.error(error)
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <main>
        <section className={styles.intro}>
            <div>
                <img src={img} alt="" />
            </div>
            <div className={styles.intro_novasAventuras}>
                <h3>Explore Novas Aventuras</h3>
                <p>Seja um viajante sem fronteiras, embarque conosco!</p>
            </div>
        </section>

        <h3>Viagens Nacionais</h3>
        <section className={styles.cards}>
            {destinos.map(destino => (
              <CardComponent key={destino.id} data={destino}/>
            ))}
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default Destinos;
