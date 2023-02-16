const {Pokemon,Type} = require('../db')
const getApiPokemons = require('../handlers/getApiPokemons')
 

const getAllPokemons = async () => {
    try {
        const PokemonsDB = await Pokemon.findAll({include: [{model: Type, attributes: ["nombre"], through: { attributes: [],},}]}); 
        const PokemonAPI = await getApiPokemons();

        return PokemonsDB.concat(PokemonAPI);

    } catch (error) {
        return {error: error.message}
    }
}

module.exports = getAllPokemons;