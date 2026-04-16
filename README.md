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

1. Crea un archivo `.md` dentro de la carpeta `_terms/`. El nombre del archivo será la URL del término (por ejemplo, `redes_neuronales.md` → `/terms/redes_neuronales/`).
   
3. Tienes que especificar en el nombre del archivo, si lo haces directamente desde Github, que es `.md`. También, si tiene más de una palabra el término, podéis usar `_` para separar las palabras en el NOMBRE DEL ARCHIVO.

4. Agrega el siguiente bloque de metadatos al inicio del archivo:

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
Nótese que en el `title` no hace falta usar `_`.

3. Debajo del encabezado de los metadatos, escribe el contenido de la entrada en markdown.

4. Guarda el archivo, haz commit y push a la rama `main`. GitHub Pages publicará el cambio automáticamente en unos segundos.

Nota: los tags serán los filtros disponibles en la página, así que intenta usar únicamente 1, o los más necesarios. El `summary` será
la breve descripción o definición que aparezca en la vista previa de la entrada del término.

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
