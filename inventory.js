/* inventory.js — RIFT Character Inventory Engine — ANIME ART v2 */

// ── STATE ────────────────────────────────────────────────────────────────────
let activeCharId = 'sunny';
let userChapter = 50;
let equippedItems = {};
let activeSlotFilter = 'all';

// ── CHARACTER MASTER CONFIG ──────────────────────────────────────────────────
// Novel-accurate descriptions used for SVG art generation
const CHAR_CONFIG = {
    sunny: {
        color: '#C41E3A', accent: '#4B0082',
        rank: 'SAINT',
        bg: 'radial-gradient(ellipse at 50% 80%, #2a0010 0%, #0a0007 60%)',
        auraColor: 'rgba(196,30,58,0.4)',
        // Novel description: Dark hair, sharp features, olive skin, shadow aura, crescent scar on palm
        art: {
            skinTone: '#C8956C', hairColor: '#1A1A2E', eyeColor: '#C41E3A',
            hairStyle: 'dark-wild', face: 'sharp', build: 'lean-tall',
            aura: 'shadow-tendrils', markings: 'crescent-palm',
            baseOutfit: 'dark-tattered',
        }
    },
    nephis: {
        color: '#FF8C00', accent: '#FFF5E0',
        rank: 'TRANSCENDENT',
        bg: 'radial-gradient(ellipse at 50% 80%, #2a1000 0%, #0a0500 60%)',
        auraColor: 'rgba(255,200,50,0.35)',
        // Novel description: White silver hair, pale skin, silver eyes, white flame corona
        art: {
            skinTone: '#F0E8D8', hairColor: '#E8E8F5', eyeColor: '#D4AF37',
            hairStyle: 'flowing-silver', face: 'refined-noble', build: 'slender-graceful',
            aura: 'white-flame', markings: 'flame-crown',
            baseOutfit: 'memory-clan-white',
        }
    },
    cassie: {
        color: '#9B59B6', accent: '#2C1654',
        rank: 'REFINED',
        bg: 'radial-gradient(ellipse at 50% 80%, #120820 0%, #050008 60%)',
        auraColor: 'rgba(155,89,182,0.3)',
        // Novel description: Pale, blind milky eyes, dark hair with starlight threads woven in
        art: {
            skinTone: '#E8DFDF', hairColor: '#2A1035', eyeColor: '#CCBBDD',
            hairStyle: 'dark-starlit', face: 'calm-ethereal', build: 'slight',
            aura: 'fate-threads', markings: 'starlight-eyes',
            baseOutfit: 'oracle-dark',
        }
    },
    effie: {
        color: '#2ECC71', accent: '#006400',
        rank: 'MASTER',
        bg: 'radial-gradient(ellipse at 50% 80%, #0a1a0a 0%, #020800 60%)',
        auraColor: 'rgba(46,204,113,0.3)',
        // Novel description: Very tall muscular woman, copper skin, dark green eyes, hunt markings
        art: {
            skinTone: '#A0622A', hairColor: '#3A2010', eyeColor: '#2ECC71',
            hairStyle: 'short-battle', face: 'strong-proud', build: 'tall-muscular',
            aura: 'hunt-constellation', markings: 'beast-tattoos',
            baseOutfit: 'hunt-leather',
        }
    },
    kai: {
        color: '#4169E1', accent: '#191970',
        rank: 'MASTER',
        bg: 'radial-gradient(ellipse at 50% 80%, #060a1a 0%, #010512 60%)',
        auraColor: 'rgba(65,105,225,0.3)',
        // Novel description: Calm handsome face, dark blue aura, Arrow Clan precise features
        art: {
            skinTone: '#D4A882', hairColor: '#1A1530', eyeColor: '#4169E1',
            hairStyle: 'tied-dark', face: 'calm-precise', build: 'athletic',
            aura: 'arrow-trails', markings: 'arrow-clan-sigil',
            baseOutfit: 'archer-dark',
        }
    },
    morgans: {
        color: '#C41E3A', accent: '#4A0000',
        rank: 'MASTER',
        bg: 'radial-gradient(ellipse at 50% 80%, #1a0000 0%, #0a0000 60%)',
        auraColor: 'rgba(180,0,0,0.4)',
        // Novel description: Unnaturally pale skin, crimson red eyes, blood aura, unsettling presence
        art: {
            skinTone: '#D4C4C4', hairColor: '#0A0000', eyeColor: '#C41E3A',
            hairStyle: 'sleek-dark', face: 'pale-unsettling', build: 'lean',
            aura: 'blood-mist', markings: 'blood-veins',
            baseOutfit: 'blood-faction-robe',
        }
    },
    jet: {
        color: '#4169E1', accent: '#1C3A5E',
        rank: 'ASCENDED',
        bg: 'radial-gradient(ellipse at 50% 80%, #06102a 0%, #01020a 60%)',
        auraColor: 'rgba(65,105,225,0.4)',
        // Novel description: Pale silver hair, pale skin, blue glowing eyes, chill mist aura
        art: {
            skinTone: '#E0E8E8', hairColor: '#C0C8D0', eyeColor: '#4169E1',
            hairStyle: 'tied-dark', face: 'cold-sharp', build: 'tall-athletic',
            aura: 'chill-mist', markings: 'none',
            baseOutfit: 'military-officer',
        }
    }
};

const RARITY_COLORS = {
    common: '#9CA3AF', uncommon: '#4ADE80', rare: '#60A5FA',
    legendary: '#F59E0B', mythic: '#C41E3A'
};

// ── ANIME SVG CHARACTER ART GENERATOR ───────────────────────────────────────
// Each character has a full SVG body that reacts to equipped items

