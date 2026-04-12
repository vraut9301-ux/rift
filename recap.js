/* recap.js — AI Recap Engine — FULLY DYNAMIC v2 */

// ── SPOILER SLIDER ──────────────────────────────────────────────────────────
const spoilerHints = {
    1: 'Safe — broad arc overview only, no specific spoilers',
    2: 'Moderate — key events and character development revealed',
    3: 'Full — complete spoilers including deaths, twists, and reveals'
};

const spoilerSlider = document.getElementById('spoiler-level');
const spoilerHintEl = document.getElementById('spoiler-hint');

function updateSliderStyle() {
    const pct = ((spoilerSlider.value - 1) / 2) * 100;
    spoilerSlider.style.background = `linear-gradient(to right, var(--primary) 0%, var(--primary) ${pct}%, rgba(255,255,255,0.08) ${pct}%)`;
    spoilerHintEl.textContent = spoilerHints[spoilerSlider.value];
}
spoilerSlider.addEventListener('input', updateSliderStyle);
updateSliderStyle();

// ── PRESETS ─────────────────────────────────────────────────────────────────
document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active-preset'));
        btn.classList.add('active-preset');
        document.getElementById('ch-from').value = btn.dataset.from;
        document.getElementById('ch-to').value = btn.dataset.to;
    });
});

// ── CORE ENGINE ──────────────────────────────────────────────────────────────

/**
 * Get all events in the chapter range, filtered by spoiler level and enabled toggle types.
 */
function getEventsInRange(from, to, spoilerLevel, toggles) {
    return RIFT_DATA.chapterEvents.filter(ev => {
        if (ev.ch < from || ev.ch > to) return false;
        if (ev.spoiler > spoilerLevel) return false;
        // Check toggle filters
        if (ev.type === 'event') return true;               // always include basic events
        if (ev.type === 'powerup') return toggles.power;
        if (ev.type === 'lore') return toggles.lore;
        if (ev.type === 'death') return toggles.deaths;
        if (ev.type === 'romance') return toggles.romance;
        return false;
    });
}

/**
 * Build the main summary paragraph from filtered events.
 * Groups events by type to produce a coherent narrative.
 */
function buildSummaryText(events, from, to, spoilerLevel, toggles) {
    if (events.length === 0) {
        return buildNarrativeFallback(from, to, spoilerLevel, toggles);
    }

    const basicEvents = events.filter(e => e.type === 'event');
    const powerUps = events.filter(e => e.type === 'powerup');
    const loreRevs = events.filter(e => e.type === 'lore');
    const deaths = events.filter(e => e.type === 'death');
    const romance = events.filter(e => e.type === 'romance');

    const rangeSpan = to - from;
    const isTinyRange = rangeSpan <= 10; // e.g. Ch.1-4

    let parts = [];

    // Opening context for the range
    if (rangeSpan === 0) {
        parts.push(`Chapter ${from} focus:`);
    } else if (isTinyRange) {
        parts.push(`Chapters ${from}–${to} cover:`);
    } else {
        parts.push(`Chapters ${from}–${to} span ${getArcName(from, to)}.`);
    }

    // Key story events — main narrative body
    if (basicEvents.length > 0) {
        const narrativeEvents = basicEvents.slice(0, isTinyRange ? 5 : 6);
        parts.push(narrativeEvents.map(e => e.text).join(' '));
    }

    // Power-ups section
    if (toggles.power && powerUps.length > 0) {
        const puTexts = powerUps.slice(0, 4).map(e => e.text);
        parts.push('Power developments: ' + puTexts.join(' '));
    }

    // Lore reveals
    if (toggles.lore && loreRevs.length > 0) {
        const loreTexts = loreRevs.slice(0, 3).map(e => e.text);
        parts.push('Lore & world-building: ' + loreTexts.join(' '));
    }

    // Deaths (spoiler-gated)
    if (toggles.deaths && deaths.length > 0) {
        if (spoilerLevel >= 3) {
            parts.push('Notable losses: ' + deaths.map(e => e.deathDetail || e.text).join('. '));
        } else {
            parts.push(`⚠ Deaths in this range: ${deaths.length}. Enable Full Spoilers to reveal.`);
        }
    }

    // Romance
    if (toggles.romance && romance.length > 0) {
        parts.push('Relationship moments: ' + romance.map(e => e.romanceDetail || e.text).join(' '));
    }

    return parts.join('\n\n');
}

