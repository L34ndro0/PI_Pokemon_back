const axios = require('axios')

const getApiPokemonsId = async (id) => {
    try {
        
        let apiData = await axios(`https://pokeapi.co/api/v2/pokemon/${Number(id)}`);                
        let pokemon={ id: apiData.data.id,
            nombre: apiData.data.name,
            imagen: apiData.data.sprites.other.home.front_default,
            vida: apiData.data.stats[0].base_stat,
            ataque: apiData.data.stats[1].base_stat,
            defensa: apiData.data.stats[2].base_stat,
            velocidad: apiData.data.stats[5].base_stat,
            altura: apiData.data.height,
            type: apiData.data.types.map(type => type.type.name),
            peso: apiData.data.weight };
        return pokemon;

    } catch (error) {
        return error
    }
}

module.exports = getApiPokemonsId