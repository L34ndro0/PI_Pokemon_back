const {Pokemon} = require('../db')

const getPokemonId = async (id) => {
    try {
        const pokemon = await Pokemon.findByPk(id);        
        if(!pokemon){
            throw Error
        }
        return pokemon;

    } catch (error) {
        return {error: 'pokemon inexistente'}
    }
}

module.exports = getPokemonId;