
const Todo = require("../models/todo.model")


class TodosServices{

    static async create(newTodo){
        try {
            const result = await Todo.create(newTodo)
            return result
        } catch (error) {
            throw error
        }
    }

  

    
}

module.exports =  TodosServices