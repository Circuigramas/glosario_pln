---
title: "Procesamiento del lenguaje natural (PLN)"
summary: "Campo interdisciplinar que estudia cómo conseguir que las máquinas sean capaces de comprender y producir el lenguaje humano"
author: Jorge Zamora Rey
date: 2026-05-20
tags:
  - Fundamentos
subtags:
  - Disciplinas
---
# Definición
Campo interdisciplinar que estudia el desarrollo de sistemas capaces de comprender y producir lenguaje humano. Es el término más amplio del área (preferido tanto en el ámbito académico como en el industrial) y engloba dos vertientes: la lingüística computacional, orientada a la elaboración de modelos computacionales del lenguaje, y una dimensión práctica, normalmente identificada también como PLN, orientada al desarrollo de sistemas que operan con lengua natural.

# Explicación

La propia revista de la Sociedad Española de Procesamiento del Lenguaje Natural (SEPLN, sf) tiene entre sus líneas temáticas, a fecha de la redacción de esta entrada, tanto aspectos teóricos ("Teorías lingüísticas, modelado cognitivo y psicolingüística") como prácticos ("Desarrollo de recursos y herramientas lingüísticas"); lo que nos da indicios ya de esa doble vertiente del PLN. 

Al final, esta doble vertiente tiene sentido, ya que teoría y práctica se retroalimentan. La teoría proporciona hipótesis, marcos y formalismos que guían el diseño de sistemas. Por ejemplo, la noción lingüística de que el significado de una palabra depende de su contexto (distribucionalismo, Firth: "you shall know a word by the company it keeps") es la base teórica de los embeddings y de buena parte del aprendizaje automático moderno sobre lenguaje. Sin esa idea teórica previa, los sistemas habrían tardado más en ir en esa dirección.

En cuanto a la práctica, esta alimenta la teoría en cuanto a que el funcionamiento de un sistema en la práctica proporciona también datos sobre cómo es la lengua. Si un modelo estadístico entrenado en millones de textos captura regularidades gramaticales sin que nadie se las haya enseñado explícitamente, eso dice algo sobre la naturaleza del lenguaje: sobre qué es aprendible, redundante o qué estructuras son universales. Los modelos de lenguaje actuales han reabierto debates lingüísticos sobre la adquisición del lenguaje, la gramática universal, o si la sintaxis es separable de la semántica.

A continuación mostramos un diagrama sobre el procesamiento del lenguaje natural que refleja lo que explicamos:

<img src="https://circuigramas.github.io/glosario_pln/assets/img/Esquema_PLN_articulo_inaugural.png" alt="Esquema de nuestro concepto de procesamiento del lenguaje natural con ramificaciones a inicios, objetivo y aspectos prácticos y teóricos" width="1200">

Cabe destacar que las figuras con línea discontinua son algunos de los posibles ejemplos relacionados con el contenido al que están relacionados (p. ej. la traducción automática es uno de los muchos ejemplos que puede haber en "Aplicaciones").

Si continuamos con el esquema, el fin del PLN sería, como dijimos, crear sistemas capaces de usar el lenguaje humano. La consecución de este permitiría mejorar la comunicación humano-máquina (por ejemplo, cuando le pedimos a un chatbot generativo que produzca código, dándole instrucciones a la máquina mediante lenguaje natural); y la comunicación humano-humano (mediante la traducción automática, o subtitulado automático para que contenido audiovisual pueda llegar a personas con diferentes capacidades de recepción). Sin embargo, para que un sistema sea competente en lengua natural debe desarrollar dos capacidades: la comprensión, que le permite procesar e interpretar texto o voz, y la producción, que le permite generarlos. Una vez es competente, es cuando podemos pedirle que realice determinadas tareas. 

Dichas tareas serían las aplicaciones de estos sistemas. En el esquema aparecen, como dijimos, algunos ejemplos. La traducción automática sería un ejemplo de aplicación que permite mejorar la comunicación entre humanos, mientras los motores de búsqueda serían un ejemplo de sistema que nos permite interactuar con otros sistemas/máquinas en un lenguaje más cercano al humano.

Además, cabe destacar el PLN se inscribe habitualmente dentro de la inteligencia artificial, ya que algunos autores consideran que cualquier sistema, para ser inteligente, debe ser capaz de operar con el lenguaje humano (Russell y Norvig, 2022).

# También se refiere a...
- La dimensión práctica del PLN, esto es, aquella orientada al desarrollo de sistemas que operan con lengua natural, mediante la implementación de algoritmos desarrollados por la lingüística computacional y/o técnicas de otras áreas de la inteligencia artificial como la ingeniería del conocimiento o el aprendizaje automático. 

# Otras denominaciones
- Ingeniería del lenguaje
- Ingeniería lingüística
- Lingüística computacional (Schubert, 2014)

# Términos relacionados
- [Lingüística computacional](https://circuigramas.github.io/glosario_pln/lc/)

# Artículo de Circuigramas donde aparece por primera vez
[¿Qué es el Procesamiento del Lenguaje Natural?](

# Referencias bibliográficas
- ACL. (sf). _What is the ACL and what is Computational Linguistics?_. [https://www.aclweb.org/portal/what-is-cl](https://www.aclweb.org/portal/what-is-cl) (20/06/2026, 17:15)
- Russell, S. y Norvig, P. (2022). _Artificial Intelligence: A Modern Approach_. Pearson.
- Schubert, L. \[Lenhart] (2014). Computational Linguistics. _Stanford Encyclopedia of Philosohy_. Recuperado de [https://plato.stanford.edu/entries/computational-linguistics/](https://plato.stanford.edu/entries/computational-linguistics/) (20/05/2026, 17:00)
- SEPLN. (sf). _La Revista: Temáticas de la Revista_. Recuperado de [https://www.sepln.org/la-revista](https://www.sepln.org/la-revista) (20/05/2026, 17:40)

