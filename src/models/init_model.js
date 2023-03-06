const Category = require("./cartegories.model");
const subCategory = require("./sub_categories.model");
const Todo = require("./todo.model");
const User = require("./user.model");


const initModel = () =>{
    User.hasMany(Todo,{foreignKey:"user_id"})
    Todo.belongsTo(User,{foreignKey:"user_id"})

    Category.hasMany(Todo,{foreignKey:"category_id"})
    Todo.belongsTo(Category,{foreignKey:"category_id"})

    subCategory.hasMany(Category,{foreignKey:"subcategory_id"})
    Category.belongsTo(subCategory,{foreignKey:"subcategory_id"})

}

module.exports = initModel