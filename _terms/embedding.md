---
title: "Embedding"
summary: "Representación vectorial densa de una palabra o texto que captura su significado semántico."
tags:
  - Representación
  - Álgebra Lineal
---

Un **embedding** es un vector de números reales que representa una palabra, token o fragmento de texto en un espacio de alta dimensión. La idea central es que palabras con significados similares tengan vectores cercanos entre sí.

## ¿Cómo se aprenden?

Los embeddings se aprenden durante el entrenamiento de un modelo. El modelo ajusta los vectores para que sean útiles para la tarea (predecir la siguiente palabra, clasificar texto, etc.).

Modelos clásicos como **Word2Vec** y **GloVe** producen embeddings estáticos: cada palabra siempre tiene el mismo vector. Los modelos modernos como **BERT** producen embeddings contextuales: el vector de una palabra cambia según la oración.

## Propiedades algebraicas

Los embeddings capturan relaciones semánticas de forma algebraica. El ejemplo clásico:

```
vector("rey") - vector("hombre") + vector("mujer") ≈ vector("reina")
```

Esto sugiere que la diferencia entre vectores puede representar relaciones como género, conjugación verbal, etc.

## Dimensiones

Un embedding típico tiene entre 128 y 4096 dimensiones. Más dimensiones permiten representar conceptos más complejos pero aumentan el costo computacional.
