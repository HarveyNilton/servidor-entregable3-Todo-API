const UsersServices = require("../services/user.services")

const createUser = async (req, res) => {
    try {
        const newUser = req.body
        const result = await UsersServices.create(newUser)
        res.status(201).send(result)
    } catch (error) {
        res.status(400).json(error)
    }
}
    


const getTodos = async (req, res) => {
    try {
        const {userId} = req.params
        const todos = await UsersServices.getTodo(userId)
        res.json(todos)
    } catch (error) {
        res.status(400).json(error)
    }
}



module.exports = {
    createUser,
    getTodos
}