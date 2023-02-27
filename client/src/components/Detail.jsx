import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail , clearDetailState } from "../actions";
import styles from '../styles/detail.module.css'


export default function Details(props){
    const dispatch = useDispatch()
    const pokemon = useSelector((state) => state.details)
    
    
    useEffect(()=> {
        dispatch(getDetail(props.match.params.idPokemon))
        return dispatch(clearDetailState())
    },[dispatch,props.match.params.idPokemon])

    if (!pokemon.id) {
        return (
            <div className={styles.loading}>
                <img className={styles.loading_image} src="https://usagif.com/wp-content/uploads/loading-6.gif" alt="" />
                <h1 className={styles.loading_texto}>loading...</h1>
            </div>
        )
    }

    return (
        <div className={styles.pokemon_card_container}>
            {
                pokemon?  
                
                    <div className={styles.pokemon_card}>
                        <div className={styles.background}>
                            <img className={styles.image} src={pokemon.imagen} alt="" />

                        </div>

                        <div className={styles.content}>
                            <h1 className={styles.pokemon_name}>{pokemon.nombre}!!</h1>
                            <span className={styles.pokemon_type}>{pokemon.type && pokemon.type.map(type => type + ' ')}</span>
                        </div>

                        <div className={styles.pokemon_stats}>
                            <p>Id: {pokemon.id}</p>
                            <p> Vida: {pokemon.vida}</p>
                            <p>Ataque: {pokemon.ataque}</p>
                            <p>Defensa: {pokemon.defensa}</p>
                            <p>Velocidad: {pokemon.velocidad}</p>
                            <p>Altura: {pokemon.altura}</p>
                            <p>Peso: {pokemon.peso}</p>
                        </div>
                        <h1 className={styles.pokemon_logo}>Pokemons Details</h1>
                    </div> : <p>Cargando...</p>
            } 
            <Link to='/home'><button className={styles.btn_volver}>Volver</button> </Link>
        </div>
        
    )

} 