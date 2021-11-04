const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('usuarios', {
        usuarios: [
            { nombre: 'Charles', apellidos: 'Falco' },
            { nombre: 'Octavia', apellidos: 'Blake' }
        ]
    })
    //res.send({datos: [1, 2, 3]})
})

router.post('/', (req, res, next) => {
    res.status(201).send({datos: [1, 2, 3, 4]})
})

router.delete('/3', (req, res, next) => {
    res.send({datos: [1, 2, 4]})
})


module.exports = router

/* GET /datos
POST /datos */

