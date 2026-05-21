---
layout: default
title: Glosario PLN
permalink: /
---

<div class="search-bar">
  <input type="search" id="search" placeholder="Buscar término..." autocomplete="off" />
</div>

<div class="tag-filters" id="tag-filters">
  <button class="tag-btn active" data-tag="">Todos</button>
  {% assign finished_terms = site.terms | where: "status", "finished" %}
  {% assign all_tags = finished_terms | map: "tags" | join: "," | split: "," | uniq | sort %}
  {% for tag in all_tags %}
    <button class="tag-btn" data-tag="{{ tag | escape }}">{{ tag }}</button>
  {% endfor %}
</div>

<div id="subtag-filters" class="subtag-filters" style="display:none">
  <select id="subtag-select">
    <option value="">Todos los subtemas</option>
  </select>
  <select id="author-select">
    <option value="">Todos los autores</option>
  </select>
</div>

<div class="list-container">
  <p class="count" id="count"></p>
  <div id="results"></div>
</div>

<script id="terms-data" type="application/json">
[
  {% assign sorted_terms = site.terms | where: "status", "finished" | sort: "title" %}
  {% for term in sorted_terms %}
    {
      "slug":    {{ term.slug    | jsonify }},
      "title":   {{ term.title   | jsonify }},
      "summary": {{ term.summary | default: "" | jsonify }},
      "tags":    {{ term.tags    | default: [] | jsonify }},
      "url":     {{ term.url     | relative_url | jsonify }},
      "subtags": {% if term.subtags %}{{ term.subtags | jsonify }}{% else %}[]{% endif %},
      "aliases": {% if term.aliases %}{{ term.aliases | map: "name" | jsonify }}{% else %}[]{% endif %},
      "author": {{ term.author | default: "" | jsonify }},
      "date":   {{ term.date | date: "%Y-%m-%d" | jsonify }}
    }{% unless forloop.last %},{% endunless %}
  {% endfor %}
]
</script>

<script src="{{ '/assets/js/search.js' | relative_url }}"></script>
