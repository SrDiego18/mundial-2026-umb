/** Servidor HTTP del proyecto UMB: rutas públicas, panel administrativo y archivos estáticos. */
'use strict';
require('dotenv').config();
const express=require('express');
const crypto=require('node:crypto');
const path=require('node:path');
const {pool,verificarConexion}=require('./db');
const S=require('./services');
const {limitarNumero,limpiarTexto,validarComentario,validarCronica,LIMIT_MAX}=require('./logic');
const app=express();const PORT=Number(process.env.PORT)||3000;
const sesiones=new Map();const intentos=new Map();const envAdmin=process.env.ADMIN_PASSWORD||'';
const adminUser=process.env.ADMIN_USER||'admin';
app.disable('x-powered-by');
app.use(express.json({limit:'14kb'}));
app.use((req,res,next)=>{
  res.set({'X-Content-Type-Options':'nosniff','X-Frame-Options':'DENY','Referrer-Policy':'strict-origin-when-cross-origin',
    'Content-Security-Policy':"default-src 'self'; script-src 'self'; connect-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; base-uri 'self'; frame-ancestors 'none'; object-src 'none'"});
  if(req.path.startsWith('/api/'))res.set('Cache-Control','no-store');
  next();
});
function errorCliente(res,code,mensaje){return res.status(code).json({ok:false,error:mensaje})}
function controlarOrigen(req,res,next){if(['POST','PATCH','DELETE','PUT'].includes(req.method)){
  const origin=req.get('origin');if(origin){let allowed=false;try{allowed=new URL(origin).host===req.get('host')}catch{}if(!allowed)return errorCliente(res,403,'Origen no autorizado.')}
}next()}
app.use('/api',controlarOrigen);
function ejecutar(fn){return (req,res,next)=>Promise.resolve(fn(req,res)).catch(next)}
function cookies(req){return Object.fromEntries((req.headers.cookie||'').split(';').map(x=>x.trim().split('=')).filter(x=>x.length===2))}
function verificarAdmin(req,res,next){
  const token=cookies(req).umb_session;
  const session=token&&sesiones.get(token);
  if(!session||session.expires<Date.now()){if(token)sesiones.delete(token);return errorCliente(res,401,'Debes iniciar sesión como administrador.');}
  req.admin=session.user;next();
}
function rateLimit(bucket,key,max,ms){const now=Date.now();const rec=bucket.get(key)||[];const fresh=rec.filter(x=>x>now-ms);fresh.push(now);bucket.set(key,fresh);return fresh.length<=max}
function comparacionSegura(a,b){const x=crypto.createHash('sha256').update(String(a)).digest();const y=crypto.createHash('sha256').update(String(b)).digest();return crypto.timingSafeEqual(x,y)}

app.get('/api/health',ejecutar(async(req,res)=>{
  const estado=await verificarConexion();res.json({ok:estado.ok,database:'MySQL',partidos:estado.partidos,aplicacion:'Mundial 2026 UMB',version:'2.0'});
}));
app.get('/api/resumen',ejecutar(async(req,res)=>res.json(await S.resumen())));
app.get('/api/filtros',ejecutar(async(req,res)=>res.json(await S.filtros())));
app.get('/api/partidos',ejecutar(async(req,res)=>{
  const page=limitarNumero(req.query.page,1,1,100),limit=limitarNumero(req.query.limit,12,1,LIMIT_MAX);
  const q=limpiarTexto(req.query.q,60),stage=limpiarTexto(req.query.stage,50),group=limpiarTexto(req.query.group,2),team=limpiarTexto(req.query.team,90);
  res.json(await S.listadoPartidos({page,limit,q,stage,group,team}));
}));
app.get('/api/partidos/:id',ejecutar(async(req,res)=>{
 const id=limitarNumero(req.params.id,0,1,999999);if(!id)return errorCliente(res,400,'ID no válido.');
 const row=await S.partidoPorId(id);return row?res.json(row):errorCliente(res,404,'Partido no encontrado.');
}));
app.get('/api/clasificacion/:grupo',ejecutar(async(req,res)=>{
 const group=limpiarTexto(req.params.grupo,2).toUpperCase();if(!/^[A-L]$/.test(group))return errorCliente(res,400,'Grupo no válido.');
 res.json({grupo:group,tabla:await S.clasificacion(group),criterio:'Puntos, diferencia de gol y goles a favor. Tabla estadística académica; no sustituye desempates oficiales FIFA.'});
}));
app.get('/api/cronicas',ejecutar(async(req,res)=>res.json({items:await S.cronicas()})));
app.get('/api/comentarios',ejecutar(async(req,res)=>res.json({items:await S.comentariosVisibles()})));
const envios=new Map();
app.post('/api/comentarios',ejecutar(async(req,res)=>{
 if(!rateLimit(envios,req.ip||'local',5,60*60*1000))return errorCliente(res,429,'Límite temporal de comentarios alcanzado.');
 const val=validarComentario(req.body);if(val.error)return errorCliente(res,422,val.error);
 const id=await S.crearComentario(val.data);return res.status(201).json({ok:true,id,mensaje:'¡Tu comentario quedó guardado en MySQL!'});
}));

