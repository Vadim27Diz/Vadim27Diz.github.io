import { useRef } from "react";
import { profile } from "../content/profile";
import { useLocale } from "../hooks/useLocale";
import { useThemeIcon } from "../hooks/useThemeIcon";
import { useLocaleSwitch } from "../hooks/useLocaleSwitch";
import styles from "./NavBar.module.css";

const INVERT_COLOR = "#ffffff";

/**
 * Постоянно видимая навигация главной (Figma node 498:1634) — единственный
 * источник переключателя темы/языка на странице, без скрытия при скролле
 * (решение от 2026-10-30, тот же приём, что и у CaseNavBar: раньше бар
 * скрывался/появлялся по ScrollTrigger дубликатом инлайн-контролов в Hero,
 * но при скролле обратно наверх это давало баг — сами инлайн-контролы
 * убраны из Hero, теперь NavBar — единственная их версия).
 */
export default function NavBar() {
  const locale = useLocale();
  const p = profile[locale];
  const { locale: activeLocale, go } = useLocaleSwitch();

  const iconRef = useRef<HTMLButtonElement>(null);

  const { theme, toggleTheme, handleEnter, handleLeave } = useThemeIcon(
    iconRef,
    () => INVERT_COLOR
  );

  return (
    <>
      <div className={styles.left}>
        <button
          type="button"
          ref={iconRef}
          className={styles.icon}
          onClick={toggleTheme}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          aria-label={
            theme === "light" ? "Включить тёмную тему" : "Включить светлую тему"
          }
          data-cursor="hover"
        />
        <p className={styles.role}>{p.role}</p>
      </div>

      <div className={styles.right}>
        <button
          type="button"
          className={
            activeLocale === "ru" ? styles.localeBtn : `${styles.localeBtn} ${styles.inactive}`
          }
          onClick={() => go("ru")}
          data-cursor="hover"
        >
          RU
        </button>
        <button
          type="button"
          className={
            activeLocale === "en" ? styles.localeBtn : `${styles.localeBtn} ${styles.inactive}`
          }
          onClick={() => go("en")}
          data-cursor="hover"
        >
          ENG
        </button>
      </div>
    </>
  );
}
