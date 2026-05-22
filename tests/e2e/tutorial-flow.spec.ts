import { test, expect } from '@playwright/test';

test('fluxo do módulo Conhecendo a Mel e a Minie', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Iniciar módulo' }).click();
  await expect(page.getByText('ModuleScreen: Conhecendo a Mel e a Minie')).toBeVisible();
  await expect(page.getByText('Instrução: Abra pelo atalho na área de trabalho.')).toBeVisible();
  await page.getByRole('button', { name: 'Pausar' }).click();
  await expect(page.getByText('MasteryGate: bloqueado')).toBeVisible();
  await page.getByRole('button', { name: 'Retomar' }).click();
  await page.getByRole('button', { name: 'Repetir demonstração' }).click();
  await page.getByRole('button', { name: 'Próximo' }).click();
  await expect(page.getByText('Entender overlay')).toBeVisible();
  await page.getByRole('button', { name: 'Fechar tutorial' }).click();
  await expect(page.getByText('Tutorial pausado.')).toBeVisible();
});
