const Sequelize = require('sequelize')
const sequelize = require('../config')

let User = require('./users.js')(sequelize, Sequelize)
let Occasion = require('./occasions.js')(sequelize, Sequelize)
let Gift = require('./gifts.js')(sequelize, Sequelize)
let Purchase = require('./purchases.js')(sequelize, Sequelize)

User.hasMany(Occasion)
Occasion.belongsTo(User)
Occasion.hasMany(Gift)
Gift.belongsTo(Occasion)
Gift.hasMany(Purchase)
Purchase.belongsTo(Gift)


module.exports = {
    User,
    Gift,
    Occasion,
    Purchase
}