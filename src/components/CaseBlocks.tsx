import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import type { CaseBlock, CaseFlowBlock, CaseMetricsTreeBlock, CaseShowcaseBlock, CaseShowcaseItem, CaseTableBlock, CaseTextGroup, CaseTimelineBlock, CaseVideoBlock } from "../content/cases/blocks";
import { useScrollReveal } from "../hooks/useScrollReveal";
import FlowCanvas from "./FlowCanvas";
import MetricsTree from "./MetricsTree";
import styles from "./CaseBlocks.module.css";

interface RevealProps {
  className: string;
  style?: CSSProperties;
  children: ReactNode;
}

function Reveal({ className, style, children }: RevealProps) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

interface MediaProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Опускается, если задан aspect — тогда пропорцию ставит инлайн aspect-ratio вместо фиксированного класса */
  ratio?: string;
  column: string;
  priority?: boolean;
  /** width/height, если пропорция не совпадает с классом ratio (напр. карточка 512×442 вместо квадрата) */
  aspect?: number;
}

function Media({ src, alt, width, height, ratio, column, priority, aspect }: MediaProps) {
  return (
    <Reveal
      className={`${styles.media} ${ratio ?? ""} ${column}`}
      style={aspect ? { aspectRatio: aspect } : undefined}
    >
      <img
        className={styles.mediaImg}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
      />
    </Reveal>
  );
}

interface VideoProps extends Omit<CaseVideoBlock, "type" | "shape" | "solo"> {
  ratio: string;
  column: string;
}

function Video({ src, webm, poster, alt, width, height, ratio, column }: VideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
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
    <Reveal className={`${styles.media} ${ratio} ${column}`}>
      <video
        ref={ref}
        className={styles.mediaImg}
        poster={poster}
        width={width}
        height={height}
        aria-label={alt}
        muted
        loop
        playsInline
        preload="metadata"
      >
        {webm && <source src={webm} type="video/webm" />}
        <source src={src} type="video/mp4" />
      </video>
    </Reveal>
  );
}

