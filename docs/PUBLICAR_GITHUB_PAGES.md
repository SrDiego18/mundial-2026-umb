# Publicar en GitHub Pages

Este proyecto es estático: HTML + CSS + JavaScript. Por eso GitHub Pages es suficiente y permite abrir la web desde computador, iPad o celular.

## 1. Abrir la carpeta correcta en Visual Studio Code

Debes abrir la carpeta:

```text
Mundial_2026_UMB_Premium
```

En VS Code debe verse `index.html` en la raíz.

## 2. Verificar Git

En la terminal de VS Code:

```powershell
git --version
```

Si aparece una versión de Git, continúa.

## 3. Inicializar el repositorio local

```powershell
git init
git add .
git commit -m "feat: proyecto interactivo Mundial 2026 UMB"
git branch -M main
```

## 4. Crear el repositorio en GitHub

En GitHub:

1. Pulsa **New repository**.
2. Nombre sugerido:

```text
mundial-2026-umb
```

3. Selecciona **Public**.
4. NO marques `Add a README`, porque el proyecto ya contiene uno.
5. Crea el repositorio.

## 5. Conectar VS Code con GitHub

Cambia `TU_USUARIO` por tu usuario real:

```powershell
git remote add origin https://github.com/TU_USUARIO/mundial-2026-umb.git
git push -u origin main
```

Si GitHub abre una ventana de autorización, inicia sesión y aprueba.

## 6. Activar GitHub Pages

Dentro del repositorio:

```text
Settings
→ Pages
→ Build and deployment
→ Source: Deploy from a branch
→ Branch: main
→ Folder: / (root)
→ Save
```

Después de uno o dos minutos GitHub mostrará una URL parecida a:

```text
https://TU_USUARIO.github.io/mundial-2026-umb/
```

Esa dirección se puede abrir desde:

- iPhone;
- Android;
- iPad;
- tablet Android;
- computador.

## 7. Actualizar la web después

Cada vez que cambies código:

```powershell
git add .
git commit -m "style: mejorar diseño responsive"
git push
```

GitHub Pages actualizará la web automáticamente.

## 8. Probar en un iPad o celular real

1. Copia la URL de GitHub Pages.
2. Envíatela por WhatsApp o correo.
3. Ábrela en Safari o Chrome desde el dispositivo.
4. Revisa:
   - pestañas horizontales;
   - textos;
   - fotografías;
   - crónicas;
   - resultados;
   - formulario;
   - orientación vertical y horizontal.

## 9. Añadir a la pantalla de inicio en iPad/iPhone

En Safari:

```text
Compartir
→ Añadir a pantalla de inicio
```

El proyecto incluye `site.webmanifest` y configuración móvil para mejorar esa experiencia.
