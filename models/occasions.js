module.exports = (sequelize, Sequelize) => {
    class Occasion extends Sequelize.Model { }
    Occasion.init(
        {
            occname: {
                type: Sequelize.STRING,
                max: 50,
                notNull: true
            },
            occtype: {
                type: Sequelize.STRING,
                isIn: ['Wedding', 'Birthday', `Valentine's Day`,'Other'],
                notNull: true
            },
            occdesc: {
                type: Sequelize.STRING
            },
            dateofocc: {
                type: Sequelize.INTEGER,
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