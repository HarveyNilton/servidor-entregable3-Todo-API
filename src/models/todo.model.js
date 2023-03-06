const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Todo = db.define("todos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status:{
        type:DataTypes.BOOLEAN
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
   
},{
    timestamps:true,
    updatedAt:false
})

module.exports = Todo