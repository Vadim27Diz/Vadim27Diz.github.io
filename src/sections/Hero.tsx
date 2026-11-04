import type { RefObject } from "react";
import { profile } from "../content/profile";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useLocale } from "../hooks/useLocale";
import { useLocaleSwitch } from "../hooks/useLocaleSwitch";
import styles from "./Hero.module.css";

interface Props {
  avatarRef: RefObject<HTMLDivElement>;
  localePinned: boolean;
}

export default function Hero({ avatarRef, localePinned }: Props) {
  const ref = useScrollReveal<HTMLDivElement>();
  const locale = useLocale();
  const p = profile[locale];
  const { locale: activeLocale, go } = useLocaleSwitch();

  return (
    <section className={`container ${styles.hero}`}>
      <div ref={ref} className={`heroGrid ${styles.heroGrid}`}>
        <div className={styles.greeting} />

        <div className={styles.middle}>
          <p className={styles.bio}>{p.bio}</p>
          <ul className={styles.links}>
            {p.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  data-cursor="hover"
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.end}>
          <div className={styles.topRow}>
            <div
              className={
                localePinned
                  ? `${styles.localeInline} ${styles.localeInlineHidden}`
                  : styles.localeInline
              }
            >
              <button
                type="button"
                className={
                  activeLocale === "ru"
                    ? styles.localeBtn
                    : `${styles.localeBtn} ${styles.inactive}`
                }
                onClick={() => go("ru")}
                data-cursor="hover"
              >
                RU
              </button>
              <button
                type="button"
                className={
                  activeLocale === "en"
                    ? styles.localeBtn
                    : `${styles.localeBtn} ${styles.inactive}`
                }
                onClick={() => go("en")}
                data-cursor="hover"
              >
                ENG
              </button>
            </div>
            <div
              ref={avatarRef}
              className={styles.avatar}
              aria-hidden={!p.avatar.src}
            >
              {p.avatar.src && (
                <img
                  className={styles.avatarImg}
                  src={p.avatar.src}
                  alt={p.avatar.alt}
                  width={p.avatar.width}
                  height={p.avatar.height}
                />
              )}
            </div>
          </div>
          <p className={styles.copyright}>{p.copyright}</p>
        </div>
      </div>
    </section>
  );
}
