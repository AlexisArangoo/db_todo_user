import Category from "../../models/categorias.model.js"
import Task from "../../models/task.model.js"
import User from "../../models/user.model.js"

const createUser = async (req, res) => {
    try {
        const {body} = req
        const newUser =await User.create(body)
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json(error)
    }
}

const allTasksUser = async (req, res) => {
    try {
        const {id} = req.params

        const tasksUser = await User.findAll({
            where: {id},
            attributes: ['id', 'username'],
            include: [{
                model: Task,
                attributes: ['id', 'title', 'description', 'completed'],
                include: [{
                    model: Category,
                    attributes: ['name']
                }]
            }]
        })

        res.json(tasksUser)
    } catch (error) {
        res.status(400).json(error)
    }
}

export {
    createUser,
    allTasksUser
}