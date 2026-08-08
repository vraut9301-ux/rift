const fs = require('fs');
const path = require('path');

const dir = __dirname;
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let fixedCount = 0;

htmlFiles.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix 1: Replace ALL hamburger buttons with inline onclick version
    // Handle both single-line and multi-line hamburger button formats
    const oldHamburger1 = /<button class="hamburger" id="hamburger"><span><\/span><span><\/span><span><\/span><\/button>/g;
    const oldHamburger2 = /<button class="hamburger"\s*\n?\s*id="hamburger"><span><\/span><span><\/span><span><\/span><\/button>/g;
    const oldHamburger3 = /<button class="hamburger" id="hamburger">\s*\n\s*<span><\/span><span><\/span><span><\/span>\s*\n\s*<\/button>/g;

    const newHamburger = `<button class="hamburger" id="hamburger" onclick="document.getElementById('mobile-menu').classList.toggle('open')"><span></span><span></span><span></span></button>`;

    if (oldHamburger1.test(content)) {
        content = content.replace(oldHamburger1, newHamburger);
        fixedCount++;
        console.log(`Fixed (pattern 1): ${file}`);
    } else if (oldHamburger2.test(content)) {
        content = content.replace(oldHamburger2, newHamburger);
        fixedCount++;
        console.log(`Fixed (pattern 2): ${file}`);
    } else if (oldHamburger3.test(content)) {
        content = content.replace(oldHamburger3, newHamburger);
        fixedCount++;
        console.log(`Fixed (pattern 3): ${file}`);
    } else {
        // Try a more flexible regex
        const flexRegex = /<button\s+class="hamburger"\s+id="hamburger"[^>]*>[\s\S]*?<\/button>/g;
        if (flexRegex.test(content)) {
            content = content.replace(flexRegex, newHamburger);
            fixedCount++;
            console.log(`Fixed (flex pattern): ${file}`);
        } else {
            console.log(`No hamburger found: ${file}`);
        }
    }

    fs.writeFileSync(filePath, content, 'utf8');
});

console.log(`\nTotal files fixed: ${fixedCount} / ${htmlFiles.length}`);
