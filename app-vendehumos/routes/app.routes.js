const express = require('express')
const VendehumosCtrl = require('../controllers/vendehumos.controller')
const AuthCtrl = require('../controllers/auth.controller')

const router = express.Router()

router.post('/login', AuthCtrl.login)

router.get('/vendehumos', VendehumosCtrl.getVendehumos)

router.get('/vendehumos/:id', VendehumosCtrl.getVendehumo)

router.use(AuthCtrl.verificarToken)

router.post('/vendehumos', VendehumosCtrl.createVendehumo)

router.patch('/vendehumos/:id', VendehumosCtrl.updateVotos)


module.exports = router

// PATCH /vendehumos/4?field=categoria