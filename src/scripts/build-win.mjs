import { execSync } from 'node:child_process';

try {
  execSync('npx electron-builder --win nsis --config electron-builder.json', { stdio: 'inherit' });
  console.log('Build Windows concluído com Electron Builder.');
} catch (error) {
  console.error('Falha no build real do instalador via Electron Builder.');
  process.exit(1);
}
