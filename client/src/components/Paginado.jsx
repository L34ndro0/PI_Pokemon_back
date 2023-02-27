import React from "react";
import styles from '../styles/paginado.module.css'



export default function paginated ({pokemonsPerPage, allPokemons, paginado}) {
   
    const pageNumbers = []
    
    for (let i = 1; i <= Math.ceil(allPokemons/pokemonsPerPage); i++ ){
        pageNumbers.push(i)
    }
    
    return (        
        <nav >
            <ul >
                { 
                pageNumbers?.map(page => (                                                
                        <li className={styles.paginas} onClick={() => paginado(page)}>{page}</li>                        
                    ))
                }
            </ul>
        </nav>        
    )

}