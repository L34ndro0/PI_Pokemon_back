import React, {useEffect}  from "react";
import {Link} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getPokemons, getTypes } from "../actions";
import styles from '../styles/landing.module.css'

export default function LandingPage(){
    const dispatch = useDispatch()

    useEffect ( () => {
        dispatch(getPokemons());
        dispatch(getTypes());        
        
    },[dispatch])
    
    return(
        <div className={styles.container}>
            <h1>Bienvenidos a Pokepedia</h1>
            <Link to ='/home'>
                <button>Ingresar</button>
            </Link>
        </div>
    )
}