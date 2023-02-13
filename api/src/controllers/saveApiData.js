const axios = require('axios');
const {Pokemon} = require('../db')


const getApiData = async () => {
    try {
        let i = 1;
        let pokemons = [];

        while (i < 10 ) {
            let apiData = await axios(`https://pokeapi.co/api/v2/pokemon/${i}`);
            pokemons.push(apiData.data);
            i++;
        }
        
        pokemons = pokemons.map(poke =>  {
            return({
                id: poke.id,
                nombre: poke.name,
                imagen: poke.sprites.other.home.front_default,
                vida: poke.stats[0].base_stat,
                ataque: poke.stats[1].base_stat,
                defensa: poke.stats[2].base_stat,
                velocidad: poke.stats[5].base_stat,
                altura: poke.height,
                peso: poke.weight
            })
        });

        let allPokemons = [];
        pokemons.map( poke => {allPokemons = allPokemons.concat(poke)})

        return allPokemons

    } catch (error) {
        return {error: error.message}

    }
}

const saveApidata = async () => {
    try {
        const allPokemons = await getApiData();
        
        await Pokemon.bulkCreate(allPokemons).then(() => console.log('DB Cargada'));
        return allPokemons;

    } catch (error) {
        console.log({error: error.message})   
    }
}

module.exports = saveApidata;