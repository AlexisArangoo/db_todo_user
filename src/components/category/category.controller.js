import Category from "../../models/categorias.model.js"

const createCategory = async (req, res) => {
    try {
        const {body} = req

    const category = await Category.create(body)
    res.status(201).json(category)
    } catch (error) {
        res.status(400).json(error)
    }
}

const allCategory = async (req, res) => {
    try {
        const category = await Category.findAll()

        res.json(category)
    } catch (error) {
        res.status(400).json(error)
    }
}

export {
    createCategory,
    allCategory
}