/**
 * For ranges with no database events (e.g. future chapters, intermediate arcs).
 */
function buildNarrativeFallback(from, to, spoilerLevel, toggles) {
    // Find nearest arc and interpolate
    const allChs = RIFT_DATA.chapterEvents.map(e => e.ch).sort((a, b) => a - b);
    const nearestCh = allChs.reduce((prev, curr) =>
        Math.abs(curr - from) < Math.abs(prev - from) ? curr : prev, allChs[0]);

    const nearEvents = RIFT_DATA.chapterEvents.filter(e => e.ch === nearestCh);

    if (nearEvents.length > 0) {
        const arcName = getArcName(from, to);
        return `Chapters ${from}–${to} fall within the ${arcName}. ` +
            `Context from nearby chapters: ${nearEvents[0].text} ` +
            `Note: Highly specific events within this exact window continue the arc established in adjacent chapters.`;
    }

    return `Chapters ${from}–${to}: Shadow Slave continues Sunny's ongoing journey through the Nightmare Realm. ` +
        `The story maintains its themes of concealed power, clan politics, and Sunny's growing shadow echo army.`;
}

/**
 * Return a human-readable arc name for a chapter range.
 */
function getArcName(from, to) {
    const mid = Math.floor((from + to) / 2);
    if (mid <= 10) return 'Awakening — Sunny enters the First Nightmare';
    if (mid <= 50) return 'First Nightmare Survival Arc';
    if (mid <= 200) return 'Forgotten Shore — Dark City Arc';
    if (mid <= 350) return 'Forgotten Shore — Crimson Spire Expedition';
    if (mid <= 600) return 'Waking World & Chained Isles Arc';
    if (mid <= 900) return 'Second Nightmare & Master Rank Arc';
    if (mid <= 1100) return 'Antarctica Campaign Arc';
    if (mid <= 1260) return 'Third Nightmare & Saint Rank Arc';
    if (mid <= 1400) return 'Nightmare Desert & Fallen Grace Arc';
    if (mid <= 1480) return 'Wind Flower Island — Time Loop Arc';
    if (mid <= 1590) return 'Great River & Estuary Arc';
    if (mid <= 1620) return 'Transcendence — The Forgotten Arc';
    if (mid <= 1800) return 'Post-Transcendence & Shadow Clan Arc';
    return 'Ongoing Arc — Shadow Slave continues';
}

/**
 * Get characters active in this chapter range.
 */
function getCharsInRange(from, to, events) {
    const activeIds = new Set();
    events.forEach(e => e.chars.forEach(c => activeIds.add(c)));
    // Also include chars introduced before range end
    RIFT_DATA.characters.forEach(c => {
        if (c.firstChapter <= to) activeIds.add(c.id);
    });
    return RIFT_DATA.characters.filter(c => activeIds.has(c.id));
}

/**
 * Build Key Moments list — only basic 'event' type items.
 */
function buildKeyMoments(events) {
    return events
        .filter(e => e.type === 'event')
        .map(e => ({ ch: e.ch, text: e.text }));
}

/**
 * Build Power-Ups summary list with detail.
 */
function buildPowerUpsList(events) {
    return events
        .filter(e => e.type === 'powerup')
        .map(e => ({ ch: e.ch, detail: e.powerDetail || e.text, chars: e.chars }));
}

/**
 * Build Lore reveals list.
 */
function buildLoreList(events) {
    return events
        .filter(e => e.type === 'lore')
        .map(e => ({ ch: e.ch, detail: e.loreDetail || e.text }));
}

// ── GENERATE BUTTON ───────────────────────────────────────────────────────────
const generateBtn = document.getElementById('rc-generate-btn');
const btnText = document.getElementById('rc-btn-text');
const resultArea = document.getElementById('recap-result-area');
const emptyState = document.getElementById('recap-empty');
const outputEl = document.getElementById('recap-output');

