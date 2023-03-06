const { Router } = require("express");
const { createSubCategories } = require("../controllers/sub_categories.controller");


const subCategoryRouter = Router()

subCategoryRouter.post('/api/v1/subcategories', createSubCategories)

module.exports = subCategoryRouter