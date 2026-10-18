'use strict';
const {test}=require('node:test');
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const sql=fs.readFileSync(path.join(__dirname,'..','database','01_MUNDIAL2026_MYSQL.sql'),'utf8');
test('Export MySQL incluye 104 partidos sin IDs duplicados',()=>{
 const block=sql.split('INSERT INTO partidos')[1].split('ON DUPLICATE KEY UPDATE')[0];
 const ids=[...block.matchAll(/^\((\d+),/gm)].map(x=>Number(x[1]));
 assert.equal(ids.length,104);
 assert.deepEqual(ids,Array.from({length:104},(_,i)=>i+1));
});
test('Esquema incluye integridad relacional y tablas para guardado real',()=>{
 for(const table of ['partidos','cronicas','comentarios','suscripciones'])assert.match(sql,new RegExp('CREATE TABLE IF NOT EXISTS '+table));
 assert.match(sql,/FOREIGN KEY \(partido_id\) REFERENCES partidos\(id\)/);
 assert.match(sql,/ENGINE=InnoDB/);
});
