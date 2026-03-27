---
title: "Modelo de Lenguaje"
summary: "Modelo que aprende la distribución de probabilidad de secuencias de texto en un idioma."
tags:
  - Modelos
  - Fundamentos
  - Estadística
---

Un **modelo de lenguaje** (LM, del inglés *Language Model*) es un sistema que aprende a asignar probabilidades a secuencias de tokens. En su forma más simple, responde la pregunta: *¿qué tan probable es esta oración en este idioma?*

## Tarea de predicción

La forma más común de entrenar un modelo de lenguaje es pedirle que prediga el siguiente token dado un contexto:

```
P(wₙ | w₁, w₂, ..., wₙ₋₁)
```

Al optimizar esta tarea sobre millones de textos, el modelo aprende gramática, hechos del mundo y razonamiento de forma implícita.

## Tipos

- **N-gramas** — modelos estadísticos clásicos que solo consideran los *n* tokens anteriores.
- **RNN / LSTM** — redes recurrentes que procesan la secuencia de forma secuencial.
- **Transformers** — arquitectura dominante desde 2017. Procesa todos los tokens en paralelo usando mecanismos de atención.

## Modelos de lenguaje grandes (LLMs)

Los **LLMs** (*Large Language Models*) como GPT-4 o LLaMA son modelos de lenguaje entrenados con cantidades masivas de datos y parámetros. Pueden generar texto coherente, responder preguntas, traducir y razonar sobre problemas complejos.
