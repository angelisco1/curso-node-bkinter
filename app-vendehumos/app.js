const express = require('express')
const appRoutes = require('./routes/app.routes')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
/* req.on('data', () => {})
req.on('end', () => {
    req.body = datos
}) */

app.use(appRoutes)

app.listen(3001, () => {
    console.log('Listening on http://localhost:3001')
})