function buildCharacterSVG(charId, equipped) {
    const cfg = CHAR_CONFIG[charId];
    const art = cfg.art;
    const allItems = RIFT_DATA.inventoryItems[charId] || [];

    // Gather equipped item data
    const weaponItem = equipped.weapon ? allItems.find(i => i.id === equipped.weapon) : null;
    const armorItem = equipped.armor ? allItems.find(i => i.id === equipped.armor) : null;
    const cloakItem = equipped.cloak ? allItems.find(i => i.id === equipped.cloak) : null;
    const offhandItem = equipped.offhand ? allItems.find(i => i.id === equipped.offhand) : null;
    const accessItem = equipped.accessory ? allItems.find(i => i.id === equipped.accessory) : null;

    // Aura color = item override or character default
    const auraCol = weaponItem ? weaponItem.color
        : armorItem ? armorItem.color
            : cfg.color;

    return `
<svg viewBox="0 0 280 420" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;max-height:400px">
  <defs>
    <!-- Aura glow gradient -->
    <radialGradient id="aura-g" cx="50%" cy="85%" r="55%">
      <stop offset="0%" stop-color="${auraCol}" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="${auraCol}" stop-opacity="0"/>
    </radialGradient>
    <!-- Skin gradient -->
    <linearGradient id="skin-g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${art.skinTone}"/>
      <stop offset="100%" stop-color="${shadeColor(art.skinTone, -30)}"/>
    </linearGradient>
    <!-- Hair gradient -->
    <linearGradient id="hair-g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${lightenColor(art.hairColor, 20)}"/>
      <stop offset="100%" stop-color="${art.hairColor}"/>
    </linearGradient>
    <!-- Outfit gradient -->
    <linearGradient id="outfit-g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${lightenColor(cfg.color, -20)}"/>
      <stop offset="100%" stop-color="${shadeColor(cfg.color, -60)}"/>
    </linearGradient>
    <!-- armor override gradient -->
    <linearGradient id="armor-g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${armorItem ? lightenColor(armorItem.color, 20) : '#2A2A3A'}"/>
      <stop offset="100%" stop-color="${armorItem ? armorItem.color : '#1A1A2A'}"/>
    </linearGradient>
    <!-- Glow filter -->
    <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <filter id="strong-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <!-- Cloak mask -->
    <clipPath id="body-clip">
      <rect x="60" y="120" width="160" height="260" rx="10"/>
    </clipPath>
  </defs>

  <!-- ── BACKGROUND AURA ── -->
  <ellipse cx="140" cy="370" rx="120" ry="60" fill="url(#aura-g)" opacity="0.8"/>
  ${buildAuraEffect(charId, cfg, auraCol)}

  <!-- ── CLOAK BACK LAYER ── -->
  ${cloakItem ? buildCloakBack(cloakItem, cfg) : ''}

  <!-- ── BODY ── -->
  <!-- Torso + Legs base -->
  <path d="M105,195 L175,195 L188,360 L92,360 Z" fill="url(#outfit-g)" opacity="0.85"/>
  <!-- Torso line details -->
  <line x1="140" y1="195" x2="140" y2="290" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>

  <!-- ── ARMOR OVERLAY ── -->
  ${armorItem ? buildArmorSVG(armorItem, cfg) : buildDefaultArmor(charId, cfg)}

  <!-- ── NECK ── -->
  <rect x="128" y="160" width="24" height="38" rx="8" fill="url(#skin-g)"/>

  <!-- ── HEAD ── -->
  ${buildHeadSVG(charId, art, cfg, accessItem)}

  <!-- ── OFF-HAND (left side) ── -->
  <!-- Left upper arm -->
  <path d="M105,200 Q78,210 72,255" stroke="url(#skin-g)" stroke-width="22" stroke-linecap="round" fill="none"/>
  ${offhandItem ? buildOffHandSVG(offhandItem) : buildDefaultHand('left', art)}

  <!-- ── WEAPON ARM (right side) ── -->
  <!-- Right upper arm -->
  <path d="M175,200 Q202,210 208,255" stroke="url(#skin-g)" stroke-width="22" stroke-linecap="round" fill="none"/>
  ${weaponItem ? buildWeaponSVG(weaponItem, cfg) : buildDefaultHand('right', art)}

  <!-- ── CLOAK FRONT LAYER ── -->
  ${cloakItem ? buildCloakFront(cloakItem, cfg) : ''}

  <!-- ── SPECIAL EFFECTS OVERLAY ── -->
  ${buildSpecialEffect(charId, equipped, cfg)}

  <!-- ── RANK BADGE ── -->
  <rect x="95" y="380" width="90" height="18" rx="9" fill="rgba(0,0,0,0.6)" stroke="${cfg.color}" stroke-width="0.8" stroke-opacity="0.5"/>
  <text x="140" y="393" text-anchor="middle" font-family="Cinzel,serif" font-size="7" font-weight="700" fill="${cfg.color}" letter-spacing="1.5" opacity="0.9">${CHAR_CONFIG[charId].rank}</text>

</svg>`;
}

// ── HEAD SVG ─────────────────────────────────────────────────────────────────
function buildHeadSVG(charId, art, cfg, accessItem) {
    const showMask = accessItem && (accessItem.id === 's13' || accessItem.name.includes('Mask'));
    const hasCrown = accessItem && (accessItem.name.includes('Crown') || accessItem.name.includes('Circlet'));

    // Head shape — slightly different per character build
    const headW = art.build === 'tall-muscular' ? 38 : 34;
    const headH = art.build === 'slight' ? 42 : 38;

    let html = '';

    // Hair back
    html += buildHairBack(charId, art);

    // Face
    html += `<ellipse cx="140" cy="140" rx="${headW}" ry="${headH}" fill="url(#skin-g)"/>`;

    if (showMask) {
        // Mask of the Nameless - featureless dark mask
        html += `
        <ellipse cx="140" cy="140" rx="${headW + 2}" ry="${headH + 2}" fill="${accessItem.color}" opacity="0.92" filter="url(#glow)"/>
        <ellipse cx="140" cy="140" rx="${headW - 2}" ry="${headH - 2}" fill="none" stroke="${cfg.color}" stroke-width="1.5" opacity="0.5"/>
        <text x="140" y="144" text-anchor="middle" font-size="16" opacity="0.7">${accessItem.emoji}</text>
        `;
    } else {
        // Eyes
        html += buildEyes(charId, art, cfg);
        // Mouth
        html += `<path d="M132,155 Q140,159 148,155" stroke="${shadeColor(art.skinTone, -40)}" stroke-width="1.2" fill="none" stroke-linecap="round"/>`;
        // Nose
        html += `<path d="M138,145 L136,152 Q140,154 144,152 L142,145" stroke="${shadeColor(art.skinTone, -30)}" stroke-width="0.8" fill="none"/>`;
    }

    // Character-specific facial markings
    html += buildFacialMarkings(charId, art, cfg);

    // Hair front
    html += buildHairFront(charId, art, cfg);

    // Crown/circlet accessory
    if (hasCrown && !showMask) {
        html += `
        <ellipse cx="140" cy="106" rx="36" ry="6" fill="none" stroke="${accessItem.color}" stroke-width="2" opacity="0.8" filter="url(#glow)"/>
        <circle cx="140" cy="102" r="4" fill="${accessItem.color}" opacity="0.9"/>
        <circle cx="118" cy="108" r="2.5" fill="${accessItem.color}" opacity="0.7"/>
        <circle cx="162" cy="108" r="2.5" fill="${accessItem.color}" opacity="0.7"/>
        `;
    }

    return html;
}

