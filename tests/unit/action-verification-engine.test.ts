import { describe, it, expect } from 'vitest';
import { canAdvance } from '../../src/engines/action-verification-engine.mjs';

describe('action verification engine', () => {
  it('blocks when any task not completed', () => {
    expect(canAdvance([true, false, true])).toBe(false);
  });
});
