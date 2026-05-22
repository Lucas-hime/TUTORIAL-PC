const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('melMinieApi', {
  overlay: {
    setInteractive: (interactive) => ipcRenderer.invoke('overlay:set-interactive', Boolean(interactive)),
    pause: () => ipcRenderer.invoke('overlay:pause'),
    resume: () => ipcRenderer.invoke('overlay:resume'),
    closeTutorial: () => ipcRenderer.invoke('overlay:close-tutorial'),
    repeatDemo: () => ipcRenderer.invoke('overlay:repeat-demo'),
    imLost: () => ipcRenderer.invoke('overlay:im-lost')
  },
  progress: {
    load: () => ipcRenderer.invoke('progress:load'),
    save: (state) => ipcRenderer.invoke('progress:save', state)
  },
  settings: {
    load: () => ipcRenderer.invoke('settings:load'),
    save: (settings) => ipcRenderer.invoke('settings:save', settings)
  },
  uia: {
    getActiveWindow: () => ipcRenderer.invoke('uia:active-window'),
    findElementByName: (name) => ipcRenderer.invoke('uia:find-element', String(name))
  },
  external: {
    openChatGpt: (url = 'https://chatgpt.com') => ipcRenderer.invoke('external:open-chatgpt', String(url))
  }
});