function buildEyes(charId, art, cfg) {
    const isCassie = charId === 'cassie';
    if (isCassie) {
        // Cassie: milky blind eyes with starlight
        return `
        <ellipse cx="128" cy="136" rx="6" ry="4" fill="#EEE8F8"/>
        <ellipse cx="152" cy="136" rx="6" ry="4" fill="#EEE8F8"/>
        <ellipse cx="128" cy="136" rx="5" ry="3.5" fill="rgba(155,89,182,0.3)"/>
        <ellipse cx="152" cy="136" rx="5" ry="3.5" fill="rgba(155,89,182,0.3)"/>
        <circle cx="128" cy="136" r="1" fill="white" opacity="0.8"/>
        <circle cx="152" cy="136" r="1" fill="white" opacity="0.8"/>
        `;
    }
    // Standard anime eyes — large, colored iris
    return `
    <!-- Left eye -->
    <ellipse cx="128" cy="136" rx="7" ry="5.5" fill="#0A0A15"/>
    <ellipse cx="128" cy="136" rx="5.5" ry="4.5" fill="${art.eyeColor}"/>
    <ellipse cx="128" cy="136" rx="3" ry="3" fill="${art.eyeColor}" opacity="0.8"/>
    <circle cx="128" cy="136" r="2" fill="#080808"/>
    <circle cx="130" cy="134" r="1.2" fill="white" opacity="0.9"/>
    <!-- Right eye -->
    <ellipse cx="152" cy="136" rx="7" ry="5.5" fill="#0A0A15"/>
    <ellipse cx="152" cy="136" rx="5.5" ry="4.5" fill="${art.eyeColor}"/>
    <ellipse cx="152" cy="136" rx="3" ry="3" fill="${art.eyeColor}" opacity="0.8"/>
    <circle cx="152" cy="136" r="2" fill="#080808"/>
    <circle cx="154" cy="134" r="1.2" fill="white" opacity="0.9"/>
    <!-- Eyelashes -->
    <path d="M121,132 Q128,128 135,132" stroke="#0A0A15" stroke-width="1.5" fill="none"/>
    <path d="M145,132 Q152,128 159,132" stroke="#0A0A15" stroke-width="1.5" fill="none"/>
    `;
}

function buildFacialMarkings(charId, art, cfg) {
    switch (charId) {
        case 'sunny':
            // Shadow mark under left eye
            return `<path d="M121,142 L126,145" stroke="${cfg.color}" stroke-width="1" opacity="0.6"/>`;
        case 'nephis':
            // Faint flame mark on forehead
            return `<path d="M137,112 Q140,107 143,112" stroke="#FFD700" stroke-width="1" fill="none" opacity="0.5"/>`;
        case 'effie':
            // Hunt tattoo lines on cheeks
            return `
            <path d="M115,136 L122,138" stroke="#2ECC71" stroke-width="0.8" opacity="0.6"/>
            <path d="M158,138 L165,136" stroke="#2ECC71" stroke-width="0.8" opacity="0.6"/>`;
        case 'morgans':
            // Blood vein markings
            return `
            <path d="M116,135 Q120,130 124,135" stroke="#8B0000" stroke-width="0.7" fill="none" opacity="0.7"/>
            <path d="M156,135 Q160,130 164,135" stroke="#8B0000" stroke-width="0.7" fill="none" opacity="0.7"/>`;
        case 'kai':
            // Arrow clan mark on forehead center
            return `<text x="140" y="122" text-anchor="middle" font-size="6" fill="#4169E1" opacity="0.5">◈</text>`;
        default: return '';
    }
}

function buildHairBack(charId, art) {
    switch (charId) {
        case 'sunny':
            return `<path d="M108,115 Q110,90 140,88 Q170,90 172,115 Q175,155 172,175 L108,175 Q105,155 108,115Z" fill="url(#hair-g)" opacity="0.9"/>`;
        case 'nephis':
            // Long flowing silver hair behind
            return `
            <path d="M106,120 Q108,95 140,93 Q172,95 174,120" fill="url(#hair-g)" opacity="0.9"/>
            <path d="M108,160 Q85,210 78,290 Q75,330 82,360" stroke="url(#hair-g)" stroke-width="18" fill="none" stroke-linecap="round" opacity="0.7"/>
            <path d="M172,160 Q195,210 202,290 Q205,330 198,360" stroke="url(#hair-g)" stroke-width="16" fill="none" stroke-linecap="round" opacity="0.6"/>
            `;
        case 'cassie':
            return `<path d="M106,125 Q108,98 140,96 Q172,98 174,125 Q175,160 170,180 L110,180 Q105,160 106,125Z" fill="url(#hair-g)" opacity="0.85"/>`;
        case 'effie':
            // Short military cut
            return `<path d="M106,122 Q108,100 140,98 Q172,100 174,122 Q174,138 170,148 L110,148 Q106,138 106,122Z" fill="url(#hair-g)"/>`;
        case 'kai':
            // Tied back hair
            return `
            <path d="M108,118 Q108,95 140,93 Q172,95 172,118" fill="url(#hair-g)" opacity="0.9"/>
            <path d="M170,140 Q185,160 188,210" stroke="url(#hair-g)" stroke-width="12" fill="none" stroke-linecap="round" opacity="0.6"/>
            `;
        case 'morgans':
            return `<path d="M108,118 Q110,93 140,91 Q170,93 172,118 Q174,150 170,170 L110,170 Q106,150 108,118Z" fill="url(#hair-g)" opacity="0.92"/>`;
        default:
            return `<path d="M108,115 Q110,90 140,88 Q170,90 172,115" fill="url(#hair-g)"/>`;
    }
}

function buildHairFront(charId, art, cfg) {
    switch (charId) {
        case 'sunny':
            // Wild dark strands
            return `
            <path d="M108,115 Q115,100 125,108" fill="url(#hair-g)" opacity="0.9"/>
            <path d="M172,115 Q165,100 155,108" fill="url(#hair-g)" opacity="0.9"/>
            <path d="M120,100 Q130,92 140,96" fill="url(#hair-g)" opacity="0.8"/>
            `;
        case 'nephis':
            // Flowing silver front strands
            return `
            <path d="M108,120 Q112,102 118,112" fill="${art.hairColor}" opacity="0.85"/>
            <path d="M172,120 Q168,102 162,112" fill="${art.hairColor}" opacity="0.85"/>
            <path d="M125,100 Q133,93 140,97" fill="${art.hairColor}" opacity="0.75"/>
            `;
        case 'cassie':
            // Dark hair with sparkle marks
            return `
            <path d="M108,125 Q112,105 118,115" fill="url(#hair-g)" opacity="0.9"/>
            <path d="M172,125 Q168,105 162,115" fill="url(#hair-g)" opacity="0.9"/>
            <circle cx="130" cy="103" r="1" fill="${cfg.color}" opacity="0.7"/>
            <circle cx="145" cy="98" r="0.8" fill="${cfg.color}" opacity="0.6"/>
            <circle cx="158" cy="105" r="1" fill="${cfg.color}" opacity="0.5"/>
            `;
        case 'effie':
            // Short tactical cut
            return `
            <path d="M108,122 Q112,105 122,114" fill="url(#hair-g)"/>
            <path d="M172,122 Q168,105 158,114" fill="url(#hair-g)"/>
            `;
        case 'kai':
            // Neat tied
            return `
            <path d="M108,118 Q112,100 120,110" fill="url(#hair-g)" opacity="0.9"/>
            <circle cx="170" cy="145" r="5" fill="${art.hairColor}" opacity="0.8"/>
            `;
        case 'morgans':
            // Sleek back, sharp
            return `
            <path d="M108,118 Q112,98 122,110" fill="url(#hair-g)" opacity="0.95"/>
            <path d="M172,118 Q168,98 158,110" fill="url(#hair-g)" opacity="0.95"/>
            `;
        default:
            return `<path d="M108,118 Q115,100 125,110" fill="url(#hair-g)"/>`;
    }
}

