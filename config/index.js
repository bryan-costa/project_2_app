const Sequelize = require('sequelize')
let sequelize

if (process.env.NODE_ENV === 'PRODUCTION'){
    sequelize = new Sequelize(process.env.JAWSDB_URL)
} else {
    sequelize = new Sequelize(process.env.LOCAL_URL)
}
module.exports = sequelize