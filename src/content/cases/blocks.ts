/*
  Блоки страницы кейса. Раскладка и поведение — docs/07-case-template.md.
  Полноширинные кадры идут на обе колонки, квадраты — в левую, текст — всегда в правую.
*/

export interface CaseImageBlock {
  type: "image";
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface CaseSquareBlock {
  type: "square";
  src: string;
  alt: string;
  width: number;
  height: number;
  /** true — квадрат занимает всю строку грида: текст после него уходит вниз, а не встаёт сбоку (так в макете) */
  solo?: boolean;
  /** width/height карточки, если не 1:1 (например матрица-карточка 512×442 из макета) — переопределяет квадратный аспект, cover больше не обрезает */
  aspect?: number;
}

/** Два квадрата в одном ряду: левая и правая колонки. Элементом может быть и картинка, и видео */
export interface CaseSquarePairBlock {
  type: "squarePair";
  items: [CaseSquareBlock | CaseVideoBlock, CaseSquareBlock | CaseVideoBlock];
}

export interface CaseVideoBlock {
  type: "video";
  /** mp4 — фоллбэк для Safari; webm отдаётся первым, он легче */
  src: string;
  webm?: string;
  poster: string;
  alt: string;
  width: number;
  height: number;
  /** "wide" — кадр 2:1 на всю ширину (по умолчанию), "square" — 1:1 в левой колонке */
  shape?: "wide" | "square";
  solo?: boolean;
}

export interface CaseTextGroup {
  heading?: string;
  /** строки внутри группы идут без зазора — это один текстовый блок макета */
  lines?: string[];
  pairs?: { label: string; value: string }[];
  /** true — отбивка от предыдущей группы 8px вместо 24px (так свёрстан «Итог» в кейсе Trassir) */
  tight?: boolean;
  /** Ссылка-переход в конце группы (стиль «Link →»: Roboto Mono + --color-link) */
  link?: { label: string; href: string };
}

export interface CaseTextBlock {
  type: "text";
  groups: CaseTextGroup[];
}

/** Одна веха на таймлайне — тёмная карточка (вариант «dark» style border2) */
export interface CaseTimelineMilestone {
  label: string;
  /** % от ширины диаграммы (источник — px из Figma node 411:3801, контейнер 1024 wide) */
  left: number;
  /** % от высоты диаграммы (источник — px из той же ноды, контейнер 314 tall) */
  top: number;
}

export interface CaseTimelinePhase {
  /** "Фаза 1" и т.п. — опционально, у промежуточных месяцев лейбла фазы нет */
  phase?: string;
  month: string;
  /** % от ширины диаграммы */
  left: number;
}

/** Диаграмма-таймлайн проекта (Figma node 411:3801) — вехи как тёмные карточки над пунктирными линиями */
export interface CaseTimelineBlock {
  type: "timeline";
  phases: CaseTimelinePhase[];
  milestones: CaseTimelineMilestone[];
}

/** Полноширинная таблица (обе колонки) — для контента, который не влезает в колонку текста (32rem). На телефоне скроллится по горизонтали, не рушится в картинку. */
export interface CaseTableBlock {
  type: "table";
  heading?: string;
  /** Якорь для ссылок вида «Конкурентный анализ →» (href="#id") */
  id?: string;
  /** Подпись первой колонки (например, "Параметр") */
  rowHeading: string;
  columns: string[];
  rows: { label: string; values: string[] }[];
}

/** Одна метрика/гипотеза в строке «Древа метрик» — только текст, без цветных заливок (стиль Inta_DS_case, node 293:7) */
export interface MetricsTreeCell {
  /** Жирная первая строка (напр. «Guardrail», «Брошенные кампании») */
  heading?: string;
  body: string;
  /** Курсивная приписка, как оговорка у «Моста к деньгам» */
  note?: string;
}

export interface MetricsTreeRow {
  label: string;
  /** North Star — единственная строка с акцентным лейблом */
  accentLabel?: boolean;
  /** 1 ячейка — на всю ширину, 2 — левая/правая колонки той же сетки, что у table-блока */
  cells: MetricsTreeCell[];
  /** Короткий глиф-коннектор между двумя ячейками строки (Guardrail → North Star) */
  innerConnector?: boolean;
}

/** «Древо метрик» — North Star-схема (Figma node 5468:26805, файл Sportmaster_build_banners), свёрстана текстом и глифами в стиле кейса Inta (node 293:7), без картинок и цветных плашек */
export interface CaseMetricsTreeBlock {
  type: "metricsTree";
  heading: string;
  subtitle: string;
  /** Снизу вверх — от диагностики к бизнес-результату */
  rows: MetricsTreeRow[];
}

/** Одна картинка в витрине 2×2 */
export interface CaseShowcaseItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/** Витрина 2×2 (Figma: фреймы UI_02–UI_05, статичные картинки, без анимации) */
export interface CaseShowcaseBlock {
  type: "showcase";
  items: [CaseShowcaseItem, CaseShowcaseItem, CaseShowcaseItem, CaseShowcaseItem];
}

export type CaseBlock =
  | CaseImageBlock
  | CaseSquareBlock
  | CaseSquarePairBlock
  | CaseVideoBlock
  | CaseTextBlock
  | CaseTableBlock
  | CaseMetricsTreeBlock
  | CaseTimelineBlock
  | CaseShowcaseBlock;

export interface CaseStudyData {
  slug: string;
  title: string;
  subtitle: string;
  blocks: CaseBlock[];
}
