import { useEffect, useRef } from "react";
import { uiConcept, type UIConceptItem } from "../content/uiConcept";
import { ui } from "../content/ui";
import { useLocale } from "../hooks/useLocale";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./UIConcept.module.css";

function GridItem({ item }: { item: UIConceptItem }) {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // при reduced-motion видео не играет само — остаётся постер
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={revealRef} className={styles.cell}>
      {item.type === "video" ? (
        <video
          ref={videoRef}
          className={styles.media}
          poster={item.poster}
          width={item.width}
          height={item.height}
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={item.webm} type="video/webm" />
          <source src={item.src} type="video/mp4" />
        </video>
      ) : (
        <img
          className={styles.media}
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          loading="lazy"
        />
      )}
    </div>
  );
}

export default function UIConcept() {
  const headingRef = useScrollReveal<HTMLParagraphElement>();
  const locale = useLocale();

  return (
    <section className={`container ${styles.section}`}>
      <p ref={headingRef} className={styles.heading}>
        {ui[locale].uiConceptHeading}
      </p>
      <div className={styles.row}>
        <div className={styles.grid}>
          {uiConcept.map((item, index) => (
            <GridItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
