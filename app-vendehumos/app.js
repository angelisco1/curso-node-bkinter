require('dotenv').config()
const express = require('express')
const http = require('http')
const cors = require('cors')
const SocketIO = require('socket.io')
const appRoutes = require('./routes/app.routes')
const emitter = require('./helpers/emitter')

const app = express()

app.use(cors())
app.use(express.json())
/* req.on('data', () => {})
req.on('end', () => {
    req.body = datos
}) */

app.use(appRoutes)

const server = http.createServer(app)

const io = SocketIO(server, {
    cors: {
        origin: '*'
    }
})

io.on('connection', (socket) => {
    console.log('Nueva conexion, del socket con id: ', socket.id)
    emitter.on('votosCambiados', (datos) => {
        socket.emit('actualizaLosVotos', datos)
    })
})

server.listen(3001, () => {
    console.log('Listening on http://localhost:3001')
})