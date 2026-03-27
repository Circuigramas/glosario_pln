---
title: "Token"
summary: "Unidad mínima de texto que procesa un modelo de lenguaje."
tags:
  - Fundamentos
  - Modelos
---

Un **token** es la unidad mínima en que un modelo de lenguaje divide el texto antes de procesarlo. Dependiendo del tokenizador, un token puede ser:

- Una palabra completa (`casa`, `perro`)
- Una subpalabra (`un##iversidad`, `##ción`)
- Un carácter individual (`a`, `3`, `!`)
- Un símbolo especial (`[CLS]`, `[SEP]`, `<|endoftext|>`)

## ¿Por qué importa?

Los modelos no operan sobre texto crudo sino sobre secuencias de tokens representados como números enteros. La cantidad de tokens en un texto determina el costo computacional y si el texto cabe dentro del **contexto** del modelo.

## Ejemplo

La oración `"No entiendo"` podría tokenizarse como:

| Token     | ID  |
|-----------|-----|
| `No`      | 312 |
| `enti`    | 876 |
| `##endo`  | 201 |

Nota que `"entiendo"` se dividió en dos subpalabras.
