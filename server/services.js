/** Consultas SQL separadas de las rutas HTTP. Valores del usuario siempre parametrizados. */
'use strict';
const {pool} = require('./db');
const {construirClasificacion,limpiarTexto} = require('./logic');

const SELECT_MATCH = `id, DATE_FORMAT(fecha,'%Y-%m-%d') AS date, fase AS stage,
 grupo AS \`group\`, local AS home, visitante AS away,
 goles_local AS homeScore, goles_visitante AS awayScore, nota AS note, sede AS venue`;

async function listadoPartidos({q='',stage='',group='',page=1,limit=12,team=''}) {
  const conditions=[],params=[];
  if(q) {conditions.push('(local LIKE ? OR visitante LIKE ? OR fase LIKE ?)');params.push(...Array(3).fill('%'+q+'%'))}
  if(stage && stage!=='Todas'){conditions.push('fase=?');params.push(stage)}
  if(group && group!=='Todos'){conditions.push('grupo=?');params.push(group)}
  if(team){conditions.push('(local=? OR visitante=?)');params.push(team,team)}
  const where=conditions.length?'WHERE '+conditions.join(' AND '):'';
  const [[count]] = await pool.execute(`SELECT COUNT(*) AS total FROM partidos ${where}`,params);
  const offset=(page-1)*limit;
  const [items] = await pool.execute(`SELECT ${SELECT_MATCH} FROM partidos ${where} ORDER BY fecha ASC,id ASC LIMIT ? OFFSET ?`,[...params,limit,offset]);
  return {items,total:count.total,page,limit,pages:Math.ceil(count.total/limit)};
}
async function partidoPorId(id) {
  const [rows]=await pool.execute(`SELECT ${SELECT_MATCH} FROM partidos WHERE id=?`,[id]);
  return rows[0]||null;
}
async function filtros() {
  const [fases]=await pool.query(`SELECT fase AS label,COUNT(*) AS cantidad FROM partidos GROUP BY fase ORDER BY FIELD(fase,'Fase de grupos','Dieciseisavos','Octavos de final','Cuartos de final','Semifinal','Tercer puesto','Final')`);
  const [grupos]=await pool.query(`SELECT DISTINCT grupo AS label FROM partidos WHERE grupo IS NOT NULL AND grupo<>'' ORDER BY grupo`);
  const [equipos]=await pool.query(`SELECT nombre FROM (SELECT local AS nombre FROM partidos UNION SELECT visitante AS nombre FROM partidos) AS e ORDER BY nombre`);
  return {fases,grupos:grupos.map(g=>g.label),equipos:equipos.map(e=>e.nombre)};
}
async function resumen() {
  const [[totales]] = await pool.query(`SELECT COUNT(*) AS partidos,COALESCE(SUM(goles_local+goles_visitante),0) AS goles,
    ROUND(AVG(goles_local+goles_visitante),2) AS promedioGoles,
    COUNT(DISTINCT CASE WHEN fase='Fase de grupos' THEN grupo END) AS grupos FROM partidos`);
  const [fases]=await pool.query(`SELECT fase AS nombre,COUNT(*) AS partidos FROM partidos GROUP BY fase ORDER BY FIELD(fase,'Fase de grupos','Dieciseisavos','Octavos de final','Cuartos de final','Semifinal','Tercer puesto','Final')`);
  const [goleadores]=await pool.query(`SELECT equipo,SUM(goles) AS goles FROM (SELECT local AS equipo,goles_local AS goles FROM partidos UNION ALL SELECT visitante AS equipo,goles_visitante AS goles FROM partidos) z GROUP BY equipo ORDER BY goles DESC,equipo ASC LIMIT 8`);
  const [[ultima]] = await pool.query(`SELECT local,visitante,goles_local,goles_visitante,nota FROM partidos WHERE fase='Final' LIMIT 1`);
  return {totales,fases,goleadores,final:ultima};
}
async function clasificacion(grupo) {
  const [partidos] = await pool.execute(`SELECT fase,grupo,local,visitante,goles_local,goles_visitante FROM partidos WHERE fase='Fase de grupos' AND grupo=?`,[grupo]);
  return construirClasificacion(partidos,grupo);
}
async function cronicas() {
  const [items]=await pool.query(`SELECT c.id,c.partido_id AS partidoId,c.titulo,c.subtitulo,c.cuerpo,c.etiqueta,c.destacado,
    DATE_FORMAT(c.publicado_en,'%Y-%m-%d') AS publicadoEn,
    p.local AS home,p.visitante AS away,p.goles_local AS homeScore,p.goles_visitante AS awayScore
    FROM cronicas c LEFT JOIN partidos p ON p.id=c.partido_id ORDER BY c.destacado DESC,c.id DESC`);
  return items;
}
async function comentariosVisibles() {
  const [rows]=await pool.query(`SELECT id,nombre,favorito,mensaje,DATE_FORMAT(creado_en,'%Y-%m-%d %H:%i') AS creadoEn FROM comentarios WHERE estado='visible' ORDER BY id DESC LIMIT 12`);
  return rows;
}
async function crearComentario(d) {
  const [r]=await pool.execute('INSERT INTO comentarios(nombre,correo,favorito,mensaje) VALUES(?,?,?,?)',[d.nombre,d.correo,d.favorito,d.mensaje]);
  return r.insertId;
}
async function comentariosAdmin() {
  const [rows]=await pool.query(`SELECT id,nombre,correo,favorito,mensaje,estado,DATE_FORMAT(creado_en,'%Y-%m-%d %H:%i') AS creadoEn FROM comentarios ORDER BY id DESC LIMIT 120`);
  return rows;
}
async function ocultarComentario(id,estado) {
  const [r]=await pool.execute('UPDATE comentarios SET estado=? WHERE id=?',[estado,id]);return r.affectedRows;
}
async function borrarComentario(id) {
  const [r]=await pool.execute('DELETE FROM comentarios WHERE id=?',[id]);return r.affectedRows;
}
async function guardarCronica(d,id=null) {
  if(id!==null){const [r]=await pool.execute(`UPDATE cronicas SET partido_id=?,titulo=?,subtitulo=?,cuerpo=?,etiqueta=?,destacado=? WHERE id=?`,[d.partidoId,d.titulo,d.subtitulo,d.cuerpo,d.etiqueta,d.destacado,id]);return r.affectedRows}
  const [r]=await pool.execute(`INSERT INTO cronicas(partido_id,titulo,subtitulo,cuerpo,etiqueta,destacado) VALUES(?,?,?,?,?,?)`,[d.partidoId,d.titulo,d.subtitulo,d.cuerpo,d.etiqueta,d.destacado]);return r.insertId;
}
async function borrarCronica(id) {const [r]=await pool.execute('DELETE FROM cronicas WHERE id=?',[id]);return r.affectedRows}
module.exports={listadoPartidos,partidoPorId,filtros,resumen,clasificacion,cronicas,comentariosVisibles,crearComentario,comentariosAdmin,ocultarComentario,borrarComentario,guardarCronica,borrarCronica};
