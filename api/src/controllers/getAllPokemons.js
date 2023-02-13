const {Pokemon} = require('../db')

const getAllPokemons = async () => {
    try {
        const allPokemons = await Pokemon.findAll();        
        return allPokemons;

    } catch (error) {
        return {error: error.message}
    }
}

module.exports = getAllPokemons;