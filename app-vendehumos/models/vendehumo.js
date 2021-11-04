const db = require('../helpers/db');

class Vendehumo {
    constructor(
        id,
        nombre,
        categoria,
        descripcion,
        votos = 0,
        fechaAlta = new Date()
    ) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.votos = votos;
        this.fechaAlta = fechaAlta;
    }

    save() {
        return db.execute('INSERT INTO vendehumos (nombre, categoria, descripcion, fechaAlta) VALUES (?, ?, ?, ?)', [this.nombre, this.categoria, this.descripcion, this.fechaAlta])
    }

    static getVendehumos() {
        return db.execute('SELECT * FROM vendehumos')
    }

    static getVendehumoById(id) {
        return db.execute('SELECT * FROM vendehumos WHERE id=?', [id])
    }

    static updateVotos(id, votos) {
        return db.execute('UPDATE vendehumos SET votos=? WHERE id=?', [votos, id])
    }
}

module.exports = Vendehumo;