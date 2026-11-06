import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { useLocale } from "../hooks/useLocale";
import { ui } from "../content/ui";
import styles from "./Cursor.module.css";

function Arrow() {
  return (
    <svg
      className={styles.arrow}
      viewBox="0 0 11.5 22"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M0.5 10.5C0.223858 10.5 0 10.7239 0 11C0 11.2761 0.223858 11.5 0.5 11.5V11V10.5ZM0.5 11V11.5H11V11V10.5H0.5V11ZM11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.17157 7.46447C7.97631 7.2692 7.65973 7.2692 7.46447 7.46447C7.2692 7.65973 7.2692 7.97631 7.46447 8.17157L10.2929 11L7.46447 13.8284C7.2692 14.0237 7.2692 14.3403 7.46447 14.5355C7.65973 14.7308 7.97631 14.7308 8.17157 14.5355L11.3536 11.3536Z" />
    </svg>
  );
}

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const t = ui[locale];
  const { pathname } = useLocation();

  /**
   * SPA-переход (клик по data-cursor="case"/"hover" ссылке) снимает DOM
   * элемента, пока курсор физически не сдвинулся — pointerout у браузера
   * на это не срабатывает, и hover-состояние (пилюля/увеличенный круг)
   * залипает на новой странице. Сбрасываем курсор в состояние по
   * умолчанию при каждой смене маршрута.
   */
  useEffect(() => {
    const dot = dotRef.current;
    const shell = shellRef.current;
    const label = labelRef.current;
    if (!dot || !shell || !label) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    gsap.to(dot, { scale: 0.2273, duration: 0 });
    gsap.to([shell, label], { scale: 0, duration: 0 });
  }, [pathname]);

  useEffect(() => {
    const dot = dotRef.current;
    const shell = shellRef.current;
    const label = labelRef.current;
    if (!dot || !shell || !label) return;

    if (window.matchMedia("(pointer: coarse)").matches) return;

    gsap.set([shell, label], { xPercent: -50, yPercent: -50, scale: 0 });

    const trackers = [dot, shell, label].map((el) => ({
      setX: gsap.quickTo(el, "x", { duration: 0.2, ease: "power3" }),
      setY: gsap.quickTo(el, "y", { duration: 0.2, ease: "power3" }),
    }));

    const onMove = (e: PointerEvent) => {
      trackers.forEach(({ setX, setY }) => {
        setX(e.clientX);
        setY(e.clientY);
      });
    };

    const onEnter = (e: Event) => {
      const target = (e.target as HTMLElement).closest("[data-cursor]");
      if (!target) return;
      const mode = target.getAttribute("data-cursor");
      if (mode === "case") {
        gsap.to(dot, { scale: 0, duration: 0.2, ease: "power3" });
        gsap.to([shell, label], { scale: 1, duration: 0.2, ease: "power3" });
      } else if (mode === "hover") {
        gsap.to(dot, { scale: 1, duration: 0.2, ease: "power3" });
        gsap.to([shell, label], { scale: 0, duration: 0.2, ease: "power3" });
      }
    };
    const onLeave = (e: Event) => {
      const target = (e.target as HTMLElement).closest("[data-cursor]");
      if (!target) return;
      gsap.to(dot, { scale: 0.2273, duration: 0.2, ease: "power3" });
      gsap.to([shell, label], { scale: 0, duration: 0.2, ease: "power3" });
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

  return (
    <>
      <div ref={dotRef} className={styles.cursor} />
      <div ref={shellRef} className={styles.shell}>
        <span>{t.viewCase}</span>
        <Arrow />
      </div>
      <div ref={labelRef} className={styles.label}>
        <span>{t.viewCase}</span>
        <Arrow />
      </div>
    </>
  );
}
