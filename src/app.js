
const express = require('express')
const cors = require("cors")
const morgan = require("morgan")
const database = require("./utils/database")
const initModel = require('./models/init_model')
const userRouter = require('./routes/user.router')
const todoRouter = require('./routes/todos.router')
const categoriesRouter = require('./routes/categories.router')
const subCategoryRouter = require('./routes/sub_categories.router')



const PORT = 2530
const app = express()
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.use(userRouter)
app.use(todoRouter)
app.use(categoriesRouter)
app.use(subCategoryRouter)


initModel()


database.authenticate()
    .then(() => {
        console.log("Database conectado");
    })
    .catch((error) => console.log(error))

database.sync({alter: true })
    .then(() => {
        console.log("Databse Sincronizada");
    })
    .catch((error) => console.log(error))

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el ${PORT}`);
})