import type { CaseStudyData } from "./blocks";

/**
 * Кейс «Inta 1.0» — собран по реальному макету Figma (node 293:7, «Inta_DS_case», файл
 * Portfolio3, fileKey 5PJKgkVYGTO8pkYG8AKn2r), не по PDF-экспорту (прошлая версия): текст,
 * структура блоков и обе внешние ссылки («Итог» → Storybook/Figma) взяты из get_design_context
 * на этот узел. Несколько опечаток макета поправлены при переносе (как и в остальных кейсах,
 * см. docs/06-progress.md): «дизайнер продута»→«продукта», «shadch/ui»→«shadcn/ui».
 *
 * Медиа — оригиналы файлов пользователя (src/content/inta 1.0/img и /video), переименованные
 * им под имена слоёв макета (screen01–07, Video01, Video02) и использованные как есть, БЕЗ
 * сжатия/конвертации (img — plain .png, video — без перекодирования), по явной просьбе.
 * Единственное производное — постеры видео (новый, не модификация исходника) и
 * `objectPosition` на video02 (чисто CSS object-position, не трогает файл: исходник 1430×1080
 * не квадратный, в квадратном блоке дефолтный center-crop резал правую панель со значениями).
 *
 * Flow-диаграмма (Figma → Токены → Компоненты → [Проверки в каждом PR] → Storybook → Chromatic,
 * node 613:2361, холст 412×696) — новый тип блока `tokenFlow` (blocks.ts) + компонент
 * TokenFlowDiagram. Стрелки — растровые ассеты (public/images/inta-design-system/flow-arrow-*.webp),
 * как и у остальных flow-диаграмм (UserFlowDiagram, FlowCanvas): CSS-дэш (border-left: dashed)
 * не гарантирует, что последний штрих паттерна придётся ровно на край карточки — после первой
 * версии на CSS-линиях стрелки визуально не дотягивались до блоков.
 *
 * Две таблицы из прошлой версии (кейс по PDF) убраны — их нет в реальном макете: пример
 * состояние→токен и «01 Palette» как таблица. Вместо них — реальные скрины (screen03/07).
 * «Сколько занимает бренд клиента» в макете — обычный текст, не таблица: вернул на текст.
 *
 * Порядок блоков сверен по абсолютным x/y из get_metadata на node 293:7 (дизайн-ревью
 * 2026-11-02): squarePair(screen01,screen02) стоит в макете сразу после «Связки», перед
 * flow-диаграммой; video02 (process.mp4) — сразу после flow, рядом с таблицей «Стек и
 * языки» (а не после squarePair); screen07 — после текста «Новый продукт на системе»,
 * перед таблицей MVP-сравнения (а не перед этим текстом).
 *
 * 2026-11-04: добавлена английская версия (locale en) — тот же порядок и медиа, текст
 * переведён на английский, переключение через RU/ENG уже существующей кнопки.
 */
