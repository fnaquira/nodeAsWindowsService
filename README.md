# Script para instalar node como servicio Windows

Para ejecutar, debe instalarse node-windows globalmente

```
npm install -g node-windows
```

Luego, se debe vincular el módulo al proyecto (esto debe hacerse en la carpeta del código)

```
npm link node-windows
```

Finalmente, modificar el archivo **service.js** y ejecutar para instalar el servicio:

```
node service.js
```
