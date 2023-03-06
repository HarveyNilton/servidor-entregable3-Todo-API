const subCategory = require("../models/sub_categories.model")

class SubCategoriesServices {

    static async create(newSubCaterogy) {
        try {
            const result = await subCategory.create(newSubCaterogy)
            return result
        } catch (error) {
            throw error
        }
    }
}
module.exports = SubCategoriesServices