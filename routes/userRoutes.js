const { User } = require('../models')

module.exports = app => {
    // GET all Users
    app.get('/user', (req, res) => {
        User.findAll()
            .then(user => res.json(user))
            .catch(e => console.log(e))
    })
    // Get one User
    app.get('/user/:id', (req, res) => {
        User.findAll()
            .then(user => res.json(user))
            .catch(e => console.log(e))
    })
    // Post a User
    app.post('/user', (req, res) => {
        User.create()
            .then(user => res.sendStatus(200))
            .catch(e => console.log(e))
    })
}