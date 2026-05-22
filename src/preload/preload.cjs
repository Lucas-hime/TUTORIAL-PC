const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('melMinieApi', {
  overlay: {
    setInteractive: (interactive) => ipcRenderer.invoke('overlay:set-interactive', Boolean(interactive)),
    pause: () => Promise.resolve({ unsupported: true }),
    resume: () => Promise.resolve({ unsupported: true }),
    closeTutorial: () => Promise.resolve({ unsupported: true }),
    repeatDemo: () => Promise.resolve({ unsupported: true }),
    imLost: () => Promise.resolve({ unsupported: true })
  },
  progress: {
    load: () => Promise.resolve({ unsupported: true }),
    save: (_state) => Promise.resolve({ unsupported: true })
  },
  settings: {
    load: () => Promise.resolve({ unsupported: true }),
    save: (_settings) => Promise.resolve({ unsupported: true })
  },
  uia: {
    getActiveWindow: () => ipcRenderer.invoke('uia:active-window'),
    findElementByName: (name) => ipcRenderer.invoke('uia:find-element', String(name))
  },
  external: {
    openChatGpt: (url = 'https://chatgpt.com') => ipcRenderer.invoke('external:open-chatgpt', String(url))
  }
});
