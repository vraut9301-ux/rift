// ═══════════════════════════════════════════════════
//  RIFT — Shadow Slave Power Comparison Tool
// ═══════════════════════════════════════════════════

const COMPARE_CHARS = {
    sunny:   { symbol: "☾", color: "#C41E3A", glow: "red" },
    nephis:  { symbol: "✦", color: "#F59E0B", glow: "gold" },
    cassie:  { symbol: "◈", color: "#8B5CF6", glow: "purple" },
    effie:   { symbol: "⚔", color: "#2DD4BF", glow: "teal" },
    kai:     { symbol: "⬡", color: "#60A5FA", glow: "blue" },
    morgans: { symbol: "⛧", color: "#DC2626", glow: "red" },
    jet:     { symbol: "⚔", color: "#6366F1", glow: "indigo" }
};

let char1Id = 'sunny';
let char2Id = 'nephis';

function getCharData(id) {
    return RIFT_DATA.characters.find(c => c.id === id);
}

function initCompare() {
    // Check hash for pre-selected pair
    const hash = window.location.hash.replace('#', '');
    if (hash.includes('-vs-')) {
        const parts = hash.split('-vs-');
        if (COMPARE_CHARS[parts[0]] && COMPARE_CHARS[parts[1]]) {
            char1Id = parts[0];
            char2Id = parts[1];
        }
    }
    renderSelectors();
    renderComparison();
}

function renderSelectors() {
    const chars = RIFT_DATA.characters;
    const selectorEl = document.getElementById('compare-selector');

    selectorEl.innerHTML = `
        <div class="char-select-card active" id="select-left">
            <div class="char-select-symbol" style="color:${COMPARE_CHARS[char1Id].color}">${COMPARE_CHARS[char1Id].symbol}</div>
            <div class="char-select-name" id="select-left-name">${getCharData(char1Id).name}</div>
            <div class="char-select-rank">${getCharData(char1Id).rank}</div>
            <select class="char-dropdown" id="dropdown-left">
                ${chars.map(c => `<option value="${c.id}" ${c.id === char1Id ? 'selected' : ''}>${c.name} — ${c.rank}</option>`).join('')}
            </select>
        </div>
        <div class="compare-vs">VS</div>
        <div class="char-select-card active" id="select-right">
            <div class="char-select-symbol" style="color:${COMPARE_CHARS[char2Id].color}">${COMPARE_CHARS[char2Id].symbol}</div>
            <div class="char-select-name" id="select-right-name">${getCharData(char2Id).name}</div>
            <div class="char-select-rank">${getCharData(char2Id).rank}</div>
            <select class="char-dropdown" id="dropdown-right">
                ${chars.map(c => `<option value="${c.id}" ${c.id === char2Id ? 'selected' : ''}>${c.name} — ${c.rank}</option>`).join('')}
            </select>
        </div>
    `;

    document.getElementById('dropdown-left').addEventListener('change', (e) => {
        char1Id = e.target.value;
        if (char1Id === char2Id) {
            const others = Object.keys(COMPARE_CHARS).filter(c => c !== char1Id);
            char2Id = others[0];
        }
        window.location.hash = `${char1Id}-vs-${char2Id}`;
        renderSelectors();
        renderComparison();
    });

    document.getElementById('dropdown-right').addEventListener('change', (e) => {
        char2Id = e.target.value;
        if (char2Id === char1Id) {
            const others = Object.keys(COMPARE_CHARS).filter(c => c !== char2Id);
            char1Id = others[0];
        }
        window.location.hash = `${char1Id}-vs-${char2Id}`;
        renderSelectors();
        renderComparison();
    });
}

