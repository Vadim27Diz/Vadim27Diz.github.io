import { useEffect, useRef, useState } from "react";
import type { CaseTokenFlowBlock } from "../content/cases/blocks";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./TokenFlowDiagram.module.css";

// Холст из Figma (node 613:2361, «flow», файл Portfolio3) — см. docs/responsive-scaled-diagram.
const WIDTH = 412;
const HEIGHT = 680;
const MIN_WIDTH = 320;

export default function TokenFlowDiagram({ steps, checks, feedback }: CaseTokenFlowBlock) {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const viewportRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);
  const [scrollable, setScrollable] = useState(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const update = () => {
      const containerWidth = viewport.clientWidth;
      setScrollable(containerWidth < MIN_WIDTH);
      setScale(containerWidth >= WIDTH ? null : Math.max(containerWidth, MIN_WIDTH) / WIDTH);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  const [figma, tokens, components, storybook, chromatic] = steps;

  return (
    <div ref={revealRef} className={styles.flow}>
      <div ref={viewportRef} className={`${styles.viewport} ${scrollable ? styles.viewportScroll : ""}`}>
        <div className={styles.scaleBox} style={scale !== null ? { width: WIDTH * scale, height: HEIGHT * scale } : undefined}>
          <div className={styles.canvas} style={scale !== null ? { transform: `scale(${scale})` } : undefined}>
            {/*
              Пунктирная стрелка обратной связи рендерится первой (ниже по z-order), чтобы
              карточки с непрозрачным фоном перекрывали её на своих участках — в макете линия
              видна только в зазорах между карточками и в области врезки «Проверки», как будто
              проходит «под» ними (Figma node 613:2362: top=80, height=289.5, left≈331).
            */}
            <div className={styles.feedbackArrow} style={{ top: 80, height: 289.5 }} />

            <div className={styles.step} style={{ top: 0 }}>
              <p className={styles.stepHeading}>{figma.heading}</p>
              <p className={styles.stepSubtitle}>{figma.subtitle}</p>
            </div>
            <Arrow top={80} />
            <div className={styles.step} style={{ top: 105 }}>
              <p className={styles.stepHeading}>{tokens.heading}</p>
              <p className={styles.stepSubtitle}>{tokens.subtitle}</p>
            </div>
            <Arrow top={185} />
            <div className={styles.step} style={{ top: 210 }}>
              <p className={styles.stepHeading}>{components.heading}</p>
              <p className={styles.stepSubtitle}>{components.subtitle}</p>
            </div>

            {/* Компоненты → Storybook, в обход врезки «Проверки» слева по центру */}
            <div className={styles.bypassArrow} style={{ top: 291, height: 204 }} />
            {/* Компоненты → верх врезки «Проверки» */}
            <div className={styles.branchArrow} style={{ top: 291, height: 79 }} />

            <div className={styles.feedbackNote} style={{ top: 305 }}>
              {feedback}
            </div>

            <div className={styles.checks} style={{ top: 369 }}>
              <p className={styles.checksHeading}>{checks.heading}</p>
              <div className={styles.checksBody}>
                {checks.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>

            <div className={styles.step} style={{ top: 495 }}>
              <p className={styles.stepHeading}>{storybook.heading}</p>
              <p className={styles.stepSubtitle}>{storybook.subtitle}</p>
            </div>
            <Arrow top={575} />
            <div className={styles.step} style={{ top: 600 }}>
              <p className={styles.stepHeading}>{chromatic.heading}</p>
              <p className={styles.stepSubtitle}>{chromatic.subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Arrow({ top }: { top: number }) {
  return (
    <div className={styles.arrow} style={{ top }}>
      <span className={styles.arrowLine} />
      <span className={styles.arrowHead} />
    </div>
  );
}