// ── ARMOR SVG ─────────────────────────────────────────────────────────────────
function buildDefaultArmor(charId, cfg) {
    return `
    <!-- Default outfit chest plate -->
    <path d="M110,195 L170,195 L175,260 L105,260 Z" fill="url(#outfit-g)" opacity="0.9"/>
    <path d="M140,195 L140,260" stroke="${cfg.color}" stroke-width="0.7" stroke-dasharray="4,4" opacity="0.3"/>
    `;
}

function buildArmorSVG(item, cfg) {
    const c = item.color;
    const isHeavy = item.name.includes('Plate') || item.name.includes('Predator') || item.name.includes('War');
    if (isHeavy) {
        return `
        <!-- Heavy armor plates -->
        <path d="M106,195 L174,195 L180,268 L100,268 Z" fill="${c}" opacity="0.75"/>
        <path d="M106,195 L174,195 L174,220 L106,220 Z" fill="${lightenColor(c, 20)}" opacity="0.8"/>
        <!-- Armor bolts -->
        <circle cx="116" cy="208" r="4" fill="${lightenColor(c, 30)}" opacity="0.8"/>
        <circle cx="164" cy="208" r="4" fill="${lightenColor(c, 30)}" opacity="0.8"/>
        <circle cx="140" cy="205" r="3" fill="${lightenColor(c, 40)}" opacity="0.9"/>
        <!-- Center line -->
        <line x1="140" y1="195" x2="140" y2="268" stroke="${lightenColor(c, 50)}" stroke-width="1" opacity="0.5"/>
        <!-- Pauldrons -->
        <ellipse cx="95" cy="205" rx="20" ry="14" fill="${c}" opacity="0.8"/>
        <ellipse cx="185" cy="205" rx="20" ry="14" fill="${c}" opacity="0.8"/>
        `;
    }
    // Light/magical armor
    return `
    <path d="M108,195 L172,195 L176,265 L104,265 Z" fill="${c}" opacity="0.6"/>
    <!-- Chest rune -->
    <circle cx="140" cy="225" r="12" fill="none" stroke="${lightenColor(c, 40)}" stroke-width="1.2" opacity="0.7" filter="url(#glow)"/>
    <text x="140" y="229" text-anchor="middle" font-size="9" fill="${lightenColor(c, 50)}" opacity="0.8">${item.emoji}</text>
    <!-- Shoulder lines -->
    <path d="M108,200 Q100,210 104,225" stroke="${lightenColor(c, 30)}" stroke-width="8" stroke-linecap="round" fill="none" opacity="0.7"/>
    <path d="M172,200 Q180,210 176,225" stroke="${lightenColor(c, 30)}" stroke-width="8" stroke-linecap="round" fill="none" opacity="0.7"/>
    `;
}

// ── WEAPON SVG ────────────────────────────────────────────────────────────────
function buildWeaponSVG(item, cfg) {
    const name = item.name.toLowerCase();
    const c = item.color;

    if (name.includes('bow')) {
        // Bow in right hand
        return `
        <!-- Bow arm -->
        <path d="M175,200 Q202,210 208,255" stroke="url(#skin-g)" stroke-width="22" stroke-linecap="round" fill="none"/>
        <!-- Bow -->
        <path d="M215,220 Q228,245 215,275" stroke="${c}" stroke-width="4" fill="none" stroke-linecap="round" filter="url(#glow)"/>
        <line x1="215" y1="220" x2="215" y2="275" stroke="${lightenColor(c, 30)}" stroke-width="1.5" stroke-dasharray="3,3"/>
        <!-- Arrow nocked -->
        <line x1="208" y1="248" x2="225" y2="248" stroke="${lightenColor(c, 40)}" stroke-width="1.5"/>
        <polygon points="226,248 222,245 222,251" fill="${lightenColor(c, 50)}"/>
        `;
    }
    if (name.includes('staff') || name.includes('tome')) {
        // Staff
        return `
        <!-- Staff arm -->
        <path d="M175,200 Q202,215 205,260" stroke="url(#skin-g)" stroke-width="22" stroke-linecap="round" fill="none"/>
        <!-- Staff shaft -->
        <rect x="208" y="200" width="6" height="120" rx="3" fill="${c}" opacity="0.85" filter="url(#glow)"/>
        <!-- Staff orb -->
        <circle cx="211" cy="196" r="10" fill="${c}" opacity="0.7" filter="url(#glow)"/>
        <circle cx="211" cy="196" r="6" fill="${lightenColor(c, 40)}" opacity="0.8"/>
        <circle cx="208" cy="193" r="2" fill="white" opacity="0.7"/>
        `;
    }
    // Sword / dagger / blade (default)
    const length = name.includes('great') || name.includes('long') ? 105 : name.includes('dagger') || name.includes('shiv') || name.includes('thorn') ? 60 : 85;
    return `
    <!-- Sword arm -->
    <path d="M175,200 Q200,212 206,255" stroke="url(#skin-g)" stroke-width="22" stroke-linecap="round" fill="none"/>
    <!-- Hand -->
    <ellipse cx="208" cy="258" rx="9" ry="8" fill="${lightenColor(art_skin(activeCharId), -5)}"/>
    <!-- Sword blade -->
    <path d="M212,252 L228,${252 - length}" stroke="${lightenColor(c, 60)}" stroke-width="3" stroke-linecap="round" filter="url(#glow)"/>
    <path d="M212,252 L228,${252 - length}" stroke="${c}" stroke-width="1.5" opacity="0.8"/>
    <!-- Guard crosspiece -->
    <line x1="${207}" y1="255" x2="${219}" y2="249" stroke="${c}" stroke-width="5" stroke-linecap="round" opacity="0.85"/>
    <!-- Sword glow edge -->
    <path d="M213,251 L229,${251 - length}" stroke="white" stroke-width="0.5" opacity="0.3"/>
    <!-- Hilt wrap -->
    <path d="M209,255 L215,248" stroke="${shadeColor(c, -30)}" stroke-width="6" stroke-linecap="round"/>
    `;
}

