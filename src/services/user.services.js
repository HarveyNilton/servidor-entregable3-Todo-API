
const Category = require("../models/cartegories.model")
const subCategory = require("../models/sub_categories.model")
const Todo = require("../models/todo.model")
const User = require("../models/user.model")


class UsersServices {

    static async create(newUser) {
        try {
            const createUser = await User.create(newUser)
            return createUser
        } catch (error) {
            throw error
        }
    }
    static async getTodo(userId) {
        try {
            const result = await User.findByPk(userId, {
                attributes: ['username', 'email', 'updatedAt'],
                include: [{
                    model: Todo,
                    attributes: ['title', 'description', 'status'],
                    include: {
                        model: Category,
                        attributes: ['name'],
                        include: {
                            model: subCategory,
                            attributes: ['name']
                        }
                    },
                }
                ]

                /*
                attributes:{exclude:["updatedAt","password","email"]},
                include:[{
                    model:User,
                    attributes:['id','title', 'description','status']
                },
                {
                    model:Cartegory,
                    attributes:['id','name']
                }
              */


            })
            return result
        } catch (error) {
            throw error
        }

    }

}


module.exports = UsersServices