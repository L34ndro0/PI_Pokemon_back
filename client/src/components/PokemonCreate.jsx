import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postPokemon } from '../actions/index'
import styles from '../styles/pokemonCreate.module.css'

function validate(input){
    let errors = {};
    if (!input.nombre) errors.nombre = 'se requiere un nombre'       
    if (!input.imagen) errors.imagen = 'se requiere una imagen'
    if (input.vida <= 0 || input.ataque <= 0 || input.defensa <= 0 || input.velocidad <= 0 || input.altura <= 0 || input.peso <= 0) errors.valores = 'ingrese valores mayores a 0'    
    if (input.vida > 999 || input.ataque > 999 || input.defensa > 999 || input.velocidad > 999 || input.altura > 999 || input.peso > 999) errors.valores = 'ingrese valores menores a 1000'    
    if (input.type.length === 0 ) errors.type = 'se requiere un tipo'
    if (input.type.length > 2 ) errors.type = 'se requiere maximo 2 tipo'
    return errors;
}

export default function PokemonCreate () {
    
    const types = useSelector((state) => state.types)
    const dispatch = useDispatch()
    const [errors, setErrors] = useState({})

    const [input, setInput] = useState({
        nombre: "",
        imagen: "",
        vida: 0,
        ataque: 0,
        defensa: 0,
        velocidad: 0,
        altura: 0,
        peso: 0,
        createInDb:"",
        type:[]
    })

    function handleChange(event){
        setInput({
            ...input,
            [event.target.name]: event.target.value.toLowerCase()
        })   
        setErrors(validate({
            ...input,
            [event.target.name]: event.target.value

        }))
    }

    function handleSelect(event){
        setInput({
            ...input,
            type: [...input.type,event.target.value]
        })
        setErrors(validate({
            ...input,
            type: [...input.type,event.target.value]
        }))        
    }

    function handleDelete(event){
        setErrors(validate({
            ...input,
            type: input.type.filter(type => type !== event)            
        }))   
        setInput({
            ...input,
            type: input.type.filter(type => type !== event)
        })
        
    }

    function handleSubmit(event){
        event.preventDefault();       
        dispatch(postPokemon(input))
        alert('personaje creado')
        setInput({
            nombre: "",
            imagen: "",
            vida: 0,
            ataque: 0,
            defensa: 0,
            velocidad: 0,
            altura: 0,
            peso: 0,
            createInDb:"",
            type:[]
        })
    }

    return(
        <div className={styles.container}>
            <h1>Crea tu pokemon!</h1>
            <form className={styles.formulario} onSubmit={(event) => handleSubmit(event)}>
                <div>
                    <div className={styles.contenedor_input}>
                        <label>Nombre:</label>
                        <input className={styles.input} onChange={(event) => handleChange(event)} type='text' value={input.nombre} name='nombre'></input>
                    </div>
                    <div className={styles.contenedor_input}>
                        <label>Imagen:</label>
                        <input className={styles.input} onChange={(event) => handleChange(event)} type='text' value={input.imagen} name='imagen'></input>
                    </div>
                    <div className={styles.contenedor_input}>
                        <label>Vida:</label>
                        <input className={styles.input} onChange={(event) => handleChange(event)} type='number' value={input.vida} name='vida'></input>
                    </div>
                    <div className={styles.contenedor_input}>
                        <label>Ataque:</label>
                        <input className={styles.input} onChange={(event) => handleChange(event)} type='number' value={input.ataque} name='ataque'></input>
                    </div>
                    <div className={styles.contenedor_input}>
                        <label>Defensa:</label>
                        <input className={styles.input} onChange={(event) => handleChange(event)} type='number' value={input.defensa} name='defensa'></input>
                    </div>
                    <div className={styles.contenedor_input}>
                        <label>Velocidad:</label>
                        <input className={styles.input} onChange={(event) => handleChange(event)} type='number' value={input.velocidad} name='velocidad'></input>
                    </div>
                    <div className={styles.contenedor_input}>
                        <label>Altura:</label>
                        <input className={styles.input} onChange={(event) => handleChange(event)} type='number' value={input.altura} name='altura'></input>
                    </div>
                    <div className={styles.contenedor_input}>
                        <label>Peso:</label>
                        <input className={styles.input} onChange={(event) => handleChange(event)} type='number' value={input.peso} name='peso'></input>
                    </div>
                </div>
                <div className={styles.contenedor_types}>               
                    <select className={styles.select} onChange={(event) => handleSelect(event)}>
                        <option >Selecciona los tipos</option>
                        {types?.map(type => {
                            return(
                                <option value={type.nombre}>{type.nombre}</option>
                                )
                            })}
                    </select>
                    <p className={styles.type}>{input.type.map(type => {
                        return (
                            <div className={styles.contendor_type}>
                                <button className={styles.contendor_type_btn} type='button' onClick={()=>handleDelete(type)}>Quitar</button>
                                <span>{type}</span> 
                            </div>
                            )
                        })}</p>                 
                <button className={styles.btn_crear} type='submit'  disabled = { ( Object.keys(errors).length !== 0 || input.nombre === '' ) } >Crear pokemon</button>
                        {errors.nombre && (<span className={styles.errors}>{errors.nombre}</span>)}
                        {errors.imagen && (<span className={styles.errors} >{errors.imagen}</span>)}
                        {errors.valores && (<span className={styles.errors} >{errors.valores}</span>)}
                        {errors.type && (<span className={styles.errors} >{errors.type}</span>)}
                </div>
            </form>
            <Link to='/home' className={styles.container_btn}><button className={styles.btn_volver} >Volver</button></Link>
        </div>
    )
}