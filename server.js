require('dotenv').config()
const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes')(app)

// {force: true}
require('./config').sync()
    .then(_ => app.listen(process.env.PORT || 3001))
    .catch(e => console.log(e))

// "proxy": "http://localhost:3001",