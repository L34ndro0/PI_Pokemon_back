const getApiPokemonsId = require('../handlers/getApiPokemonsid')
const {Pokemon, Type} = require('../db')

const getPokemonId = async (id) => {
    
    try {        
        
        let pokemon = await getApiPokemonsId(id)
        if (pokemon.message) {
            pokemon = await Pokemon.findAll({where: {id: id}, include: [{model: Type, attributes: ["nombre"], through: { attributes: [],},}]})
            let PokemonsFilter=((pokemon.map(elem => elem.dataValues)).map(elem => elem.Types))
            for (let index = 0; index < PokemonsFilter.length; index++) {
                pokemon[index].dataValues.type=(PokemonsFilter[index].map(elem => elem.dataValues.nombre))            
            }       


            if(!pokemon.length) throw Error
            return pokemon[0]
        }
        
        return pokemon;

    } catch (error) {
        return {error: 'pokemon inexistente'}
    }
}

module.exports = getPokemonId;