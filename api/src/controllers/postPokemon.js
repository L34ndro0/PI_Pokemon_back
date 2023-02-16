const {Pokemon,Type} = require('../db')

const postPokemon = async (data) => {
    try {
        
      let pokemonCreated = await Pokemon.create(data)
      let typeDb = await Type.findAll({
          where: {
            nombre: data.type              
          }
        })
      
      pokemonCreated.addType(typeDb)          

    } catch (error) {
        return error
    }
    
}

module.exports = postPokemon