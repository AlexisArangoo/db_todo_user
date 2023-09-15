import express from 'express'
import db from './utils/database.js'
import initModels from './models/initModels.js'
import userRouter from './components/user/user.routes.js'
import taskRouter from './components/task/task.routes.js'
import  cors  from 'cors'
import categoryRouter from './components/category/category.routes.js'


initModels()

db.authenticate()
    .then(() => console.log('base de datos conectada correctamente'))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log('base de datos Sync'))
    .catch(err => console.log(err))

const PORT = 8000

const app = express()

app.use(express.json()) 

app.use(cors())

app.use(userRouter, taskRouter, categoryRouter)

app.get('/', (req, res) => {
   res.send('OK')
})

app.listen(PORT, () => {
console.log(`Se esta ejecutando el servidor ${PORT}`)
})