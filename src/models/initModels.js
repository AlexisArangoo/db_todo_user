import Category from "./categorias.model.js"
import Task from "./task.model.js"
import User from "./user.model.js"

const initModels = () => {
  //relacion entre usuarios y tareas
  User.hasMany(Task, {foreignKey: 'userId'})
  Task.belongsTo(User, {foreignKey: 'userId'})

  //relacion entre tareas y categorias
  Category.hasMany(Task, {foreignKey: 'category'})
  Task.belongsTo(Category, {foreignKey: 'category'})
}

export default initModels