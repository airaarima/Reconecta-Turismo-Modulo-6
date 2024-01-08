import React from 'react'
import styles from '../styles/CardComponent.module.css'

import {Link} from "react-router-dom";

const CardComponent = ({data}) => {
  return (
    <div className={styles.card} key={data.id}>
      <img className={styles.card_img} src={data.imagem} alt="" />
        <div className={styles.card_body}>
          <h5 className={styles.card_title}>{data.cidade} - {data.estado}</h5>
          <p className={styles.card_text}>A partir de </p>
          <p className={styles.card_text_valor}>R$ {data.valor}</p>
          <Link to="/login" className='btn btn-outline-light'>Comprar</Link>
        </div>
    </div>
  )
}

export default CardComponent