---
title: "Corpus paralelo"
summary: "Colección de textos en dos o más lenguas que son traducciones entre sí y están alineados a nivel de oración o segmento"
author: Isabel Moyano Moreno
date: 2026-06-11
tags:
  - Recursos
subtags:
  - Lingüísticos
aliases:
  - name: "Corpus bilingüe"
  - name: "Parallel corpus"
    source: "McEnery y Xiao, 2007"
  - name: "Corpus alineado"
related:
  - title: "Traducción automática"
    slug: "ta"
  - title: "Corpus"
    slug: "corpus"
first_appearance:
  title: "Los tantos intentos de la traducción automática por modelizar el lenguaje"
  url: ""
status: finished
---
# Definición
Colección de textos en dos o más lenguas que son traducciones entre sí y están alineados a nivel de oración o segmento, de modo que cada fragmento del texto original se corresponde con su equivalente en la lengua de llegada.

# Explicación

Los corpus paralelos un el recurso fundamental para la traducción automática estadística y neuronal. A diferencia de los corpus monolingües, que contienen texto en una sola lengua, los corpus paralelos permiten observar directamente las correspondencias entre lenguas: qué palabras, estructuras y construcciones se usan para expresar el mismo contenido en lenguas distintas. Estos corpus están *alineados*, en el sentido de que cada oración del texto original está emparejada con su traducción correspondiente, de modo que el sistema puede aprender qué expresiones de una lengua corresponden a qué expresiones de la otra.

Cuando a finales de los años 80 los investigadores abandonaron los enfoques simbólicos/basados en reglas para apostar por la estadística, los corpus paralelos se convirtieron en la materia prima imprescindible de este nuevo paradigma: sin textos alineados, no había datos de los que aprender. El parlamento canadiense, con sus debates publicados simultáneamente en inglés y francés desde 1957, se convertiría en uno de los recursos más explotados de la historia del PLN. Más adelante, el corpus Europarl, compilado por Philipp Koehn en 1996 a partir de los debates del Parlamento Europeo, se convertiría en un estándar del campo para poner a prueba este tipo de sistemas.

# Referencias bibliográficas
- Koehn, P. (2005). Europarl: A parallel corpus for statistical machine translation. En _Proceedings of Machine Translation Summit X_ (pp. 79–86). Phuket, Thailand.
- McEnery, T.; Xiao, R. (2007). Parallel and comparable corpora: What are they up to? En G. Anderman y M. Rogers (eds.), _Incorporating Corpora: The Linguist and the Translator_ (pp. 18–31). Multilingual Matters.