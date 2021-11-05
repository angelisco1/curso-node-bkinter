const Vendehumo = require('../models/vendehumo')
const emitter = require('../helpers/emitter')

exports.getVendehumos = (req, res, next) => {
    Vendehumo.getVendehumos()
        .then(result => {
            console.log(result[0])
            res.json(result[0])
        })
}

exports.createVendehumo = (req, res, next) => {
    const datos = req.body;
    const vendehumo = new Vendehumo(null, datos.nombre, datos.categoria, datos.descripcion)
    
    vendehumo.save()
        .then(result => {
            console.log(result)
            const id = result[0].insertId
            vendehumo.id = id
            res.json(vendehumo)
        })

}

exports.updateVotos = (req, res, next) => {
    const id = req.params.id
    let votos;
    Vendehumo.getVendehumoById(id)
        .then(result => {
            votos = result[0][0].votos + 1
            return Vendehumo.updateVotos(id, votos)
        })
        .then(result => {
            console.log(result)
            
            const datos = {
                id,
                votos
            }
            emitter.emit('votosCambiados', datos);

            res.json({votos: votos})
        })
}

exports.getVendehumo = (req, res, next) => {
    const id = req.params.id
    Vendehumo.getVendehumoById(id)
        .then(result => {
            res.json(result[0][0])
        })
}


/*
const getVendehumos = () => {}
const getVendedor = () => {}

module.exports = {
    getVendehumos: getVendehumos,
    getVendedor: getVendedor
} */