const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Task = db.define('Task', {

    id: {
        type: DataTypes.INTEGER,
        required: true,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    password: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
    },

})

module.exports = Task