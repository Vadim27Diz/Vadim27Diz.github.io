import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { ui } from "../content/ui";
import { useLocale, localizePath } from "../hooks/useLocale";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  const locale = useLocale();
  const t = ui[locale];
  const home = localizePath(locale, "/");
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <main className={styles.page}>
      <NavBar />
      <div ref={ref} className={styles.content}>
        <p className={styles.code}>{t.notFoundCode}</p>
        <div className={styles.text}>
          <p className={styles.title}>{t.notFoundTitle}</p>
          <p className={styles.body}>{t.notFoundBody}</p>
        </div>
        <Link to={home} className={styles.link} data-cursor="hover">
          {t.notFoundLink} →
        </Link>
      </div>
    </main>
  );
}
