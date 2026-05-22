import React from 'react';
import './overlay.css';

function callOverlay(action: 'closeTutorial' | 'pause' | 'resume' | 'repeatDemo' | 'imLost') {
  const api = window.melMinieApi?.overlay;
  if (api && typeof api[action] === 'function') {
    return api[action]();
  }
  return Promise.resolve();
}

export function ControlsOverlayApp() {
  return (
    <div className="controls-overlay-root" data-testid="controls-overlay-app">
      <button onClick={() => void callOverlay('closeTutorial')}>Fechar tutorial</button>
      <button onClick={() => void callOverlay('pause')}>Pausar</button>
      <button onClick={() => void callOverlay('resume')}>Retomar</button>
      <button onClick={() => void callOverlay('repeatDemo')}>Repetir demonstração</button>
      <button onClick={() => void callOverlay('imLost')}>Estou perdida</button>
    </div>
  );
}
