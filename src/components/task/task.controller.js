import Category from "../../models/categorias.model.js"
import Task from "../../models/task.model.js"
import User from "../../models/user.model.js"


const createTask = async (req, res) => {
    try {
        const {body} = req

        const newTask = await Task.create(body)
        res.status(201).json(newTask)
    } catch (error) {
        res.status(400).json(error)
    }
}

const allTasks = async (req, res) => {
    try {
        const taks = await Task.findAll({
            attributes: ['id', 'title', 'description', 'completed'],
            include: [{
                model: User,
                attributes: ['username']
            },{
                model: Category,
                attributes: ['name']
            }]
        })
        res.json(taks)
    } catch (error) {
        res.status(400).json(error)
    }
}

const upDateTaks = async (req, res) => {
    try {
        const {id} = req.params
        const {body} = req

        const taks = await Task.update(body, {
            where: {id}
        })

        res.status(204).json(taks)
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteTask = async (req, res) => {
    try {
        const {id} = req.params
        
        await Task.destroy({
            where: {id}
        })
        res.status(204).end()
    } catch (error) {
        res.status(400).json(error)
    }
}

export {
    createTask,
    allTasks,
    upDateTaks,
    deleteTask
}