# Cómo correr el proyecto (Mac)

Guía para levantar el sitio en local en macOS, incluso si nunca instalaste PHP.

## Qué necesitás

- **PHP 8.3 o superior** (con Composer)
- **Node.js 20 o superior** (con npm)

Si ya tenés las dos cosas, saltá directo a [Levantar el proyecto](#levantar-el-proyecto).

## Si no tenés PHP: instalá Laravel Herd (recomendado)

[Laravel Herd](https://herd.laravel.com) es una app de Mac que instala PHP, Composer y Node.js sin tocar nada de configuración. Es gratis y es la forma más simple.

1. Descargá Herd desde [herd.laravel.com](https://herd.laravel.com) y arrastralo a Aplicaciones.
2. Abrilo una vez para que termine la instalación.
3. Cerrá y volvé a abrir la terminal, y verificá:

```bash
php -v && composer -V && node -v
```

Deberías ver PHP 8.3+, Composer y Node 20+.

### Alternativa: Homebrew

Si preferís no usar Herd, podés instalar todo con [Homebrew](https://brew.sh):

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

```bash
brew install php composer node
```

## Levantar el proyecto

Desde la raíz del proyecto, un solo comando instala dependencias de PHP y de Node, crea el `.env`, genera la clave de la app, corre las migraciones (usa SQLite, no hay que instalar ninguna base de datos) y compila el frontend:

```bash
composer run setup
```

Después levantá el servidor de desarrollo (app + Vite con hot reload):

```bash
composer run dev
```

El sitio queda en **http://localhost:8000**.

## Panel de administración

Hay un panel de Filament en **http://localhost:8000/admin**. Si necesitás un usuario, crealo con:

```bash
php artisan make:filament-user
```

## Comandos útiles

| Comando | Qué hace |
| --- | --- |
| `composer run dev` | Levanta app + Vite en modo desarrollo |
| `composer run test` | Corre lint, análisis estático y tests |
| `composer run lint` | Formatea el código PHP (Pint) |
| `npm run lint` | Lint del frontend (ESLint) |
| `php artisan migrate` | Corre migraciones pendientes |

## Problemas comunes

- **`composer: command not found`** → cerrá y volvé a abrir la terminal después de instalar Herd/Homebrew.
- **Error de versión de PHP** → el proyecto necesita PHP 8.3+. Con Herd podés cambiar la versión desde el ícono de la barra de menú; con Homebrew: `brew install php@8.4 && brew link php@8.4`.
- **Falla la migración por la base de datos** → creá el archivo de SQLite a mano y reintentá:

```bash
touch database/database.sqlite && php artisan migrate
```
