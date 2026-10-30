import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={[styles.button, className].filter(Boolean).join(" ")} {...props}>
      {children}
    </button>
  );
}
