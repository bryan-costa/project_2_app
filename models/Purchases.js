module.exports = (sequelize, Sequelize) => {
    class Purchase extends Sequelize.Model { }
    Purchase.init(
        {
            isbought: {
                type: Sequelize.BOOLEAN,
                notNull: true,
                defaultValue: false
            },
            boughtby: {
                type: Sequelize.INTEGER,
            },
            message: {
                type: Sequelize.STRING,
            },
            amount: {
                type: Sequelize.DECIMAL,
                isDecimal: true
            }
        },
        {
            sequelize,
            modelName: 'purchase'
        }
    )

    return Purchase
}