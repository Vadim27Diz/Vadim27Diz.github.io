import { Link } from "react-router-dom";
import type { Project } from "../content/projects";
import { ui } from "../content/ui";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useLocale, localizePath } from "../hooks/useLocale";
import CaseMedia from "./CaseMedia";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const ref = useScrollReveal<HTMLDivElement>();
  const locale = useLocale();
  const t = ui[locale];
  const isAvailable = Boolean(project.media.src);
  const href = project.externalUrl ?? localizePath(locale, `/work/${project.slug}`);

  return (
    <div ref={ref} className="caseGrid">
      <div className={styles.meta}>
        <p className={styles.title}>{project.title}</p>
        <div className={styles.text}>
          <p className={styles.description}>{project.description}</p>
          <dl className={styles.specs}>
            <div>
              <dt>{t.specProduct}</dt>
              <dd>{project.meta.product}</dd>
            </div>
            <div>
              <dt>{t.specPlatform}</dt>
              <dd>{project.meta.platform}</dd>
            </div>
            <div>
              <dt>{t.specRole}</dt>
              <dd>{project.meta.role}</dd>
            </div>
            <div>
              <dt>{t.specYear}</dt>
              <dd>{project.meta.year}</dd>
            </div>
          </dl>
        </div>
      </div>
      {isAvailable ? (
        project.externalUrl ? (
          <a
            className={styles.mediaLink}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="case"
            draggable={false}
          >
            <CaseMedia media={project.media} priority={priority} />
          </a>
        ) : (
          <Link
            className={styles.mediaLink}
            to={href}
            data-cursor="case"
            draggable={false}
          >
            <CaseMedia media={project.media} priority={priority} />
          </Link>
        )
      ) : (
        <div className={styles.mediaLink}>
          <CaseMedia media={project.media} priority={priority} />
        </div>
      )}
    </div>
  );
}
