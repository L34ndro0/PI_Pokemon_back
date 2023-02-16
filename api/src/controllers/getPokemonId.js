const getApiPokemonsId = require('../handlers/getApiPokemonsid')
const {Pokemon, Type} = require('../db')

const getPokemonId = async (id) => {
    
    try {        
        
        let pokemon = await getApiPokemonsId(id)
        if (pokemon.message) {
            pokemon = await Pokemon.findAll({where: {id: id}, include: [{model: Type, attributes: ["nombre"], through: { attributes: [],},}]})
            if(!pokemon.length) throw Error
            return pokemon
        }
        
        return pokemon;

    } catch (error) {
        return {error: 'pokemon inexistente'}
    }
}

module.exports = getPokemonId;