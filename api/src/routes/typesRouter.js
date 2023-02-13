const typesRouter = require('express').Router()

typesRouter.get('/types',(req,res) => {
    res.status(200).send('todo ok')
})

module.exports = typesRouter