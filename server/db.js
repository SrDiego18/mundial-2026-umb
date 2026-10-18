/** Conexión a MySQL 8 mediante pool de conexiones y promesas. */
'use strict';
require('dotenv').config();
const mysql = require('mysql2/promise');

const dbName = process.env.DB_NAME || 'mundial2026_umb';
if (!/^[A-Za-z0-9_]+$/.test(dbName)) throw new Error('DB_NAME contiene caracteres no permitidos.');
const pool = mysql.createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: dbName,
  waitForConnections: true,
  connectionLimit: 8,
  queueLimit: 30,
  charset: 'utf8mb4',
  dateStrings: true,
  timezone: 'Z',
  connectTimeout: 10000,
  decimalNumbers: true
});
async function verificarConexion() {
  const [result] = await pool.query('SELECT 1 AS ok');
  const [rows] = await pool.query('SELECT COUNT(*) AS partidos FROM partidos');
  return {ok: result[0].ok === 1, partidos: rows[0].partidos};
}
module.exports = { pool, verificarConexion };
