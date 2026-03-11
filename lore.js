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
    0: "All humans begin as Dormant. They have no awakened soul, no aspects, and cannot enter nightmares consciously. However, the presence of nightmare creatures in the real world affects Dormants — some develop low-level sensitivity.",
    1: "Upon Awakening, a person's soul activates and they receive their first Aspect — a unique ability that defines their combat path. Most Awakened never progress beyond this rank. Entering the First Nightmare is required to Awaken.",
    2: "Through repeated nightmare trials, combat, and growing one's soul capacity, an Awakened reaches Refined rank. Their aspect grows in complexity and their Soul Aspect slots increase. Elite warriors, soldiers, and mid-tier faction members operate at this level.",
    3: "Master-rank Awakened can overwhelm entire squads of lower-ranked opponents. Some Master-rank beings can command nightmare creatures. Effie and Kai are prominent Master-rank characters. Reaching Master rank requires surviving high-risk nightmares.",
    4: "Saints are terrifying. A single Saint can level a city block. They are rare enough that most countries have fewer than ten. Sunny reaching Saint rank is one of the story's major milestones. At Saint rank, shadow manipulation reaches near-infinite scale.",
    5: "Transcendent beings are closer to natural disasters than humans. Nephis at Transcendent rank can ignite the sky. Song Shang is another Transcendent-class entity. Very few living beings reach this level — most who do are already legends.",
    6: "Ascended beings are essentially gods. They are so rare that most people don't believe they exist. Historical records mention them but actual encounters are world-changing events. The 'Ascended' rank is the closest thing to a final boss tier."
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
