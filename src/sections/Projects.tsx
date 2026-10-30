import { projects } from "../content/projects";
import { ui } from "../content/ui";
import ProjectCard from "../components/ProjectCard";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useLocale } from "../hooks/useLocale";
import styles from "./Projects.module.css";

export default function Projects() {
  const headingRef = useScrollReveal<HTMLParagraphElement>();
  const locale = useLocale();

  return (
    <section className="container">
      <p ref={headingRef} className={styles.heading}>
        {ui[locale].casesHeading}
      </p>
      <div className={styles.list}>
        {projects[locale].map((project, index) => (
          <ProjectCard key={project.slug} project={project} priority={index === 0} />
        ))}
      </div>
    </section>
  );
}
