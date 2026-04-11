/* portraits.js — AI Character Portrait Gallery */

const rankColors = {
    Dormant: '#3A3A58',
    Awakened: '#2DD4BF',
    Refined: '#60A5FA',
    Master: '#A855F7',
    Saint: '#C41E3A',
    Transcendent: '#F59E0B',
    Ascended: '#6366F1'
};

const glowColors = {
    red: '#C41E3A',
    gold: '#F59E0B',
    purple: '#8B5CF6',
    teal: '#2DD4BF',
    blue: '#60A5FA'
};

// Particle configuration per character
const particleConfigs = {
    sunny: { count: 22, sizes: [2, 3, 4], color: '#C41E3A' },
    nephis: { count: 28, sizes: [2, 3, 5], color: '#F59E0B' },
    cassie: { count: 18, sizes: [1, 2, 3], color: '#8B5CF6' },
    effie: { count: 16, sizes: [3, 4, 5], color: '#2DD4BF' },
    kai: { count: 20, sizes: [1, 2, 3], color: '#60A5FA' },
    morgans: { count: 24, sizes: [2, 3, 4], color: '#DC2626' }
};

// Extra visual details per character
const portraitExtras = {
    sunny: {
        label: 'Shadow Lord',
        glowIntensity: 'high',
        ringCount: 3,
        desc: 'Born shadowless into the Nightmare Realm, Sunny wields the Cursed Aspect — an army of shadow echoes that answers to him alone. His crescent mark burns like a wound across the sky.'
    },
    nephis: {
        label: 'Star of Undying Flame',
        glowIntensity: 'extreme',
        ringCount: 2,
        desc: 'Nephis carries the fire of a dying star in her soul. Her flame aspect burns so pure it consumes even memory. She is the Changing Star — the axis around which the world\'s fate turns.'
    },
    cassie: {
        label: 'Oracle of Threads',
        glowIntensity: 'medium',
        ringCount: 4,
        desc: 'Though blind, Cassie perceives threads of fate no sighted person can see. Her prophecies always come true — the price is watching horrors in advance, powerless to stop them.'
    },
    effie: {
        label: 'Iron-Armed Huntress',
        glowIntensity: 'medium',
        ringCount: 1,
        desc: 'Effie strikes with the force of a falling mountain. Her Hunt Aspect amplifies every instinct — speed, strength, endurance — to superhuman extremes. She does not stop. Ever.'
    },
    kai: {
        label: 'Whispering Arrow',
        glowIntensity: 'low',
        ringCount: 2,
        desc: 'Kai never wastes an arrow. A strategist who fights from invisibility, his Arrow Aspect threads through impossible angles. He is always exactly where no one expects.'
    },
    morgans: {
        label: 'Princess of Valor',
        glowIntensity: 'high',
        ringCount: 3,
        desc: 'Morgan twists blood as weapon and ritual. A Master-rank manipulator who operates in the shadow of Awakened society, pursuing goals that leave nothing but ruin in their wake.'
    }
};

// ---- CREATE PORTRAIT ART ----
function createPortraitArt(char, size = 'card') {
    const art = document.createElement('div');
    art.className = `portrait-canvas portrait-${char.id}`;

    const color = glowColors[char.portraitGlow] || '#C41E3A';
    const cfg = particleConfigs[char.id] || { count: 20, color };
    const isLarge = size === 'lightbox';
    const symbolSize = isLarge ? '9rem' : '7rem';

    art.innerHTML = `
        <div class="pa-bg"></div>
        <div class="pa-sphere"></div>
        <div class="pa-ring" style="border-color:${color};width:${isLarge ? 280 : 220}px;height:${isLarge ? 280 : 220}px"></div>
        <div class="pa-ring pa-ring-2" style="border-color:${color};width:${isLarge ? 200 : 160}px;height:${isLarge ? 200 : 160}px"></div>
        <div class="pa-symbol" style="font-size:${symbolSize};color:${color};
            filter:drop-shadow(0 0 ${isLarge ? 40 : 30}px ${color}) drop-shadow(0 0 ${isLarge ? 80 : 60}px ${color})">
            ${char.portraitSymbol}
        </div>
        <div class="pa-scanlines"></div>
        <div class="pa-fade" style="background:linear-gradient(transparent, ${isLarge ? '#13131f' : 'var(--card-bg)'})"></div>
        <div class="pa-watermark">AI PORTRAIT</div>
    `;

    // Add floating particles
    for (let i = 0; i < cfg.count; i++) {
        const p = document.createElement('div');
        p.className = 'pa-particle';
        const sz = cfg.sizes[Math.floor(Math.random() * cfg.sizes.length)];
        const x = 10 + Math.random() * 80;
        const dur = 4 + Math.random() * 8;
        const delay = Math.random() * 8;
        const drift = (Math.random() - 0.5) * 60;
        p.style.cssText = `
            width:${sz}px;height:${sz}px;
            background:${color};
            left:${x}%;
            bottom:${Math.random() * 30}%;
            opacity:${0.3 + Math.random() * 0.5};
            --drift-x:${drift}px;
            animation-duration:${dur}s;
            animation-delay:-${delay}s;
            box-shadow: 0 0 ${sz * 2}px ${color};
        `;
        art.appendChild(p);
    }

    return art;
}

