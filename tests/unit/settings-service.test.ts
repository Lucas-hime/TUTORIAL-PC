import { describe, it, expect } from 'vitest';
import { secureElectronSettings } from '../../src/services/settings-service.mjs';

describe('settings service', () => {
  it('enforces secure defaults', () => {
    expect(secureElectronSettings.nodeIntegration).toBe(false);
    expect(secureElectronSettings.contextIsolation).toBe(true);
  });
});
