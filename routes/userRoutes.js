const { User } = require('../models')

module.exports = app => {
    // GET all users
    // this is working!
    app.get('/users', (req, res) => {
    User.findAll()
    .then(user => res.json(user))
    .catch(e => console.log(e))
    })
    // GET one user
    // this works by changing findOne to findByPk
    app.get('/users/:id', (req, res) => {
    User.findByPk(req.params.id)
    .then(user => res.json(user))
    .catch(e => console.log(e))
    })
    // POST a user
    // this is working!
    app.post('/users', (req, res) => {
    User.create(req.body)
    .then(user => res.sendStatus(200))
    .catch(e => console.log(e))
    })

    //PUT a user
    // this is working!
    app.put('/users/:id', (req, res) => {
    User.update(req.body, { where: { id: req.params.id } })
    .then(_ => res.sendStatus(200))
    .catch(e => console.log(e))
    })
    
    //DELETE a user
    // this is working!
    app.delete('/users/:id', (req, res) => {
        User.destroy( { where: { id: req.params.id } })
        .then(user => res.sendStatus(200))
        .catch(e => console.log(e))
    })
}