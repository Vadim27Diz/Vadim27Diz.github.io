/**
 * Growing-circle theme-switch transition via the native View Transition API:
 * document.startViewTransition() snapshots the real before/after page, and
 * an animated clip-path on ::view-transition-new(root) reveals the already-
 * switched, real content through a circle growing from the click origin —
 * no flat-color placeholder, no popping once the circle finishes.
 * Pseudo-element stacking/animation reset lives in src/styles/global.css.
 */

export type RippleOrigin = { x: number; y: number };

function parseDurationMs(cssValue: string): number {
  const trimmed = cssValue.trim();
  const value = parseFloat(trimmed);
  return trimmed.endsWith("ms") ? value : value * 1000;
}

export function playThemeRipple(origin: RippleOrigin, applyTheme: () => void): void {
  if (typeof document.startViewTransition !== "function") {
    applyTheme();
    return;
  }

  const transition = document.startViewTransition(applyTheme);

  transition.ready.then(() => {
    const root = document.documentElement;
    const endRadius = Math.hypot(
      Math.max(origin.x, window.innerWidth - origin.x),
      Math.max(origin.y, window.innerHeight - origin.y)
    );
    const style = getComputedStyle(root);
    const duration = parseDurationMs(style.getPropertyValue("--duration-ripple"));
    const easing = style.getPropertyValue("--ease-default").trim();

    root.animate(
      {
        clipPath: [
          `circle(0px at ${origin.x}px ${origin.y}px)`,
          `circle(${endRadius}px at ${origin.x}px ${origin.y}px)`,
        ],
      },
      { duration, easing, pseudoElement: "::view-transition-new(root)" }
    );
  });
}
