const {Pokemon,Type} = require('../db')
const getApiPokemons = require('../handlers/getApiPokemons')
 

const getAllPokemons = async () => {
    try {
        const PokemonsDB = await Pokemon.findAll({include: [{model: Type, attributes: ["nombre"], through: { attributes: [],},}]}); 
        const PokemonFinal = await Pokemon.findAll()
        
        let PokemonsFilter=((PokemonsDB.map(elem => elem.dataValues)).map(elem => elem.Types))
        for (let index = 0; index < PokemonsFilter.length; index++) {
            PokemonFinal[index].dataValues.type=(PokemonsFilter[index].map(elem => elem.dataValues.nombre))            
        }       
                       
        const PokemonAPI = await getApiPokemons();       
        
        return PokemonFinal.concat(PokemonAPI);

    } catch (error) {
        return {error: error.message}
    }
}

module.exports = getAllPokemons;