function art_skin(id) { return (CHAR_CONFIG[id]?.art?.skinTone || '#C8956C'); }

function buildDefaultHand(side, art) {
    const x = side === 'right' ? 208 : 70;
    const pathD = side === 'right'
        ? 'M175,200 Q202,210 208,255'
        : 'M105,200 Q78,210 72,255';
    return `
    <path d="${pathD}" stroke="url(#skin-g)" stroke-width="22" stroke-linecap="round" fill="none"/>
    <ellipse cx="${x}" cy="258" rx="9" ry="8" fill="${art.skinTone}"/>
    `;
}

function buildOffHandSVG(item) {
    const c = item.color;
    const name = item.name.toLowerCase();

    if (name.includes('shield')) {
        return `
        <!-- Left arm with shield -->
        <path d="M105,200 Q78,210 72,255" stroke="url(#skin-g)" stroke-width="22" stroke-linecap="round" fill="none"/>
        <path d="M52,228 Q46,248 52,270 Q62,280 72,270 Q80,260 80,248 Q80,236 72,228 Q62,220 52,228Z"
              fill="${c}" opacity="0.8" filter="url(#glow)"/>
        <path d="M58,238 Q58,258 64,268" stroke="${lightenColor(c, 50)}" stroke-width="1.5" fill="none" opacity="0.7"/>
        <circle cx="64" cy="250" r="5" fill="${lightenColor(c, 40)}" opacity="0.7"/>
        `;
    }
    if (name.includes('orb') || name.includes('focus')) {
        return `
        <path d="M105,200 Q78,210 72,255" stroke="url(#skin-g)" stroke-width="22" stroke-linecap="round" fill="none"/>
        <circle cx="62" cy="258" r="14" fill="${c}" opacity="0.6" filter="url(#glow)"/>
        <circle cx="62" cy="258" r="9" fill="${lightenColor(c, 40)}" opacity="0.7"/>
        <circle cx="58" cy="254" r="3" fill="white" opacity="0.5"/>
        `;
    }
    if (name.includes('binding') || name.includes('echo')) {
        return `
        <!-- Left arm with shadow echo aura -->
        <path d="M105,200 Q78,210 72,255" stroke="url(#skin-g)" stroke-width="22" stroke-linecap="round" fill="none"/>
        <ellipse cx="68" cy="258" rx="18" ry="18" fill="${c}" opacity="0.2" filter="url(#strong-glow)"/>
        <circle cx="68" cy="255" r="6" fill="${c}" opacity="0.5" filter="url(#glow)"/>
        <path d="M58,248 Q65,240 75,248 Q68,260 58,248Z" fill="${c}" opacity="0.4"/>
        `;
    }
    // Default quiver / offhand
    return `
    <path d="M105,200 Q78,210 72,255" stroke="url(#skin-g)" stroke-width="22" stroke-linecap="round" fill="none"/>
    <ellipse cx="70" cy="258" rx="9" ry="8" fill="${art_skin(activeCharId)}"/>
    <rect x="48" y="215" width="12" height="55" rx="6" fill="${c}" opacity="0.75"/>
    <line x1="54" y1="225" x2="54" y2="260" stroke="${lightenColor(c, 30)}" stroke-width="1"/>
    `;
}

// ── CLOAK SVG ─────────────────────────────────────────────────────────────────
function buildCloakBack(item, cfg) {
    const c = item.color;
    return `
    <!-- Cloak back panel -->
    <path d="M98,190 Q80,250 76,360 L110,360 L120,260 L140,290 L160,260 L170,360 L204,360 Q200,250 182,190 Q160,205 140,200 Q120,205 98,190Z"
          fill="${c}" opacity="0.55" filter="url(#glow)"/>
    `;
}

function buildCloakFront(item, cfg) {
    const c = item.color;
    const isLegendary = item.rarity === 'legendary' || item.rarity === 'mythic';
    return `
    <!-- Cloak front edges -->
    <path d="M100,193 Q85,260 88,355" stroke="${c}" stroke-width="${isLegendary ? 12 : 8}" stroke-linecap="round" fill="none" opacity="${isLegendary ? 0.6 : 0.45}"/>
    <path d="M180,193 Q195,260 192,355" stroke="${c}" stroke-width="${isLegendary ? 12 : 8}" stroke-linecap="round" fill="none" opacity="${isLegendary ? 0.6 : 0.4}"/>
    ${isLegendary ? `
    <!-- Mythic cloak edge runes -->
    <path d="M88,250 Q80,248 88,245" stroke="${lightenColor(c, 40)}" stroke-width="1" fill="none" opacity="0.6"/>
    <path d="M192,250 Q200,248 192,245" stroke="${lightenColor(c, 40)}" stroke-width="1" fill="none" opacity="0.6"/>
    ` : ''}
    `;
}

// ── AURA EFFECTS ──────────────────────────────────────────────────────────────
function buildAuraEffect(charId, cfg, auraCol) {
    switch (charId) {
        case 'sunny':
            return `
            <!-- Shadow tendrils -->
            <path d="M100,320 Q80,290 90,260" stroke="${auraCol}" stroke-width="3" fill="none" opacity="0.4" stroke-linecap="round"/>
            <path d="M180,320 Q200,290 190,260" stroke="${auraCol}" stroke-width="3" fill="none" opacity="0.35" stroke-linecap="round"/>
            <path d="M130,370 Q110,350 115,330" stroke="${auraCol}" stroke-width="2" fill="none" opacity="0.3" stroke-linecap="round"/>
            <path d="M150,375 Q170,355 165,335" stroke="${auraCol}" stroke-width="2" fill="none" opacity="0.3" stroke-linecap="round"/>
            `;
        case 'nephis':
            return `
            <!-- Flame particles -->
            <path d="M100,200 Q88,175 95,155" stroke="${auraCol}" stroke-width="2" fill="none" opacity="0.5"/>
            <path d="M180,200 Q192,175 185,155" stroke="${auraCol}" stroke-width="2" fill="none" opacity="0.45"/>
            <ellipse cx="140" cy="105" rx="20" ry="8" fill="${auraCol}" opacity="0.25" filter="url(#glow)"/>
            `;
        case 'cassie':
            return `
            <!-- Fate threads -->
            <line x1="60" y1="150" x2="100" y2="170" stroke="${auraCol}" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.4"/>
            <line x1="220" y1="180" x2="180" y2="160" stroke="${auraCol}" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.35"/>
            <line x1="80" y1="300" x2="120" y2="270" stroke="${auraCol}" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.3"/>
            `;
        case 'effie':
            return `
            <!-- Hunt constellation marks on arms -->
            <circle cx="88" cy="230" r="2" fill="${auraCol}" opacity="0.6"/>
            <circle cx="82" cy="245" r="1.5" fill="${auraCol}" opacity="0.5"/>
            <line x1="88" y1="230" x2="82" y2="245" stroke="${auraCol}" stroke-width="0.7" opacity="0.4"/>
            <circle cx="192" cy="230" r="2" fill="${auraCol}" opacity="0.6"/>
            <circle cx="198" cy="245" r="1.5" fill="${auraCol}" opacity="0.5"/>
            `;
        case 'kai':
            return `
            <!-- Arrow trails -->
            <path d="M60,180 Q80,175 100,190" stroke="${auraCol}" stroke-width="1" stroke-dasharray="2,3" fill="none" opacity="0.4"/>
            <path d="M220,180 Q200,175 180,190" stroke="${auraCol}" stroke-width="1" stroke-dasharray="2,3" fill="none" opacity="0.35"/>
            `;
        case 'morgans':
            return `
            <!-- Blood mist trails -->
            <ellipse cx="95" cy="270" rx="15" ry="30" fill="${auraCol}" opacity="0.15" filter="url(#glow)"/>
            <ellipse cx="185" cy="270" rx="15" ry="30" fill="${auraCol}" opacity="0.15" filter="url(#glow)"/>
            <path d="M100,240 Q90,260 95,280" stroke="${auraCol}" stroke-width="2" fill="none" opacity="0.4"/>
            `;
        default: return '';
    }
}

