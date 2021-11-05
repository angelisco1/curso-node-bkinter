const jwt = require('jsonwebtoken')

const usuariosValidos = [
    { usuario: 'cfalco', password: '1234', nombre: 'Charles' },
    { usuario: 'blake', password: '1234', nombre: 'Octavia' },
]

exports.login = (req, res, next) => {
    /* const usuario = req.body.usuario
    const password = req.body.password */
    const {usuario, password} = req.body

    const usuarioRegistrado = usuariosValidos.find(u => {
        return u.usuario === usuario && u.password === password;
    })

    if (!usuarioRegistrado) {
        return res.status(401).json({msg: 'Datos incorrectos'})
    }

    const token = jwt.sign({
        nombre: usuarioRegistrado.nombre
    }, process.env.JWT_SECRET)

    return res.json(token)

}

exports.verificarToken = (req, res, next) => {
    // Authorization: Bearer <jwt>

    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(400).json({msg: 'Necesitas enviar la cabecera de Authorization'})
    }

    const [bearer, token] = authHeader.split(' ')

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        next()
    } catch (err) {
        return res.status(401).json({msg: 'El token es invalido'})
    }

}