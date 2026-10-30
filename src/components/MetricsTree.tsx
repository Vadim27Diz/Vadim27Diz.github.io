import { Fragment } from "react";
import type { CaseMetricsTreeBlock, MetricsTreeCell } from "../content/cases/blocks";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./MetricsTree.module.css";

function Cell({ cell }: { cell: MetricsTreeCell }) {
  return (
    <div className={styles.cell}>
      {cell.heading && <p className={styles.cellHeading}>{cell.heading}</p>}
      <p className={styles.cellBody}>{cell.body}</p>
      {cell.note && <p className={styles.cellNote}>{cell.note}</p>}
    </div>
  );
}

export default function MetricsTree({ heading, subtitle, rows }: CaseMetricsTreeBlock) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={styles.wrap}>
      <div className={styles.header}>
        <p className={styles.title}>{heading}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      {rows.map((row, index) => (
        <div key={row.label} className={styles.row}>
          <p className={`${styles.label} ${row.accentLabel ? styles.labelAccent : ""}`}>
            {row.label}
          </p>
          <div className={`${styles.cells} ${row.cells.length === 1 ? styles.cellsSingle : ""}`}>
            {row.cells.map((cell, cellIndex) => (
              <Fragment key={cell.heading ?? cell.body}>
                {cellIndex === 1 && row.innerConnector && (
                  <span className={styles.innerConnector} aria-hidden="true">
                    ←╌╌╌╌
                  </span>
                )}
                <Cell cell={cell} />
              </Fragment>
            ))}
          </div>
          {index < rows.length - 1 && (
            <p className={styles.connector} aria-hidden="true">
              ↑
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
