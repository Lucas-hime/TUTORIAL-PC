export function runToSafeCorner(screenWidth, screenHeight) {
  return { x: Math.max(16, screenWidth - 180), y: 16, safe: true };
}
