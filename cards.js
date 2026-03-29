// ═══════════════════════════════════════════════════
//  RIFT — Shadow Slave Character Stat Card Generator
// ═══════════════════════════════════════════════════

const CARD_COLORS = {
    sunny:   { primary: '#C41E3A', secondary: '#FF6B6B', bg1: '#1a0510', bg2: '#0a0a14' },
    nephis:  { primary: '#F59E0B', secondary: '#FBBF24', bg1: '#1a1205', bg2: '#0a0a14' },
    cassie:  { primary: '#8B5CF6', secondary: '#A78BFA', bg1: '#150a1a', bg2: '#0a0a14' },
    effie:   { primary: '#2DD4BF', secondary: '#5EEAD4', bg1: '#051a16', bg2: '#0a0a14' },
    kai:     { primary: '#60A5FA', secondary: '#93C5FD', bg1: '#050f1a', bg2: '#0a0a14' },
    morgans: { primary: '#DC2626', secondary: '#EF4444', bg1: '#1a0505', bg2: '#0a0a14' },
    jet:     { primary: '#6366F1', secondary: '#818CF8', bg1: '#0a0a1a', bg2: '#0a0a14' }
};

let selectedCharId = null;

function initCards() {
    const grid = document.getElementById('char-grid');
    const chars = RIFT_DATA.characters;

    grid.innerHTML = chars.map(c => `
        <div class="char-grid-item" data-id="${c.id}" onclick="selectCharCard('${c.id}')">
            <div class="char-grid-symbol" style="color:${CARD_COLORS[c.id]?.primary || '#fff'}">${c.portraitSymbol}</div>
            <div class="char-grid-name">${c.name}</div>
            <div class="char-grid-rank">${c.rank}</div>
        </div>
    `).join('');

    // Check hash
    const hash = window.location.hash.replace('#', '');
    if (hash && CARD_COLORS[hash]) {
        selectCharCard(hash);
    }

    document.getElementById('download-card-btn')?.addEventListener('click', downloadCard);
}

