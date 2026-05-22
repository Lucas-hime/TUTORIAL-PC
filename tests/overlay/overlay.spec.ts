import { test, expect } from '@playwright/test';

test('overlay visual e controles separados', async ({ page }) => {
  await page.goto('/visual-overlay.html');
  await expect(page.getByTestId('visual-overlay-app')).toBeVisible();
  await expect(page.getByLabel('Mel')).toBeVisible();
  await expect(page.getByLabel('Minie')).toBeVisible();
  await expect(page.getByTestId('pointer-guide')).toBeVisible();
  await expect(page.getByTestId('pulse-highlight')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Fechar tutorial' })).toHaveCount(0);

  await page.goto('/controls-overlay.html');
  await expect(page.getByTestId('controls-overlay-app')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Fechar tutorial' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Pausar' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Retomar' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Repetir demonstração' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Estou perdida' })).toBeVisible();
});
