const { User } = require('../models')

module.exports = app => {
    // GET all users
    app.get('/users', (req, res) => {
        User.findAll()
            .then(user => res.json(user))
            .catch(e => console.log(e))
    })
    // GET one user
    app.get('/users/:id', (req, res) => {
        User.findOne(req.params.id)
            .then(user => res.json(user))
            .catch(e => console.log(e))
    })
    // POST a user
    app.post('/users', (req, res) => {
        User.create(req.body)
            .then(user => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    //PUT a user
    app.put('users/:id', (req, res) => {
        User.update(req.body, { where: { id: req.params.id } })
        .then(_ => res.sendStatus(200))
        .catch(e => console.log(e))
    })
}