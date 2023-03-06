const CategoriesServices = require("../services/categories.services")


const createCategories =  async(req, res)=>{
    try {
        
        const newCategory = req.body
        const category = await CategoriesServices.create(newCategory)
        res.status(201).send(category)
    } catch (error) {
       res.status(400).json(error) 
    }
}

module.exports = {
    createCategories,
}