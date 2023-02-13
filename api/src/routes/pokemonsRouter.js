const getAllPokemons = require('../controllers/getAllPokemons')
const getPokemonId = require('../controllers/getPokemonId')

const pokemonsRouter = require('express').Router()

pokemonsRouter.get('/pokemons', async (req,res) => {
    try {
        const respuesta = await getAllPokemons()                    
        res.status(200).send(respuesta)        
        
    } catch (error) {
        return {error: error.message}
    }
    
})

pokemonsRouter.get('/pokemons/:idPokemon',async (req,res) => {
    try {
        const {idPokemon} = req.params;
        const respuesta = await getPokemonId(idPokemon)
        res.status(200).send(respuesta)
        
    } catch (error) {
        res.status(404).send({error: error.message})
    }
})

module.exports = pokemonsRouter