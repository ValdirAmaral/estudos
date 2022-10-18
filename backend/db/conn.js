const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('users', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {

    sequelize.authenticate()
    console.log('Conectado ao Mysql')

} catch (error) {
    console.log(`Não foi possível conectar: ${error}`)
}

module.exports = sequelize