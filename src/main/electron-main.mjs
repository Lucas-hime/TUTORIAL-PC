import { app, BrowserWindow, ipcMain, screen, shell } from 'electron';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import fs from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ALLOWED_EXTERNAL_HOSTS = new Set(['chat.openai.com', 'openai.com']);
const overlayWindows = new Map();
let controlPanelWindow;

const preloadPath = path.join(__dirname, '../preload/preload.cjs');
const isDev = !app.isPackaged;
const devServerUrl = process.env.VITE_DEV_SERVER_URL || 'http://localhost:5173';

function helperExecutable() {
  return path.join(process.cwd(), 'native', 'MelMinie.UIAHelper', 'bin', 'Release', 'net8.0-windows', 'MelMinie.UIAHelper.exe');
}

function runUiaHelper(payload) {
  return new Promise((resolve) => {
    const executable = helperExecutable();
    if (!fs.existsSync(executable)) {
      console.error(`[UIA] helper ausente: ${executable}`);
      return resolve({ error: 'uia_helper_not_found', message: 'Helper .NET não encontrado. Compile no Windows com dotnet build.' });
    }
    execFile(executable, [JSON.stringify(payload)], (error, stdout) => {
      if (error) {
        console.error('[UIA] falha ao executar helper', error);
        return resolve({ error: 'uia_helper_exec_failed', message: 'Falha ao consultar UI Automation.', details: String(error.message) });
      }
      try {
        resolve(JSON.parse(stdout));
      } catch (parseError) {
        console.error('[UIA] JSON inválido retornado pelo helper', parseError);
        resolve({ error: 'uia_helper_invalid_json', message: 'Retorno inválido do helper UIA.' });
      }
    });
  });
}

function validateExternalUrl(urlString) {
  const url = new URL(urlString);
  return url.protocol === 'https:' && ALLOWED_EXTERNAL_HOSTS.has(url.hostname);
}

function createOverlayForDisplay(display) {
  const win = new BrowserWindow({
    x: display.bounds.x,
    y: display.bounds.y,
    width: display.bounds.width,
    height: display.bounds.height,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    skipTaskbar: true,
    focusable: false,
    webPreferences: { preload: preloadPath, nodeIntegration: false, contextIsolation: true, sandbox: true }
  });
  win.setAlwaysOnTop(true, 'screen-saver');
  win.setIgnoreMouseEvents(true, { forward: true });
  win.loadURL('data:text/html,<html><body style="background:transparent"></body></html>');
  overlayWindows.set(display.id, win);
}

function syncOverlayWindows() {
  const displays = screen.getAllDisplays();
  const ids = new Set(displays.map((d) => d.id));
  for (const display of displays) {
    const existing = overlayWindows.get(display.id);
    if (!existing || existing.isDestroyed()) createOverlayForDisplay(display);
    else existing.setBounds(display.bounds);
  }
  for (const [id, win] of overlayWindows) if (!ids.has(id)) {
    win.close();
    overlayWindows.delete(id);
  }
}

async function loadRenderer(window) {
  if (isDev) {
    await window.loadURL(devServerUrl);
  } else {
    const rendererPath = path.join(process.cwd(), 'dist', 'index.html');
    await window.loadFile(rendererPath);
  }
}

function createControlPanelWindow() {
  controlPanelWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: { preload: preloadPath, nodeIntegration: false, contextIsolation: true, sandbox: true }
  });
  void loadRenderer(controlPanelWindow);
}

app.whenReady().then(() => {
  createControlPanelWindow();
  syncOverlayWindows();
  screen.on('display-added', syncOverlayWindows);
  screen.on('display-removed', syncOverlayWindows);
  screen.on('display-metrics-changed', syncOverlayWindows);
});

ipcMain.handle('overlay:set-interactive', (_evt, interactive) => {
  for (const win of overlayWindows.values()) win.setIgnoreMouseEvents(!interactive, { forward: true });
});
ipcMain.handle('external:open-chatgpt', async (_evt, url) => {
  if (!validateExternalUrl(url)) throw new Error('URL externa não permitida');
  await shell.openExternal(url);
});
ipcMain.handle('uia:active-window', async () => runUiaHelper({ Mode: 'activeWindow' }));
ipcMain.handle('uia:find-element', async (_evt, name) => runUiaHelper({ Mode: 'findElementByName', ElementName: String(name) }));
