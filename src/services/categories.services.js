const Category = require("../models/cartegories.model")

class CategoriesServices{

    static async create(newCategory){
        try {
            const result = await Category.create(newCategory)
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = CategoriesServices