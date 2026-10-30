import type { MouseEventHandler } from "react";
import styles from "./ReloadButton.module.css";

interface ReloadButtonProps {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function ReloadButton({ label, onClick }: ReloadButtonProps) {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
      data-cursor="hover"
    >
      {label}
    </button>
  );
}
