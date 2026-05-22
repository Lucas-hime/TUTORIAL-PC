import assert from 'node:assert/strict';
import { computeSafeCorner } from '../engines/overlay-guidance-engine.mjs';

const viewport = { x: 0, y: 0, width: 1920, height: 1080 };
const reserved = [
  { x: 1740, y: 0, width: 180, height: 52 },
  { x: 1600, y: 0, width: 120, height: 52 }
];
const pos = computeSafeCorner(viewport, reserved, { width: 160, height: 160 });
assert.ok(pos.x >= 0 && pos.y >= 0, 'posição negativa');
assert.ok(pos.x + 160 <= viewport.width, 'mascote fora horizontal');
assert.ok(pos.y + 160 <= viewport.height, 'mascote fora vertical');
console.log('Layout real: safe corner calculado sem overflow.');
