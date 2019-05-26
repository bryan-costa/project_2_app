const { Purchase } = require('../models')

module.exports = app => {
    // GET all Purchases
    app.get('/Purchase', (req, res) => {
        Purchase.findAll()
            .then(purchase => res.json(purchase))
            .catch(e => console.log(e))
    })
}