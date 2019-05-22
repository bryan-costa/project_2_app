const Sequelize = require('sequelize')
let sequelize

if (process.env.NODE_ENV === 'PRODUCTION'){
    sequelize = new Sequelize(process.env.JAWSDB_URL)
    console.log("PRODUCTION DB!!!")
} else {
    sequelize = new Sequelize(process.env.LOCAL_URL)
    console.log("local DB")
}
module.exports = sequelize