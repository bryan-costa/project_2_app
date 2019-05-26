module.exports = (sequelize, Sequelize) => {
    class User extends Sequelize.Model { }
    User.init(
        {
            name:{
                type: Sequelize.STRING,
                notNull: true 
            },
            username: {
                type: Sequelize.STRING,
                len: [5, 50],
                isAlphanumeric: true,
                notNull: true
            },
            password: {
                type: Sequelize.STRING,
                len: [8,20],
                notContains: 'password',
                notNull: true
            },
            email: {
                type: Sequelize.STRING,
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