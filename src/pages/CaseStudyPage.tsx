import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { CaseStudyData } from "../content/cases/blocks";
import { getNextCaseSlug } from "../content/cases";
import { ui } from "../content/ui";
import { useLocale, localizePath } from "../hooks/useLocale";
import CaseBlocks from "../components/CaseBlocks";
import CaseNavBar from "../components/CaseNavBar";
import styles from "./CaseStudyPage.module.css";

interface CaseStudyPageProps {
  data: CaseStudyData;
}

export default function CaseStudyPage({ data }: CaseStudyPageProps) {
  const navigate = useNavigate();
  const locale = useLocale();
  const t = ui[locale];
  const home = localizePath(locale, "/");
  const next = localizePath(locale, `/work/${getNextCaseSlug(data.slug)}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data.slug]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") navigate(home);
      if (event.key === "ArrowRight") navigate(next);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [navigate, home, next]);

  return (
    <main className={styles.page}>
      <CaseNavBar />
      <header className={styles.header}>
        <h1 className={styles.title}>
          {data.title}
          <br />
          <span className={styles.subtitle}>{data.subtitle}</span>
        </h1>
      </header>

      <CaseBlocks blocks={data.blocks} />

      <nav className={styles.bottomNav}>
        <Link to={home} data-cursor="hover">
          {t.home} <span className={styles.muted}>{t.homeKey}</span>
        </Link>
        <Link to={next} data-cursor="hover">
          {t.nextProject} <span className={styles.muted}>{t.nextProjectKey}</span>
        </Link>
      </nav>
    </main>
  );
}