let currentRecap = null;
let isGenerating = false;

generateBtn.addEventListener('click', () => {
    if (isGenerating) return;

    const from = parseInt(document.getElementById('ch-from').value) || 1;
    const to = parseInt(document.getElementById('ch-to').value) || 50;

    if (from > to) {
        document.getElementById('ch-from').style.borderColor = 'var(--primary)';
        setTimeout(() => document.getElementById('ch-from').style.borderColor = '', 1500);
        return;
    }
    if (to > 2400) {
        document.getElementById('ch-to').value = 2400;
        return;
    }

    // Read toggles
    const toggles = {
        events: document.getElementById('tog-events').checked,
        power: document.getElementById('tog-power').checked,
        deaths: document.getElementById('tog-deaths').checked,
        romance: document.getElementById('tog-romance').checked,
        lore: document.getElementById('tog-lore').checked,
    };
    const spoilerLevel = parseInt(spoilerSlider.value);

    isGenerating = true;
    generateBtn.disabled = true;

    const messages = [
        '⚡ Scanning chapter range...',
        '🔍 Extracting key events...',
        '⚔ Cataloguing power-ups...',
        '📜 Pulling lore reveals...',
        '✓ Recap ready!'
    ];
    let msgIdx = 0;
    btnText.textContent = messages[0];
    const interval = setInterval(() => {
        msgIdx = Math.min(msgIdx + 1, messages.length - 1);
        btnText.textContent = messages[msgIdx];
    }, 380);

    setTimeout(() => {
        clearInterval(interval);
        isGenerating = false;
        generateBtn.disabled = false;
        btnText.textContent = '⚡ Generate Recap';

        // ── COMPUTE EVERYTHING ──────────────────────────────────────────────
        const filteredEvents = getEventsInRange(from, to, spoilerLevel, toggles);
        const summaryText = buildSummaryText(filteredEvents, from, to, spoilerLevel, toggles);
        const chars = getCharsInRange(from, to, filteredEvents);
        const keyMoments = toggles.events ? buildKeyMoments(filteredEvents) : [];
        const powerUps = toggles.power ? buildPowerUpsList(filteredEvents) : [];
        const loreRevs = toggles.lore ? buildLoreList(filteredEvents) : [];

        // ── BUILD TAGS ROW ──────────────────────────────────────────────────
        const tags = [];
        if (toggles.power && powerUps.length > 0) {
            const names = [...new Set(powerUps.flatMap(p => p.chars))]
                .map(id => RIFT_DATA.characters.find(c => c.id === id)?.name)
                .filter(Boolean).slice(0, 3);
            tags.push(`<span class="rtag power">⚡ ${powerUps.length} Power-Up${powerUps.length > 1 ? 's' : ''}${names.length ? ': ' + names.join(', ') : ''}</span>`);
        }
        if (toggles.lore && loreRevs.length > 0) {
            tags.push(`<span class="rtag lore">📜 ${loreRevs.length} Lore Reveal${loreRevs.length > 1 ? 's' : ''}</span>`);
        }
        const deathEvents = filteredEvents.filter(e => e.type === 'death');
        if (toggles.deaths && deathEvents.length > 0) {
            tags.push(`<span class="rtag warning">⚠ ${deathEvents.length} Death${deathEvents.length > 1 ? 's' : ''} ${spoilerLevel < 3 ? '(spoilers hidden)' : ''}</span>`);
        }
        const romanceEvents = filteredEvents.filter(e => e.type === 'romance');
        if (toggles.romance && romanceEvents.length > 0) {
            tags.push(`<span class="rtag lore" style="background:rgba(236,72,153,0.08);color:#f472b6;border-color:rgba(236,72,153,0.2)">💜 ${romanceEvents.length} Relationship Moment${romanceEvents.length > 1 ? 's' : ''}</span>`);
        }
        if (!toggles.events && !toggles.power && !toggles.lore && !toggles.deaths && !toggles.romance) {
            tags.push(`<span style="font-size:0.75rem;color:var(--text-dim)">Enable filters above for detailed tags</span>`);
        }

        // Store for copy/bookmark
        currentRecap = { from, to, text: summaryText, tags, keyMoments, powerUps, loreRevs, chars, toggles };

        // ── FILL OUTPUT ─────────────────────────────────────────────────────
        document.getElementById('ro-title').textContent = `Summary: Ch. ${from}–${to}`;

        // Main text — convert newline paragraphs to proper HTML
        const roContent = document.getElementById('ro-content');
        roContent.innerHTML = summaryText.split('\n\n').map(para =>
            `<p style="margin-bottom:0.75rem">${para}</p>`
        ).join('');

        document.getElementById('ro-tags-row').innerHTML = tags.join('') ||
            '<span style="font-size:0.75rem;color:var(--text-dim)">No filters enabled</span>';

        // Key Moments
        const eventsSection = document.getElementById('ro-events');
        const eventsList = document.getElementById('ro-events-list');
        if (toggles.events && keyMoments.length > 0) {
            eventsSection.style.display = 'block';
            eventsList.innerHTML = keyMoments.slice(0, 7).map(e =>
                `<div class="ro-event-item"><span class="ro-event-dot">▸</span><span class="ro-event-ch">Ch.${e.ch}</span> ${e.text}</div>`
            ).join('');
        } else if (toggles.events && keyMoments.length === 0) {
            eventsSection.style.display = 'block';
            eventsList.innerHTML = `<div class="ro-event-item" style="color:var(--text-dim)">No specific key events databased for this exact range. The main summary above captures the arc context.</div>`;
        } else {
            eventsSection.style.display = 'none';
        }

        // Power-Ups section
        const powerSection = document.getElementById('ro-power-section');
        if (powerSection) {
            if (toggles.power && powerUps.length > 0) {
                powerSection.style.display = 'block';
                document.getElementById('ro-power-list').innerHTML = powerUps.slice(0, 5).map(p =>
                    `<div class="ro-event-item"><span class="ro-event-dot" style="color:var(--gold)">⚡</span><span class="ro-event-ch">Ch.${p.ch}</span> ${p.detail}</div>`
                ).join('');
            } else {
                powerSection.style.display = 'none';
            }
        }

        // Lore section
        const loreSection = document.getElementById('ro-lore-section');
        if (loreSection) {
            if (toggles.lore && loreRevs.length > 0) {
                loreSection.style.display = 'block';
                document.getElementById('ro-lore-list').innerHTML = loreRevs.slice(0, 4).map(l =>
                    `<div class="ro-event-item"><span class="ro-event-dot" style="color:var(--purple)">📜</span><span class="ro-event-ch">Ch.${l.ch}</span> ${l.detail}</div>`
                ).join('');
            } else {
                loreSection.style.display = 'none';
            }
        }

        // Characters active
        const charsEl = document.getElementById('ro-chars-list');
        charsEl.innerHTML = chars.slice(0, 6).map(c =>
            `<a href="characters.html?char=${c.id}" class="ro-char-chip" title="View ${c.name}'s full profile">${c.portraitSymbol} ${c.name}</a>`
        ).join('');

        // Show result
        resultArea.style.alignItems = 'flex-start';
        emptyState.style.display = 'none';
        outputEl.style.display = 'block';
        outputEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    }, 2000);
});

