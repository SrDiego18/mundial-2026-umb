/** Funciones puras. Se pueden probar sin servidor ni MySQL. */
'use strict';
const LIMIT_MAX = 48;
function limitarNumero(value, fallback, min, max) {
  const n = Number(value);
  return Number.isInteger(n) && n >= min && n <= max ? n : fallback;
}
function limpiarTexto(value, max = 200) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}
function construirClasificacion(partidos, grupo) {
  const equipos = new Map();
  const asegurar = nombre => {
    if (!equipos.has(nombre)) equipos.set(nombre, {equipo:nombre,pj:0,pg:0,pe:0,pp:0,gf:0,gc:0,dg:0,pts:0});
    return equipos.get(nombre);
  };
  for (const p of partidos) {
    if (p.fase !== 'Fase de grupos' || p.grupo !== grupo) continue;
    const a=asegurar(p.local),b=asegurar(p.visitante);
    a.pj++;b.pj++;
    a.gf+=Number(p.goles_local);a.gc+=Number(p.goles_visitante);
    b.gf+=Number(p.goles_visitante);b.gc+=Number(p.goles_local);
    if(p.goles_local>p.goles_visitante){a.pg++;a.pts+=3;b.pp++}
    else if(p.goles_local<p.goles_visitante){b.pg++;b.pts+=3;a.pp++}
    else{a.pe++;b.pe++;a.pts++;b.pts++}
  }
  return [...equipos.values()].map(e=>({...e,dg:e.gf-e.gc}))
    .sort((a,b)=>b.pts-a.pts||b.dg-a.dg||b.gf-a.gf||a.equipo.localeCompare(b.equipo,'es'));
}
function validarComentario(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return {error:'Información no válida.'};
  const nombre=limpiarTexto(body.nombre,101);
  const correo=limpiarTexto(body.correo,181);
  const favorito=limpiarTexto(body.favorito,101);
  const mensaje=limpiarTexto(body.mensaje,1201);
  if(nombre.length<2||nombre.length>100)return {error:'Escribe un nombre entre 2 y 100 caracteres.'};
  if(correo.length>180||!(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(correo))) return {error:'Ingresa un correo válido.'};
  if(favorito.length<2||favorito.length>100)return {error:'Indica tu selección favorita.'};
  if(mensaje.length<10||mensaje.length>1200)return {error:'Escribe un comentario de 10 a 1200 caracteres.'};
  return {data:{nombre,correo,favorito,mensaje}};
}
function validarCronica(body) {
  const titulo=limpiarTexto(body?.titulo,181),subtitulo=limpiarTexto(body?.subtitulo,241),cuerpo=limpiarTexto(body?.cuerpo,6001),etiqueta=limpiarTexto(body?.etiqueta||'Análisis académico',51);
  const partidoId=body?.partidoId===null||body?.partidoId===''||body?.partidoId===undefined?null:limitarNumero(body?.partidoId,-1,1,104);
  if(titulo.length<8||titulo.length>180||subtitulo.length<8||subtitulo.length>240||cuerpo.length<30||cuerpo.length>6000||etiqueta.length>50||partidoId===-1) return {error:'Revisa el título, subtítulo, cuerpo y partido de la crónica.'};
  return {data:{titulo,subtitulo,cuerpo,etiqueta,partidoId,destacado:body?.destacado?1:0}};
}
module.exports = {LIMIT_MAX, limitarNumero, limpiarTexto, construirClasificacion, validarComentario, validarCronica};
