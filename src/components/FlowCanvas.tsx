import { useEffect, useRef, useState } from "react";
import type { CaseFlowBlock } from "../content/cases/blocks";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./FlowCanvas.module.css";

const FLOW_WIDTH = 1024;
const FLOW_HEIGHT = 822;
// Пол масштаба: ниже этой ширины контейнера диаграмма не ужимается дальше
// (текст карточек не мельчает до нечитаемого), а прячет излишек за край с горизонтальным скроллом
const FLOW_MIN_WIDTH = 720;

const pct = (value: number, total: number) => `${(value / total) * 100}%`;

export default function FlowCanvas({ entrySteps, columns, screen, note, outcomes, chips }: CaseFlowBlock) {
  // Позиции в макете фиксированы под два исхода: обычный — слева (пунктир), акцентный — справа (тёмный + чипы)
  const plainOutcome = outcomes.find((outcome) => !outcome.accent) ?? outcomes[0];
  const accentOutcome = outcomes.find((outcome) => outcome.accent) ?? outcomes[1];
  const revealRef = useScrollReveal<HTMLDivElement>();
  const viewportRef = useRef<HTMLDivElement>(null);
  // null = контейнер ≥1024px (ширина диаграммы в макете) — диаграмма резиновая (width:100%), трансформ не нужен
  const [scale, setScale] = useState<number | null>(null);
  const [scrollable, setScrollable] = useState(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const update = () => {
      const containerWidth = viewport.clientWidth;
      setScrollable(containerWidth < FLOW_MIN_WIDTH);
      setScale(
        containerWidth >= FLOW_WIDTH
          ? null
          : Math.max(containerWidth, FLOW_MIN_WIDTH) / FLOW_WIDTH
      );
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={revealRef} className={styles.flow}>
      <div
        ref={viewportRef}
        className={`${styles.viewport} ${scrollable ? styles.viewportScroll : ""}`}
      >
        {/*
          scaleBox имеет собственные (не-трансформированные) размеры — это и есть реальная
          ширина, которую видит overflow у viewport (transform сам по себе не меняет
          scrollWidth родителя в браузерах). diagram внутри всегда природных 1024×822 и
          просто визуально сжимается transform:scale в размер scaleBox.
        */}
        <div
          className={styles.scaleBox}
          style={scale !== null ? { width: FLOW_WIDTH * scale, height: FLOW_HEIGHT * scale } : undefined}
        >
          <div
            className={styles.diagram}
            style={scale !== null ? { transform: `scale(${scale})` } : { width: "100%" }}
          >
            <div
              className={styles.entryRow}
              style={{ left: 0, top: pct(32, FLOW_HEIGHT), width: pct(788.551, FLOW_WIDTH) }}
            >
              {entrySteps.map((step, index) => (
                <span key={step.label} className={styles.entryStep}>
                  <span className={styles.dashedCard}>{step.label}</span>
                  {index < entrySteps.length - 1 && (
                    <img
                      className={styles.arrowH}
                      src="/images/plati-chastyami/flow-arrow-h.webp"
                      alt=""
                      width={50}
                      height={8}
                    />
                  )}
                </span>
              ))}
            </div>

            <img
              className={styles.fan}
              src="/images/plati-chastyami/flow-fan-top.webp"
              alt=""
              width={793}
              height={56}
              style={{ left: pct(126.86, FLOW_WIDTH), top: pct(84, FLOW_HEIGHT) }}
            />

            <div
              className={styles.columnsRow}
              style={{ left: 0, top: pct(140, FLOW_HEIGHT), width: pct(1022.985, FLOW_WIDTH) }}
            >
              {columns.map((column) => (
                <div key={column.header} className={styles.flowColumn}>
                  <p className={styles.columnHeader}>{column.header}</p>
                  {column.rows.map((row) => (
                    <p key={row} className={styles.columnRow}>
                      {row}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <img
              className={styles.arrowV}
              src="/images/plati-chastyami/flow-arrow-v.webp"
              alt=""
              width={8}
              height={50}
              style={{ left: pct(520.63, FLOW_WIDTH), top: pct(404, FLOW_HEIGHT) }}
            />

            <div
              className={styles.screenBar}
              style={{ left: 0, top: pct(454, FLOW_HEIGHT), width: pct(1024, FLOW_WIDTH) }}
            >
              <p className={styles.screenHeading}>{screen.heading}</p>
              <p className={styles.screenSubtitle}>{screen.subtitle}</p>
            </div>

            <img
              className={styles.arrowV}
              src="/images/plati-chastyami/flow-arrow-v.webp"
              alt=""
              width={8}
              height={50}
              style={{ left: pct(520.63, FLOW_WIDTH), top: pct(534, FLOW_HEIGHT) }}
            />

            <p
              className={styles.noteBar}
              style={{ left: 0, top: pct(584, FLOW_HEIGHT), width: pct(1024, FLOW_WIDTH) }}
            >
              {note}
            </p>

            <img
              className={styles.fan}
              src="/images/plati-chastyami/flow-fan-bottom.webp"
              alt=""
              width={358}
              height={49}
              style={{ left: pct(271.88, FLOW_WIDTH), top: pct(636, FLOW_HEIGHT) }}
            />

            <div
              className={styles.outcomeBox}
              style={{ left: pct(176.59, FLOW_WIDTH), top: pct(686, FLOW_HEIGHT), width: pct(190.795, FLOW_WIDTH) }}
            >
              <span className={styles.dashedCard}>{plainOutcome.label}</span>
            </div>

            <div
              className={styles.outcomeBox}
              style={{ left: pct(411.02, FLOW_WIDTH), top: pct(686, FLOW_HEIGHT), width: pct(395.798, FLOW_WIDTH) }}
            >
              <span className={styles.darkCard}>{accentOutcome.label}</span>
              <div className={styles.chipsRow}>
                {chips.map((chip) => (
                  <span key={chip} className={styles.chip}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
