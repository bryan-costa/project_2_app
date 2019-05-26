const { Gift } = require('../models')

module.exports = app => {
    // GET all Gifts
    app.get('/gift', (req, res) => {
        Gift.findAll()
            .then(gift => res.json(gift))
            .catch(e => console.log(e))
    })
}