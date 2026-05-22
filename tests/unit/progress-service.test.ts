import { describe, it, expect } from 'vitest';
import { saveProgress, loadProgress } from '../../src/services/progress-service.mjs';

describe('progress service', () => {
  it('persists and loads state', () => {
    saveProgress({ module: 1, step: 2 });
    expect(loadProgress()).toMatchObject({ module: 1, step: 2 });
  });
});
