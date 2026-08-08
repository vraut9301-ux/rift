const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.js');
let dataContent = fs.readFileSync(dataPath, 'utf8');

const coords = {
    "ravenheart": { x: 20, y: 15 },
    "forgotten-shore": { x: 35, y: 25 },
    "dark-city": { x: 38, y: 30 },
    "crimson-spire": { x: 42, y: 20 },
    "nightmare-desert": { x: 70, y: 30 },
    "tomb-of-ariel": { x: 75, y: 20 },
    "godgrave": { x: 55, y: 45 },
    "hollow-mountains": { x: 45, y: 55 },
    "first-nightmare-gate": { x: 15, y: 50 },
    "chained-isles": { x: 40, y: 75 },
    "ivory-tower": { x: 45, y: 80 },
    "bastion": { x: 85, y: 75 },
    "nqsc": { x: 10, y: 85 },
    "antarctica": { x: 15, y: 95 }
};

for (const [id, coord] of Object.entries(coords)) {
    // Regex to match the object with the specific id and replace its x and y
    const regex = new RegExp("(id:\\s*\\\"" + id + "\\\"[\\s\\S]*?x:\\s*)\\d+(,\\s*y:\\s*)\\d+", "g");
    dataContent = dataContent.replace(regex, "$1" + coord.x + "$2" + coord.y);
}

fs.writeFileSync(dataPath, dataContent, 'utf8');
console.log("Coordinates successfully updated in data.js");