// ── SPECIAL EFFECTS ───────────────────────────────────────────────────────────
function buildSpecialEffect(charId, equipped, cfg) {
    const allItems = RIFT_DATA.inventoryItems[charId] || [];
    const specId = equipped.special;
    const specItem = specId ? allItems.find(i => i.id === specId) : null;

    if (!specItem) return '';

    // Sovereign's Shadow Seal — shadow domain ripples
    if (specItem.name.includes('Sovereign') || specItem.name.includes('Seal')) {
        return `
        <ellipse cx="140" cy="380" rx="80" ry="20" fill="none" stroke="${specItem.color}" stroke-width="1.5" opacity="0.4" filter="url(#glow)"/>
        <ellipse cx="140" cy="380" rx="55" ry="14" fill="none" stroke="${specItem.color}" stroke-width="1" opacity="0.3"/>
        <text x="140" y="358" text-anchor="middle" font-size="8" fill="${specItem.color}" opacity="0.5" letter-spacing="3">✦ DOMAIN ✦</text>
        `;
    }
    if (specItem.name.includes('Dreamless') || specItem.name.includes('Nameless')) {
        return `
        <ellipse cx="140" cy="140" rx="50" ry="60" fill="none" stroke="rgba(10,0,20,0.8)" stroke-width="30" opacity="0.1"/>
        <text x="140" y="410" text-anchor="middle" font-size="7" fill="rgba(50,0,80,0.6)" letter-spacing="2">DREAMLESS</text>
        `;
    }
    return `<circle cx="140" cy="380" r="35" fill="${specItem.color}" opacity="0.1" filter="url(#glow)"/>`;
}

// ── COLOR UTILS ───────────────────────────────────────────────────────────────
function lightenColor(hex, amount) {
    try {
        const r = Math.min(255, Math.max(0, parseInt(hex.slice(1, 3), 16) + amount));
        const g = Math.min(255, Math.max(0, parseInt(hex.slice(3, 5), 16) + amount));
        const b = Math.min(255, Math.max(0, parseInt(hex.slice(5, 7), 16) + amount));
        return `rgb(${r},${g},${b})`;
    } catch (e) { return hex; }
}
function shadeColor(hex, amount) { return lightenColor(hex, amount); }

// ── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('rift-progress-shadow-slave');
    if (saved) {
        userChapter = parseInt(saved) || 50;
        document.getElementById('user-chapter-input').value = userChapter;
    }

    buildCharSelect();
    switchCharacter('sunny');

    // ── 3D PARALLAX EFFECT ─────────────────────────────
    const portraitArea = document.getElementById('char-portrait-area');
    if (portraitArea) {
        portraitArea.addEventListener('mousemove', (e) => {
            const container = document.getElementById('premium-portrait-container');
            if (!container) return;

            const rect = portraitArea.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Max rotation 15 degrees
            const rotateX = ((y - centerY) / centerY) * -15;
            const rotateY = ((x - centerX) / centerX) * 15;

            container.style.transition = 'none';
            container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;

            const img = container.querySelector('.char-portrait-img');
            const halo = container.querySelector('.eq-halo');
            if (img) img.style.transform = `translateZ(40px)`;
            if (halo) halo.style.transform = `translateZ(80px)`;
        });

        portraitArea.addEventListener('mouseleave', () => {
            const container = document.getElementById('premium-portrait-container');
            if (!container) return;
            container.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            container.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;

            const img = container.querySelector('.char-portrait-img');
            const halo = container.querySelector('.eq-halo');
            if (img) img.style.transform = `translateZ(0px)`;
            if (halo) halo.style.transform = `translateZ(0px)`;
        });
    }

    document.getElementById('apply-chapter-btn').addEventListener('click', () => {
        const val = parseInt(document.getElementById('user-chapter-input').value);
        if (val && val >= 1 && val <= 3000) {
            userChapter = val;
            localStorage.setItem('rift-progress-shadow-slave', val);
            renderInventoryGrid();
            updateUnlockInfo();
            validateEquipped();
            renderHoloSlots();
            renderEquippedSlots();
        }
    });

    document.getElementById('inv-filter-row').addEventListener('click', e => {
        const btn = e.target.closest('.slot-filter-btn');
        if (!btn) return;
        activeSlotFilter = btn.dataset.slot;
        document.querySelectorAll('.slot-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderInventoryGrid();
    });

    document.addEventListener('click', e => {
        if (!e.target.closest('.inv-item-card') && !e.target.closest('#item-detail-panel')) {
            hideDetailPanel();
        }
    });
});

// ── CHAR SELECT ───────────────────────────────────────────────────────────────
function buildCharSelect() {
    const list = document.getElementById('char-select-list');
    list.innerHTML = '';
    RIFT_DATA.characters.forEach(char => {
        const cfg = CHAR_CONFIG[char.id];
        if (!cfg) return;
        const items = RIFT_DATA.inventoryItems[char.id] || [];
        const unlockedCount = items.filter(i => i.ch <= userChapter).length;
        const btn = document.createElement('button');
        btn.className = 'char-select-btn' + (char.id === activeCharId ? ' active' : '');
        btn.dataset.charid = char.id;
        btn.innerHTML = `
            <span class="char-btn-symbol" style="color:${cfg.color}">${char.portraitSymbol}</span>
            <div class="char-btn-info">
                <div class="char-btn-name">${char.name}</div>
                <div class="char-btn-rank">${char.rank}</div>
            </div>
            <span class="char-item-count">${unlockedCount}/${items.length}</span>
        `;
        btn.addEventListener('click', () => switchCharacter(char.id));
        list.appendChild(btn);
    });
}

