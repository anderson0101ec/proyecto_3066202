const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const pool = mysql.createPool({
    host: process.env.BD_HOST,
    host: process.env.BD_USER,
    host: process.env.BD_PASSWORD,
    host: process.env.BD_NAME || 'futbol_equipo',
    waitForConnections: true,
    connectionlionLimit: 10,
    queueLimit: 0
});
module.exports = pool;