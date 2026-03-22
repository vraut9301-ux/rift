/* characters.js — Character Encyclopedia Logic */

let activeRankFilter = 'all';
let activeRoleFilter = 'all';
let searchQuery = '';
let isListMode = false;

const container = document.getElementById('char-container');
const noResults = document.getElementById('no-results');
const resultsCount = document.getElementById('results-count');
const searchInput = document.getElementById('search-input');
const searchClear = document.getElementById('search-clear');

// ---- RENDER CHARACTERS ----
function renderCharacters() {
  let filtered = RIFT_DATA.characters.filter(char => {
    const matchChapter = RiftEngine.isVisible(char.firstChapter);
    const matchRank = activeRankFilter === 'all' || char.rankLevel == activeRankFilter;
    const matchRole = activeRoleFilter === 'all' || char.role === activeRoleFilter;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q ||
      char.name.toLowerCase().includes(q) ||
      char.epithet.toLowerCase().includes(q) ||
      char.tags.some(t => t.toLowerCase().includes(q)) ||
      char.abilities.some(a => a.name.toLowerCase().includes(q)) ||
      char.rank.toLowerCase().includes(q);
    return matchChapter && matchRank && matchRole && matchSearch;
  });

  resultsCount.textContent = `Showing ${filtered.length} character${filtered.length !== 1 ? 's' : ''}`;
  container.innerHTML = '';

  if (filtered.length === 0) {
    noResults.style.display = 'block';
    container.style.display = 'none';
  } else {
    noResults.style.display = 'none';
    container.style.display = '';
    filtered.forEach((char, i) => {
      const card = createCharCard(char);
      card.style.animationDelay = `${i * 60}ms`;
      container.appendChild(card);
    });
    // Animate power bars
    setTimeout(() => {
      document.querySelectorAll('.pb-fill').forEach(bar => {
        const target = bar.getAttribute('data-width');
        bar.style.width = target + '%';
      });
    }, 150);
  }
}

function glowColor(glow) {
  const map = { red: '#C41E3A', gold: '#F59E0B', purple: '#8B5CF6', teal: '#2DD4BF' };
  return map[glow] || '#C41E3A';
}

function createCharCard(char) {
  const card = document.createElement('div');
  card.className = 'char-card';
  card.innerHTML = `
    <div class="char-portrait ${char.id}-portrait" style="position:relative;overflow:hidden">
      <div class="portrait-symbol" style="color:${glowColor(char.portraitGlow)};font-size:3.5rem;z-index:1;position:relative;filter:drop-shadow(0 0 18px ${glowColor(char.portraitGlow)})">${char.portraitSymbol}</div>
      <div style="position:absolute;width:180px;height:180px;border-radius:50%;background:${glowColor(char.portraitGlow)};opacity:0.12;filter:blur(40px);top:50%;left:50%;transform:translate(-50%,-50%)"></div>
      <div style="position:absolute;inset:0;background:linear-gradient(135deg,#0A0A15,${char.portraitGlow === 'gold' ? '#1A1000' : char.portraitGlow === 'purple' ? '#0E0020' : char.portraitGlow === 'teal' ? '#001A1A' : '#1A0008'},#0A0A15)"></div>
      <div class="char-status-badge" style="position:absolute;top:0.6rem;left:0.6rem;font-size:0.6rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.1);border-radius:4px;padding:0.15rem 0.45rem;color:${char.status === 'Alive' ? '#4ade80' : '#F87171'}">${char.status}</div>
    </div>
    <div class="char-details">
      <div class="char-novel-tag">Shadow Slave</div>
      <h3 class="char-name">${char.name}</h3>
      <div class="char-epithet">${char.epithet}</div>
      <div class="char-rank-badge" style="background:rgba(196,30,58,0.12);color:var(--primary-light);border:1px solid rgba(196,30,58,0.25)">${char.rank}</div>
      <div class="char-tags">
        ${char.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('')}
        ${char.role !== 'Protagonist' ? `<span class="tag" style="border-color:rgba(196,30,58,0.2);color:var(--primary-light)">${char.role}</span>` : ''}
      </div>
      <div class="char-powers">
        ${char.abilities.slice(0, 2).map(a => `
          <div class="power-bar">
            <span class="pb-label">${a.name}</span>
            <div class="pb-track">
              <div class="pb-fill ${a.color}" style="width:0%" data-width="${a.level}"></div>
            </div>
          </div>
        `).join('')}
      </div>
      <a href="#" class="char-read-more" data-id="${char.id}">Full Profile →</a>
    </div>
  `;
  card.querySelector('.char-read-more').addEventListener('click', (e) => {
    e.preventDefault();
    openModal(char.id);
  });
  card.addEventListener('click', (e) => {
    if (!e.target.closest('.char-read-more')) openModal(char.id);
  });
  return card;
}

// ---- MODAL ----
const modalOverlay = document.getElementById('modal-overlay');
const modalBody = document.getElementById('modal-body');

