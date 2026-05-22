import { describe, it, expect } from 'vitest';
import { evaluateMastery } from '../../src/engines/mastery-gate-engine.mjs';

describe('mastery gate engine', () => {
  it('requires minimum score', () => {
    expect(evaluateMastery(2, 3)).toBe(false);
    expect(evaluateMastery(3, 3)).toBe(true);
  });
});
