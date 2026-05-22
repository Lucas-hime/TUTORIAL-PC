import { describe, it, expect } from 'vitest';
import { getLessonOrder, getTutorialControls } from '../../src/engines/lesson-engine.mjs';

describe('lesson engine', () => {
  it('keeps required first module', () => {
    expect(getLessonOrder()[0]).toBe('Conhecendo o tutorial');
  });
  it('has 8 tutorial controls', () => {
    expect(getTutorialControls()).toHaveLength(8);
  });
});
