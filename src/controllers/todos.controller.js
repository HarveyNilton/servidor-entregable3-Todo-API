const TodosServices = require("../services/todos.services")


const createTodos =  async (req,res) =>{
    try {
        const newTodo = req.body
        const todo = await TodosServices.create(newTodo)
        res.status(201).send(todo)
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports = {
    createTodos,
}