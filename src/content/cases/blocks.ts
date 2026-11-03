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
  /** CSS object-position для <video> — когда исходник не того же кадрирования, что контейнер, и дефолтный center обрезает нужную часть (напр. запись экрана, где важная панель справа) */
  objectPosition?: string;
}

export interface CaseTextGroup {
  heading?: string;
  /** строки внутри группы идут без зазора — это один текстовый блок макета */
  lines?: string[];
  pairs?: { label: string; value: string }[];
  /** true — отбивка от предыдущей группы 8px вместо 24px (так свёрстан «Итог» в кейсе Trassir) */
  tight?: boolean;
  /**
   * true — pairs рендерятся как статистика (стиль H2, Figma node 656:5481 «Доля пользователей»):
   * значение крупным 16px сверху, лейбл 13px снизу, элементы в ряд с переносом на узких экранах.
   * По умолчанию pairs — строка «лейбл значение» (стиль продукт/платформа/роль/год).
   */
  statPairs?: boolean;
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
  /** true — без строки-заголовка (напр. вступительная таблица «Что сделано/Команда/...» в кейсе Inta, node 293:153 — там header-строки нет вообще) */
  noHeader?: boolean;
  /** Мелкая серая строка-сноска под таблицей, внутри её же рамки (напр. «*таблица подсчитана без участие AI») */
  footnote?: string;
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

/** Группа коротких карточек в одной горизонтальной цепочке, соединённых стрелками «→» (напр. шаги онбординга) */
export interface FlowDiagramStep {
  label: string;
}

/** Колонка со тёмным заголовком и списком пунктирных строк (Figma node 553:1917, «Columns») */
export interface FlowDiagramColumn {
  header: string;
  rows: string[];
}

/** Два исхода ветвления — обычный (светлый) и акцентный/проблемный (тёмный, шире) */
export interface FlowDiagramOutcome {
  label: string;
  /** true — тёмная акцентная карточка (напр. «Высокая нагрузка»), false/undefined — светлая пунктирная */
  accent?: boolean;
}

/**
 * Схема «вход → разделы приложения → экран покупки → ветвление по нагрузке» (Figma node 580:1582,
 * «Flow», файл Portfolio3, холст 1024×822). Карточки — токены проекта (как у .timelineCard), но
 * коннекторы — настоящие растровые ассеты макета («Direction (fan)», «Arrow»), абсолютно
 * спозиционированные на холсте и масштабируемые целиком — как Timeline (CaseBlocks.module.css).
 */
export interface CaseFlowBlock {
  type: "flow";
  /** Цепочка шагов входа, соединённых "→" (Figma: «Onboarding») */
  entrySteps: FlowDiagramStep[];
  /** Колонки разделов приложения (Figma: «Columns») */
  columns: FlowDiagramColumn[];
  /** Тёмный экран-акцент на всю ширину (Figma: «Purchase screen») */
  screen: { heading: string; subtitle: string };
  /** Пунктирная плашка-пояснение на всю ширину (Figma: «Load state») */
  note: string;
  /** Ветвление исхода (Figma: «Outcome») — обычно 2 карточки */
  outcomes: FlowDiagramOutcome[];
  /** Короткие пунктирные чипы под веткой-исходом (Figma: «Chips») */
  chips: string[];
}

/** Одна карточка основной цепочки token-flow диаграммы (Figma: «style border2», пунктирная рамка) */
export interface TokenFlowStep {
  heading: string;
  subtitle: string;
}

/**
 * Вертикальная диаграмма «Figma → Токены → Компоненты → [Проверки в каждом PR] → Storybook →
 * Chromatic» с пунктирной стрелкой обратной связи (Figma node 613:2361, «flow», холст 412×680,
 * файл Portfolio3). В отличие от CaseFlowBlock (Плати частями, холст 1024×822, растровые
 * коннекторы «Direction (fan)») — здесь стрелки простые прямые линии, собраны CSS, без
 * растровых ассетов. Масштабируется по той же схеме, что Timeline/FlowCanvas (см. скилл
 * responsive-scaled-diagram), DESIGN_WIDTH=412.
 */
export interface CaseTokenFlowBlock {
  type: "tokenFlow";
  /** Ровно 5 карточек основной цепочки: Figma, Токены, Компоненты, Storybook, Chromatic */
  steps: [TokenFlowStep, TokenFlowStep, TokenFlowStep, TokenFlowStep, TokenFlowStep];
  /** Полноширинная врезка между 3-й и 4-й карточкой (Figma: «Проверка в каждом PR», bg #ddd) */
  checks: { heading: string; lines: string[] };
  /** Маленькая тёмная аннотация у пунктирной стрелки обратной связи (Figma: «расхождение и правка») */
  feedback: string;
}

/** Одна карточка диаграммы user-флоу — одна или две строки лейбла */
export interface UserFlowCard {
  lines: [string] | [string, string];
  /** true — чёрная заливка без рамки (Figma: тёмные карточки Live просмотр/Архив/Уведомление) */
  accent?: boolean;
}

/** Колонка стопки карточек без зазоров (Figma: Frame 21/20/19) */
export interface UserFlowColumn {
  cards: UserFlowCard[];
}

/**
 * Диаграмма «Авторизация/Онбординг → Главный экран → 3 колонки разделов» (Figma node
 * 630:3430, «Флоу пользователя», холст 488×505, файл Portfolio3). В отличие от CaseFlowBlock
 * (Плати частями, растровые коннекторы «Direction fan») и CaseTokenFlowBlock (вертикальная
 * цепочка 412×680) — здесь ровно 2 карточки входа, слитые стрелкой вниз в одну полноширинную
 * карточку, а затем ветвление на 3 колонки стопок карточек разной длины и окраски.
 */
export interface CaseUserFlowBlock {
  type: "userFlow";
  /** «Флоу пользователя» — в макете приклеена к канвасу зазором 8px (один флекс-контейнер,
      не отдельная текстовая группа), поэтому заголовок живёт в самом блоке диаграммы */
  heading?: string;
  entrySteps: [string, string];
  screen: string;
  columns: [UserFlowColumn, UserFlowColumn, UserFlowColumn];
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
  | CaseShowcaseBlock
  | CaseFlowBlock
  | CaseTokenFlowBlock
  | CaseUserFlowBlock;

export interface CaseStudyData {
  slug: string;
  title: string;
  subtitle: string;
  blocks: CaseBlock[];
}
