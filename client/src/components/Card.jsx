import React from "react";

export default function Card({nombre, image, tipo}){
    
    return(
        <div>
            <h3>{nombre}</h3>
            <h5>{tipo}</h5>
            <img src={image} alt="Imagen no encontrada" width="200px" height="250px" />
        </div>
    )
}