@echo off
cd /d "%~dp0"
echo =======================================
echo  MUNDIAL 2026 UMB + MYSQL
 echo =======================================
if not exist .env (
  echo Primero crea el archivo .env copiando .env.example y escribe tu clave MySQL.
  pause
  exit /b 1
)
if not exist node_modules (
  echo Instalando dependencias Node.js...
  call npm install
  if errorlevel 1 (pause & exit /b 1)
)
echo Iniciando aplicacion... Abre http://localhost:3000
call npm start
pause
