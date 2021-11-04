const express = require('express')
const VendehumosCtrl = require('../controllers/vendehumos.controller')

const router = express.Router()

router.get('/vendehumos', VendehumosCtrl.getVendehumos)

router.post('/vendehumos', VendehumosCtrl.createVendehumo)

router.patch('/vendehumos/:id', VendehumosCtrl.updateVotos)

router.get('/vendehumos/:id', VendehumosCtrl.getVendehumo)

module.exports = router

// PATCH /vendehumos/4?field=categoria