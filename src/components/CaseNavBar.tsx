import { useRef } from "react";
import { Link } from "react-router-dom";
import { ui } from "../content/ui";
import { useLocale, localizePath } from "../hooks/useLocale";
import { useThemeIcon } from "../hooks/useThemeIcon";
import { useLocaleSwitch } from "../hooks/useLocaleSwitch";
import styles from "./CaseNavBar.module.css";

const INVERT_COLOR = "#ffffff";

/**
 * Постоянно видимая навигация страницы кейса (Figma node 521:1702) —
 * единственный на странице кейса доступ к теме/локали, поэтому всегда
 * на экране, без скрытия при скролле (решение от 2026-10-30: раньше
 * бар появлялся только после скролла мимо шапки, и до этого момента
 * переключить тему/язык на кейсе было нечем).
 */
export default function CaseNavBar() {
  const locale = useLocale();
  const t = ui[locale];
  const home = localizePath(locale, "/");
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
        <Link to={home} className={styles.close} data-cursor="hover">
          {t.close} <span className={styles.muted}>{t.closeKey}</span>
        </Link>
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
