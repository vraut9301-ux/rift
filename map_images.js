const fs = require('fs');

const itemsToMap = {
    "Rusted Shiv": "rusted_shiv.png",
    "Shadow Coin Pouch": "shadow_coin_pouch.png",
    "Nightmare Leather Garb": "nightmare_leather_garb.png",
    "Mask of the Nameless": "mask_of_nameless.png",
    "Iron Nightmare Blade": "iron_nightmare_blade.png",
    "Shadow Cloak": "shadow_cloak.png",
    "Bone Nightmare Pauldrons": "bone_pauldrons.png",
    "Shade's Binding": "shades_binding.png",
    "Echo Whisper": "echo_whisper.png",
    "Veil of Shadow": "veil_of_shadow.png",
    "Carapace of Night": "carapace_of_night.png",
    "Dream Ring — Nightmare Heart": "dream_ring.png",
    "Nameless Fragment — The Dreamless": "nameless_fragment.png",
    "Shadow General's Mantle": "shadow_general_mantle.png",
    "Sovereign's Shadow Seal": "sovereign_shadow_seal.png",
    "White Flame Sword": "white_flame_sword.png",

    "Blind Prophet's Cane": "blind_prophet_cane_1772968471062.png",
    "Boar-Hide Armor": "boar_hide_armor_1772968656248.png",
    "Champion's Crest": "champion_crest_1772968729426.png",
    "Clairvoyant Eye": "clairvoyant_eye_1772968557148.png",
    "Echo of the Forgotten": "echo_forgotten_1772968615224.png",
    "Fateweaver's Robe": "fateweaver_robe_1772968539477.png",
    "Goliath's Belt": "goliath_belt_1772968675001.png",
    "Mantle of Underworld": "mantle_underworld_1772968453918.png",
    "Mask of the Weaver": "mask_of_weaver_1772968405044.png",
    "Memory of Dark Descent": "memory_dark_descent_1772968421365.png",
    "Oracle's Ring": "oracle_ring_1772968506137.png",
    "Puppeteer's Needle": "puppeteer_needle_1772968437950.png",
    "Sightless Veil": "sightless_veil_1772968488037.png",
    "Throwing Javelins": "throwing_javelins_1772968692510.png",
    "Titan's Grips": "titan_grips_1772968714083.png",
    "Vision Thread": "vision_thread_1772968522949.png",
    "Wolf-Bone Spear": "wolf_bone_spear_1772968635740.png"
};

let data = fs.readFileSync('data.js', 'utf8');
let count = 0;

for (const [name, filename] of Object.entries(itemsToMap)) {
    // Regex matches the start of the line with id: "...", then the name: "NAME"
    // We want to insert image: 'assets/items/filename',
    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(name:\\s*["']${escapedName}["'],)`);

    if (regex.test(data)) {
        if (!data.includes(`image: 'assets/items/${filename}'`)) {
            data = data.replace(regex, `$1\n    image: 'assets/items/${filename}',`);
            count++;
        }
    } else {
        console.log('Could not find item name in data.js:', name);
    }
}

fs.writeFileSync('data.js', data);
console.log('Successfully added ' + count + ' image paths to data.js');
