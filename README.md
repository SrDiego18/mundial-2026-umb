# MUNDIAL 2026 · COLOMBIA EN NORTEAMÉRICA — VERSIÓN MYSQL

**Proyecto académico — Universidad Manuela Beltrán · Semillero UMB SOFT · Ingeniería Web**

**Autores del proyecto anterior:** Diego Hernán Romero, Axel Lozano y Felipe Rincón.

Repositorio de referencia: https://github.com/SrDiego18/mundial-2026-umb

## Qué contiene esta versión

Es una **nueva versión autocontenida** del sitio Mundial 2026, con interfaz renovada y 104 resultados recuperados de la versión anterior, pero con arquitectura de **tres capas**: interfaz HTML/CSS/JavaScript, servidor Node.js/Express y base de datos MySQL 8. Incluye navegación responsive, buscador, filtros, favoritos locales, exportación CSV, clasificación de grupos, estadísticas, crónicas cargadas desde la BD, formulario que guarda comentarios, y panel administrativo con autenticación para moderar comentarios y editar crónicas.

**Importante:** esta carpeta es un proyecto completo e independiente. No reemplaza ni actualiza automáticamente el repositorio de GitHub. La integración con el repositorio existente se hará después de verificar que todo funciona localmente.

## Requisitos del computador

- Windows 10/11, Visual Studio Code.
- Node.js 20 o superior (ideal 22 LTS) y npm; `node --version`, `npm --version`.
- MySQL Server 8.0.16+ instalado y en ejecución.
- MySQL Workbench para importar el archivo SQL.

## Instalación paso a paso (Windows)

**1. Abre la carpeta del ZIP en VS Code.** Debe verse `package.json` directamente en la raíz. NO abras solo `public/`.

**2. Inicia MySQL Server y abre MySQL Workbench.** Conecta con tu instancia local, por ejemplo `Local instance MySQL80`.

**3. Carga el SQL en MySQL Workbench.** Ve a `File > Open SQL Script`, abre `database/01_MUNDIAL2026_MYSQL.sql`, pulsa el icono del **rayo** (ejecutar todo). El script crea `mundial2026_umb`, cuatro tablas y 104 partidos, más cinco crónicas. No elimina otras bases de datos.

**4. Comprueba la importación.** Abre `database/02_CONSULTAS_DE_PRUEBA.sql` en Workbench y ejecuta las consultas; la primera debe devolver **104**.

**5. Abre la terminal de VS Code (Ctrl+Ñ o Terminal > New Terminal).** Escribe:

```powershell
Copy-Item .env.example .env
```

Abre `.env` y cambia **DB_PASSWORD** por la contraseña REAL que usas en MySQL Workbench. Si tu usuario es diferente de `root`, cambia **DB_USER**. Define también una contraseña propia y larga en **ADMIN_PASSWORD** y el nombre de usuario en **ADMIN_USER**, si quieres cambiarlo. No subas `.env` a GitHub.

Ejemplo orientativo (no pegues contraseñas de ejemplo sin cambiarlas):

```ini
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=TU_CLAVE_REAL_MYSQL
DB_NAME=mundial2026_umb
ADMIN_USER=admin
ADMIN_PASSWORD=TU_CLAVE_SEGURA_DISTINTA
PORT=3000
```

**6. Instala dependencias:**

```powershell
npm install
```

**7. Verifica la conexión:**

```powershell
npm run db:check
```

Debe mostrar `✓ Conexión: OK | 104 partidos`.

**8. Inicia el sitio:**

```powershell
npm start
```

Abre en Chrome o Edge:

- Sitio: **http://localhost:3000**
- Panel: **http://localhost:3000/admin.html**
- Estado de BD: **http://localhost:3000/api/health**

Con el proyecto ya instalado, también puedes iniciarlo desde `INICIAR_WINDOWS.bat`. Para detenerlo, pulsa `Ctrl+C` en la terminal.

## Demostración recomendada para el profesor

1. Inicio → métricas desde MySQL.
2. Partidos → escribe Colombia, cambia fase y grupo, abre un partido y guárdalo como favorito.
3. Grupos → selecciona K y explica el cálculo de puntos.
4. Estadísticas → muestra las barras alimentadas por la BD.
5. Comunidad → escribe un comentario válido y observa cómo queda guardado.
6. MySQL Workbench → ejecuta `SELECT * FROM mundial2026_umb.comentarios ORDER BY id DESC;` para comprobar la persistencia.
7. Admin → inicia sesión, oculta/publica el comentario, crea o edita una crónica. Revisa los cambios desde el sitio.

## Estructura del proyecto

```
public/
  index.html                # Pestañas y pantallas públicas
  admin.html                # Panel de administración
  assets/css/styles.css     # Diseño responsive
  assets/js/app.js          # Eventos, vistas, filtros, consumo de API
  assets/js/admin.js        # Edición y moderación
  assets/img/*.svg          # Ilustraciones locales y favicon
server/
  app.js                    # Controlador HTTP y endpoints Express
  db.js                     # Pool MySQL
  services.js               # Consultas y operaciones parametrizadas
  logic.js                  # Validación y reglas de negocio
  check-db.js               # Diagnóstico de conexión
 database/
  01_MUNDIAL2026_MYSQL.sql  # Esquema, 104 partidos y 5 crónicas
  02_CONSULTAS_DE_PRUEBA.sql
 tests/                     # Pruebas de lógica y dataset
 .env.example               # Configuración de ejemplo sin secretos
 package.json
 INICIAR_WINDOWS.bat
```

## Problemas más comunes

| Error | Revisión rápida |
|---|---|
| `ECONNREFUSED` | Inicia el servicio MySQL80 y verifica puerto 3306. |
| `ER_ACCESS_DENIED_ERROR` | Corrige `DB_USER` / `DB_PASSWORD` en `.env`. |
| `ER_BAD_DB_ERROR` | Ejecuta completo el SQL de instalación en Workbench. |
| `ER_NO_SUCH_TABLE` | Reimporta `01_MUNDIAL2026_MYSQL.sql`. |
| `npm` no reconocido | Instala Node.js LTS, reinicia VS Code. |
| Puerto 3000 ocupado | Cambia `PORT=3001` en `.env` y abre localhost:3001. |
| Panel no deja entrar | Define una clave real en `ADMIN_PASSWORD` y reinicia `npm start`. |

## Pruebas disponibles

```
npm run check
npm test
npm run db:check
```

`npm run check` revisa la sintaxis JavaScript; `npm test` prueba la clasificación, validaciones y semillas de 104 partidos. **`npm run db:check` debe correrse con MySQL activo**; el servidor de base de datos no se incluye en el ZIP.

## Publicación y límites

**GitHub Pages solo admite archivos estáticos; NO ejecuta Node.js ni aloja MySQL.** La versión pública anterior puede seguir funcionando como sitio estático. Para publicar esta versión con funciones de base de datos, se necesita un hosting para Node.js y un servicio MySQL, además de configurar variables de entorno. No publiques credenciales en GitHub.

**Seguridad de demostración:** el panel usa cookie HTTP-only y sesiones en memoria, validación de origen y limitación básica de intentos. Está pensado para la sustentación académica local; antes de hacer un despliegue público se recomienda autenticación profesional, HTTPS y revisión adicional de seguridad.

**Nota editorial:** los resultados y crónicas iniciales se basan en el dataset y material del proyecto previo. Las crónicas son análisis académicos, no publicaciones oficiales de FIFA; las tablas de grupos se calculan usando puntos, diferencia de gol y goles marcados, sin cubrir todos los criterios de desempate oficiales.
