import fs from 'node:fs';
import path from 'node:path';

const out = path.join(process.cwd(), 'dist-electron');
fs.mkdirSync(path.join(out, 'main'), { recursive: true });
fs.mkdirSync(path.join(out, 'preload'), { recursive: true });
fs.copyFileSync('src/main/electron-main.mjs', path.join(out, 'main', 'electron-main.mjs'));
fs.copyFileSync('src/preload/preload.cjs', path.join(out, 'preload', 'preload.cjs'));
console.log('dist-electron gerado');