function renderComparison() {
    const c1 = getCharData(char1Id);
    const c2 = getCharData(char2Id);
    const m1 = COMPARE_CHARS[char1Id];
    const m2 = COMPARE_CHARS[char2Id];
    const area = document.getElementById('compare-result-area');

    // Build ability comparison
    const allAbilities = new Set();
    c1.abilities.forEach(a => allAbilities.add(a.name));
    c2.abilities.forEach(a => allAbilities.add(a.name));

    // Rank comparison
    const rankNames = ['Dormant','Awakened','Refined','Master','Saint','Transcendent','Ascended'];
    const r1 = c1.rankLevel;
    const r2 = c2.rankLevel;

    // Core stats
    const stats = [
        { name: "Rank Level", val1: r1, val2: r2, max: 6 },
        { name: "Soul Aspects", val1: c1.soulAspects, val2: c2.soulAspects, max: 7 },
    ];

    // Add abilities
    allAbilities.forEach(name => {
        const a1 = c1.abilities.find(a => a.name === name);
        const a2 = c2.abilities.find(a => a.name === name);
        stats.push({ name, val1: a1 ? a1.level : 0, val2: a2 ? a2.level : 0, max: 100 });
    });

    const shareUrl = encodeURIComponent(`https://rift-shadowslave.netlify.app/compare.html#${char1Id}-vs-${char2Id}`);
    const shareText = encodeURIComponent(`${c1.name} vs ${c2.name} — who would win? ⚔️ Compare Shadow Slave characters on RIFT!`);

    // Votes
    const voteKey = `rift-vote-${[char1Id, char2Id].sort().join('-')}`;
    const votes = JSON.parse(localStorage.getItem(voteKey) || '{"a":0,"b":0}');
    const totalVotes = votes.a + votes.b;
    const pct1 = totalVotes > 0 ? Math.round((votes.a / totalVotes) * 100) : 50;
    const pct2 = totalVotes > 0 ? 100 - pct1 : 50;
    const hasVoted = localStorage.getItem(voteKey + '-voted');

    area.innerHTML = `
        <div class="compare-result" style="--char1-color:${m1.color};--char2-color:${m2.color};animation:fadeUp 0.5s ease">
            <div class="compare-section-title">⚔ ABILITY COMPARISON — ${c1.name.toUpperCase()} VS ${c2.name.toUpperCase()}</div>

            ${stats.map(s => {
                const pct1 = (s.val1 / s.max) * 100;
                const pct2 = (s.val2 / s.max) * 100;
                return `
                <div class="stat-row">
                    <div class="stat-label">${s.name}</div>
                    <div class="stat-bars">
                        <div class="stat-bar-left"><div class="stat-fill-left" style="width:${pct1}%"></div></div>
                        <div class="stat-vs-dot"></div>
                        <div class="stat-bar-right"><div class="stat-fill-right" style="width:${pct2}%"></div></div>
                    </div>
                    <div class="stat-values">
                        <span class="stat-val-left">${s.val1}${s.max === 100 ? '%' : ''}</span>
                        <span class="stat-val-right">${s.val2}${s.max === 100 ? '%' : ''}</span>
                    </div>
                </div>`;
            }).join('')}

            <!-- Info Cards -->
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1.5rem">
                <div style="padding:1rem;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:12px">
                    <div style="font-size:0.6rem;font-weight:700;letter-spacing:0.12em;color:${m1.color};text-transform:uppercase;margin-bottom:0.5rem">${c1.name}</div>
                    <div style="font-size:0.72rem;color:var(--text-dim);margin-bottom:0.3rem">${c1.epithet}</div>
                    <div style="font-size:0.65rem;color:var(--text-dim)">Rank: <strong style="color:${m1.color}">${c1.rank}</strong></div>
                    <div style="font-size:0.65rem;color:var(--text-dim)">Faction: ${c1.faction}</div>
                    ${c1.echoes && c1.echoes.length > 0 ? `<div style="font-size:0.65rem;color:var(--text-dim)">Echoes: ${c1.echoes.length}</div>` : ''}
                </div>
                <div style="padding:1rem;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:12px">
                    <div style="font-size:0.6rem;font-weight:700;letter-spacing:0.12em;color:${m2.color};text-transform:uppercase;margin-bottom:0.5rem">${c2.name}</div>
                    <div style="font-size:0.72rem;color:var(--text-dim);margin-bottom:0.3rem">${c2.epithet}</div>
                    <div style="font-size:0.65rem;color:var(--text-dim)">Rank: <strong style="color:${m2.color}">${c2.rank}</strong></div>
                    <div style="font-size:0.65rem;color:var(--text-dim)">Faction: ${c2.faction}</div>
                    ${c2.echoes && c2.echoes.length > 0 ? `<div style="font-size:0.65rem;color:var(--text-dim)">Echoes: ${c2.echoes.length}</div>` : ''}
                </div>
            </div>

            <!-- Vote Section -->
            <div class="vote-section">
                <div class="vote-title">Who Would Win? ⚔</div>
                <div class="vote-buttons">
                    <button class="vote-btn ${hasVoted ? 'voted' : ''}" style="border-color:${m1.color};color:${m1.color}"
                        onclick="castVote('${char1Id}','${char2Id}','a')" ${hasVoted ? 'disabled' : ''}>
                        ${m1.symbol} ${c1.name}
                    </button>
                    <button class="vote-btn ${hasVoted ? 'voted' : ''}" style="border-color:${m2.color};color:${m2.color}"
                        onclick="castVote('${char1Id}','${char2Id}','b')" ${hasVoted ? 'disabled' : ''}>
                        ${m2.symbol} ${c2.name}
                    </button>
                </div>
                ${hasVoted || totalVotes > 0 ? `
                <div class="vote-bar-container" style="margin-top:1rem">
                    <span class="vote-pct" style="color:${m1.color}">${pct1}%</span>
                    <div class="vote-bar">
                        <div class="vote-bar-fill" style="width:${pct1}%;background:${m1.color}"></div>
                    </div>
                    <div class="vote-bar">
                        <div class="vote-bar-fill" style="width:${pct2}%;background:${m2.color};margin-left:auto"></div>
                    </div>
                    <span class="vote-pct" style="color:${m2.color}">${pct2}%</span>
                </div>
                <div style="font-size:0.65rem;color:var(--text-dim);margin-top:0.5rem">${totalVotes} votes</div>
                ` : ''}
            </div>

            <!-- Share -->
            <div class="compare-share" style="margin-top:1.5rem">
                <a href="https://www.reddit.com/submit?url=${shareUrl}&title=${shareText}" target="_blank" rel="noopener" class="share-btn reddit">🔴 Reddit</a>
                <a href="https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}" target="_blank" rel="noopener" class="share-btn twitter">🐦 X / Twitter</a>
                <button class="share-btn copy-link" onclick="copyCompareLink()">🔗 Copy Link</button>
            </div>
        </div>
    `;

    // Update page title
    document.title = `${c1.name} vs ${c2.name} — Shadow Slave Power Comparison | RIFT`;
}

function castVote(id1, id2, side) {
    const voteKey = `rift-vote-${[id1, id2].sort().join('-')}`;
    const votes = JSON.parse(localStorage.getItem(voteKey) || '{"a":0,"b":0}');
    // Map side to correct position
    const sorted = [id1, id2].sort();
    if (side === 'a') {
        if (id1 === sorted[0]) votes.a++; else votes.b++;
    } else {
        if (id2 === sorted[1]) votes.b++; else votes.a++;
    }
    localStorage.setItem(voteKey, JSON.stringify(votes));
    localStorage.setItem(voteKey + '-voted', '1');
    renderComparison();
}

function copyCompareLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        const btn = document.querySelector('.compare-share .copy-link');
        btn.textContent = '✅ Copied!';
        setTimeout(() => btn.textContent = '🔗 Copy Link', 2000);
    });
}

document.addEventListener('DOMContentLoaded', initCompare);
