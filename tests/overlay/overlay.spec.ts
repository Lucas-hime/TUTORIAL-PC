import { test, expect } from '@playwright/test';

test('overlay controls no renderer real (mockado sem janela electron)', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Iniciar módulo' }).click();
  await page.getByRole('button', { name: 'Pausar' }).click();
  await expect(page.getByText('Tutorial pausado.')).toBeVisible();
  await page.getByRole('button', { name: 'Retomar' }).click();
  await expect(page.getByText('Tutorial em execução.')).toBeVisible();
});
