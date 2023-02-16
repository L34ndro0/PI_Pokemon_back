const getApiPokemonsName = require('../handlers/getApiPokemonsName')
const {Pokemon,Type} = require('../db')

const getPokemonName = async (name) => {
    try {
        
        let allPokemon = []
        let apiPoke = await getApiPokemonsName(name.toLowerCase())
        if (apiPoke.message) apiPoke=[]
        
        let pokeDb  = await Pokemon.findAll({where: {nombre: name.toLowerCase()}, include: {model: Type, attributes: ["nombre"], through: { attributes: [],},},})
        
          allPokemon = pokeDb.concat(apiPoke)
        if (allPokemon.length) {
            return allPokemon

        } else {
            throw Error ('pokemon inexistente') 
        }

    } catch (error) {
        return error.message
    }

}

module.exports = getPokemonName;