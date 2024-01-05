import React from 'react'
import styles from '../styles/CardComponent.module.css'

const CardComponent = ({data}) => {
  return (
    <div className={styles.card} key={data.id}>
      <img src="" alt="" />
        <div className={styles.card_body}>
          <h5 className={styles.card_title}>Cidade: {data.cidade}</h5>
          <p className={styles.card_text}>País: {data.pais}</p>
          <p className={styles.card_ttext}>Valor: R$ {data.valor}</p>
        </div>
    </div>
  )
}

export default CardComponent