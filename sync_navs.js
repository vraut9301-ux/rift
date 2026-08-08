const fs = require('fs');
const path = require('path');

const dir = __dirname;
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const desktopNav = `<div class="nav-links">
                <a href="characters.html">Characters</a>
                <a href="recap.html">Recap</a>
                <a href="lore.html">Lore</a>
                <a href="inventory.html">Inventory</a>
                <a href="map.html">World Map</a>
                <a href="portraits.html">Portraits</a>
                <a href="quiz.html">Quiz</a>
                <a href="compare.html">Compare</a>
                <a href="cards.html">Cards</a>
                <a href="community.html">Community</a>
            </div>`;

const mobileNav = `<div class="mobile-menu" id="mobile-menu">
            <a href="characters.html">Characters</a>
            <a href="recap.html">Recap</a>
            <a href="lore.html">Lore</a>
            <a href="inventory.html">Inventory</a>
            <a href="map.html">World Map</a>
            <a href="portraits.html">Portraits</a>
            <a href="quiz.html">Quiz</a>
            <a href="compare.html">Compare</a>
            <a href="cards.html">Cards</a>
            <a href="community.html">Community</a>
            <a href="characters.html" class="nav-cta">Enter the Rift</a>
        </div>`;

htmlFiles.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace desktop nav
    const desktopRegex = /<div class="nav-links">[\s\S]*?<\/div>/;
    if (desktopRegex.test(content)) {
        content = content.replace(desktopRegex, desktopNav);
    }

    // Replace mobile nav
    const mobileRegex = /<div class="mobile-menu" id="mobile-menu">[\s\S]*?<\/div>/;
    if (mobileRegex.test(content)) {
        content = content.replace(mobileRegex, mobileNav);
    }

    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Navbars synced!');
