Prueba Técnica OLSoftware

Al ser una aplicación React, es necesario tener instalado Node.js en el equipo para poder ejecutarla (lo puedes encontrar aquí: https://nodejs.org/en/ es preferible descargar la versión LTS).
Una vez descargado el proyecto, navega hasta el directorio "reactapp" del proyecto desde una terminal (ej. CMD de windows).
Ejecuta el comando "npm install" para instalar todas las dependecias/librerias que requiere el proyecto.

Para correr el aplicativo (versión de desarrollo, sin optimizar):

Navega hasta el directorio "reactapp" del proyecto desde una terminal (ej. CMD de windows).
Ejecuta el comando "npm start" para iniciar la versión de desarrollo del aplicativo (es una build no optimizada del aplicativo, pero te permitirá ver en tiempo real los cambios que se realicen al código).

Si deseas ejecutar una build optimizada del aplicativo (versión de producción):

Desde una terminal y estando en el directorio "reactapp" ejecuta "npm run build" para compilar una build de producción (será necesario cada vez que cambies el codigo del aplicativo).
Ejecuta el comando "npm install -g serve" para instalar un server estático para hostear el aplicativo (solo será necesario la primera vez).
Ejecuta el comando "serve -s build" para hostear la build compilada.
Podrás ver el aplicativo ingresando la ruta "http://localhost:5000" en tu navegador favorito (recomandado Google Chrome).
