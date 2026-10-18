/** Panel administrativo: login con sesión HTTP-only, moderación y CRUD de crónicas. */
'use strict';
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let articles=[];
async function api(path,options={}){
 const res=await fetch(path,{cache:'no-store',...options,headers:{...options.headers}});let data;
 try{data=await res.json()}catch{throw Error('Respuesta no válida del servidor.')}if(!res.ok)throw Error(data.error||'Error de operación');return data;
}
function jsonOptions(data,method='POST'){return {method,headers:{'Content-Type':'application/json'},body:JSON.stringify(data)}}
function showWorkspace(active){$('#loginSection').hidden=active;$('#adminWorkspace').hidden=!active;if(active){loadComments();loadStories()}}
async function login(e){e.preventDefault();const u=$('#adminUser').value,p=$('#adminPass').value;$('#loginMessage').textContent='Validando credenciales...';try{await api('/api/admin/login',jsonOptions({usuario:u,password:p}));$('#loginMessage').textContent='';$('#adminPass').value='';showWorkspace(true)}catch(err){$('#loginMessage').textContent=err.message}}
async function logout(){try{await api('/api/admin/logout',{method:'POST'})}catch{}showWorkspace(false)}
function adminTab(tab){$$('[data-admin-tab]').forEach(el=>el.classList.toggle('is-active',el.dataset.adminTab===tab));$('#moderacionPanel').hidden=tab!=='moderacion';$('#editorialPanel').hidden=tab!=='editorial'}
function $$(s){return [...document.querySelectorAll(s)]}
async function loadComments(){try{const d=await api('/api/admin/comentarios');$('#adminComments').innerHTML=d.items.length?d.items.map(c=>`<article class="admin-comment"><div><div class="admin-comment__top"><strong>${esc(c.nombre)}</strong><span>${esc(c.creadoEn)}</span><span class="state-chip ${c.estado==='visible'?'state-chip--active':''}">${esc(c.estado)}</span></div><small>${esc(c.correo)} · ${esc(c.favorito)}</small><p>${esc(c.mensaje)}</p></div><div class="admin-comment__actions"><button type="button" class="btn btn--sm btn--outline-dark" data-comment-state="${c.id}" data-next-state="${c.estado==='visible'?'oculto':'visible'}">${c.estado==='visible'?'OCULTAR':'MOSTRAR'}</button><button type="button" class="btn btn--sm btn--danger" data-comment-delete="${c.id}">ELIMINAR</button></div></article>`).join(''):'<div class="empty-state">No hay comentarios registrados. Publica uno desde Comunidad.</div>'}catch(err){$('#adminComments').textContent=err.message}}
async function loadStories(){try{const d=await api('/api/cronicas');articles=d.items;$('#adminStories').innerHTML=articles.length?articles.map(c=>`<article class="admin-story-item"><div><span>${esc(c.etiqueta)} · #${c.id}</span><h4>${esc(c.titulo)}</h4></div><div><button type="button" class="text-action" data-edit-story="${c.id}">EDITAR</button><button type="button" class="text-action text-action--danger" data-delete-story="${c.id}">ELIMINAR</button></div></article>`).join(''):'<p>Aún no hay crónicas.</p>'}catch(err){$('#adminStories').textContent=err.message}}
function resetEditor(){$('#storyForm').reset();$('#storyId').value='';$('#storyTag').value='Análisis académico';$('#editorTitle').textContent='Nueva crónica';$('#storyMessage').textContent=''}
function editStory(id){const d=articles.find(s=>s.id===id);if(!d)return;$('#storyId').value=d.id;$('#storyTitle').value=d.titulo;$('#storySubtitle').value=d.subtitulo;$('#storyMatch').value=d.partidoId||'';$('#storyTag').value=d.etiqueta;$('#storyBody').value=d.cuerpo;$('#storyFeatured').checked=!!d.destacado;$('#editorTitle').textContent='Editar crónica #'+d.id;$('#storyForm').scrollIntoView({behavior:'smooth',block:'start'})}
async function submitStory(e){e.preventDefault();const id=$('#storyId').value;const data={titulo:$('#storyTitle').value,subtitulo:$('#storySubtitle').value,cuerpo:$('#storyBody').value,etiqueta:$('#storyTag').value,partidoId:$('#storyMatch').value||null,destacado:$('#storyFeatured').checked};$('#storyMessage').textContent='Guardando en MySQL...';try{await api(id?'/api/admin/cronicas/'+id:'/api/admin/cronicas',jsonOptions(data,id?'PUT':'POST'));resetEditor();$('#storyMessage').textContent='✓ Crónica guardada correctamente';await loadStories()}catch(err){$('#storyMessage').textContent=err.message}}
async function init(){
 $('#loginForm').addEventListener('submit',login);$('#logoutButton').addEventListener('click',logout);$('#refreshComments').addEventListener('click',loadComments);$('#storyForm').addEventListener('submit',submitStory);$('#clearStoryForm').addEventListener('click',resetEditor);
 document.addEventListener('click',async(e)=>{
  const tab=e.target.closest('[data-admin-tab]');if(tab)return adminTab(tab.dataset.adminTab);
  const edit=e.target.closest('[data-edit-story]');if(edit)return editStory(Number(edit.dataset.editStory));
  const state=e.target.closest('[data-comment-state]');if(state){try{await api('/api/admin/comentarios/'+state.dataset.commentState,jsonOptions({estado:state.dataset.nextState},'PATCH'));await loadComments()}catch(err){alert(err.message)}return}
  const del=e.target.closest('[data-comment-delete]');if(del){if(!confirm('¿Eliminar este comentario de forma permanente?'))return;try{await api('/api/admin/comentarios/'+del.dataset.commentDelete,{method:'DELETE'});await loadComments()}catch(err){alert(err.message)}return}
  const storyDel=e.target.closest('[data-delete-story]');if(storyDel){if(!confirm('¿Eliminar esta crónica de la base de datos?'))return;try{await api('/api/admin/cronicas/'+storyDel.dataset.deleteStory,{method:'DELETE'});await loadStories();resetEditor()}catch(err){alert(err.message)}}
 });
 try{await api('/api/admin/me');showWorkspace(true)}catch{showWorkspace(false)}
}
document.addEventListener('DOMContentLoaded',init);
