const fs = require('fs')
const fsPromises = require('fs').promises

/* console.log('Hola mundo!')

console.log(0)

setTimeout(() => {
    console.log(1)
}, 0)

console.log(2) */

/* const fn = () => {

} */
/* 
function handleReadFile(cb) {
    console.log(cb)
    return (err, data) => {
        console.log(data.toString())
        cb()
    }
} */
/* MIRAR ESTE CASO
fs.readFile('./archivo1.txt', handleReadFile(
    fs.readFile('./archivo2.txt', handleReadFile(
        fs.readFile('./archivo3.txt', handleReadFile(
            () => {
                console.log('fin')
            }
        ))
    ))
))
 */
/* 
fs.readFile('./archivo1.txt', (err, data) => {
    console.log(data.toString())
    fs.readFile('./archivo2.txt')
}) */



fs.readFile('./archivo1.txt', (err, data) => {
    console.log(data.toString())

    fs.readFile('./archivo2.txt', (err, data) => {
        console.log(data.toString())

        fs.readFile('./archivo3.txt', (err, data) => {
            console.log(data.toString())
        })
    })
})

/* 
function a() {

}

const b = function() {

}

const c = () => {
    // asdas
    return 1
} */

const serie = {
    numTotalEpisodios: 100,
    numEpisodiosVistos: 80,
    verEpisodio: function() {
        console.log(this)
        this.numEpisodiosVistos++

        this.fechaEstreno = new Date()
        /* let that = this */

        const mostrarFecha = () => {
            /* console.log(that.fechaEstreno) */
            console.log(this.fechaEstreno)
        }
        /* mostrarFecha = mostrarFecha.bind(this) */

        /* mostrarFecha() */
        /* mostrarFecha.call(this)
        mostrarFecha.apply(this, []) */

    }
}

const serie2 = {
    numTotalEpisodios: 100,
    numEpisodiosVistos: 80,
    verEpisodio: () => {
        console.log(this)
        this.numEpisodiosVistos++
    }
}

/* serie2.verEpisodio = serie2.verEpisodio.bind(serie2) */

console.log(serie.numEpisodiosVistos)
console.log(serie2.numEpisodiosVistos)

serie.verEpisodio()
serie2.verEpisodio()
console.log(this)

console.log(serie.numEpisodiosVistos)
console.log(serie2.numEpisodiosVistos)


fsPromises.readFile('./archivo1.txt')
    .then((data) => {
        console.log(data.toString() + '!')
        return fsPromises.readFile('./archivo2.txt')
    })
    .then(data => {
        console.log(data.toString() + '!')
        return fsPromises.readFile('./archivo3.txt')
    })
    .then(data => {
        console.log(data.toString() + '!')
    })
    .catch(err => {
        console.log(err)
    })

const dameElMensaje = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Un mensaje cualquiera...')
        /* reject('Mensaje no encontrado :(') */
    }, 1500)
})

dameElMensaje
    .then(msg => {
        console.log(msg)
        return fsPromises.writeFile('./mensaje.txt', msg)
    })
    .then(() => {
        console.log('Archivo guardado...')
    })
    .catch(err => {
        console.error(err)
    })


let mensaje = 'Este es un mensaje escrito con fs (callbacks)'
mensaje += '!'

fs.writeFile('./mensajeCallback.txt', mensaje, (err) => {
    if (err) {
        throw new Error(err)
    }
    console.log('Se ha creado correctamente')
})

/* 
cobrarMesDeNetflix(id, (err) => {
    if (err) {
        // Enviar email "no te hemos podido cobrar"
    }

    // Enviar email "suscripcion renovada"
}) */

const series = [
    { id: 1, titulo: 'Hunters', vista: true },
    { id: 2, titulo: 'Lie to me', vista: false },
    { id: 3, titulo: 'Mindhunters', vista: false },
    { id: 4, titulo: 'Gangland Undercover', vista: true },
]

// Separar series en seriesNoVistas y seriesVistas
// Crear un archivo con seriesNoVistas y otro con seriesVistas

const seriesVistas = series.filter((serie) => {
    return serie.vista
})
const seriesNoVistas = series.filter((serie) => {
    return !serie.vista
})
console.log(seriesVistas)
console.log(seriesNoVistas)

fsPromises.writeFile('series-vistas.json', JSON.stringify(seriesVistas, null, 2))
    .then(() => {
        console.log('Series vistas guardadas...')
    })

fs.writeFile('series-no-vistas.json', JSON.stringify(seriesNoVistas, null, 2), (err) => {
    console.log('Series no vistas guardadas...')
})

/* 
let sNoVistas = [], sVistas = [];
series.forEach((serie) => {
    if (serie.vista) {
        sVistas.push(serie)
    } else {
        sNoVistas.push(serie)
    }
})
 */
