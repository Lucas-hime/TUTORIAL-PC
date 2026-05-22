import assert from 'node:assert/strict';
import { overlayCapabilities, supportsClickThrough } from '../engines/overlay-guidance-engine.mjs';

const caps = overlayCapabilities();
for (const required of ['transparent','alwaysOnTop','clickThroughExceptControls','pointerGuide','pulseHighlight','arrow','focusMask']) {
  assert.ok(caps.includes(required), `capabilidade ausente: ${required}`);
}
assert.equal(supportsClickThrough({ interactive: false }), true);
assert.equal(supportsClickThrough({ interactive: true }), false);
console.log('Overlay real: capacidades e regra de click-through validadas.');
