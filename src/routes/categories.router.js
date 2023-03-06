const { Router } = require("express");
const { createCategories } = require("../controllers/categories.controller");


const categoriesRouter = Router()

categoriesRouter.post('/api/v1/categories', createCategories)


module.exports = categoriesRouter