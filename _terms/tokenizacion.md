---
title: "Tokenización"
summary: "Proceso de dividir texto en unidades mínimas (tokens) antes de procesarlo con un modelo."
tags:
  - Fundamentos
  - Preprocesamiento
---

La **tokenización** es el proceso mediante el cual un texto en bruto se divide en unidades más pequeñas llamadas [tokens](/glosario_pln/terms/token/). Es el primer paso en casi cualquier pipeline de PLN.

## Enfoques principales

### Por palabras (word-level)
Divide el texto por espacios y puntuación. Simple, pero genera vocabularios muy grandes y no maneja bien palabras nuevas.

### Por subpalabras (subword)
El enfoque más común en modelos modernos. Divide palabras frecuentes en una sola pieza y palabras raras en fragmentos. Los algoritmos más usados son:

- **BPE** (Byte-Pair Encoding) — usado por GPT
- **WordPiece** — usado por BERT
- **Unigram** — usado por SentencePiece

### Por caracteres (char-level)
Vocabulario muy pequeño, pero las secuencias se vuelven muy largas.

## Vocabulario

El conjunto de todos los tokens posibles se llama **vocabulario**. Los modelos de lenguaje modernos suelen tener vocabularios de entre 30 000 y 100 000 tokens.