// ── SWITCH CHARACTER ──────────────────────────────────────────────────────────
function switchCharacter(charId) {
    activeCharId = charId;
    equippedItems = {};
    document.querySelectorAll('.char-select-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.charid === charId);
    });
    const char = RIFT_DATA.characters.find(c => c.id === charId);
    const cfg = CHAR_CONFIG[charId];
    document.getElementById('char-strip-name').textContent = char.name.toUpperCase();
    document.getElementById('char-strip-rank').textContent = cfg.rank + '  •  ' + char.epithet;
    renderCharDisplay();
    renderInventoryGrid();
    renderEquippedSlots();
    updateUnlockInfo();
    hideDetailPanel();
}

// ── RENDER CHARACTER DISPLAY (AI IMAGE + HOLOGRAPHIC SLOTS) ─────────
function renderCharDisplay() {
    const cfg = CHAR_CONFIG[activeCharId];
    const area = document.getElementById('char-portrait-area');

    area.closest('.inv-char-display').style.setProperty('--char-color', cfg.color);
    document.getElementById('char-portrait-bg').style.background = cfg.bg;

    // Remove old SVG container if any
    const existing = document.getElementById('char-svg-container');
    if (existing) existing.remove();

    // Hide old symbol
    const sym = document.getElementById('char-main-symbol');
    if (sym) sym.style.display = 'none';

    // Build the AI Image container
    let container = document.getElementById('premium-portrait-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'premium-portrait-container';
        container.style.cssText = 'position:absolute; inset:0; z-index:2; display:flex; justify-content:center; align-items:flex-end; pointer-events:none; transform-style: preserve-3d; transition: opacity 0.5s;';
        area.insertBefore(container, area.querySelector('.equipped-overlay'));
    }

    container.innerHTML = `
        <div class="char-portrait-radial" style="background:${cfg.color}"></div>
        <img src="assets/chars/${activeCharId}.png" class="char-portrait-img" alt="${activeCharId}" />
        <div class="eq-halo">
            <div class="eq-halo-column left-halo" id="halo-left"></div>
            <div class="eq-halo-column right-halo" id="halo-right"></div>
        </div>
    `;

    renderHoloSlots();
}

function renderHoloSlots() {
    const leftHalo = document.getElementById('halo-left');
    const rightHalo = document.getElementById('halo-right');
    if (!leftHalo || !rightHalo) return;

    leftHalo.innerHTML = '';
    rightHalo.innerHTML = '';

    const allItems = RIFT_DATA.inventoryItems[activeCharId] || [];
    const layout = {
        left: ['weapon', 'cloak', 'accessory'],
        right: ['armor', 'offhand', 'special']
    };

    ['left', 'right'].forEach(side => {
        const container = side === 'left' ? leftHalo : rightHalo;
        layout[side].forEach((slot, index) => {
            const itemId = equippedItems[slot];
            const item = itemId ? allItems.find(i => i.id === itemId) : null;

            const eqSlot = document.createElement('div');
            eqSlot.className = 'holo-eq-slot' + (item ? ' has-item' : '');
            eqSlot.style.animationDelay = `${index * 0.2}s`;

            if (item) {
                eqSlot.style.setProperty('--item-color', item.color || '#C41E3A');
                eqSlot.innerHTML = `
                    <div class="holo-slot-emoji">${item.image ? `<img src="${item.image}" style="width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 0 5px ${item.color || '#C41E3A'});">` : item.emoji}</div>
                    <div class="holo-slot-label">${slot}</div>
                `;
                eqSlot.onclick = (e) => {
                    e.stopPropagation();
                    delete equippedItems[slot];
                    renderInventoryGrid();
                    renderHoloSlots();
                    renderEquippedSlots(); // update the list below if it still exists
                };
            } else {
                eqSlot.innerHTML = `
                    <div class="holo-slot-emoji" style="opacity:0.2; font-size:1.2rem">${slotEmoji(slot)}</div>
                    <div class="holo-slot-label" style="opacity:0.3">${slot}</div>
                `;
            }
            container.appendChild(eqSlot);
        });
    });
}

// Keep the old strip just in case, or we can leave it empty to rely on holo slots
function renderEquippedSlots() {
    const row = document.getElementById('equipped-slots-row');
    if (!row) return;
    const allItems = RIFT_DATA.inventoryItems[activeCharId] || [];
    const allSlots = ['weapon', 'offhand', 'armor', 'cloak', 'accessory', 'special'];
    row.innerHTML = '';
    allSlots.forEach(slot => {
        const itemId = equippedItems[slot];
        const item = itemId ? allItems.find(i => i.id === itemId) : null;
        if (!item) return; // Only show equipped items in the strip to save space
        const pill = document.createElement('div');
        pill.className = 'eq-slot-pill has-item';
        pill.style.setProperty('--item-color', item.color || '#C41E3A');
        const iconHtml = item.image ? `<img src="${item.image}" style="width:18px;height:18px;object-fit:contain;vertical-align:middle;margin-right:8px;">` : `<span style="margin-right:8px">${item.emoji}</span>`;
        pill.innerHTML = `${iconHtml} <span>${item.name}</span> <span class="eq-remove">✕</span>`;
        pill.addEventListener('click', () => {
            delete equippedItems[slot];
            renderInventoryGrid();
            renderHoloSlots();
            renderEquippedSlots();
        });
        row.appendChild(pill);
    });
}

