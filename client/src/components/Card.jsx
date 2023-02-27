import React from "react";
import styles from '../styles/card.module.css'

export default function Card({nombre, image, tipo}){
    
    return(
        <div className={styles.card}>
            <div className={styles.content}>
                <img src={image} alt="Imagen no encontrada" className={styles.imagen} />
                <h3 className={styles.nombre}>{nombre}</h3>
            
            </div>    
                
            <h5 className={styles.type}>{tipo && tipo.map(type => type + ' ')}</h5>
        </div>
    )
}