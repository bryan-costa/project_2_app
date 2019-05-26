module.exports = (sequelize, Sequelize) => {
    class Friend extends Sequelize.Model { }
    Friend.init(
        {},
        {
            sequelize,
            modelName: 'friend'
        }
    )

    return Friend
}