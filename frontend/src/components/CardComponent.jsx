import React from 'react'
import styles from '../styles/CardComponent.module.css'

const CardComponent = ({data}) => {
  return (
    <div className={styles.card} key={data.id}>
      <img className={styles.card_img} src={data.imagem} alt="" />
        <div className={styles.card_body}>
          <h5 className={styles.card_title}>{data.cidade}</h5>
          <p className={styles.card_text}>{data.estado}</p>
          <p className={styles.card_text}>A partir de R$ {data.valor}</p>
        </div>
    </div>
  )
}

export default CardComponent