app.post('/api/admin/login',ejecutar(async(req,res)=>{
 if(!rateLimit(intentos,req.ip||'local',8,15*60*1000))return errorCliente(res,429,'Demasiados intentos. Intenta más tarde.');
 if(!envAdmin||envAdmin.startsWith('CAMBIAR_'))return errorCliente(res,503,'Configura ADMIN_PASSWORD en .env antes de ingresar.');
 if(!comparacionSegura(req.body?.usuario,adminUser)||!comparacionSegura(req.body?.password,envAdmin))return errorCliente(res,401,'Usuario o contraseña incorrectos.');
 const token=crypto.randomBytes(32).toString('hex');sesiones.set(token,{user:adminUser,expires:Date.now()+2*60*60*1000});
 res.cookie('umb_session',token,{httpOnly:true,sameSite:'strict',secure:process.env.NODE_ENV==='production',maxAge:2*60*60*1000,path:'/'});
 res.json({ok:true,usuario:adminUser});
}));
app.get('/api/admin/me',verificarAdmin,(req,res)=>res.json({ok:true,usuario:req.admin}));
app.post('/api/admin/logout',verificarAdmin,(req,res)=>{
 const token=cookies(req).umb_session;sesiones.delete(token);
 res.clearCookie('umb_session',{httpOnly:true,sameSite:'strict',secure:process.env.NODE_ENV==='production',path:'/'});res.json({ok:true});
});
app.get('/api/admin/comentarios',verificarAdmin,ejecutar(async(req,res)=>res.json({items:await S.comentariosAdmin()})));
app.patch('/api/admin/comentarios/:id',verificarAdmin,ejecutar(async(req,res)=>{
 const id=limitarNumero(req.params.id,0,1,1000000000),estado=req.body?.estado;
 if(!id||!['visible','oculto'].includes(estado))return errorCliente(res,400,'Solicitud no válida.');
 const n=await S.ocultarComentario(id,estado);return n?res.json({ok:true}):errorCliente(res,404,'Comentario no encontrado.');
}));
app.delete('/api/admin/comentarios/:id',verificarAdmin,ejecutar(async(req,res)=>{
 const id=limitarNumero(req.params.id,0,1,1000000000);
 if(!id)return errorCliente(res,400,'ID no válido.');const n=await S.borrarComentario(id);return n?res.json({ok:true}):errorCliente(res,404,'Comentario no encontrado.');
}));
app.post('/api/admin/cronicas',verificarAdmin,ejecutar(async(req,res)=>{
 const val=validarCronica(req.body);if(val.error)return errorCliente(res,422,val.error);
 const id=await S.guardarCronica(val.data);res.status(201).json({ok:true,id});
}));
app.put('/api/admin/cronicas/:id',verificarAdmin,ejecutar(async(req,res)=>{
 const id=limitarNumero(req.params.id,0,1,1000000000),val=validarCronica(req.body);
 if(!id||val.error)return errorCliente(res,422,val.error||'ID no válido.');
 const n=await S.guardarCronica(val.data,id);return n?res.json({ok:true}):errorCliente(res,404,'Crónica no encontrada.');
}));
app.delete('/api/admin/cronicas/:id',verificarAdmin,ejecutar(async(req,res)=>{
 const id=limitarNumero(req.params.id,0,1,1000000000);if(!id)return errorCliente(res,400,'ID no válido.');
 const n=await S.borrarCronica(id);return n?res.json({ok:true}):errorCliente(res,404,'Crónica no encontrada.');
}));

// Solo la carpeta public/ es accesible: nunca enviamos .env, SQL o archivos de servidor.
app.use(express.static(path.join(__dirname,'..','public'),{maxAge:'1h',index:'index.html'}));
app.use('/api',(req,res)=>errorCliente(res,404,'Ruta API no encontrada.'));
app.use((err,req,res,next)=>{
 console.error('[ERROR]',err.code||err.name,err.message);
 if(res.headersSent)return next(err);
 if(err instanceof SyntaxError && err.status===400)return errorCliente(res,400,'JSON inválido.');
 if(err.code==='ER_NO_SUCH_TABLE'||err.code==='ER_BAD_DB_ERROR'||err.code==='ECONNREFUSED'||err.code==='ER_ACCESS_DENIED_ERROR')return errorCliente(res,503,'MySQL no está listo. Revisa .env, el servicio MySQL y el script SQL.');
 return errorCliente(res,500,'No se pudo completar la operación. Consulta la consola del servidor.');
});
if(require.main===module){
 const server=app.listen(PORT,()=>console.log(`\n🏆 Mundial 2026 UMB\n   Web:   http://localhost:${PORT}\n   Admin: http://localhost:${PORT}/admin.html\n   MySQL: ${process.env.DB_HOST||'127.0.0.1'}:${process.env.DB_PORT||3306} / ${process.env.DB_NAME||'mundial2026_umb'}\n`));
 const stop=async()=>{server.close();await pool.end();process.exit(0)};
 process.on('SIGINT',stop);process.on('SIGTERM',stop);
}
module.exports=app;
