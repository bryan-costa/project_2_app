const { Occasion } = require('../models')

module.exports = app => {
    // GET all Occasions
    app.get('./occasions', (req, res) => {
        Occasion.findAll()
            .then (occasion => res.json(occasion))
            .catch (e => console.log(e))
})
    // GET one Occasion
    app.get('/occasions/:id', (req, res) => {
        Occasion.findOne()
            .then(occasion => res.json(occasion))
            .catch(e => console.log(e))
    })
    // POST an Occasion
    app.post('/occasions', (req, res) => {
        Occasion.create(req.body)
            .then(occasion => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    //PUT an occasion
    app.put('occasions/:id', (req, res) => {
        Occasion.update(req.body, { where: { id: req.params.id } })
        .then(_ => res.sendStatus(200))
        .catch(e => console.log(e))
    })
    
}