function TextGroup({ group }: { group: CaseTextGroup }) {
  return (
    <div className={`${styles.group} ${group.tight ? styles.groupTight : ""}`}>
      {group.heading && <p className={styles.heading}>{group.heading}</p>}
      {group.lines?.map((line) => (
        <p key={line} className={styles.line}>
          {line}
        </p>
      ))}
      {group.pairs && (
        <dl className={styles.pairs}>
          {group.pairs.map((pair) => (
            <div key={pair.label}>
              <dt>{pair.label}</dt>
              <dd>{pair.value}</dd>
            </div>
          ))}
        </dl>
      )}
      {group.link && (
        <a
          className={styles.link}
          href={group.link.href}
          data-cursor="hover"
          {...(group.link.href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {group.link.label}
        </a>
      )}
    </div>
  );
}

const TIMELINE_LINES = 7;
const TIMELINE_WIDTH = 1024;
const TIMELINE_HEIGHT = 314;
// Пол масштаба: ниже этой ширины контейнера диаграмма не ужимается дальше
// (шрифт не мельчает до нечитаемого), а прячет излишек за край с горизонтальным скроллом
const TIMELINE_MIN_WIDTH = 720;

function Timeline({ phases, milestones }: CaseTimelineBlock) {
  const viewportRef = useRef<HTMLDivElement>(null);
  // null = контейнер ≥1024px (ширина диаграммы в макете) — диаграмма резиновая (width:100%), трансформ не нужен
  const [scale, setScale] = useState<number | null>(null);
  const [scrollable, setScrollable] = useState(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const update = () => {
      const containerWidth = viewport.clientWidth;
      setScrollable(containerWidth < TIMELINE_MIN_WIDTH);
      setScale(
        containerWidth >= TIMELINE_WIDTH
          ? null
          : Math.max(containerWidth, TIMELINE_MIN_WIDTH) / TIMELINE_WIDTH
      );
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  return (
    <Reveal className={`${styles.timeline} ${styles.colFull}`}>
      <div
        ref={viewportRef}
        className={`${styles.timelineViewport} ${scrollable ? styles.timelineViewportScroll : ""}`}
      >
        {/*
          timelineScaleBox имеет собственные (не-трансформированные) размеры —
          это и есть реальная ширина, которую видит overflow у timelineViewport
          (transform сам по себе не меняет scrollWidth родителя в браузерах).
          timelineDiagram внутри всегда природных 1024×314 и просто визуально
          сжимается transform:scale в размер scaleBox.
        */}
        <div
          className={styles.timelineScaleBox}
          style={
            scale !== null
              ? { width: TIMELINE_WIDTH * scale, height: TIMELINE_HEIGHT * scale }
              : undefined
          }
        >
          <div
            className={styles.timelineDiagram}
            style={scale !== null ? { transform: `scale(${scale})` } : { width: "100%" }}
          >
            {Array.from({ length: TIMELINE_LINES }, (_, i) => (
              <div
                key={i}
                className={styles.timelineLine}
                style={{ left: `${(i / (TIMELINE_LINES - 1)) * 100}%` }}
              />
            ))}
            {phases.map((phase) => (
              <div
                key={phase.month}
                className={styles.timelinePhase}
                style={{ left: `${phase.left}%` }}
              >
                {phase.phase && <p className={styles.timelinePhaseLabel}>{phase.phase}</p>}
                <p className={styles.timelineMonth}>{phase.month}</p>
              </div>
            ))}
            {milestones.map((milestone) => (
              <div
                key={milestone.label}
                className={styles.timelineCard}
                style={{ left: `${milestone.left}%`, top: `${milestone.top}%` }}
              >
                {milestone.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ShowcaseCard({ src, alt, width, height }: CaseShowcaseItem) {
  return (
    <Reveal className={`${styles.media} ${styles.ratioSquare}`}>
      <img
        className={styles.mediaImg}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
      />
    </Reveal>
  );
}

function ShowcaseGrid({ items }: CaseShowcaseBlock) {
  return (
    <div className={`${styles.showcaseGrid} ${styles.colFull}`}>
      {items.map((item) => (
        <ShowcaseCard key={item.src} {...item} />
      ))}
    </div>
  );
}

function MetricsTreeBlock(block: CaseMetricsTreeBlock) {
  return (
    <Reveal className={`${styles.metricsTree} ${styles.colFull}`}>
      <MetricsTree {...block} />
    </Reveal>
  );
}

function FlowBlock(block: CaseFlowBlock) {
  return (
    <Reveal className={styles.colFull}>
      <FlowCanvas {...block} />
    </Reveal>
  );
}

function Table({ heading, id, rowHeading, columns, rows }: CaseTableBlock) {
  return (
    <Reveal className={`${styles.tableBlock} ${styles.colFull}`}>
      {id && <span id={id} className={styles.anchor} />}
      {heading && <p className={styles.heading}>{heading}</p>}
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>{rowHeading}</th>
              {columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={`${row.label}-${i}`}>
                <th scope="row">{row.label}</th>
                {row.values.map((value, i) => (
                  <td key={columns[i]}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Reveal>
  );
}

export default function CaseBlocks({ blocks }: { blocks: CaseBlock[] }) {
  return (
    <div className={styles.list}>
      {blocks.map((block, index) => {
        if (block.type === "image") {
          return (
            <Media
              key={block.src}
              {...block}
              ratio={styles.ratioWide}
              column={styles.colFull}
              priority={index === 0}
            />
          );
        }

        if (block.type === "video") {
          const square = block.shape === "square";
          return (
            <Video
              key={block.src}
              {...block}
              ratio={square ? styles.ratioSquare : styles.ratioWide}
              column={
                square
                  ? block.solo
                    ? styles.colLeftSolo
                    : styles.colLeft
                  : styles.colFull
              }
            />
          );
        }

        if (block.type === "square") {
          return (
            <Media
              key={block.src}
              {...block}
              ratio={styles.ratioSquare}
              column={block.solo ? styles.colLeftSolo : styles.colLeft}
            />
          );
        }

        if (block.type === "table") {
          return <Table key={block.rowHeading} {...block} />;
        }

        if (block.type === "metricsTree") {
          return <MetricsTreeBlock key={block.heading} {...block} />;
        }

        if (block.type === "flow") {
          return <FlowBlock key="flow" {...block} />;
        }

        if (block.type === "timeline") {
          return <Timeline key="timeline" {...block} />;
        }

        if (block.type === "showcase") {
          return <ShowcaseGrid key={block.items[0].src} {...block} />;
        }

        if (block.type === "squarePair") {
          return block.items.map((item) =>
            item.type === "video" ? (
              <Video key={item.src} {...item} ratio={styles.ratioSquare} column="" />
            ) : (
              <Media
                key={item.src}
                {...item}
                ratio={item.aspect ? undefined : styles.ratioSquare}
                column=""
              />
            )
          );
        }

        return (
          <Reveal
            key={block.groups[0].heading ?? block.groups[0].lines?.[0] ?? index}
            className={`${styles.text} ${styles.colRight}`}
          >
            {block.groups.map((group, groupIndex) => (
              <TextGroup key={group.heading ?? groupIndex} group={group} />
            ))}
          </Reveal>
        );
      })}
    </div>
  );
}
