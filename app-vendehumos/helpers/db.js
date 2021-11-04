const mysql = require('mysql2')

const pool = mysql.createPool({
    user: 'root',
    password: 'mysql',
    database: 'app-vendehumos',
    host: 'localhost'
})

module.exports = pool.promise()