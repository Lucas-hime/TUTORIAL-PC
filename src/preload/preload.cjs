const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('melMinieApi', {
  setOverlayInteractive: (interactive) => ipcRenderer.invoke('overlay:set-interactive', Boolean(interactive)),
  openChatGpt: (url) => ipcRenderer.invoke('external:open-chatgpt', String(url)),
  getActiveWindow: () => ipcRenderer.invoke('uia:active-window'),
  findElementByName: (name) => ipcRenderer.invoke('uia:find-element', String(name))
});
