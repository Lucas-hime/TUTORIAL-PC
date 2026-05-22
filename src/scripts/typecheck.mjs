import { execSync } from 'node:child_process';
execSync('node --check src/main/electron-main.mjs', { stdio: 'inherit' });
execSync('node --check src/engines/overlay-guidance-engine.mjs', { stdio: 'inherit' });
execSync('node --check src/services/progress-service.mjs', { stdio: 'inherit' });
console.log('Typecheck sintático real concluído.');
