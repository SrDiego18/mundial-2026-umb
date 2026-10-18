'use strict';
const {test}=require('node:test');
const assert=require('node:assert/strict');
const {construirClasificacion,validarComentario,validarCronica,limitarNumero}=require('../server/logic');
test('La clasificación suma puntos, goles y resultados correctos',()=>{
 const matches=[{fase:'Fase de grupos',grupo:'K',local:'Colombia',visitante:'Portugal',goles_local:2,goles_visitante:1},{fase:'Fase de grupos',grupo:'K',local:'Portugal',visitante:'Ghana',goles_local:1,goles_visitante:1},{fase:'Final',grupo:null,local:'Colombia',visitante:'Portugal',goles_local:4,goles_visitante:0}];
 const t=construirClasificacion(matches,'K');assert.equal(t.length,3);assert.equal(t[0].equipo,'Colombia');assert.equal(t[0].pts,3);assert.equal(t[0].dg,1);assert.equal(t[1].pts,1);assert.equal(t[2].pts,1);
});
test('Grupo vacío retorna tabla vacía',()=>assert.deepEqual(construirClasificacion([],'J'),[]));
test('Los campos de comentarios deben validar',()=>{
 assert.ok(validarComentario({nombre:'A',correo:'x',favorito:'Colombia',mensaje:'Hola'}).error);
 const d=validarComentario({nombre:'Ana',correo:'ana@example.com',favorito:'Colombia',mensaje:'Un gran partido para recordar.'});assert.equal(d.data.nombre,'Ana');
 assert.ok(validarComentario(null).error);
});
test('La creación de crónicas exige título, cuerpo y partido válido',()=>{
 assert.ok(validarCronica({titulo:'Muy corto',subtitulo:'Breve',cuerpo:'Mal'}).error);
 const d=validarCronica({titulo:'Partido muy emocionante',subtitulo:'Análisis de la jornada',cuerpo:'Más de treinta caracteres para el contenido del artículo.',partidoId:62,destacado:true});assert.equal(d.data.partidoId,62);assert.equal(d.data.destacado,1);
 assert.ok(validarCronica({titulo:'Partido muy emocionante',subtitulo:'Análisis de la jornada',cuerpo:'Más de treinta caracteres para el contenido del artículo.',partidoId:200}).error)
});
test('Límites de paginación',()=>{
 assert.equal(limitarNumero('15',12,1,48),15);assert.equal(limitarNumero('500',12,1,48),12);assert.equal(limitarNumero('NaN',12,1,48),12);
});
