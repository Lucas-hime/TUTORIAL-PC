import { test, expect } from '@playwright/test';

for (const viewport of [{ width: 1366, height: 768 }, { width: 1920, height: 1080 }]) {
  test(`layout real ${viewport.width}x${viewport.height}`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /Mel e Minie Tutor PC/ })).toBeVisible();
    await page.getByRole('button', { name: 'Iniciar módulo' }).click();
    await expect(page.getByRole('button', { name: 'Fechar tutorial' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Pausar' })).toBeVisible();
  });
}
