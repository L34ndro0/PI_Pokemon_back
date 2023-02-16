const axios = require('axios');

const getApiPokemons = async () => {
    try {
        let i = 1;
        let pokemons = [];

        while (i < 10 ) {
            
            let apiData = await axios(`https://pokeapi.co/api/v2/pokemon/${i}`);                                             
            pokemons.push({ id: apiData.data.id,
                nombre: apiData.data.name,
                imagen: apiData.data.sprites.other.home.front_default,
                vida: apiData.data.stats[0].base_stat,
                ataque: apiData.data.stats[1].base_stat,
                defensa: apiData.data.stats[2].base_stat,
                velocidad: apiData.data.stats[5].base_stat,
                altura: apiData.data.height,
                type: apiData.data.types.map(type => type.type.name),
                peso: apiData.data.weight });
            console.log(`pokemons descargados ${i}`)
            i++;
            
        }
        if(pokemons.length) {
            console.log(`Cantidad de pokemones a ser descargados de la API: ${pokemons.length}`)
            return pokemons
        } else {
            throw 'No se puedo descargar Pokemones de la API'
        }                

    } catch (error) {
        return {error: error} 
    }
}

module.exports = getApiPokemons;