import React from 'react';
import { melSvg } from '../assets/MelMascot';
import { minieSvg } from '../assets/MinieMascot';
import './overlay.css';

export function VisualOverlayApp() {
  return (
    <div className="visual-overlay-root" data-testid="visual-overlay-app">
      <div className="focus-mask" />
      <div className="pulse-highlight" data-testid="pulse-highlight" />
      <div className="arrow-guide" data-testid="arrow-guide">➜</div>
      <div className="pointer-guide" data-testid="pointer-guide" />
      <div className="mel-safe-corner" aria-label="Mel" dangerouslySetInnerHTML={{ __html: melSvg }} />
      <div className="minie-tip-corner" aria-label="Minie" dangerouslySetInnerHTML={{ __html: minieSvg }} />
    </div>
  );
}