function selectCharCard(id) {
    selectedCharId = id;
    window.location.hash = id;

    // Update grid selection
    document.querySelectorAll('.char-grid-item').forEach(el => {
        el.classList.toggle('selected', el.dataset.id === id);
    });

    document.getElementById('card-preview-area').style.display = 'flex';
    renderCard(id);
    updateShareLinks(id);
    document.getElementById('card-preview-area').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function renderCard(charId) {
    const canvas = document.getElementById('card-canvas');
    const ctx = canvas.getContext('2d');
    const W = 480;
    const H = 680;
    canvas.width = W;
    canvas.height = H;

    const char = RIFT_DATA.characters.find(c => c.id === charId);
    const colors = CARD_COLORS[charId] || CARD_COLORS.sunny;

    // Background gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
    bgGrad.addColorStop(0, colors.bg1);
    bgGrad.addColorStop(0.4, '#0a0a14');
    bgGrad.addColorStop(1, '#06060c');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    // Border
    ctx.strokeStyle = colors.primary + '40';
    ctx.lineWidth = 2;
    roundRect(ctx, 1, 1, W - 2, H - 2, 16);
    ctx.stroke();

    // Top accent line
    const topGrad = ctx.createLinearGradient(0, 0, W, 0);
    topGrad.addColorStop(0, 'transparent');
    topGrad.addColorStop(0.3, colors.primary);
    topGrad.addColorStop(0.7, colors.secondary);
    topGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = topGrad;
    ctx.fillRect(20, 0, W - 40, 3);

    // RIFT branding
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.font = '600 10px Inter, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('RIFT · SHADOW SLAVE', W - 24, 28);

    // Character symbol (large)
    ctx.textAlign = 'center';
    ctx.font = '80px serif';
    ctx.fillStyle = colors.primary;
    ctx.shadowColor = colors.primary;
    ctx.shadowBlur = 40;
    ctx.fillText(char.portraitSymbol, W / 2, 120);
    ctx.shadowBlur = 0;

    // Name
    ctx.font = '900 32px Cinzel, serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(char.name.toUpperCase(), W / 2, 170);

    // Epithet
    ctx.font = '300 13px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    const epithetLines = wrapText(ctx, char.epithet, W - 80);
    epithetLines.forEach((line, i) => {
        ctx.fillText(line, W / 2, 195 + i * 18);
    });

    const epithetEnd = 195 + epithetLines.length * 18 + 10;

    // Rank badge
    ctx.fillStyle = colors.primary + '25';
    const rankText = char.rank;
    ctx.font = '700 10px Inter, sans-serif';
    const rankW = ctx.measureText(rankText).width + 24;
    roundRect(ctx, (W - rankW) / 2, epithetEnd, rankW, 22, 11);
    ctx.fill();
    ctx.strokeStyle = colors.primary + '50';
    ctx.lineWidth = 1;
    roundRect(ctx, (W - rankW) / 2, epithetEnd, rankW, 22, 11);
    ctx.stroke();
    ctx.fillStyle = colors.primary;
    ctx.textAlign = 'center';
    ctx.fillText(rankText.toUpperCase(), W / 2, epithetEnd + 15);

    let y = epithetEnd + 45;

    // Divider
    drawDivider(ctx, 40, y, W - 80, colors.primary);
    y += 20;

    // Section: ABILITIES
    ctx.textAlign = 'left';
    ctx.font = '700 9px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    ctx.letterSpacing = '2px';
    ctx.fillText('ABILITIES', 40, y);
    y += 18;

    char.abilities.forEach(ability => {
        // Ability name + level
        ctx.font = '600 12px Inter, sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.fillText(ability.name, 40, y);
        ctx.textAlign = 'right';
        ctx.fillStyle = colors.primary;
        ctx.fillText(ability.level + '%', W - 40, y);
        ctx.textAlign = 'left';
        y += 12;

        // Bar
        const barW = W - 80;
        const barH = 6;
        ctx.fillStyle = 'rgba(255,255,255,0.06)';
        roundRect(ctx, 40, y, barW, barH, 3);
        ctx.fill();

        const fillGrad = ctx.createLinearGradient(40, 0, 40 + barW * (ability.level / 100), 0);
        fillGrad.addColorStop(0, colors.primary);
        fillGrad.addColorStop(1, colors.secondary);
        ctx.fillStyle = fillGrad;
        roundRect(ctx, 40, y, barW * (ability.level / 100), barH, 3);
        ctx.fill();

        y += 22;
    });

    y += 5;
    drawDivider(ctx, 40, y, W - 80, colors.primary);
    y += 20;

    // Section: INFO
    ctx.font = '700 9px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    ctx.fillText('CHARACTER INFO', 40, y);
    y += 18;

    const infos = [
        ['Role', char.role],
        ['Status', char.status],
        ['Faction', char.faction],
        ['First Appearance', 'Chapter ' + char.firstChapter],
        ['Soul Aspects', char.soulAspects.toString()],
    ];
    if (char.echoes && char.echoes.length > 0) {
        infos.push(['Known Echoes', char.echoes.length.toString()]);
    }

    infos.forEach(([label, value]) => {
        ctx.font = '500 11px Inter, sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.textAlign = 'left';
        ctx.fillText(label, 40, y);
        ctx.textAlign = 'right';
        ctx.fillStyle = 'rgba(255,255,255,0.8)';
        ctx.fillText(value, W - 40, y);
        ctx.textAlign = 'left';
        y += 20;
    });

    y += 5;
    drawDivider(ctx, 40, y, W - 80, colors.primary);
    y += 20;

    // Tags
    ctx.font = '700 9px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    ctx.textAlign = 'left';
    ctx.fillText('TAGS', 40, y);
    y += 16;

    let tagX = 40;
    ctx.font = '600 10px Inter, sans-serif';
    char.tags.forEach(tag => {
        const tw = ctx.measureText(tag).width + 16;
        if (tagX + tw > W - 40) { tagX = 40; y += 24; }
        ctx.fillStyle = colors.primary + '20';
        roundRect(ctx, tagX, y, tw, 20, 10);
        ctx.fill();
        ctx.strokeStyle = colors.primary + '40';
        ctx.lineWidth = 1;
        roundRect(ctx, tagX, y, tw, 20, 10);
        ctx.stroke();
        ctx.fillStyle = colors.primary;
        ctx.textAlign = 'center';
        ctx.fillText(tag, tagX + tw / 2, y + 14);
        ctx.textAlign = 'left';
        tagX += tw + 6;
    });

    // Bottom watermark
    ctx.textAlign = 'center';
    ctx.font = '600 9px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.15)';
    ctx.fillText('rift-shadowslave.netlify.app', W / 2, H - 16);
}

function drawDivider(ctx, x, y, w, color) {
    const grad = ctx.createLinearGradient(x, 0, x + w, 0);
    grad.addColorStop(0, 'transparent');
    grad.addColorStop(0.3, color + '30');
    grad.addColorStop(0.7, color + '30');
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.fillRect(x, y, w, 1);
}

function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
}

function wrapText(ctx, text, maxWidth) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';
    words.forEach(word => {
        const test = currentLine ? currentLine + ' ' + word : word;
        if (ctx.measureText(test).width > maxWidth) {
            if (currentLine) lines.push(currentLine);
            currentLine = word;
        } else {
            currentLine = test;
        }
    });
    if (currentLine) lines.push(currentLine);
    return lines;
}

function downloadCard() {
    const canvas = document.getElementById('card-canvas');
    const char = RIFT_DATA.characters.find(c => c.id === selectedCharId);
    canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `RIFT-${char.name}-card.png`;
        a.click();
        URL.revokeObjectURL(url);
    }, 'image/png');
}

function updateShareLinks(charId) {
    const char = RIFT_DATA.characters.find(c => c.id === charId);
    const url = encodeURIComponent(`https://vraut9301-ux.github.io/rift/cards.html#${charId}`);
    const text = encodeURIComponent(`Check out ${char.name}'s character stat card from Shadow Slave! ⚔ Made with RIFT`);

    document.getElementById('share-reddit-btn').href = `https://www.reddit.com/submit?url=${url}&title=${text}`;
    document.getElementById('share-twitter-btn').href = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
}

document.addEventListener('DOMContentLoaded', initCards);
