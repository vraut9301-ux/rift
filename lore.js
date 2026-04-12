/* lore.js — Lore Bible Logic */

// ---- TABS ----
document.querySelectorAll('.lore-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.lore-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.lore-tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(`tab-${tab.dataset.tab}`).classList.add('active');
  });
});

// ---- RANK CARDS ----
const rankCardsEl = document.getElementById('rank-cards');
const charsByRank = {};
RIFT_DATA.characters.forEach(c => {
  if (!charsByRank[c.rankLevel]) charsByRank[c.rankLevel] = [];
  charsByRank[c.rankLevel].push(c.name);
});

RIFT_DATA.ranks.forEach(rank => {
  const card = document.createElement('div');
  card.className = 'rank-full-card';
  const charsAtRank = charsByRank[rank.level] || [];
  card.innerHTML = `
    <div class="rank-header">
      <div class="rank-dot-big" style="background:${rank.color};box-shadow:0 0 10px ${rank.color}88"></div>
      <div style="flex:1">
        <div style="font-family:'Cinzel',serif;font-weight:700;font-size:1rem">${rank.name}</div>
        <div style="font-size:0.72rem;color:var(--text-muted)">${rank.desc}</div>
      </div>
      <span class="rank-expand-icon">▾</span>
    </div>
    <div class="rank-body">
      <p>${getRankDetail(rank.level)}</p>
      ${charsAtRank.length ? `
        <div style="margin-top:0.75rem;font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:var(--text-dim);margin-bottom:0.5rem">Characters at this rank</div>
        <div class="rank-chars">
          ${charsAtRank.map(n => `<span class="rank-char-tag">${n}</span>`).join('')}
        </div>
      ` : ''}
    </div>
  `;
  card.querySelector('.rank-header').addEventListener('click', () => {
    const wasExpanded = card.classList.contains('expanded');
    document.querySelectorAll('.rank-full-card').forEach(c => c.classList.remove('expanded'));
    if (!wasExpanded) card.classList.add('expanded');
  });
  rankCardsEl.appendChild(card);
});

function getRankDetail(level) {
  const details = {
    0: "All humans begin as Dormant. They have no awakened soul, no formal aspects, and cannot enter nightmares consciously.",
    1: "Sleepers have survived the First Nightmare and entered the Nightmare Spell's system. They form a soul core and are pulled into the Dream Realm on the Winter Solstice.",
    2: "Upon returning from their first journey to the Dream Realm, Sleepers become Awakened. They gain the ability to travel between the real world and the Dream Realm at will.",
    3: "Ascended (also known as Masters) have cleared the Second Nightmare. They can overwhelm squads of lower-ranked opponents and command lesser nightmare creatures.",
    4: "Transcendent (also known as Saints) have cleared the Third Nightmare. A single Saint can level a city block. They transcend their mortal forms, gaining the ability to transform.",
    5: "Supreme (also known as Sovereigns) have cleared the Fourth Nightmare. They command entire Domains and humanity's survival hinges on their protection.",
    6: "Sacred beings have cleared the Fifth Nightmare. They are fundamentally closer to gods than humans. None currently exist in humanity.",
    7: "Divine beings have cleared the Sixth Nightmare. True divinities that can shape reality itself. None currently exist."
  };
  return details[level] || 'No additional details available.';
}

// ---- LORE CARDS (Systems & World) ----
const systemsEl = document.getElementById('lore-systems-cards');
const worldEl = document.getElementById('lore-world-cards');

RIFT_DATA.loreSystems.forEach((lore, i) => {
  const card = document.createElement('div');
  card.className = 'lore-card';
  card.style.animationDelay = `${i * 80}ms`;
  card.innerHTML = `
    <div class="lore-card-cat">${lore.category}</div>
    <div class="lore-card-name">${lore.name}</div>
    <div class="lore-card-desc">${lore.desc}</div>
  `;
  if (lore.category === 'Power') {
    systemsEl.appendChild(card);
  } else {
    worldEl.appendChild(card);
  }
});
