import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getPokemons } from "../actions";
import {Link} from 'react-router-dom';
import Card from "./Card";

export default function Home () {
    const dispatch = useDispatch()
    const allPokemons = useSelector((state) => state.pokemons)
    

    useEffect ( () => {
        dispatch(getPokemons());
    },[dispatch])

    function handleClick(event){
        event.preventDefault();
        dispatch(getPokemons());
    }

    return (
        <div>
            <Link to= '/pokemons'>Crear pokemon</Link>
            <input type="search" name="" id="" />
            <button onClick={event => {handleClick(event)}}>
                Volver a cargar todos los personajes
            </button>
            <div>
                <select>
                    <option value="ascendente">Ascendente</option>
                    <option value="descendente">Descendente</option>
                </select>
                <select >
                    <option value="Todos"></option>
                    <option value="Creados"></option>
                    <option value="Api"></option>
                </select>
            {
            allPokemons?.map( (poke) => {                
                return(                    
                    <div>
                        <Card nombre={poke.nombre} image={poke.imagen} tipo={poke.type} key={poke.id}/>
                    </div>

                )
            })
            }    
            </div>
        </div>
    )
}
