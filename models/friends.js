module.exports = (sequelize, Sequelize) => {
    class Friend extends Sequelize.Model { }
    Friend.init(
        {
            friendid:{
                type: Sequelize.INTEGER,
                notNull: true
            }
        },
        {
            sequelize,
            modelName: 'friend'
        }
    )

    return Friend
}