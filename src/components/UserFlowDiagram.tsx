import { useEffect, useRef, useState } from "react";
import type { CaseUserFlowBlock, UserFlowCard } from "../content/cases/blocks";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./UserFlowDiagram.module.css";

// Холст из Figma (node 630:3430, «Флоу пользователя», файл Portfolio3) — см. docs/responsive-scaled-diagram.
const WIDTH = 488;
const HEIGHT = 505;
const MIN_WIDTH = 360;

const COLUMN_WIDTH = 146;
const COLUMN_LEFT = [0, 172, 342];
const ARROW_V_TOP = [52, 138];
const ARROW_V_LEFT = [385, 73, 245, 415];
const COLUMNS_TOP = 173;

export default function UserFlowDiagram({ heading, entrySteps, screen, columns }: CaseUserFlowBlock) {
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

  const [entryA, entryB] = entrySteps;

  return (
    <div ref={revealRef} className={styles.flow}>
      {heading && <p className={styles.heading}>{heading}</p>}
      <div ref={viewportRef} className={`${styles.viewport} ${scrollable ? styles.viewportScroll : ""}`}>
        <div className={styles.scaleBox} style={scale !== null ? { width: WIDTH * scale, height: HEIGHT * scale } : undefined}>
          <div className={styles.canvas} style={scale !== null ? { transform: `scale(${scale})` } : undefined}>
            <div className={styles.card} style={{ left: 0, top: 0, width: 227 }}>
              <p>{entryA}</p>
            </div>
            <img
              className={styles.arrowH}
              src="/images/trassir-redesign/flow-arrow-h.webp"
              alt=""
              width={51}
              height={8}
              style={{ left: 228, top: 26 }}
            />
            <div className={styles.card} style={{ left: 282, top: 0, width: 206 }}>
              <p>{entryB}</p>
            </div>

            <img
              className={styles.arrowV}
              src="/images/trassir-redesign/flow-arrow-v.webp"
              alt=""
              width={8}
              height={34}
              style={{ left: ARROW_V_LEFT[0], top: ARROW_V_TOP[0] }}
            />

            <div className={styles.card} style={{ left: 0, top: 86, width: WIDTH }}>
              <p>{screen}</p>
            </div>

            {ARROW_V_LEFT.slice(1).map((left) => (
              <img
                key={left}
                className={styles.arrowV}
                src="/images/trassir-redesign/flow-arrow-v.webp"
                alt=""
                width={8}
                height={34}
                style={{ left, top: ARROW_V_TOP[1] }}
              />
            ))}

            {columns.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className={styles.column}
                style={{ left: COLUMN_LEFT[columnIndex], top: COLUMNS_TOP, width: COLUMN_WIDTH }}
              >
                {column.cards.map((card, cardIndex) => (
                  <ColumnCard key={cardIndex} card={card} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ColumnCard({ card }: { card: UserFlowCard }) {
  return (
    <div className={`${styles.card} ${styles.columnCard} ${card.accent ? styles.cardAccent : ""}`}>
      {card.lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  );
}