// ── INVENTORY GRID ────────────────────────────────────────────────────────────
function renderInventoryGrid() {
    const grid = document.getElementById('inv-items-grid');
    const items = RIFT_DATA.inventoryItems[activeCharId] || [];
    const filtered = activeSlotFilter === 'all' ? items : items.filter(i => i.slot === activeSlotFilter);

    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:2rem;color:var(--text-dim);font-size:0.78rem">No items in this slot.</div>`;
        return;
    }

    grid.innerHTML = '';
    filtered.forEach(item => {
        const locked = item.ch > userChapter;
        const isEquipped = equippedItems[item.slot] === item.id;
        const rarityColor = RARITY_COLORS[item.rarity] || '#fff';

        const card = document.createElement('div');
        card.className = 'inv-item-card' + (locked ? ' locked' : '') + (isEquipped ? ' equipped-active' : '');
        card.style.setProperty('--item-color', item.color || rarityColor);
        card.dataset.itemid = item.id;
        card.innerHTML = `
            <div class="item-card-bg-glow" style="background: radial-gradient(circle at center, ${rarityColor}40, transparent 70%);"></div>
            <div class="item-card-border" style="border-color: ${rarityColor}50;"></div>
            <div class="item-card-inner">
                <div class="item-card-icon-container">
                    ${item.image ? `<img src="${item.image}" class="item-card-image" alt="${item.name}">` : `<div class="item-card-emoji text-shadow-glow" style="--item-color:${item.color || rarityColor}">${item.emoji}</div>`}
                    ${isEquipped ? '<div class="item-equipped-indicator"><svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></div>' : ''}
                    ${locked ? '<div class="item-locked-indicator"><svg viewBox="0 0 24 24" fill="none"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>' : ''}
                </div>
                <div class="item-card-content">
                    <div class="item-card-name" style="color: ${locked ? '#888' : '#fff'};">${item.name}</div>
                    <div class="item-card-meta">
                        <div class="item-rarity-badge" style="color: ${rarityColor}; border-color: ${rarityColor}40;">${item.rarity}</div>
                        <div class="item-card-ch">Ch.${item.ch}</div>
                    </div>
                </div>
            </div>
            <div class="item-card-shine"></div>
        `;
        card.addEventListener('click', e => {
            e.stopPropagation();
            if (locked) { showDetailPanel(item, true, e); return; }
            if (isEquipped) delete equippedItems[item.slot];
            else equippedItems[item.slot] = item.id;
            renderInventoryGrid();
            renderHoloSlots();      // UPDATE HOLO SLOTS
            renderEquippedSlots();
            showDetailPanel(item, false, e);
        });
        card.addEventListener('mouseenter', e => showDetailPanel(item, locked, e));
        card.addEventListener('mouseleave', () => {
            setTimeout(() => { if (!document.getElementById('item-detail-panel').matches(':hover')) hideDetailPanel(); }, 120);
        });
        grid.appendChild(card);
    });
}

// ── EQUIPPED SLOTS STRIP ──────────────────────────────────────────────────────
function slotEmoji(slot) {
    return { weapon: '⚔', offhand: '🤚', armor: '🛡', cloak: '🌑', accessory: '💍', special: '⭐' }[slot] || '○';
}

function validateEquipped() {
    const allItems = RIFT_DATA.inventoryItems[activeCharId] || [];
    Object.entries(equippedItems).forEach(([slot, itemId]) => {
        const item = allItems.find(i => i.id === itemId);
        if (!item || item.ch > userChapter) delete equippedItems[slot];
    });
}

// ── DETAIL PANEL ──────────────────────────────────────────────────────────────
function showDetailPanel(item, locked, e) {
    const panel = document.getElementById('item-detail-panel');
    const rarityColor = RARITY_COLORS[item.rarity] || '#fff';
    panel.style.setProperty('--rarity-color', rarityColor);

    const emojiContainer = document.getElementById('idp-emoji');
    if (item.image) {
        emojiContainer.innerHTML = `<img src="${item.image}" class="idp-image" alt="${item.name}" style="width: 100%; height: 100%; object-fit: contain; filter: drop-shadow(0 0 10px ${rarityColor});" />`;
    } else {
        emojiContainer.innerHTML = item.emoji;
    }
    document.getElementById('idp-rarity').textContent = item.rarity.toUpperCase();
    document.getElementById('idp-rarity').style.color = rarityColor;
    document.getElementById('idp-name').textContent = item.name;
    document.getElementById('idp-slot').textContent = item.slot.toUpperCase() + ' SLOT';
    document.getElementById('idp-desc').textContent = item.desc;
    document.getElementById('idp-stat').textContent = item.stat;
    document.getElementById('idp-ch').textContent = locked
        ? `🔒 Unlocks at Chapter ${item.ch} — ${item.ch - userChapter} chapters away`
        : `✓ Unlocked at Chapter ${item.ch}`;

    const lockedMsg = document.getElementById('idp-locked-msg');
    const equipBtn = document.getElementById('idp-equip-btn');
    if (locked) {
        lockedMsg.style.display = 'block';
        lockedMsg.textContent = `Read ${item.ch - userChapter} more chapters to unlock!`;
        equipBtn.style.display = 'none';
    } else {
        lockedMsg.style.display = 'none';
        const isEquipped = equippedItems[item.slot] === item.id;
        equipBtn.style.display = 'block';
        equipBtn.textContent = isEquipped ? '✕ Unequip' : '⚔ Equip';
        equipBtn.className = 'idp-equip-btn' + (isEquipped ? ' unequip' : '');
        equipBtn.onclick = () => {
            if (isEquipped) delete equippedItems[item.slot];
            else equippedItems[item.slot] = item.id;
            renderInventoryGrid();
            renderCharDisplay();
            renderEquippedSlots();
            showDetailPanel(item, false, e);
        };
    }

    const rect = e.target.closest?.('.inv-item-card')?.getBoundingClientRect?.() || { left: e.clientX, top: e.clientY, right: e.clientX };
    let left = rect.left - 310;

    // Calculate top relative to viewport
    let top = rect.top;

    // Temporarily strip transitions to snap position
    panel.style.transition = 'none';
    panel.style.transform = 'none'; // Ensure untransformed height
    panel.style.visibility = 'visible';

    // Remove show temporarily if it was already on
    panel.classList.remove('show');

    // Force a synchronous layout calculation
    const trueHeight = panel.offsetHeight;

    // Clamp Left
    if (left < 10) left = (rect.right || rect.left) + 20;

    // Clamp Bottom (if the bottom of panel goes past the screen height)
    if (top + trueHeight > window.innerHeight) {
        top = window.innerHeight - trueHeight - 20;
    }

    // Clamp Top (don't let it go off the top edge)
    if (top < 10) top = 10;

    // Apply fixed position
    panel.style.left = left + 'px';
    panel.style.top = top + 'px';

    // Force layout to commit the position instantly
    void panel.offsetWidth;

    // Restore transitions and let CSS handle the fade-in/scale-up
    panel.style.transition = '';
    panel.style.transform = '';
    panel.classList.add('show');
}

document.getElementById('item-detail-panel').addEventListener('mouseleave', hideDetailPanel);
function hideDetailPanel() {
    const panel = document.getElementById('item-detail-panel');
    panel.classList.remove('show');
    setTimeout(() => { if (!panel.classList.contains('show')) panel.style.visibility = 'hidden'; }, 200);
}

function updateUnlockInfo() {
    const items = RIFT_DATA.inventoryItems[activeCharId] || [];
    const unlocked = items.filter(i => i.ch <= userChapter).length;
    const next = items.find(i => i.ch > userChapter);
    document.getElementById('unlock-info').textContent =
        `${unlocked}/${items.length} items unlocked${next ? ` — next at Ch.${next.ch}` : ' — ALL UNLOCKED!'}`;
}
