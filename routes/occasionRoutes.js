const { Occasion } = require('../models')

module.exports = app => {
    // GET all Occasions for a particular userID
    // this is working!
    // app.get('/occasions', (req, res) => {
    //     Occasion.findAll({ where: { userId: req.params.userId } })
    //         .then(occasion => res.json(occasion))
    //         .catch(e => console.log(e))
    // })
    // GET one Occasion
    // this is working!
    app.get('/occasions/:id', (req, res) => {
        Occasion.findOne()
            .then(occasion => res.json(occasion))
            .catch(e => console.log(e))
    })
    // POST an Occasion
    // this is working!
    app.post('/occasions', (req, res) => {
        Occasion.create(req.body)
            .then(occasion => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    //PUT an occasion
    // this is working!
    app.put('/occasions/:id', (req, res) => {
        console.log(req.body)
        Occasion.update(req.body, { where: { id: req.params.id } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    //DELETE an occasion
    // this is working!
    app.delete('/occasions/:id', (req, res) => {
        Occasion.destroy({ where: { id: req.params.id } })
            .then(user => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    // GET all occasions
    app.get('/occasions', (req, res) => {
        Occasion.findAll()
            .then(user => res.json(user))
            .catch(e => console.log(e))
    })
}