// ── COPY ─────────────────────────────────────────────────────────────────────
document.getElementById('ro-copy-btn').addEventListener('click', () => {
    if (!currentRecap) return;
    const pw = currentRecap.powerUps.length > 0
        ? '\n\nPOWER-UPS:\n' + currentRecap.powerUps.map(p => `• Ch.${p.ch}: ${p.detail}`).join('\n')
        : '';
    const lr = currentRecap.loreRevs.length > 0
        ? '\n\nLORE REVEALS:\n' + currentRecap.loreRevs.map(l => `• Ch.${l.ch}: ${l.detail}`).join('\n')
        : '';
    const text = `RIFT — Shadow Slave Recap: Ch. ${currentRecap.from}–${currentRecap.to}\n${'─'.repeat(50)}\n\n${currentRecap.text}${pw}${lr}`;
    navigator.clipboard.writeText(text).then(() => {
        document.getElementById('ro-copy-btn').textContent = '✓ Copied!';
        setTimeout(() => document.getElementById('ro-copy-btn').textContent = '⧉ Copy', 2000);
    });
});

// ── BOOKMARK ──────────────────────────────────────────────────────────────────
const bookmarksSection = document.getElementById('bookmarks-section');
const bookmarksList = document.getElementById('bookmarks-list');
let bookmarks = JSON.parse(localStorage.getItem('rift-bookmarks') || '[]');

