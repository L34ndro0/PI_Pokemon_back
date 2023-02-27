import React from "react";
import styles from '../styles/paginado.module.css'



export default function paginated ({pokemonsPerPage, allPokemons, paginado, currentPage}) {    
    const pageNumbers = []
    
    for (let i = 1; i <= Math.ceil(allPokemons/pokemonsPerPage); i++ ){
        pageNumbers.push(i)
    }

    function handleArrows (event) {        
        event.target.attributes.value.value === 'prev' && currentPage !== 1 && paginado(currentPage - 1)
        event.target.attributes.value.value === 'next' && currentPage !== Math.ceil(allPokemons/pokemonsPerPage) && paginado(currentPage + 1)
    }
    
    return (        
        <nav >
            <ul >
                <li className={styles.paginas} value='prev' onClick={(event) => handleArrows(event)}> Pagina previa! </li>
                { 
                pageNumbers?.map((page,index) => (                                                
                        <li key={index} className={page === currentPage ? styles.paginaActual : styles.paginas} onClick={() => paginado(page)}>{page}</li>                        
                    ))
                }
                <li className={styles.paginas} value='next' onClick={(event) => handleArrows(event)}> Siguiente pagina! </li>
            </ul>
        </nav>        
    )

}