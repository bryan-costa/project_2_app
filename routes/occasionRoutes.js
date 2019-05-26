const { Occasion } = require('../models')

module.exports = app => {
    // GET all Occasions
    app.get('./occasion', (req, res) => {
        Occasion.findAll()
            .then (occasion => res.json(occasion))
            .catch (e => console.log(e))
})
    // Get one Occasion
    app.get('/occasion/:id', (req, res) => {
        Occasion.findAll()
            .then(occasion => res.json(occasion))
            .catch(e => console.log(e))
    })
    // Post a Occasion
    app.post('/Occasion', (req, res) => {
        Occasion.create(req.body)
            .then(occasion => res.sendStatus(200))
            .catch(e => console.log(e))
    })
}