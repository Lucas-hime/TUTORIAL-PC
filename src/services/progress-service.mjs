import fs from 'node:fs';
const path = './progress.json';
export function saveProgress(data){ fs.writeFileSync(path, JSON.stringify(data,null,2)); }
export function loadProgress(){ return fs.existsSync(path)?JSON.parse(fs.readFileSync(path,'utf8')):{module:0,step:0}; }
