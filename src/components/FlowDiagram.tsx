import type { CaseFlowDiagramBlock } from "../content/cases/blocks";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./FlowDiagram.module.css";

export default function FlowDiagram({
  entrySteps,
  columns,
  screen,
  note,
  outcomes,
  chips,
}: CaseFlowDiagramBlock) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={styles.wrap}>
      <div className={styles.entryRow}>
        {entrySteps.map((step, index) => (
          <span key={step.label} className={styles.entryStep}>
            <span className={styles.dashedBox}>{step.label}</span>
            {index < entrySteps.length - 1 && (
              <span className={styles.arrowRight} aria-hidden="true">
                ╌╌╌&gt;
              </span>
            )}
          </span>
        ))}
      </div>

      <p className={styles.fanConnector} aria-hidden="true">
        {columns.map((column) => (
          <span key={column.header}>↓</span>
        ))}
      </p>

      <div className={styles.columns}>
        {columns.map((column) => (
          <div key={column.header} className={styles.column}>
            <p className={styles.columnHeader}>{column.header}</p>
            {column.rows.map((row) => (
              <p key={row} className={styles.columnRow}>
                {row}
              </p>
            ))}
          </div>
        ))}
      </div>

      <p className={styles.connector} aria-hidden="true">
        ↓
      </p>

      <div className={styles.screen}>
        <p className={styles.screenHeading}>{screen.heading}</p>
        <p className={styles.screenSubtitle}>{screen.subtitle}</p>
      </div>

      <p className={styles.connector} aria-hidden="true">
        ↓
      </p>

      <p className={styles.note}>{note}</p>

      <p className={styles.fanConnector} aria-hidden="true">
        {outcomes.map((outcome) => (
          <span key={outcome.label}>↓</span>
        ))}
      </p>

      <div className={styles.outcomeRow}>
        {outcomes.map((outcome) => (
          <span
            key={outcome.label}
            className={outcome.accent ? styles.darkBox : styles.dashedBox}
          >
            {outcome.label}
          </span>
        ))}
      </div>

      <div className={styles.chipsRow}>
        {chips.map((chip) => (
          <span key={chip} className={styles.chip}>
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}
