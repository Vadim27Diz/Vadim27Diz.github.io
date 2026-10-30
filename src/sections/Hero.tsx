import { profile } from "../content/profile";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useLocale } from "../hooks/useLocale";
import styles from "./Hero.module.css";

export default function Hero() {
  const ref = useScrollReveal<HTMLDivElement>();
  const locale = useLocale();
  const p = profile[locale];

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
            <div className={styles.avatar} aria-hidden={!p.avatar.src}>
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
