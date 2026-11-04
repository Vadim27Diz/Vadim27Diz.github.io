import { useEffect, useRef, useState } from "react";
import type { CaseTokenFlowBlock } from "../content/cases/blocks";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./TokenFlowDiagram.module.css";

// Холст из Figma (node 613:2361, «flow», файл Portfolio3) — см. docs/responsive-scaled-diagram.
// HEIGHT с запасом сверх цифры из Figma (680px): auto-height карточек (padding + line-height +
// border без явного height) рендерится на пару px выше расчётного — тот же эффект, что уже
// задокументирован в UserFlowDiagram.tsx про CARD_HEIGHT. У Chromatic, последней карточки без
// соседа снизу, это упиралось в overflow:hidden вьюпорта и резало низ диаграммы.
const WIDTH = 412;
const HEIGHT = 696;
const MIN_WIDTH = 320;

const ARROW_WIDTH = 7;
const CENTER = WIDTH / 2;

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
              Стрелка обратной связи рендерится первой (ниже по z-order), чтобы непрозрачные
              карточки поверх неё перекрывали её на своих участках — сверено со скриншотом самого
              макета (get_screenshot на 613:2361): в реальном рендере Figma линия тоже видна только
              в зазорах между карточками и в области врезки «Проверки», проходит у них «под низом»,
              а не поверх. Сгенерированный get_design_context HTML вводит в заблуждение на этот счёт
              (там стрелка — position:absolute, что по CSS-спеке красилось бы поверх статичных
              карточек) — но это артефакт экспорта в HTML, не то, что реально рисует Figma.
            */}
            <img
              className={styles.feedbackArrow}
              src="/images/inta-design-system/flow-arrow-feedback.webp"
              alt=""
              width={ARROW_WIDTH}
              height={290}
              style={{ top: 80, left: 331 }}
            />

            <div className={styles.step} style={{ top: 0 }}>
              <p className={styles.stepHeading}>{figma.heading}</p>
              <p className={styles.stepSubtitle}>{figma.subtitle}</p>
            </div>
            <Arrow top={80} height={25} left={CENTER} />
            <div className={styles.step} style={{ top: 105 }}>
              <p className={styles.stepHeading}>{tokens.heading}</p>
              <p className={styles.stepSubtitle}>{tokens.subtitle}</p>
            </div>
            <Arrow top={185} height={25} left={CENTER} />
            <div className={styles.step} style={{ top: 210 }}>
              <p className={styles.stepHeading}>{components.heading}</p>
              <p className={styles.stepSubtitle}>{components.subtitle}</p>
            </div>

            {/* Компоненты → Storybook, в обход врезки «Проверки» слева по центру */}
            <Arrow src="/images/inta-design-system/flow-arrow-bypass.webp" top={291} height={204} left={157} />
            {/* Компоненты → верх врезки «Проверки» */}
            <Arrow src="/images/inta-design-system/flow-arrow-branch.webp" top={291} height={79} left={205} />

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
            <Arrow top={575} height={25} left={CENTER} />
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

function Arrow({
  top,
  height,
  left,
  src = "/images/inta-design-system/flow-arrow-short.webp",
}: {
  top: number;
  height: number;
  left: number;
  src?: string;
}) {
  return <img className={styles.arrow} src={src} alt="" width={ARROW_WIDTH} height={height} style={{ top, left }} />;
}
