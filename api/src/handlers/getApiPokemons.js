const axios = require('axios');

const getApiPokemons = async () => {
    try {
        let i = 1;
        let pokemons = [];
        let allPokemons = [];

        while (i < 200 ) {
            pokemons.push(axios(`https://pokeapi.co/api/v2/pokemon/${i}`))
            // descarga lenta de api
            // let apiData = await axios(`https://pokeapi.co/api/v2/pokemon/${i}`);                                             
            // pokemons.push({ id: apiData.data.id,
            //     nombre: apiData.data.name,
            //     imagen: apiData.data.sprites.other.home.front_default,
            //     vida: apiData.data.stats[0].base_stat,
            //     ataque: apiData.data.stats[1].base_stat,
            //     defensa: apiData.data.stats[2].base_stat,
            //     velocidad: apiData.data.stats[5].base_stat,
            //     altura: apiData.data.height,
            //     type: apiData.data.types.map(type => type.type.name),
            //     peso: apiData.data.weight });
            // console.log(`pokemons descargados ${i}`)
            i++;            
        }
            // descarga rapida con Concurrent Requests en axios
        allPokemons = await axios.all(pokemons).then(apiData => apiData.map(poke => {
            return ({nombre: poke.data.name,
                    imagen: poke.data.sprites.other.home.front_default,
                    vida: poke.data.stats[0].base_stat,
                    ataque: poke.data.stats[1].base_stat,
                    defensa: poke.data.stats[2].base_stat,
                    velocidad: poke.data.stats[5].base_stat,
                    altura: poke.data.height,
                    type: poke.data.types.map(type => type.type.name),
                    peso: poke.data.weight });
            }))
                
        if(pokemons.length) {
            console.log(`Cantidad de pokemones a ser descargados de la API: ${pokemons.length}`)
            return allPokemons
        } else {
            throw 'No se puedo descargar Pokemones de la API'
        }                

    } catch (error) {
        return {error: error} 
    }
}

module.exports = getApiPokemons;