// ---- BUILD PORTRAIT CARD ----
function createPortraitCard(char, index) {
    const color = glowColors[char.portraitGlow] || '#C41E3A';
    const rankColor = rankColors[char.rank] || '#C41E3A';
    const extras = portraitExtras[char.id] || {};
    const mainAbility = char.abilities[0];

    const card = document.createElement('div');
    card.className = 'portrait-card';
    card.style.animationDelay = `${index * 100}ms`;

    // Art section
    const artEl = document.createElement('div');
    artEl.className = 'portrait-art';
    artEl.appendChild(createPortraitArt(char, 'card'));
    card.appendChild(artEl);

    // Info section — use separate element, not innerHTML+=
    const infoEl = document.createElement('div');
    infoEl.className = 'portrait-info';
    infoEl.innerHTML = `
        <div class="portrait-novel-tag">Shadow Slave</div>
        <div class="portrait-char-name">${char.name}</div>
        <div class="portrait-char-title">${extras.label || char.epithet.split('·')[0].trim()}</div>
        <div class="portrait-meta-row">
            <span class="portrait-rank-pill" style="color:${rankColor};border-color:${rankColor}40;background:${rankColor}15">${char.rank}</span>
            <span class="portrait-aspect-tag">⚡ ${mainAbility ? mainAbility.name : char.tags[0]}</span>
            <a href="characters.html?char=${char.id}" class="portrait-view-btn">View Profile →</a>
        </div>
    `;
    card.appendChild(infoEl);

    // Open lightbox on click (not on "View Profile" link)
    card.addEventListener('click', (e) => {
        if (e.target.closest('.portrait-view-btn')) return;
        openLightbox(char);
    });

    return card;
}

// ---- RENDER GALLERY ----
function renderGallery() {
    const gallery = document.getElementById('portrait-gallery');
    RIFT_DATA.characters.forEach((char, i) => {
        gallery.appendChild(createPortraitCard(char, i));
    });
}

// ---- LIGHTBOX ----
function openLightbox(char) {
    const lb = document.getElementById('portrait-lightbox');
    const artEl = document.getElementById('lightbox-art');
    const infoEl = document.getElementById('lightbox-info');

    const color = glowColors[char.portraitGlow] || '#C41E3A';
    const rankColor = rankColors[char.rank] || '#C41E3A';
    const extras = portraitExtras[char.id] || {};

    // Art
    artEl.innerHTML = '';
    artEl.appendChild(createPortraitArt(char, 'lightbox'));

    // Info
    infoEl.innerHTML = `
        <div class="lb-novel">Shadow Slave</div>
        <div class="lb-name">${char.name}</div>
        <div class="lb-epithet">${char.epithet}</div>
        <div class="lb-rank" style="color:${rankColor};border:1px solid ${rankColor}40;background:${rankColor}15">${char.rank}</div>
        <p class="lb-desc">${extras.desc || char.background}</p>
        <div class="lb-abilities">
            ${char.abilities.slice(0, 3).map(ability => `
                <div>
                    <div class="lb-ability-label">
                        <span>${ability.name}</span>
                        <span style="color:${glowColors[ability.color] || color}">${ability.level}%</span>
                    </div>
                    <div class="lb-bar-track">
                        <div class="lb-bar-fill" style="width:${ability.level}%;background:${glowColors[ability.color] || color};box-shadow:0 0 8px ${glowColors[ability.color] || color}80"></div>
                    </div>
                </div>
            `).join('')}
        </div>
        <a href="characters.html?char=${char.id}" class="lb-cta">Open Full Profile →</a>
    `;

    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('portrait-lightbox').classList.remove('open');
    document.body.style.overflow = '';
}

// ---- INIT ----
renderGallery();

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('portrait-lightbox').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeLightbox();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});
