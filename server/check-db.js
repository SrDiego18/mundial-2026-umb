/** Prueba independiente de conexión y datos para Windows / VS Code. */
'use strict';
require('dotenv').config();
const {pool,verificarConexion}=require('./db');
(async()=>{
 try{
  console.log('Conectando a MySQL...');
  const estado=await verificarConexion();
  console.log(`✓ Conexión: ${estado.ok?'OK':'ERROR'} | ${estado.partidos} partidos`);
  const [tables]=await pool.query('SHOW TABLES');
  console.log('✓ Tablas encontradas: '+tables.map(r=>Object.values(r)[0]).join(', '));
  if(estado.partidos!==104)console.warn('AVISO: se esperaban 104 partidos. Reimporta el archivo SQL.');
 }catch(err){console.error('✗ ERROR:',err.code||err.message);console.error('Revisa MySQL Workbench, servicio MySQL, .env e importación del SQL.');process.exitCode=1}
 finally{await pool.end()}
})();
