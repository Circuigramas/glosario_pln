(function () {
  const data      = JSON.parse(document.getElementById('terms-data').textContent);
  const searchEl  = document.getElementById('search');
  const countEl   = document.getElementById('count');
  const resultsEl = document.getElementById('results');
  const tagBtns   = document.querySelectorAll('.tag-btn');

  let activeTag = '';
  let query     = '';

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function renderTags(tags) {
    if (!tags || !tags.length) return '';
    const spans = tags.map(t => `<span class="tag">${esc(t)}</span>`).join('');
    return `<div class="tags">${spans}</div>`;
  }

  function render() {
    const q = query.toLowerCase();

    const filtered = data.filter(term => {
      const matchesTag = activeTag === '' ||
        (term.tags || []).includes(activeTag);
      const matchesSearch = q === '' ||
        term.title.toLowerCase().includes(q) ||
        (term.summary || '').toLowerCase().includes(q) ||
        (term.tags || []).some(t => t.toLowerCase().includes(q));
      return matchesTag && matchesSearch;
    });

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
        ${renderTags(term.tags)}
      </a>`
    ).join('');
  }

  // Text search
  searchEl.addEventListener('input', e => {
    query = e.target.value.trim();
    render();
  });

  // Tag filter buttons
  tagBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeTag = btn.dataset.tag;
      tagBtns.forEach(b => b.classList.toggle('active', b === btn));
      render();
    });
  });

  // Pre-activate tag from ?tag= query param (back-links from term pages)
  const tagParam = new URLSearchParams(location.search).get('tag');
  if (tagParam) {
    const match = [...tagBtns].find(b => b.dataset.tag === tagParam);
    if (match) match.click();
  }

  render();
})();
