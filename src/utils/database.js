const { Sequelize } = require("sequelize");

const db = new Sequelize({
    database:"todo_entregable_tree",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"root",
    dialect:"postgres"
})

module.exports = db