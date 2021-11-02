const http = require('http')

const server = http.createServer((req, res) => {
    console.log('Hemos recibido una peticion: ' + req.method + ' ' + req.url)
    res.statusCode = 201
    res.write('<html>')
    res.write('<head><title>Hola mundo</title></head>')
    res.write('<body><h1>Hola mundo</h1></body>')
    res.write('</html>')
    res.end()
})

server.listen(3000, () => {
    console.log('Listening on http://localhost:3000')
})