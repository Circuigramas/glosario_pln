(function () {
  const data      = JSON.parse(document.getElementById('terms-data').textContent);
  const searchEl  = document.getElementById('search');
  const countEl   = document.getElementById('count');
  const resultsEl = document.getElementById('results');
  const tagBtns   = document.querySelectorAll('.tag-btn');
  const subtagFiltersEl = document.getElementById('subtag-filters');
  const subtagSelect    = document.getElementById('subtag-select');
  const authorSelect    = document.getElementById('author-select');

  // Build map: mainTag → sorted array of subtags
  const subtagMap = {};
  data.forEach(term => {
    (term.tags || []).forEach(tag => {
      if (!subtagMap[tag]) subtagMap[tag] = new Set();
      (term.subtags || []).forEach(st => subtagMap[tag].add(st));
    });
  });
  Object.keys(subtagMap).forEach(k => {
    subtagMap[k] = [...subtagMap[k]].sort((a, b) => a.localeCompare(b, 'es'));
  });

  // Populate author dropdown (only if more than one author)
  const authors = [...new Set(data.map(t => t.author).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, 'es'));
  if (authors.length > 1) {
    authors.forEach(a => {
      const opt = document.createElement('option');
      opt.value = a;
      opt.textContent = a;
      authorSelect.appendChild(opt);
    });
  } else {
    authorSelect.style.display = 'none';
  }

  let activeTag    = '';
  let activeSubtag = '';
  let activeAuthor = '';
  let query        = '';

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function renderTags(tags, subtags) {
    const mainSpans = (tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join('');
    const subSpans  = (subtags || []).map(t => `<span class="tag tag--sub">${esc(t)}</span>`).join('');
    if (!mainSpans && !subSpans) return '';
    return `<div class="tags">${mainSpans}${subSpans}</div>`;
  }

  function updateSubtagDropdown() {
    const subtags = activeTag ? (subtagMap[activeTag] || []) : [];
    activeSubtag = '';
    if (subtags.length === 0) {
      subtagFiltersEl.style.display = 'none';
      return;
    }
    subtagSelect.innerHTML =
      '<option value="">Todos los subtemas</option>' +
      subtags.map(st => `<option value="${esc(st)}">${esc(st)}</option>`).join('');
    subtagSelect.value = '';
    subtagFiltersEl.style.display = '';
  }

  function render() {
    const q = query.toLowerCase();

    const filtered = data.filter(term => {
      const matchesTag    = activeTag === '' || (term.tags || []).includes(activeTag);
      const matchesSubtag = activeSubtag === '' || (term.subtags || []).includes(activeSubtag);
      const matchesAuthor = activeAuthor === '' || term.author === activeAuthor;
      const matchesSearch = q === '' ||
        term.title.toLowerCase().includes(q) ||
        (term.summary || '').toLowerCase().includes(q) ||
        (term.tags || []).some(t => t.toLowerCase().includes(q)) ||
        (term.aliases || []).some(a => a.toLowerCase().includes(q));
      return matchesTag && matchesSubtag && matchesAuthor && matchesSearch;
    }).sort((a, b) => a.title.localeCompare(b.title, 'es'));

    countEl.textContent =
      filtered.length + ' término' + (filtered.length !== 1 ? 's' : '');

    if (filtered.length === 0) {
      resultsEl.innerHTML = '<p class="empty">No se encontraron términos.</p>';
      return;
    }

    resultsEl.innerHTML = filtered.map(term =>
      `<a class="card" href="${esc(term.url)}">
        <h2>${esc(term.title)}</h2>
        <p class="preview">${esc(term.summary)}</p>
        ${renderTags(term.tags, term.subtags)}
      </a>`
    ).join('');
  }

  // Text search
  searchEl.addEventListener('input', e => {
    query = e.target.value.trim();
    render();
  });

  // Main tag filter buttons
  tagBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeTag = btn.dataset.tag;
      tagBtns.forEach(b => b.classList.toggle('active', b === btn));
      updateSubtagDropdown();
      render();
    });
  });

  // Subtag dropdown
  subtagSelect.addEventListener('change', e => {
    activeSubtag = e.target.value;
    render();
  });

  // Author dropdown
  authorSelect.addEventListener('change', e => {
    activeAuthor = e.target.value;
    render();
  });

  // Pre-activate tag from ?tag= query param (back-links from term pages)
  const tagParam = new URLSearchParams(location.search).get('tag');
  if (tagParam) {
    const match = [...tagBtns].find(b => b.dataset.tag === tagParam);
    if (match) match.click();
  }

  render();
})();
