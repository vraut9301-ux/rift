// ── RIFT World Map ──────────────────────────────────────────────────────────
(function () {
    'use strict';

    const locations = RIFT_DATA.worldLocations;
    const characters = RIFT_DATA.characters;
    const markersLayer = document.getElementById('markers-layer');
    const svgLayer = document.getElementById('map-svg');
    const infoPanel = document.getElementById('info-panel');
    const infoClose = document.getElementById('info-close');

    let activeMarker = null;

    // ── Build location map for quick lookup ──
    const locMap = {};
    locations.forEach(loc => locMap[loc.id] = loc);

    // ── Character name lookup ──
    const charNameMap = {};
    characters.forEach(c => charNameMap[c.id] = c.name);

    // ── Render markers ──
    locations.forEach(loc => {
        const marker = document.createElement('div');
        marker.className = 'map-marker';
        marker.dataset.id = loc.id;
        marker.style.left = loc.x + '%';
        marker.style.top = loc.y + '%';

        marker.innerHTML = `
            <div class="marker-ring" style="border-color: ${loc.color}; color: ${loc.color};"></div>
            <div class="marker-dot" style="background: ${loc.color}; color: ${loc.color}; box-shadow: 0 0 20px ${loc.color}40;">
                <span style="filter: drop-shadow(0 0 4px ${loc.color});">${loc.icon}</span>
            </div>
            <div class="marker-label">${loc.name}</div>
        `;

        marker.addEventListener('click', () => openLocation(loc, marker));
        markersLayer.appendChild(marker);
    });

    // ── Draw SVG connection lines ──
    function drawConnections() {
        svgLayer.innerHTML = '';
        const container = document.getElementById('map-container');
        const w = container.offsetWidth;
        const h = container.offsetHeight;

        const drawn = new Set();

        locations.forEach(loc => {
            if (!loc.connections) return;
            loc.connections.forEach(connId => {
                const key = [loc.id, connId].sort().join('--');
                if (drawn.has(key)) return;
                drawn.add(key);

                const target = locMap[connId];
                if (!target) return;

                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', (loc.x / 100 * w));
                line.setAttribute('y1', (loc.y / 100 * h));
                line.setAttribute('x2', (target.x / 100 * w));
                line.setAttribute('y2', (target.y / 100 * h));
                svgLayer.appendChild(line);
            });
        });
    }

    drawConnections();
    window.addEventListener('resize', drawConnections);

    // ── Open location info panel ──
    function openLocation(loc, markerEl) {
        // Remove active state from previous
        if (activeMarker) activeMarker.classList.remove('active');
        activeMarker = markerEl;
        markerEl.classList.add('active');

        // Fill header
        const infoIcon = document.getElementById('info-icon');
        const infoName = document.getElementById('info-name');
        const infoBadges = document.getElementById('info-badges');
        const infoHeader = document.getElementById('info-header');

        infoIcon.textContent = loc.icon;
        infoIcon.style.color = loc.color;
        infoName.textContent = loc.name;
        infoName.style.color = loc.color;
        infoHeader.style.borderBottomColor = loc.color + '30';

        infoBadges.innerHTML = `
            <span class="info-badge type-badge">${loc.type}</span>
            <span class="info-badge rank-badge" style="border-color: ${loc.color}40; color: ${loc.color};">${loc.rank}</span>
        `;

        // Fill body
        document.getElementById('info-desc').textContent = loc.desc;
        document.getElementById('info-chapters').textContent = loc.chapters;

        // Characters
        const charsEl = document.getElementById('info-characters');
        charsEl.innerHTML = loc.characters.map(cId => {
            const name = charNameMap[cId] || cId;
            const char = characters.find(c => c.id === cId);
            const glow = char ? char.portraitGlow : '#fff';
            const colorMap = { red: '#C41E3A', gold: '#FFD700', purple: '#9B59B6', teal: '#2DD4BF' };
            const clr = colorMap[glow] || glow;
            return `<span class="info-char-tag" style="border-color: ${clr}40; color: ${clr};">${name}</span>`;
        }).join('');

        // Connections
        const connsEl = document.getElementById('info-connections');
        connsEl.innerHTML = (loc.connections || []).map(connId => {
            const target = locMap[connId];
            if (!target) return '';
            return `
                <div class="info-conn-link" data-target="${connId}">
                    <div class="info-conn-dot" style="background: ${target.color};"></div>
                    ${target.icon} ${target.name}
                </div>
            `;
        }).join('');

        // Connection click handlers
        connsEl.querySelectorAll('.info-conn-link').forEach(link => {
            link.addEventListener('click', () => {
                const targetId = link.dataset.target;
                const targetLoc = locMap[targetId];
                const targetMarker = markersLayer.querySelector(`[data-id="${targetId}"]`);
                if (targetLoc && targetMarker) {
                    openLocation(targetLoc, targetMarker);
                }
            });
        });

        // Open panel
        infoPanel.classList.add('open');
    }

    // ── Close panel ──
    infoClose.addEventListener('click', () => {
        infoPanel.classList.remove('open');
        if (activeMarker) {
            activeMarker.classList.remove('active');
            activeMarker = null;
        }
    });

    // ── Close on Esc ──
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && infoPanel.classList.contains('open')) {
            infoClose.click();
        }
    });

})();
