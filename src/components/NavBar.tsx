import { useRef } from "react";
import { profile } from "../content/profile";
import { useLocale } from "../hooks/useLocale";
import { useThemeIcon } from "../hooks/useThemeIcon";
import { useLocaleSwitch } from "../hooks/useLocaleSwitch";
import styles from "./NavBar.module.css";

const INVERT_COLOR = "#ffffff";

interface Props {
  /** Нет Hero-фото, мимо которого скроллить (страницы без Hero) — видно всегда. */
  localePinned?: boolean;
}

/**
 * Постоянно видимая навигация главной (Figma node 498:1634) — единственный
 * источник переключателя темы, и фиксированная версия RU/ENG. Иконка темы +
 * роль видны всегда. RU/ENG (.right) — её пара с инлайн-версией в Hero.tsx:
 * пока фото Hero в зоне видимости, видна инлайн-версия, эта скрыта;
 * как только фото уходит за верх экрана (localePinned, useAvatarPinned в
 * App.tsx — один ScrollTrigger на двоих), роли меняются местами с
 * "падением" (opacity+translateY). Явно не самостоятельный ScrollTrigger —
 * решение от 2026-10-30 отмечало баг именно от двух независимых триггеров
 * на инлайн- и фиксированной версии при скролле вверх.
 */
export default function NavBar({ localePinned = true }: Props) {
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

      <div
        className={
          localePinned ? `${styles.right} ${styles.pinned}` : styles.right
        }
      >
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
