const { Router } = require("express");
const { createUser ,getTodos} = require("../controllers/user.controller");

const userRouter = Router()

userRouter.post('/api/v1/user', createUser)

userRouter.get('/api/v1/user/:userId/todos',getTodos)

module.exports = userRouter