import fs from 'node:fs';
import { execSync } from 'node:child_process';
const banned = ['TODO','FIXME','placeholder','fake','not implemented','implement later','coming soon','lorem','dummy'];
const files = execSync('rg --files src native tests package.json', { encoding: 'utf8' }).trim().split('\n').filter((f) => f !== 'src/scripts/lint.mjs');
for (const file of files) {
  const lower = fs.readFileSync(file, 'utf8').toLowerCase();
  for (const word of banned) {
    if (lower.includes(word.toLowerCase())) {
      throw new Error(`Termo proibido encontrado: ${word} em ${file}`);
    }
  }
}
console.log('Lint textual real concluído.');
