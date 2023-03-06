const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const subCategory = db.define("sub_categories", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = subCategory 