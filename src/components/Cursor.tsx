import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Cursor.module.css";

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(pointer: coarse)").matches) return;

    const setX = gsap.quickTo(el, "x", { duration: 0.2, ease: "power3" });
    const setY = gsap.quickTo(el, "y", { duration: 0.2, ease: "power3" });

    const onMove = (e: PointerEvent) => {
      setX(e.clientX);
      setY(e.clientY);
    };

    const onEnter = (e: Event) => {
      if ((e.target as HTMLElement).closest("[data-cursor='hover']")) {
        gsap.to(el, { scale: 4.4, duration: 0.2, ease: "power3" });
      }
    };
    const onLeave = (e: Event) => {
      if ((e.target as HTMLElement).closest("[data-cursor='hover']")) {
        gsap.to(el, { scale: 1, duration: 0.2, ease: "power3" });
      }
    };

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerover", onEnter);
    document.addEventListener("pointerout", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onEnter);
      document.removeEventListener("pointerout", onLeave);
    };
  }, []);

  return <div ref={ref} className={styles.cursor} />;
}
