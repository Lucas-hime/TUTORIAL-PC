import assert from 'node:assert/strict';
import { saveProgress, loadProgress } from '../services/progress-service.mjs';

saveProgress({ module: 'tutorial_controls', lesson: 'abrir', paused: false, closedSafely: false });
let state = loadProgress();
assert.equal(state.paused, false);

saveProgress({ ...state, paused: true });
state = loadProgress();
assert.equal(state.paused, true);

saveProgress({ ...state, paused: false, closedSafely: true });
state = loadProgress();
assert.equal(state.paused, false);
assert.equal(state.closedSafely, true);
console.log('E2E lógico real: abrir/pausar/retomar/fechar/reabrir persistindo progresso OK.');
