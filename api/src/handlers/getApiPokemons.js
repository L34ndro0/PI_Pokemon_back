const axios = require('axios');

const getApiPokemons = async () => {
    try {
        let i = 1;
        const pokemons = [];        

        while (i < 50 ) {
            
            pokemons.push(axios(`https://pokeapi.co/api/v2/pokemon/${i}/`));
            i++;            
        }        
           
        const allPokemons = ((await axios.all(pokemons)).map(poke => poke.data).map(poke => { 
            return {
                id: poke.id,
                nombre: poke.name,
                imagen: poke.sprites.other.home.front_default,
                vida: poke.stats[0].base_stat,
                ataque: poke.stats[1].base_stat,
                defensa: poke.stats[2].base_stat,
                velocidad: poke.stats[5].base_stat,
                altura: poke.height,
                type: poke.types.map(type => type.type.name),
                peso: poke.weight                
            }}))
                          
        if(allPokemons.length) {
            console.log(`Cantidad de pokemones a ser descargados de la API: ${pokemons.length}`)
            return allPokemons
        } else {
            throw 'No se puedo descargar Pokemones de la API'
        }                

    } catch (error) {
        return error.message 
    }
}

module.exports = getApiPokemons;