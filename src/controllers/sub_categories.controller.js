const SubCategoriesServices = require("../services/sub_categories.services")

const createSubCategories = async(req,res) =>{
    try {
        const newSubCaterogy = req.body
        const subCategory = await SubCategoriesServices.create(newSubCaterogy)
        res.status(201).send(subCategory)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports ={
    createSubCategories,
}