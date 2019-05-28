const { Purchase } = require('../models')

module.exports = app => {
    // GET all Purchases
    app.get('/purchases', (req, res) => {
        Purchase.findAll()
            .then(purchase => res.json(purchase))
            .catch(e => console.log(e))
    })

    // POST a Purchase
    app.post('/purchases', (req, res) => {
        Purchase.create(req.body)
            .then(purchase => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    //PUT a purchase
    app.put('purchases/:id', (req, res) => {
        Purchase.update(req.body, { where: { id: req.params.id } })
        .then(_ => res.sendStatus(200))
        .catch(e => console.log(e))
    })

}