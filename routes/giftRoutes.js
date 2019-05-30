const { Gift } = require('../models')

module.exports = app => {
    // GET all gifts
    // this is working!
    app.get('/gifts', (req, res) => {
        Gift.findAll()
            .then(user => res.json(user))
            .catch(e => console.log(e))
    })
    // GET one gift
    // this is working if I use findByPk instead of findOne
    app.get('/gifts/:id', (req, res) => {
        Gift.findByPk(req.params.id)
            .then(user => res.json(user))
            .catch(e => console.log(e))
    })
    // POST a gift
    // this is working!
    app.post('/gifts', (req, res) => {
        Gift.create(req.body)
            .then(user => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    //PUT a gift
    // this is working!
    app.put('/gifts/:id', (req, res) => {
        Gift.update(req.body, { where: { id: req.params.id } })
        .then(_ => res.sendStatus(200))
        .catch(e => console.log(e))
    })

    //DELETE a gift
    // this is working!
    app.delete('/gifts/:id', (req, res) => {
        Gift.destroy( { where: { id: req.params.id } })
        .then(user => res.sendStatus(200))
        .catch(e => console.log(e))
    })
}