const { Router } = require("express");
const { createTodos} = require("../controllers/todos.controller");


const todoRouter = Router()

todoRouter.post('/api/v1/todos', createTodos)



module.exports = todoRouter