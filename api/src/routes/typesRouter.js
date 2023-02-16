const getAllTypes = require('../controllers/getAllTypes')

const typesRouter = require('express').Router()

typesRouter.get('/types', async (req,res) => {
    res.status(200).send( await getAllTypes())
})

module.exports = typesRouter