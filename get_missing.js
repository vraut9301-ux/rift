const fs = require('fs');
const code = fs.readFileSync('data.js', 'utf8');
const dataStr = code.substring(code.indexOf('const RIFT_DATA = '));
// evaluate
const script = dataStr + '\nconsole.log(JSON.stringify(Object.keys(RIFT_DATA.inventoryItems).flatMap(c => RIFT_DATA.inventoryItems[c].map(i => ({char: c, ...i}))).filter(i => !i.image), null, 2));';
fs.writeFileSync('temp.js', script);
