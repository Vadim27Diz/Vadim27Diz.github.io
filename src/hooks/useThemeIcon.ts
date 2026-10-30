import { useEffect, useRef, type RefObject } from "react";
import lottie, { type AnimationItem } from "lottie-web/build/player/lottie_svg";
import sunData from "../content/icons/sun.json";
import moonData from "../content/icons/moon.json";
import { useTheme } from "./useTheme";

function hexToRgb01(hex: string): [number, number, number] {
  const n = parseInt(hex.trim().replace("#", ""), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

function recolored(data: object, rgb: [number, number, number]) {
  const clone = JSON.parse(JSON.stringify(data));
  const walk = (node: unknown): void => {
    if (!node || typeof node !== "object") return;
    const obj = node as Record<string, unknown>;
    const c = obj.c as { k?: unknown } | undefined;
    if (c && Array.isArray(c.k) && c.k.length >= 3) {
      c.k = [rgb[0], rgb[1], rgb[2], c.k[3] ?? 1];
    }
    for (const key in obj) walk(obj[key]);
  };
  walk(clone);
  return clone;
}

/**
 * Загружает Lottie солнце/месяц в containerRef и перекрашивает под getColor().
 * getColor вызывается заново при каждой смене темы — вызывающий код сам
 * решает, брать ли цвет из токена темы (ThemeToggle) или фиксированный (NavBar).
 */
export function useThemeIcon(
  containerRef: RefObject<HTMLElement | null>,
  getColor: () => string
) {
  const { theme, toggleTheme } = useTheme();
  const animRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const data = recolored(theme === "light" ? sunData : moonData, hexToRgb01(getColor()));

    animRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: data,
    });
    animRef.current.goToAndStop(0, true);

    return () => {
      animRef.current?.destroy();
      animRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  const reducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleEnter = () => {
    if (reducedMotion()) return;
    animRef.current?.setDirection(1);
    animRef.current?.play();
  };

  const handleLeave = () => {
    if (reducedMotion()) return;
    animRef.current?.setDirection(-1);
    animRef.current?.play();
  };

  return { theme, toggleTheme, handleEnter, handleLeave };
}
