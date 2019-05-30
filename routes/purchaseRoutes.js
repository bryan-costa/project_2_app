const { Purchase } = require('../models')

module.exports = app => {
    // GET all Purchases
    // this is working!
    app.get('/purchases', (req, res) => {
        Purchase.findAll()
            .then(purchase => res.json(purchase))
            .catch(e => console.log(e))
    })

    // GET one purchase
    // this works by changing findOne to findByPk
    app.get('/purchases/:id', (req, res) => {
        Purchase.findByPk(req.params.id)
        .then(purchase => res.json(purchase))
        .catch(e => console.log(e))
        })

    // POST a Purchase
    // this is working!
    app.post('/purchases', (req, res) => {
        Purchase.create(req.body)
            .then(purchase => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    //PUT a purchase
    // this is working!
    app.put('/purchases/:id', (req, res) => {
        Purchase.update(req.body, { where: { id: req.params.id } })
        .then(_ => res.sendStatus(200))
        .catch(e => console.log(e))
    })
    //DELETE a purchase
    // this is working!
    app.delete('/purchases/:id', (req, res) => {
        Purchase.destroy( { where: { id: req.params.id } })
        .then(user => res.sendStatus(200))
        .catch(e => console.log(e))
    })
}