const fs = require('fs');

const generatedFiles = {
    's13': 'mask_of_weaver_1772968405044.png',
    's15': 'memory_dark_descent_1772968421365.png',
    's10': 'puppeteer_needle_1772968437950.png',
    's7': 'mantle_underworld_1772968453918.png',
    'c1': 'blind_prophet_cane_1772968471062.png',
    'c2': 'sightless_veil_1772968488037.png',
    'c3': 'oracle_ring_1772968506137.png',
    'c4': 'vision_thread_1772968522949.png',
    'c5': 'fateweaver_robe_1772968539477.png',
    'c6': 'clairvoyant_eye_1772968557148.png',
    'c7': 'echo_forgotten_1772968615224.png',
    'e1': 'wolf_bone_spear_1772968635740.png',
    'e2': 'boar_hide_armor_1772968656248.png',
    'e3': 'goliath_belt_1772968675001.png',
    'e4': 'throwing_javelins_1772968692510.png',
    'e5': 'titan_grips_1772968714083.png',
    'e6': 'champion_crest_1772968729426.png'
};

let code = fs.readFileSync('data.js', 'utf8');
let count = 0;

for (let id in generatedFiles) {
    let searchStr = `id: "${id}",`;
    let replaceStr = `id: "${id}",\n    image: 'assets/items/${generatedFiles[id]}',`;

    if (code.includes(searchStr)) {
        code = code.replace(searchStr, replaceStr);
        count++;
    } else {
        console.log('Missed: ' + id);
    }
}

fs.writeFileSync('data.js', code);
console.log('Successfully updated ' + count + ' items in data.js');
