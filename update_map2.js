const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.js');
let dataContent = fs.readFileSync(dataPath, 'utf8');

const newLocations = `    worldLocations: [
        {
            id: "nqsc",
            name: "NQSC (Asian Capital)",
            type: "city",
            x: 10, y: 15,
            color: "#4169E1",
            icon: "🏙️",
            rank: "Safe Zone",
            desc: "Sunny's home city in the Waking World. A massive, heavily fortified futuristic metropolis where the vast majority of normal humans live, protected from the Nightmare creatures outside by Awakened and powerful technological defenses.",
            characters: ["sunny", "nephis", "cassie", "effie", "kai"],
            chapters: "Ch. 1-14, 350-400",
            connections: ["first-nightmare-gate", "antarctica"]
        },
        {
            id: "antarctica",
            name: "Antarctica (Falcon Scott)",
            type: "zone",
            x: 15, y: 35,
            color: "#F59E0B",
            icon: "❄️",
            rank: "Incursion Zone",
            desc: "The site of a massive chain of Nightmare Gates. Sunny led the Irregular Cohort here during the Fall of Falcon Scott. A tragic and brutal warzone where humanity desperately tried to evacuate millions of civilians before the continent was lost to the Nightmare Realm.",
            characters: ["sunny"],
            chapters: "Ch. 780-1060",
            connections: ["nqsc"]
        },
        {
            id: "first-nightmare-gate",
            name: "The First Nightmare",
            type: "dungeon",
            x: 25, y: 20,
            color: "#2DD4BF",
            icon: "🚪",
            rank: "Sleeper Trial",
            desc: "The gateway trial for those infected by the Nightmare Spell. Sunny survived as a temple slave on a frozen mountain, earning his True Name 'Lost from Light' and his Divine Aspect 'Shadow Slave'.",
            characters: ["sunny", "nephis", "cassie"],
            chapters: "Ch. 15-50",
            connections: ["nqsc", "forgotten-shore"]
        },
        {
            id: "forgotten-shore",
            name: "The Forgotten Shore",
            type: "realm",
            x: 75, y: 75,
            color: "#8B0000",
            icon: "🌊",
            rank: "Sleeper",
            desc: "A cursed, isolated region of the Dream Realm covered in a dark, blood-red sea that drains at night to reveal horrors. The cohort's first major trial where they were stranded for months.",
            characters: ["sunny", "nephis", "cassie", "effie", "kai"],
            chapters: "Ch. 51-350",
            connections: ["first-nightmare-gate", "dark-city"]
        },
        {
            id: "dark-city",
            name: "The Dark City",
            type: "city",
            x: 82, y: 80,
            color: "#C41E3A",
            icon: "🏛️",
            rank: "Sleeper",
            desc: "The ruined, cursed city at the heart of the Forgotten Shore, ruled by the Lord of the Dead (a colossal skeletal Tyrant). Nephis led the surviving Sleepers here to establish a foothold.",
            characters: ["sunny", "nephis", "cassie", "effie", "kai"],
            chapters: "Ch. 120-250",
            connections: ["forgotten-shore", "crimson-spire"]
        },
        {
            id: "crimson-spire",
            name: "The Crimson Spire",
            type: "dungeon",
            x: 88, y: 75,
            color: "#DC143C",
            icon: "🗼",
            rank: "Sleeper",
            desc: "The massive, terrifying tower at the center of the Dark City containing the Gateway back to the Waking World. The site of the final brutal battle against the terror of the Forgotten Shore.",
            characters: ["sunny", "nephis", "cassie", "effie", "kai"],
            chapters: "Ch. 250-350",
            connections: ["dark-city"]
        },
        {
            id: "hollow-mountains",
            name: "The Hollow Mountains",
            type: "zone",
            x: 50, y: 50,
            color: "#4B5563",
            icon: "⛰️",
            rank: "Corrupted/Great",
            desc: "A terrifying, seemingly impassable mountain range that divides major regions of the Dream Realm. Covered in eternal darkness and filled with ancient abominations of unimaginable power.",
            characters: ["sunny", "nephis"],
            chapters: "Ch. 350+",
            connections: ["chained-isles", "godgrave"]
        },
        {
            id: "chained-isles",
            name: "The Chained Isles",
            type: "realm",
            x: 25, y: 70,
            color: "#A855F7",
            icon: "⛓️",
            rank: "Awakened/Master",
            desc: "A massive region of floating islands suspended by divine chains over the Sky Below. Governed by a cycle of crushing, celestial phenomenon. Sunny explored this area heavily during his time as an Awakened.",
            characters: ["sunny", "cassie", "effie", "kai"],
            chapters: "Ch. 400-750",
            connections: ["hollow-mountains", "ivory-tower"]
        },
        {
            id: "ivory-tower",
            name: "The Ivory Tower",
            type: "city",
            x: 20, y: 80,
            color: "#E2E8F0",
            icon: "🏰",
            rank: "Master",
            desc: "A majestic citadel in the Chained Isles that formerly belonged to Hope. Secured by Sunny and his cohort, becoming a vital strategic stronghold and base of operations.",
            characters: ["sunny", "cassie", "effie", "kai"],
            chapters: "Ch. 600-750",
            connections: ["chained-isles"]
        },
        {
            id: "bastion",
            name: "Bastion",
            type: "city",
            x: 40, y: 25,
            color: "#FFD700",
            icon: "⚔️",
            rank: "Clan Citadel",
            desc: "The magnificent, fortified Citadel of the Valor Clan in the Dream Realm, ruled by Anvil of Valor, the King of Swords. A hub of power, politics, and military strength.",
            characters: ["nephis", "morgans"],
            chapters: "Ch. 1100+",
            connections: ["nqsc", "godgrave"]
        },
        {
            id: "ravenheart",
            name: "Ravenheart",
            type: "city",
            x: 75, y: 35,
            color: "#8B008B",
            icon: "🦅",
            rank: "Clan Citadel",
            desc: "The dark and formidable Citadel of the Song Clan, ruled by Ki Song, the Queen of Worms. A center of mysterious arts and ruthless ambition.",
            chapters: "Ch. 1100+",
            characters: [],
            connections: ["nqsc", "godgrave"]
        },
        {
            id: "godgrave",
            name: "Godgrave",
            type: "zone",
            x: 60, y: 15,
            color: "#6366F1",
            icon: "💀",
            rank: "Supreme",
            desc: "The massive skeleton of a dead god forming a literal landscape. The brutal, ongoing battleground between the forces of Valor and Song, and Sunny's current domain as the Lord of Shadows.",
            characters: ["sunny", "nephis"],
            chapters: "Ch. 1250+",
            connections: ["bastion", "ravenheart"]
        },
        {
            id: "tomb-of-ariel",
            name: "Tomb of Ariel (The Great River)",
            type: "dungeon",
            x: 10, y: 90,
            color: "#3B82F6",
            icon: "⏳",
            rank: "Third Nightmare",
            desc: "A localized reality accessed via the Nightmare Desert. The Tomb is an endless river of time where past, present, and future collide. Here, Sunny and the cohort faced the Third Nightmare and uncovered the truth of the Seven Gods.",
            characters: ["sunny", "nephis", "cassie", "effie", "kai"],
            chapters: "Ch. 1250-1800",
            connections: ["nightmare-desert"]
        },
        {
            id: "nightmare-desert",
            name: "Nightmare Desert",
            type: "zone",
            x: 20, y: 90,
            color: "#D4A574",
            icon: "🏜️",
            rank: "Saint+",
            desc: "A vast expanse of white sands stretching along the Hollow Mountains. Sunny and Nephis reunited here on the shell of a giant black turtle before entering the Tomb of Ariel.",
            characters: ["sunny", "nephis"],
            chapters: "Ch. 1251-1260",
            connections: ["hollow-mountains", "tomb-of-ariel"]
        }
    ]`;

const startIndex = dataContent.indexOf('    worldLocations: [');
const endIndex = dataContent.lastIndexOf('    ]');

if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    const before = dataContent.substring(0, startIndex);
    const after = dataContent.substring(endIndex + 5);
    fs.writeFileSync(dataPath, before + newLocations + after, 'utf8');
    console.log("Successfully updated worldLocations in data.js");
} else {
    console.log("Could not find array boundaries");
}
