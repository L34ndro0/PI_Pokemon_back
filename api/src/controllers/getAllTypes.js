const {Type} = require('../db')

const getAlltypes = async () => {
    try {       
        return Type.findAll()
    } catch (error) {
        console.log(error)
    }
}

module.exports = getAlltypes