import User from "../../models/user.model"

const createUser = async (req, res) => {
    try {
        const {body} = req
        const newUser =await User.create(body)
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json(error)
    }
}

export {
    createUser
}