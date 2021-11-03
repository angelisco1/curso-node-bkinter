const fs = require('fs')
const path = require('path')
const http = require('http')
const querystring = require('query-string')

const MIMETYPES = {
    html: 'text/html',
    js: 'text/javascript',
    jpg: 'image/jpeg',
    json: 'application/json'
}

const server = http.createServer((req, res) => {
    console.log('Hemos recibido una peticion: ' + req.method + ' ' + req.url)

    // Desestructuracion de objetos
    const { method, url } = req
/*     const metodo = req.method
    const url1 = req.url */

    if (method === 'GET' && url === '/prueba') {
        res.statusCode = 201
        res.setHeader('aaaa', '1223')
        /* res.setHeader('Content-Type', 'text/html')
        return res.end('<marquee>Hola mundo</marquee>') */
        //return res.end('<html><marquee>Hola mundo</marquee></html>')
    
        res.write('<html>')
        res.write('<head><title>Hola mundo</title></head>')
        res.write('<body><h1>Hola mundo</h1></body>')
        res.write('</html>')
        return res.end()
    } else if (method === 'POST' && url === '/login') {
        const datos = []
        req.on('data', (chunk) => {
            datos.push(chunk)
        })
        req.on('end', () => {
            let body = datos.join('').toString()
            body = querystring.parse(body)
            console.log(body)
            res.setHeader('Content-Type', 'text/html')
            return res.end('<h1>Bienvenido ' + body.username + '</h1>')
        })
    } else {
        const urlSeparadaPorPuntos = url.split('.')
        const extension = urlSeparadaPorPuntos[urlSeparadaPorPuntos.length-1]
    
        const urlParseada = new URL(url, 'http://localhost:3000')
        console.log(urlParseada)
        const urlNormalizada = path.normalize(urlParseada.pathname)
        const urlPedida = path.join('public', urlNormalizada)
        console.log(urlPedida)
    
        fs.readFile(urlPedida, (err, contenido) => {
            const mimeType = MIMETYPES[extension]
            res.statusCode = 200
            res.setHeader('Content-Type', mimeType)
            return res.end(contenido)
        })

    }

    
    
})

server.listen(3000, () => {
    console.log('Listening on http://localhost:3000')
})