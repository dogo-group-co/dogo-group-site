# Identidad Dogo Group — v1

Marca de mazos de cartas para aprender idiomas. Primer mazo: Chino 中文.
Tagline: **«Un idioma, carta a carta.»**

## Color

| Nombre     | Hex       | Uso                                        |
| ---------- | --------- | ------------------------------------------ |
| Tinta      | `#111111` | Texto y fondos oscuros                     |
| Papel      | `#FAFAF7` | Fondo base                                 |
| Rojo sello | `#C8102E` | Acento — se usa poco: **un acento por pieza** |

Colores de apoyo (UI):

| Nombre     | Hex       | Uso                          |
| ---------- | --------- | ---------------------------- |
| Rojo oscuro| `#7A1220` | Hover de links / rojo sello  |
| Piedra     | `#8A877E` | Texto secundario suave       |
| Niebla     | `#6E6B63` | Texto secundario             |
| Línea      | `#E5E2DA` | Bordes y divisores           |

Todo lo demás vive en tinta sobre papel. Selección de texto: fondo rojo sello, texto blanco.

## Tipografía

| Fuente                  | Peso        | Uso                  |
| ----------------------- | ----------- | -------------------- |
| Anta                    | 400         | Marca y titulares    |
| Lato                    | 400 / 700   | Texto de las cartas  |
| Noto Sans SC            | 400         | Caracteres chinos (fallback: PingFang SC) |
| Inter                   | 400         | Pinyin              |

Google Fonts: `Anta`, `Inter:400`, `Lato:400,700`, `Noto Sans SC:400`.

En el código (Tailwind, `resources/css/app.css`): `font-anta`, `font-lato`, `font-hanzi`, `font-inter`,
y colores `ink`, `paper`, `seal`, `seal-dark`, `stone`, `mist`, `line`.

## Logotipo

- La «D» siempre dentro de su bloque.
- Un solo color por aplicación: negro, blanco o rojo.
- Sin sombras ni degradados.
- Variantes: principal (blanco sobre tinta), sobre fondo claro (invertido), sobre rojo sello.
- Archivo: `public/images/logo.svg`.

## La carta

- Anverso — español: ilustración + palabra en Lato.
- Reverso — chino · pinyin: caracteres en Noto Sans SC + pinyin en Inter.
- Las dos caras en papel, tinta para el texto. El rojo queda para la marca y el empaque.
- Proporción de referencia: 288 × 480, borde `#E5E2DA`, radio 20px.
- Ilustración de ejemplo: `public/images/leon.png`.

## Producto

- Mazo Animales: 20 cartas · español, chino y pinyin · $ 450 (UYU).
- Pedidos y personalizaciones por WhatsApp.
