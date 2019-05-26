module.exports = (sequelize, Sequelize) => {
    class User extends Sequelize.Model { }
    User.init(
        {
            username: {
                type: Sequelize.INTEGER,
                notNull: true
            },
            password: {
                type: Sequelize.INTEGER,
                len: [8,20],
                notContains: 'password',
                notNull: true
            },
            email: {
                type: Sequelize.INTEGER,
                isEmail: true,
                notNull: true
            }
        },
        {
            sequelize,
            modelName: 'user'
        }
    )

    return User
}