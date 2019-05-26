module.exports = (sequelize, Sequelize) => {
    class Gift extends Sequelize.Model { }
    Gift.init(
        {
            name: {
                type: Sequelize.STRING,
                notNull: true
            },
            type: {
                type: Sequelize.STRING,
                isIn: ['gift', 'experience'],
                notNull: true
            },
            price: {
                type: Sequelize.DECIMAL,
                isDecimal: true,
                notNull: true
            },
            url: {
                type: Sequelize.STRING,
                notNull: true,
            }
        },
        {
            sequelize,
            modelName: 'gift'
        }
    )

    return Gift
}