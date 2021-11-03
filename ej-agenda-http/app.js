const http = require('http')
const fs = require('fs')
const path = require('path')
const querystring = require('query-string')

const pathToDatos = path.join(__dirname, 'data', 'datos.json')

const server = http.createServer((req, res) => {

    const { method, url } = req;

    if (method === 'GET' && url === '/') {
        // Listado
        fs.readFile(pathToDatos, (err, datos) => {
            const agenda = JSON.parse(datos)
            //console.log(agenda)
            res.statusCode = 200
            
            res.write('<body><h1>Mi agenda</h1>')
            res.write('<a href="/guardar-contacto">Crear contacto nuevo</a>')
            res.write('<hr/><ul>')
            
            agenda.forEach(contacto => {
                res.write('<li>' + contacto.nombre + ' (' + contacto.email + ' - ' + contacto.telefono + ')</li>')
            })
            // forEach, map, filter, find
            /* const agendaLi = agenda.map(contacto => {
                return '<li>' + contacto.nombre + ' (' + contacto.email + ' - ' + contacto.telefono + ')</li>'
            }).join('')
            res.write(agendaLi) */

            res.write('</ul></body>')
            return res.end()
        })

    } else if (method === 'GET' && url === '/guardar-contacto') {
        // Devolvemos el form.html
        const pathToForm = path.join(__dirname, 'public', 'form.html')
        fs.readFile(pathToForm, (err, contenido) => {
            return res.end(contenido)
        })
    } else if (method === 'POST' && url === '/guardar-contacto') {
        // Guardamos los datos
        const datos = []
        req.on('data', (chunk) => {
            datos.push(chunk)
        })

        req.on('end', () => {
            const body = querystring.parse(datos.join('').toString())
            console.log(body)

            fs.readFile(pathToDatos, (err, datos) => {
                const arrContactos = JSON.parse(datos)
                arrContactos.push(body)
                fs.writeFile(pathToDatos, JSON.stringify(arrContactos, null, 4), (err) => {
                    // Redirigimos al inicio
                    res.setHeader('Location', '/')
                    res.statusCode = 302
                    return res.end()
                })
            })
        })        

    } else {
        // Error 404
        res.statusCode = 404
        res.write('<body>')
        res.write('<h1>Error 404: Page not found</h1>')
        res.write('</body>')
        return res.end()
    }

})

// TODO:
// Extraer las lecturas y escrituras de archivos a funciones externas
// Extraer los bloques de if, else-if y else a funciones externas

server.listen('3000', () => {
    console.log('Listening on http://localhost:3000')
})