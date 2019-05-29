const { Gift } = require('../models')

module.exports = app => {
    // GET all gifts
    app.get('/gifts', (req, res) => {
        Gift.findAll()
            .then(user => res.json(user))
            .catch(e => console.log(e))
    })
    // GET one gift
    app.get('/gifts/:id', (req, res) => {
        Gift.findOne(req.params.id)
            .then(user => res.json(user))
            .catch(e => console.log(e))
    })
    // POST a gift
    app.post('/gifts', (req, res) => {
        Gift.create(req.body)
            .then(user => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    //PUT a gift
    app.put('gifts/:id', (req, res) => {
        Gift.update(req.body, { where: { id: req.params.id } })
        .then(_ => res.sendStatus(200))
        .catch(e => console.log(e))
    })
}