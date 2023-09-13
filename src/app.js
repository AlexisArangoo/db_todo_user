import express from 'express'
import db from './utils/database.js'
import initModels from './models/initModels.js'

initModels()

db.authenticate()
    .then(() => console.log('base de datos conectada correctamente'))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log('base de datos Sync'))
    .catch(err => console.log(err))

const PORT = process.env.PORT ?? 8000

const app = express()

app.get('/', (req, res) => {
   res.send('OK')
})

app.listen(PORT, () => {
console.log(`Se esta ejecutando el servidor ${PORT}`)
})