export const intaDesignSystem: Record<"ru" | "en", CaseStudyData> = {
  ru: {
    slug: "inta-design-system",
    title: "Inta 1.0",
    subtitle: "Дизайн система",
    blocks: [
      {
        type: "video",
        src: "/video/inta-design-system/hero.mp4",
        poster: "/images/inta-design-system/hero-poster.webp",
        alt: "Inta 1.0 — обложка дизайн-системы",
        width: 1024,
        height: 512,
        shape: "wide",
      },
      {
        type: "text",
        groups: [
          {
            pairs: [
              { label: "продукт", value: "Inta 1.0" },
              { label: "платформа", value: "Web" },
              { label: "роль", value: "дизайнер продукта" },
              { label: "год", value: "2026" },
            ],
          },
          {
            heading: "Коротко",
            lines: [
              "Мультибрендовая дизайн-система для web-интерфейсов. Она выросла из UI-кита для Trassir Cloud — облачного видеонаблюдения, где через веб-портал (CMS) управляют камерами, архивом записей и доступами пользователей. Потом я перенёс её на свою базу и убрал фирменную идентичность, чтобы систему можно было перекрасить под любой бренд (white-label).",
            ],
          },
        ],
      },
      {
        type: "table",
        noHeader: true,
        rowHeading: "",
        columns: ["значение"],
        rows: [
          { label: "Что сделано", values: ["White-label версия: токены, компоненты в коде, Storybook, GitHub, Chromatic"] },
          { label: "Команда", values: ["только я + AI-агент Claude"] },
          { label: "Моя роль", values: ["вёл систему: ставил задачи дизайнеру, принимал работу, собирал токены, внедрял компоненты в Storybook и Chromatic"] },
          { label: "Срок", values: ["около недели"] },
        ],
      },
      {
        type: "text",
        groups: [
          {
            heading: "Итог",
            lines: [
              "Итог: 31 компонент, 2 бренда × 2 темы (light/dark), документация на русском и английском.",
            ],
          },
          {
            tight: true,
            link: { label: "Посмотреть в живую Storybook →", href: "https://main--6ad4a76c23be4704dc8eca20.chromatic.com/" },
          },
          {
            tight: true,
            link: { label: "Посмотреть в живую Figma →", href: "https://www.figma.com/design/ld1upy3d8EXaIUGZWo2FFU/Inta-1.0-%E2%80%94-Public?node-id=840-785&t=IicRv702mD7Bi147-1" },
          },
        ],
      },
      {
        type: "text",
        groups: [
          {
            heading: "Задача",
            lines: [
              "Порталу Trassir Cloud нужен был единый UI: одни и те же элементы на разных экранах выглядели по-разному, а макет и код расходились после каждого релиза.",
              "Потом у компании появились B2B-покупатели, которым нужно было адаптировать продукт под свои бренды. Для этого системе требовались white-label и понятная инструкция, как ею пользоваться.",
            ],
          },
        ],
      },
      {
        type: "text",
        groups: [
          {
            heading: "Связка Figma + Storybook + Chromatic",
            lines: [
              "На первом этапе система жила только в Figma. Эту связку я собрал на втором: источник правды остался в Figma, код и документация собираются из неё, а расхождения ловят автоматические проверки.",
            ],
          },
        ],
      },
      {
        type: "squarePair",
        items: [
          {
            type: "square",
            src: "/images/inta-design-system/screen01.png",
            alt: "Alert — состояния Info/Success/Warning/Danger, main/demo, light/dark",
            width: 1022,
            height: 1022,
          },
          {
            type: "square",
            src: "/images/inta-design-system/screen02.png",
            alt: "Storybook — страница документации компонента, Brand Matrix",
            width: 1024,
            height: 1022,
          },
        ],
      },
      {
        type: "tokenFlow",
        steps: [
          { heading: "Figma", subtitle: "Variables: 4 слоя токенов, режимы бренд и тема" },
          { heading: "Токены", subtitle: "tokens.json → CSS-переменные одной командой" },
          { heading: "Компоненты", subtitle: "React + TypeScript + Tailwind v4 на основе shadcn/ui" },
          { heading: "Storybook", subtitle: "истории и документация на рус/англ языке" },
          { heading: "Chromatic", subtitle: "визуальные тесты в каждом PR" },
        ],
        checks: {
          heading: "Проверка в каждом PR",
          lines: ["линтер токенов: 0 ошибок, контраст WCAG и APCA", "сверка Figma ↔ код, 4 комбинации бренд × тема"],
        },
        feedback: "расхождение → правка",
      },
      {
        type: "video",
        src: "/video/inta-design-system/process.mp4",
        poster: "/images/inta-design-system/process-poster.webp",
        alt: "Заведение компонента Button в Figma Variables",
        width: 1430,
        height: 1080,
        shape: "square",
        objectPosition: "100% center",
      },
      {
        type: "table",
        heading: "Стек и языки",
        rowHeading: "Язык",
        columns: ["Для чего"],
        rows: [
          { label: "TypeScript (React, TSX)", values: ["компоненты и истории Storybook"] },
          { label: "CSS (Tailwind)", values: ["стили, токены как CSS-переменные"] },
          { label: "MDX", values: ["страницы документации"] },
          { label: "JSON", values: ["токены, экспорт из Figma"] },
          { label: "JavaScript (Node.js)", values: ["скрипты сборки и проверок"] },
          { label: "YAML", values: ["CI в GitHub Actions"] },
        ],
      },
      {
        type: "text",
        groups: [
          {
            heading: "Почему Tailwind и shadcn/ui",
            lines: [
              "Основа — не свой фреймворк с нуля, а два стандарта индустрии. Их знает любой фронтендер, поэтому новый человек в команде входит в систему без обучения.",
            ],
          },
        ],
      },
      {
        type: "table",
        rowHeading: "Технология",
        columns: ["На чём основано", "Почему выбрал"],
        rows: [
          { label: "Tailwind CSS v4", values: ["Утилитарные классы и CSS-переменные", "Токен сразу становится классом: --ds-color-primary → bg-primary. Разработчик пишет словами системы, а не hex-кодами"] },
          { label: "shadcn/ui", values: ["Примитивы Radix UI + Tailwind", "Это не закрытая библиотека, а исходный код в проекте: я переписал каждый компонент на свои токены"] },
          { label: "Radix UI (внутри shadcn)", values: ["Доступные «скелеты» компонентов без стилей", "Клавиатура, фокус и скринридеры уже решены — не нужно изобретать выпадающий список или диалог"] },
        ],
      },
      {
        type: "squarePair",
        items: [
          {
            type: "square",
            src: "/images/inta-design-system/screen03.png",
            alt: "Figma Variables — токены color/primary, color/secondary, light/dark",
            width: 1022,
            height: 1022,
          },
          {
            type: "square",
            src: "/images/inta-design-system/screen04.png",
            alt: "Grid вариантов кнопки — Variant × Size × State",
            width: 1024,
            height: 1022,
          },
        ],
      },
      {
        type: "text",
        groups: [
          {
            heading: "Система токенов",
            lines: [
              "Токены лежат в четырёх слоях Figma Variables. Каждый слой ссылается только на предыдущий, а компоненты — только на слой смысла.",
              "1. Primitives — сырая палитра и шкалы: 9 цветовых рядов по 11 ступеней, отступы. Например, blue/600 = #155DFC. В компонентах не используются.",
              "2. Brand (режимы Main / Demo) — что делает бренд брендом: основной и второстепенный цвет, шрифты, радиусы.",
              "3. Theme (режимы Light / Dark) — смысловые роли: primary, danger, focus-ring и парные им on-surface, on-primary для текста, плюс surface.",
              "4. Component — точечные исключения для отдельных компонентов (сайдбар, бегунок Switch).",
            ],
          },
        ],
      },
      {
        type: "text",
        groups: [
          {
            heading: "Main и Demo, light и dark",
            lines: [
              "Один и тот же набор компонентов, перекрашенный под два бренда — Main (синий) и Demo (бирюзовый), в обеих темах.",
            ],
          },
        ],
      },
      {
        type: "squarePair",
        items: [
          {
            type: "square",
            src: "/images/inta-design-system/screen05.png",
            alt: "Компоненты, main / light",
            width: 1022,
            height: 1022,
          },
          {
            type: "square",
            src: "/images/inta-design-system/screen06.png",
            alt: "Компоненты, main / dark",
            width: 1024,
            height: 1022,
          },
        ],
      },
      {
        type: "text",
        groups: [
          {
            heading: "Результаты",
          },
        ],
      },
      {
        type: "table",
        rowHeading: "Что",
        columns: ["Результат", "Откуда"],
        rows: [
          { label: "Продажи с white-label", values: ["4 клиента, ещё ~7 запланировано", "продано вместе с продуктом компании"] },
          { label: "Сборка 2–3 типовых экранов в коде", values: ["3–4 дня → меньше 1 дня", "разработка берёт готовые компоненты вместо вёрстки с нуля"] },
          { label: "Задачи от разработки и тестирования", values: ["тикеты «в коде не так, как в макете» → запросы на новые составные компоненты", "трекер задач команды"] },
          { label: "Компоненты / истории в Storybook", values: ["31 / 137", "репозиторий"] },
          { label: "Баги доступности и вёрстки", values: ["9 найдено и исправлено", "ревью в Chromatic"] },
          { label: "Бренды и темы", values: ["2 × 2, все комбинации проходят проверку контраста", "CI"] },
        ],
      },
      {
        type: "text",
        groups: [
          {
            heading: "Сколько занимает бренд клиента",
            lines: [
              "У клиента есть палитра для обеих тем, шрифт и радиусы 1–2 дня.",
              "Нужны правки палитры под контраст или нестандартный шрифт 3–5 дней.",
            ],
          },
        ],
      },
      {
        type: "text",
        groups: [
          {
            heading: "Новый продукт на системе",
            lines: [
              "Чтобы показать, что система даёт сверх смены бренда, я оценил запуск веб-MVP уровня портала Trassir Cloud: 15–25 экранов, 1 дизайнер, 2 фронтенд-разработчика, QA на части ставки, бренд и шрифты уже есть, бэкенд не учитывается. Сравнение — с тем, как компания работала раньше: макеты в Figma без токенов.",
            ],
          },
        ],
      },
      {
        type: "square",
        src: "/images/inta-design-system/screen07.png",
        alt: "01 Palette — цветовые шкалы токенов",
        width: 1022,
        height: 1022,
      },
      {
        type: "table",
        rowHeading: "Этап, недели",
        columns: ["Раньше Figma без токенов", "Сейчас на системе"],
        rows: [
          { label: "Токены и бренд", values: ["3–5", "0,5–1"] },
          { label: "Библиотека в коде и Storybook", values: ["4–8", "1–2, только недостающие компоненты"] },
          { label: "Сборка экранов MVP", values: ["3–5", "3–5"] },
          { label: "QA, доступность, релиз", values: ["1–2", "1–2"] },
          { label: "Итого", values: ["~3–5 месяцев", "~6–10 недель"] },
        ],
        footnote: "*таблица подсчитана без участие AI",
      },
      {
        type: "text",
        groups: [
          {
            lines: [
              "Срок считается до момента, когда интерфейс прошёл проверки и QA. Компоненты не переделываются: меняется только слой Brand, а проверки контраста показывают, какие цвета нужно сдвинуть. Согласования с клиентом и релизный цикл компании в срок не входят.",
            ],
          },
          {
            lines: [
              "Работа над дизайн-системой продолжается: она активно развивается, а свежие компоненты, доработки и обновления регулярно публикуются на GitHub.",
            ],
          },
        ],
      },
    ],
  },
  en: {
    slug: "inta-design-system",
    title: "Inta 1.0",
    subtitle: "Design system",
    blocks: [
      {
        type: "video",
        src: "/video/inta-design-system/hero.mp4",
        poster: "/images/inta-design-system/hero-poster.webp",
        alt: "Inta 1.0 — design system cover",
        width: 1024,
        height: 512,
        shape: "wide",
      },
      {
        type: "text",
        groups: [
          {
            pairs: [
              { label: "product", value: "Inta 1.0" },
              { label: "platform", value: "Web" },
              { label: "role", value: "Product Designer" },
              { label: "year", value: "2026" },
            ],
          },
          {
            heading: "In short",
            lines: [
              "A multi-brand design system for web interfaces. It grew out of a UI kit for Trassir Cloud, a cloud video surveillance platform where a web portal (CMS) is used to manage cameras, recording archives, and user access. I later moved it onto my own base and stripped the brand identity so the system could be recolored for any brand (white-label).",
            ],
          },
        ],
      },
      {
        type: "table",
        noHeader: true,
        rowHeading: "",
        columns: ["Value"],
        rows: [
          { label: "What was done", values: ["White-label version: tokens, components in code, Storybook, GitHub, Chromatic"] },
          { label: "Team", values: ["just me + the Claude AI agent"] },
          { label: "My role", values: ["led the system: briefed the designer, reviewed the work, assembled the tokens, shipped components into Storybook and Chromatic"] },
          { label: "Timeline", values: ["about a week"] },
        ],
      },
      {
        type: "text",
        groups: [
          {
            heading: "Outcome",
            lines: [
              "Outcome: 31 components, 2 brands × 2 themes (light/dark), documentation in Russian and English.",
            ],
          },
          {
            tight: true,
            link: { label: "See the live Storybook →", href: "https://main--6ad4a76c23be4704dc8eca20.chromatic.com/" },
          },
          {
            tight: true,
            link: { label: "See the live Figma →", href: "https://www.figma.com/design/ld1upy3d8EXaIUGZWo2FFU/Inta-1.0-%E2%80%94-Public?node-id=840-785&t=IicRv702mD7Bi147-1" },
          },
        ],
      },
      {
        type: "text",
        groups: [
          {
            heading: "Task",
            lines: [
              "The Trassir Cloud portal needed a unified UI: the same elements looked different across screens, and the mockups and code drifted apart after every release.",
              "Then the company gained B2B customers who needed to adapt the product to their own brands. That required the system to support white-label and have clear instructions for how to use it.",
            ],
          },
        ],
      },
      {
        type: "text",
        groups: [
          {
            heading: "The Figma + Storybook + Chromatic pipeline",
            lines: [
              "At the first stage, the system lived only in Figma. I built this pipeline at the second stage: the source of truth stays in Figma, code and documentation are generated from it, and automated checks catch any drift.",
            ],
          },
        ],
      },
      {
        type: "squarePair",
        items: [
          {
            type: "square",
            src: "/images/inta-design-system/screen01.png",
            alt: "Alert — Info/Success/Warning/Danger states, main/demo, light/dark",
            width: 1022,
            height: 1022,
          },
          {
            type: "square",
            src: "/images/inta-design-system/screen02.png",
            alt: "Storybook — a component documentation page, Brand Matrix",
            width: 1024,
            height: 1022,
          },
        ],
      },
      {
        type: "tokenFlow",
        steps: [
          { heading: "Figma", subtitle: "Variables: 4 token layers, brand and theme modes" },
          { heading: "Tokens", subtitle: "tokens.json → CSS variables with one command" },
          { heading: "Components", subtitle: "React + TypeScript + Tailwind v4 built on shadcn/ui" },
          { heading: "Storybook", subtitle: "stories and documentation in Russian/English" },
          { heading: "Chromatic", subtitle: "visual tests on every PR" },
        ],
        checks: {
          heading: "Checks on every PR",
          lines: ["token linter: 0 errors, WCAG and APCA contrast", "Figma ↔ code parity check, 4 brand × theme combinations"],
        },
        feedback: "mismatch → fix",
      },
      {
        type: "video",
        src: "/video/inta-design-system/process.mp4",
        poster: "/images/inta-design-system/process-poster.webp",
        alt: "Setting up the Button component in Figma Variables",
        width: 1430,
        height: 1080,
        shape: "square",
        objectPosition: "100% center",
      },
      {
        type: "table",
        heading: "Stack and languages",
        rowHeading: "Language",
        columns: ["What it's for"],
        rows: [
          { label: "TypeScript (React, TSX)", values: ["components and Storybook stories"] },
          { label: "CSS (Tailwind)", values: ["styles, tokens as CSS variables"] },
          { label: "MDX", values: ["documentation pages"] },
          { label: "JSON", values: ["tokens, exported from Figma"] },
          { label: "JavaScript (Node.js)", values: ["build and check scripts"] },
          { label: "YAML", values: ["CI in GitHub Actions"] },
        ],
      },
      {
        type: "text",
        groups: [
          {
            heading: "Why Tailwind and shadcn/ui",
            lines: [
              "The foundation isn't a custom framework built from scratch, but two industry standards. Any frontend developer already knows them, so a new person on the team can get into the system without training.",
            ],
          },
        ],
      },
      {
        type: "table",
        rowHeading: "Technology",
        columns: ["Built on", "Why I chose it"],
        rows: [
          { label: "Tailwind CSS v4", values: ["Utility classes and CSS variables", "A token instantly becomes a class: --ds-color-primary → bg-primary. Developers write in the system's vocabulary, not hex codes"] },
          { label: "shadcn/ui", values: ["Radix UI primitives + Tailwind", "Not a closed library but source code inside the project: I rewrote every component onto my own tokens"] },
          { label: "Radix UI (inside shadcn)", values: ["Accessible, unstyled component “skeletons”", "Keyboard, focus, and screen readers are already solved — no need to reinvent a dropdown or a dialog"] },
        ],
      },
      {
        type: "squarePair",
        items: [
          {
            type: "square",
            src: "/images/inta-design-system/screen03.png",
            alt: "Figma Variables — color/primary, color/secondary tokens, light/dark",
            width: 1022,
            height: 1022,
          },
          {
            type: "square",
            src: "/images/inta-design-system/screen04.png",
            alt: "Button variant grid — Variant × Size × State",
            width: 1024,
            height: 1022,
          },
        ],
      },
      {
        type: "text",
        groups: [
          {
            heading: "Token system",
            lines: [
              "The tokens live in four layers of Figma Variables. Each layer references only the one before it, and components reference only the semantic layer.",
              "1. Primitives — the raw palette and scales: 9 color ramps of 11 steps each, spacing. For example, blue/600 = #155DFC. Never used directly in components.",
              "2. Brand (Main / Demo modes) — what makes a brand a brand: primary and secondary color, fonts, radii.",
              "3. Theme (Light / Dark modes) — semantic roles: primary, danger, focus-ring and their paired on-surface, on-primary for text, plus surface.",
              "4. Component — targeted exceptions for individual components (the sidebar, the Switch thumb).",
            ],
          },
        ],
      },
      {
        type: "text",
        groups: [
          {
            heading: "Main and Demo, light and dark",
            lines: [
              "The same set of components, recolored for two brands — Main (blue) and Demo (teal) — in both themes.",
            ],
          },
        ],
      },
      {
        type: "squarePair",
        items: [
          {
            type: "square",
            src: "/images/inta-design-system/screen05.png",
            alt: "Components, main / light",
            width: 1022,
            height: 1022,
          },
          {
            type: "square",
            src: "/images/inta-design-system/screen06.png",
            alt: "Components, main / dark",
            width: 1024,
            height: 1022,
          },
        ],
      },
      {
        type: "text",
        groups: [
          {
            heading: "Results",
          },
        ],
      },
      {
        type: "table",
        rowHeading: "What",
        columns: ["Result", "Source"],
        rows: [
          { label: "White-label sales", values: ["4 clients, ~7 more planned", "sold alongside the company's product"] },
          { label: "Building 2–3 standard screens in code", values: ["3–4 days → under 1 day", "development uses ready-made components instead of building from scratch"] },
          { label: "Dev and QA requests", values: ["“code doesn't match the mockup” tickets → requests for new composite components", "team issue tracker"] },
          { label: "Components / stories in Storybook", values: ["31 / 137", "repository"] },
          { label: "Accessibility and layout bugs", values: ["9 found and fixed", "Chromatic review"] },
          { label: "Brands and themes", values: ["2 × 2, every combination passes the contrast check", "CI"] },
        ],
      },
      {
        type: "text",
        groups: [
          {
            heading: "How long onboarding a client's brand takes",
            lines: [
              "Client already has a palette for both themes, a font, and radii — 1–2 days.",
              "Palette needs contrast fixes or a non-standard font — 3–5 days.",
            ],
          },
        ],
      },
      {
        type: "text",
        groups: [
          {
            heading: "A new product built on the system",
            lines: [
              "To show what the system delivers beyond rebranding, I estimated launching a web MVP at the level of the Trassir Cloud portal: 15–25 screens, 1 designer, 2 frontend developers, QA at partial capacity, brand and fonts already in place, backend excluded. The comparison is against how the company worked before: Figma mockups with no tokens.",
            ],
          },
        ],
      },
      {
        type: "square",
        src: "/images/inta-design-system/screen07.png",
        alt: "01 Palette — token color scales",
        width: 1022,
        height: 1022,
      },
      {
        type: "table",
        rowHeading: "Stage, weeks",
        columns: ["Before, Figma without tokens", "Now, on the system"],
        rows: [
          { label: "Tokens and brand", values: ["3–5", "0.5–1"] },
          { label: "Code library and Storybook", values: ["4–8", "1–2, only missing components"] },
          { label: "Building MVP screens", values: ["3–5", "3–5"] },
          { label: "QA, accessibility, release", values: ["1–2", "1–2"] },
          { label: "Total", values: ["~3–5 months", "~6–10 weeks"] },
        ],
        footnote: "*table calculated without AI involvement",
      },
      {
        type: "text",
        groups: [
          {
            lines: [
              "The timeline runs up to the point where the interface has passed checks and QA. Components aren't rebuilt: only the Brand layer changes, and contrast checks show which colors need adjusting. Client approvals and the company's own release cycle aren't included in the estimate.",
            ],
          },
          {
            lines: [
              "Work on the design system continues: it's actively evolving, and new components, refinements, and updates are published regularly on GitHub.",
            ],
          },
        ],
      },
    ],
  },
};
