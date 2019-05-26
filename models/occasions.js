module.exports = (sequelize, Sequelize) => {
    class Occasion extends Sequelize.Model { }
    Occasion.init(
        {
            name: {
                type: Sequelize.STRING,
                max: 50,
                notNull: true
            },
            type: {
                type: Sequelize.STRING,
                isIn: ['Wedding', 'Birthday', `Valentine's Day`,'Other'],
                notNull: true
            },
            description: {
                type: Sequelize.STRING
            },
            date: {
                type: Sequelize.DATEONLY,
                notNull: true,
                isDate: true
            }
        },
        {
            sequelize,
            modelName: 'occasion'
        }
    )

    return Occasion
}