function openModal(id) {
  const char = RIFT_DATA.characters.find(c => c.id === id);
  if (!char) return;

  const glow = glowColor(char.portraitGlow);
  modalBody.innerHTML = `
    <div class="modal-portrait" style="background:linear-gradient(135deg,#0A0A15,${char.portraitGlow === 'gold' ? '#1A0E00' : char.portraitGlow === 'purple' ? '#0E0020' : char.portraitGlow === 'teal' ? '#001818' : '#1A0008'},#0A0A15)">
      <div style="position:absolute;width:300px;height:300px;border-radius:50%;background:${glow};opacity:0.15;filter:blur(60px)"></div>
      <div class="portrait-symbol" style="font-size:5rem;z-index:1;filter:drop-shadow(0 0 25px ${glow});color:${glow}">${char.portraitSymbol}</div>
    </div>
    <div class="modal-char-header">
      <div>
        <div style="font-size:0.65rem;font-weight:700;text-transform:uppercase;letter-spacing:0.15em;color:var(--primary);margin-bottom:0.3rem">Shadow Slave</div>
        <div class="modal-char-name">${char.name}</div>
        <div class="modal-char-epithet">${char.epithet}</div>
      </div>
      <div class="modal-meta">
        <div class="char-rank-badge">${char.rank}</div>
        <div style="font-size:0.68rem;color:var(--text-muted)">Ch. ${char.firstChapter}+</div>
        <div style="font-size:0.68rem;color:${char.status === 'Alive' ? '#4ade80' : '#F87171'};font-weight:700">${char.status}</div>
      </div>
    </div>
    <div class="char-tags" style="margin-bottom:1.25rem">
      ${char.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      <span class="tag" style="border-color:rgba(196,30,58,0.2);color:var(--primary-light)">${char.role}</span>
    </div>
    <p class="modal-bg">${char.background}</p>
    <div class="modal-abilities">
      <div class="modal-section-title">Abilities</div>
      ${char.abilities.map(a => `
        <div class="power-bar" style="margin-bottom:0.6rem">
          <div style="display:flex;justify-content:space-between;margin-bottom:0.25rem">
            <span class="pb-label">${a.name}</span>
            <span style="font-size:0.68rem;color:var(--text-muted)">${a.level}%</span>
          </div>
          <div class="pb-track">
            <div class="pb-fill ${a.color}" style="width:${a.level}%"></div>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="modal-key-moments">
      <div class="modal-section-title">Key Moments</div>
      <ul class="km-list">
        ${char.keyMoments.map(m => `<li>${m}</li>`).join('')}
      </ul>
    </div>
    ${char.relationships.length ? `
    <div class="modal-relationships">
      <div class="modal-section-title">Relationships</div>
      <div class="rel-list">
        ${char.relationships.map(r => `
          <div class="rel-item">
            <span class="rel-name">${r.name}</span>
            <span class="rel-type ${r.type}">${r.type}</span>
            <span class="rel-note">${r.note}</span>
          </div>
        `).join('')}
      </div>
    </div>
    ` : ''}
  `;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modal-close').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// ---- FILTERS ----
document.querySelectorAll('.filter-btn[data-filter="rank"]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn[data-filter="rank"]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeRankFilter = btn.dataset.val;
    renderCharacters();
  });
});
document.querySelectorAll('.filter-btn[data-filter="role"]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn[data-filter="role"]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeRoleFilter = btn.dataset.val;
    renderCharacters();
  });
});
searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value;
  searchClear.style.display = searchQuery ? 'block' : 'none';
  renderCharacters();
});
searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  searchClear.style.display = 'none';
  renderCharacters();
});
document.getElementById('grid-view').addEventListener('click', () => {
  isListMode = false;
  container.classList.remove('list-mode');
  document.getElementById('grid-view').classList.add('active');
  document.getElementById('list-view').classList.remove('active');
});
document.getElementById('list-view').addEventListener('click', () => {
  isListMode = true;
  container.classList.add('list-mode');
  document.getElementById('list-view').classList.add('active');
  document.getElementById('grid-view').classList.remove('active');
});

function clearAll() {
  searchInput.value = '';
  searchQuery = '';
  activeRankFilter = 'all';
  activeRoleFilter = 'all';
  searchClear.style.display = 'none';
  document.querySelectorAll('.filter-btn[data-filter="rank"]').forEach(b => b.classList.toggle('active', b.dataset.val === 'all'));
  document.querySelectorAll('.filter-btn[data-filter="role"]').forEach(b => b.classList.toggle('active', b.dataset.val === 'all'));
  renderCharacters();
}

// Init
renderCharacters();

// ---- URL PARAM: auto-open character ?char=id ----
(function () {
  const params = new URLSearchParams(window.location.search);
  const charId = params.get('char');
  if (charId) {
    setTimeout(() => openModal(charId), 500);
  }
})();

window.addEventListener('rift-chapter-changed', renderCharacters);
