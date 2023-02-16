const axios = require('axios');
const {Type} = require('../db')

const getApiTypes =  async() => {
    try {
        const apiData = await axios('https://pokeapi.co/api/v2/type')
        return await apiData.data.results.map((type) => {
            return {
                nombre: type.name,
            }
        })
        
    } catch (error) {
        return ({error: 'no se puedieron descargar los types desde la API'})
    }
}

const saveApiTypes = async () => {
    const cargar = await getApiTypes()        
    await Type.bulkCreate(cargar)
    console.log( 'API Types guardados en DB')
}

module.exports = saveApiTypes 