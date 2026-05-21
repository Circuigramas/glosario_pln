# Glosario de Circuigramas

Glosario de términos relacionados con los artículos de Circuigramas, publicado en GitHub Pages.

Visita el sitio: https://circuigramas.github.io/glosario_pln/

---

## Tags/temas que trata el glosario
- Fundamentos (definiciones de áreas o de términos específicos de PLN o LC)
- Matemáticas (definiciones de conceptos matemáticos)
- Informática (definiciones de conceptos de la informática: hardware, SO, etc.)

---

## Cómo agregar una nueva entrada

1. Crea un archivo `.md` dentro de la carpeta `_terms/`. El nombre del archivo será la URL del término (por ejemplo, `redes_neuronales.md` → `/terms/redes_neuronales/`). Si el nombre tiene más de una palabra, usa `_` para separar las palabras.

2. Agrega el bloque de metadatos al inicio del archivo (ver estructura completa más abajo).

3. Debajo del bloque de metadatos, escribe el contenido en Markdown.

4. Guarda el archivo, haz commit y push a `main`. GitHub Pages publicará el cambio automáticamente.

---

## Estructura completa de los metadatos

```yaml
---
title: "Nombre del término"
summary: "Definición breve de una o dos oraciones."
author: Tu Nombre
date: AAAA-MM-DD
status: working          # working = no aparece en el glosario | finished = visible
tags:
  - TagPrincipal
subtags:                 # opcional
  - Subtema1
aliases:                 # opcional — otras formas de nombrar el término (permiten buscarlo)
  - name: "Otro nombre"
    source: "Autor, año" # opcional
related:                 # opcional — términos relacionados con enlace a su página
  - title: "Nombre del término"
    slug: "nombre-del-archivo-sin-extension"
first_appearance:        # opcional — artículo donde aparece por primera vez
  title: "Título del artículo"
  url: "https://..."
---
```

**Notas:**
- Un término solo aparece en el glosario cuando tiene `status: finished`. Mientras está en `working`, se puede acceder a él por URL directa pero no aparece en el listado.
- El campo `summary` es la descripción que aparece en la tarjeta del índice.
- Los `aliases` permiten que el término se encuentre al buscar por cualquiera de esas denominaciones alternativas. No aparecen en las tarjetas del índice.
- El `slug` de `related` es el nombre del archivo `.md` sin la extensión (por ejemplo, `lc` para `lc.md`).

---

## Secciones del cuerpo de una entrada

El cuerpo se escribe en Markdown, debajo del bloque de metadatos. La estructura recomendada es la misma que usa la entrada de PLN:

```markdown
# Definición
Texto con la definición formal del término.

# Explicación
Desarrollo más extenso, contexto, ejemplos, conexiones con otros conceptos.

# También se refiere a...
## 1
Descripción de un uso o sentido alternativo del término.

# Referencias bibliográficas
- Autor, A. (año). _Título_. Editorial.
- Autor, B. (año). Título del artículo. _Revista_, vol(núm), pp. URL
```

---

## Cómo añadir imágenes

Sube la imagen a `assets/img/` y referénciala en el cuerpo con HTML para tener control del tamaño:

```html
<img src="https://circuigramas.github.io/glosario_pln/assets/img/nombre_imagen.png"
     alt="Descripción de la imagen"
     width="1200">
```

La imagen se centrará y ajustará automáticamente al ancho del contenedor.

También puedes usar la sintaxis Markdown estándar si no necesitas controlar el tamaño:

```markdown
![Descripción de la imagen](/assets/img/nombre_imagen.png)
```

---

## Cómo añadir enlaces

**Enlace externo:**
```markdown
[Texto del enlace](https://url-externa.com)
```

**Enlace a otro término del glosario:**
```markdown
[Lingüística computacional](https://circuigramas.github.io/glosario_pln/terms/lc/)
```

O usa el campo `related` en los metadatos para que aparezca como «Véase también» en la página del término.
