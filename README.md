# Glosario de PLN de Circuigramas

Glosario de términos relacionados con el Procesamiento del Lenguaje Natural, publicado en GitHub Pages.

Visita el sitio: https://circuigramas.github.io/glosario_pln/

---

## Tecnologías utilizadas

- **Jekyll** — generador de sitios estáticos que convierte los archivos Markdown en páginas HTML.
- **GitHub Pages** — servicio de alojamiento gratuito que publica el sitio automáticamente con cada cambio en la rama `main`.
- **jekyll-seo-tag** — plugin que añade metadatos de SEO a cada página.
- **Kramdown con GFM** — procesador de Markdown que permite formato extendido al estilo GitHub.

---

## Cómo agregar una nueva entrada

1. Crea un archivo `.md` dentro de la carpeta `_terms/`. El nombre del archivo será la URL del término (por ejemplo, `redes-neuronales.md` → `/terms/redes-neuronales/`).

2. Agrega el siguiente bloque de metadatos al inicio del archivo (front matter):

```yaml
---
title: "Nombre del término"
summary: "Definición breve de una o dos oraciones."
author: Tu Nombre
date: AAAA-MM-DD
tags:
  - Etiqueta1
  - Etiqueta2
---
```

3. Debajo del front matter, escribe el contenido de la entrada en Markdown.

4. Guarda el archivo, haz commit y push a la rama `main`. GitHub Pages publicará el cambio automáticamente en unos segundos.

### Ejemplo mínimo

```markdown
---
title: "Token"
summary: "Unidad mínima de texto que un modelo de lenguaje procesa."
author: Jorge Zamora Rey
date: 2026-04-16
tags:
  - Fundamentos
---

Un **token** puede ser una palabra, una sílaba o incluso un carácter, dependiendo del tokenizador utilizado.
```
