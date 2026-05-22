import React from 'react';

export function OverlayControls(props: {
  paused: boolean;
  onPause: () => void;
  onResume: () => void;
  onRepeat: () => void;
  onImLost: () => void;
  onClose: () => void;
}) {
  return (
    <nav>
      <button onClick={props.onClose}>Fechar tutorial</button>
      {!props.paused ? <button onClick={props.onPause}>Pausar</button> : <button onClick={props.onResume}>Retomar</button>}
      <button onClick={props.onRepeat}>Repetir demonstração</button>
      <button onClick={props.onImLost}>Estou perdida</button>
    </nav>
  );
}
