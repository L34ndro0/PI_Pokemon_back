const getAllPokemons = require('../controllers/getAllPokemons')
const getPokemonId = require('../controllers/getPokemonId')
const getPokemonName = require('../controllers/getPokemonName')
const postPokemon = require('../controllers/postPokemon')

const pokemonsRouter = require('express').Router()

pokemonsRouter.get('/pokemons', async (req,res) => {
    try {
        const name = req.query.name;
        
        if(name) {
           return res.status(200).send(await getPokemonName(name.replaceAll('"','')))
        }
        res.status(200).send(await getAllPokemons())

    } catch (error) {
        res.status(404).send(error);
    }    
})

pokemonsRouter.get('/pokemons/:idPokemon',async (req,res) => {
    try {
        const {idPokemon} = req.params;     
        
        res.status(200).send(await getPokemonId(idPokemon))
        
    } catch (error) {
        res.status(404).send({error: error.message})
    }
})

pokemonsRouter.post('/pokemons', async (req,res) => {
    try {
        const data = {nombre: req.body.nombre,
            imagen: req.body.imagen,
            vida: req.body.vida,
            ataque: req.body.ataque,
            defensa: req.body.defensa,
            velocidad: req.body.velocidad,
            altura: req.body.altura,
            peso: req.body.peso,
            type: req.body.type
            }
        
        postPokemon(data)
        res.status(201).send('Pokemon creado')

    } catch (error) {
        res.status(404).send(error)
    }
    
})



module.exports = pokemonsRouter