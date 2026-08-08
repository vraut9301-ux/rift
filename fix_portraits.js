const fs = require('fs');

const file = 'portraits.html';
let content = fs.readFileSync(file, 'utf8');

const oldNav = `<nav class="nav" id="nav">
        <div class="nav-inner">
            <a href="index.html" class="logo">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <polygon points="12,2 22,20 2,20" stroke="var(--primary)" stroke-width="2" fill="none" />
                    <polygon points="12,7 18,18 6,18" fill="var(--primary)" opacity="0.3" />
                </svg>
                <span class="logo-text">RIFT</span>
            </a>
                        <div class="nav-links">
                <a href="characters.html">Characters</a>
                <a href="recap.html">Recap</a>
                <a href="lore.html">Lore</a>
                <a href="inventory.html">Inventory</a>
                <a href="map.html">Map</a>
                <a href="portraits.html">Portraits</a>
                <a href="quiz.html">Quiz</a>
                <a href="compare.html">Compare</a>
                <a href="cards.html">Cards</a>
                <a href="community.html">Community</a>
            </div>
            <a href="characters.html" class="nav-cta">Enter the Rift</a>
        </div>
    </nav>`;

const newNav = `    <nav class="navbar" id="navbar">
        <div class="nav-inner">
            <a href="index.html" class="nav-logo">
                <span class="logo-icon">⟁</span>
                <span class="logo-text">RIFT</span>
            </a>
            <div class="nav-links">
                <!-- placeholder -->
            </div>
            <div class="nav-sync" title="Spoiler-Free Sync: Hide content beyond this chapter" style="display:flex; align-items:center; gap:0.5rem; margin-right: 1rem;">
                <span style="font-size:0.7rem; color:#a1a1aa; font-weight:600; text-transform:uppercase; letter-spacing:0.05em;">Chapter Sync:</span>
                <input type="number" id="global-chapter-sync" placeholder="Max" style="width:65px; padding:0.4rem; background:rgba(0,0,0,0.5); border:1px solid rgba(255,255,255,0.1); border-radius:6px; color:white; font-family:monospace; font-size:0.85rem; outline:none; transition: border-color 0.3s;" />
            </div>
            <a href="characters.html" class="nav-cta">Enter the Rift</a>
            <button class="hamburger" id="hamburger" onclick="document.getElementById('mobile-menu').classList.toggle('open')"><span></span><span></span><span></span></button>
        </div>
        <div class="mobile-menu" id="mobile-menu">
            <!-- placeholder -->
        </div>
    </nav>`;

content = content.replace(oldNav, newNav);
fs.writeFileSync(file, content, 'utf8');
console.log('Fixed portraits.html');