function renderBookmarks() {
    if (bookmarks.length === 0) { bookmarksSection.style.display = 'none'; return; }
    bookmarksSection.style.display = 'block';
    bookmarksList.innerHTML = bookmarks.map((bm, i) => `
    <div class="bookmark-card">
      <div>
        <div class="bm-title">Ch. ${bm.from}–${bm.to} Recap</div>
        <div class="bm-meta">Saved • Shadow Slave</div>
      </div>
      <button class="bm-load-btn" onclick="loadBookmark(${i})">Load</button>
    </div>
  `).join('');
}

document.getElementById('ro-bookmark-btn').addEventListener('click', () => {
    if (!currentRecap) return;
    const exists = bookmarks.some(b => b.from === currentRecap.from && b.to === currentRecap.to);
    if (!exists) {
        bookmarks.push({ from: currentRecap.from, to: currentRecap.to });
        localStorage.setItem('rift-bookmarks', JSON.stringify(bookmarks));
        renderBookmarks();
        document.getElementById('ro-bookmark-btn').textContent = '✓ Saved!';
        setTimeout(() => document.getElementById('ro-bookmark-btn').textContent = '⊕ Save', 2000);
    }
});

window.loadBookmark = function (idx) {
    const bm = bookmarks[idx];
    document.getElementById('ch-from').value = bm.from;
    document.getElementById('ch-to').value = bm.to;
    generateBtn.click();
};

// ── PROGRESS TRACKER ──────────────────────────────────────────────────────────
function initRecapProgress() {
    const ptcInput = document.getElementById('current-chapter');
    
    // Sync to global engine
    if (window.RiftEngine) {
        ptcInput.value = window.RiftEngine.getChapter();
    } else {
        const saved = localStorage.getItem('rift-progress-shadow-slave');
        if (saved) ptcInput.value = saved;
    }

    // Listen for global changes from navbar
    window.addEventListener('rift-chapter-changed', (e) => {
        if(ptcInput) ptcInput.value = e.detail;
    });

    document.getElementById('ptc-save').addEventListener('click', () => {
        const val = parseInt(ptcInput.value);
        if (val) {
            if (window.RiftEngine) {
                window.RiftEngine.setChapter(val);
            } else {
                localStorage.setItem('rift-progress-shadow-slave', val);
            }
            document.getElementById('ptc-saved').style.display = 'block';
            setTimeout(() => document.getElementById('ptc-saved').style.display = 'none', 2000);
        }
    });

    // Smart autofill for recap range based on user's current progress
    const autoFillBtn = document.createElement('button');
    autoFillBtn.className = 'preset-btn';
    autoFillBtn.style.color = 'var(--gold)';
    autoFillBtn.style.borderColor = 'var(--gold)';
    autoFillBtn.textContent = 'Up to My Progress';
    autoFillBtn.addEventListener('click', () => {
        const to = ptcInput.value || 100;
        const from = Math.max(1, to - 50); // Get last 50 chapters
        document.getElementById('ch-from').value = from;
        document.getElementById('ch-to').value = to;
        autoFillBtn.classList.add('active-preset');
        setTimeout(() => autoFillBtn.classList.remove('active-preset'), 500);
    });
    document.querySelector('.rc-presets').appendChild(autoFillBtn);
}

initRecapProgress();
renderBookmarks();
