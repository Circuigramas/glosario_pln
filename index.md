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
  {% assign all_tags = site.terms | map: "tags" | join: "," | split: "," | uniq | sort %}
  {% for tag in all_tags %}
    <button class="tag-btn" data-tag="{{ tag | escape }}">{{ tag }}</button>
  {% endfor %}
</div>

<div class="list-container">
  <p class="count" id="count"></p>
  <div id="results"></div>
</div>

<script id="terms-data" type="application/json">
[
  {% assign sorted_terms = site.terms | sort: "title" %}
  {% for term in sorted_terms %}
    {
      "slug":    {{ term.slug    | jsonify }},
      "title":   {{ term.title   | jsonify }},
      "summary": {{ term.summary | default: "" | jsonify }},
      "tags":    {{ term.tags    | default: [] | jsonify }},
      "url":     {{ term.url     | relative_url | jsonify }}
    }{% unless forloop.last %},{% endunless %}
  {% endfor %}
]
</script>

<script src="{{ '/assets/js/search.js' | relative_url }}"></script>
