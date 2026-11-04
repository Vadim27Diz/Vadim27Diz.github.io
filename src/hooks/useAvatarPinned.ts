import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Следит, ушло ли фото Hero (Figma node 68:822) за верх экрана при скролле.
 * Один точечный ScrollTrigger (start: "bottom top") — pinned переключается
 * onEnter/onLeaveBack, без отдельных триггеров на inline- и fixed-версии
 * RU/ENG (баг 2026-10-30: два независимых триггера расходились при скролле
 * вверх).
 */
export function useAvatarPinned<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "bottom top",
      onEnter: () => setPinned(true),
      onLeaveBack: () => setPinned(false),
    });

    return () => trigger.kill();
  }, []);

  return { ref, pinned };
}
