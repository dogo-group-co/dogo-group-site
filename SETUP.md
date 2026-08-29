# Como correr el proyecto (macOS)

## Requisito

El proyecto requiere Node.js 20.19 o superior. En macOS podés instalarlo con Homebrew:

```bash
brew install node
```

Verificá la instalación:

```bash
node --version
npm --version
```

## Levantar el sitio

Desde la raíz del proyecto:

```bash
npm install
npm start
```

El sitio queda en `http://localhost:4200` con recarga automática.

## Compilar para producción

```bash
npm run build
```

El resultado queda en `dist/dogo-group-site/browser` y se puede desplegar como sitio estático en cualquier host.
