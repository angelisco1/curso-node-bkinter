const http = require('http')
const express = require('express')
const path = require('path')
const datosRouter = require('./datos.routes')

/* 
const app = express()

const server = http.createServer(app)

server.listen(3000, () => {
    console.log('Listening on http://localhost:3000')
})
 */

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
    console.log(1)
    console.log(req.method, req.url)
    console.log(req.body)
    req.body = {
        prueba: 1234
    }
    next()
})
/* 
app.get('/:algo', (req, res, next) => {
    console.log('ES UN GET')
    next()
})

app.post('/:algo', (req, res, next) => {
    console.log('ES UN POST')
    next()
})
 */
app.use(
    (req, res, next) => {
        console.log(req.body)
        console.log(2)
        res.setHeader('mi-cabecera', 1234)
        next()
    },
    /* (req, res, next) => {
        console.log(3)
        res.send('hola mundo')
    } */
)


app.use('/datos', datosRouter)
app.use('/mis-datos', (req, res, next) => {
    res.redirect('/datos')
})

app.use((req, res) => {
    /* res.status(404).send({err: 'page not found'}) */
    /* res.sendStatus(204) */
    res.status(404).sendFile(path.join(__dirname, 'pages', '404.html'))
})

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000')
})