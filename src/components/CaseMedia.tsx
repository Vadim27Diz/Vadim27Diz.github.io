import { useEffect, useRef, useState, type MouseEvent } from "react";
import type { CaseMedia as CaseMediaType } from "../content/projects";
import { ui } from "../content/ui";
import { useLocale } from "../hooks/useLocale";
import ReloadButton from "./ReloadButton";
import styles from "./CaseMedia.module.css";

interface CaseMediaProps {
  media: CaseMediaType;
  priority?: boolean;
}

type MediaStatus = "loading" | "loaded" | "error";

export default function CaseMedia({ media, priority = false }: CaseMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const locale = useLocale();
  const t = ui[locale];
  const [status, setStatus] = useState<MediaStatus>("loading");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    setStatus("loading");
    setAttempt(0);
  }, [media.src]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

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

  if (!media.src) {
    return (
      <div className={styles.box}>
        <p className={styles.placeholderText}>{t.mediaUnavailable}</p>
      </div>
    );
  }

  const handleReload = (event: MouseEvent<HTMLButtonElement>) => {
    // media.src живёт внутри ссылки на кейс (ProjectCard) — без preventDefault/stopPropagation
    // клик по кнопке сработал бы ещё и как переход по ссылке
    event.preventDefault();
    event.stopPropagation();
    setStatus("loading");
    setAttempt((n) => n + 1);
  };

  const src = attempt > 0 ? `${media.src}?retry=${attempt}` : media.src;
  const mediaClassName =
    status === "loaded" ? `${styles.media} ${styles.mediaLoaded}` : styles.media;

  return (
    <div className={styles.box}>
      {media.type === "video" ? (
        <video
          ref={videoRef}
          className={mediaClassName}
          src={src}
          poster={media.poster}
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setStatus("loaded")}
          onError={() => setStatus("error")}
        />
      ) : (
        <img
          className={mediaClassName}
          src={src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          loading={priority ? "eager" : "lazy"}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
        />
      )}
      {status === "loading" && (
        <p className={styles.placeholderText}>{t.mediaLoading}</p>
      )}
      {status === "error" && (
        <ReloadButton label={t.mediaReload} onClick={handleReload} />
      )}
    </div>
  );
}
