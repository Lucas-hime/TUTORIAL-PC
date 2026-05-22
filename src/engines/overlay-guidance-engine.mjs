export function overlayCapabilities() {
  return ['transparent', 'alwaysOnTop', 'clickThroughExceptControls', 'pointerGuide', 'pulseHighlight', 'arrow', 'focusMask', 'speechBubble', 'mascotRun'];
}

export function supportsClickThrough({ interactive }) {
  return !interactive;
}

export function computeSafeCorner(viewport, reservedAreas, mascotSize) {
  const candidates = [
    { x: viewport.x + 16, y: viewport.y + 16 },
    { x: viewport.x + viewport.width - mascotSize.width - 16, y: viewport.y + 16 },
    { x: viewport.x + 16, y: viewport.y + viewport.height - mascotSize.height - 16 },
    { x: viewport.x + viewport.width - mascotSize.width - 16, y: viewport.y + viewport.height - mascotSize.height - 16 }
  ];

  for (const candidate of candidates) {
    const overlaps = reservedAreas.some((r) => !(candidate.x + mascotSize.width < r.x || candidate.x > r.x + r.width || candidate.y + mascotSize.height < r.y || candidate.y > r.y + r.height));
    if (!overlaps) {
      return candidate;
    }
  }
  return candidates[0];
}
