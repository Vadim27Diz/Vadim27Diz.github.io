import type { CaseStudyData } from "./blocks";

/**
 * Кейс «Inta 1.0» — собран по реальному макету Figma (node 293:7, «Inta_DS_case», файл
 * Portfolio3, fileKey 5PJKgkVYGTO8pkYG8AKn2r), не по PDF-экспорту (прошлая версия): текст,
 * структура блоков и обе внешние ссылки («Итог» → Storybook/Figma) взяты из get_design_context
 * на этот узел. Несколько опечаток макета поправлены при переносе (как и в остальных кейсах,
 * см. docs/06-progress.md): «дизайнер продута»→«продукта», «shadch/ui»→«shadcn/ui».
 *
 * Медиа — оригиналы файлов пользователя (src/content/inta 1.0/img и /video), переименованные
 * им под имена слоёв макета (screen01–07, Video01, Video02) и использованные как есть, БЕЗ
 * сжатия/конвертации (img — plain .png, video — без перекодирования), по явной просьбе.
 * Единственное производное — постеры видео (новый, не модификация исходника) и
 * `objectPosition` на video02 (чисто CSS object-position, не трогает файл: исходник 1430×1080
 * не квадратный, в квадратном блоке дефолтный center-crop резал правую панель со значениями).
 *
 * Flow-диаграмма (Figma → Токены → Компоненты → [Проверки в каждом PR] → Storybook → Chromatic,
 * node 613:2361, холст 412×680) — новый тип блока `tokenFlow` (blocks.ts) + компонент
 * TokenFlowDiagram. В отличие от CaseFlowBlock (Плати частями) стрелки здесь простые прямые
 * линии — собраны CSS (треугольник + линия), без растровых ассетов: в макете это обычные
 * «Arrow»-линии, не изогнутые «Direction (fan)», ради которых в прошлый раз качали растр.
 *
 * Две таблицы из прошлой версии (кейс по PDF) убраны — их нет в реальном макете: пример
 * состояние→токен и «01 Palette» как таблица. Вместо них — реальные скрины (screen03/07).
 * «Сколько занимает бренд клиента» в макете — обычный текст, не таблица: вернул на текст.
 *
 * Порядок блоков сверен по абсолютным x/y из get_metadata на node 293:7 (дизайн-ревью
 * 2026-11-02): squarePair(screen01,screen02) стоит в макете сразу после «Связки», перед
 * flow-диаграммой; video02 (process.mp4) — сразу после flow, рядом с таблицей «Стек и
 * языки» (а не после squarePair); screen07 — после текста «Новый продукт на системе»,
 * перед таблицей MVP-сравнения (а не перед этим текстом).
 */
export const intaDesignSystem: CaseStudyData = {
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
            "Мультибрендовая дизайн-система для web-интерфейсов. Она выросла из UI-кита для Trassir Cloud — облачного видеонаблюдения, где через веб-портал (CMS) управляют камерами, архивом записей и доступами пользователей. Потом я перенёс её на свою базу и убрал фирменную идентичность, чтобы систему можно было перекрасить под любой бренд (white-label).",
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
        { label: "Что сделано", values: ["White-label версия: токены, компоненты в коде, Storybook, GitHub, Chromatic"] },
        { label: "Команда", values: ["только я + AI-агент Claude"] },
        { label: "Моя роль", values: ["вёл систему: ставил задачи дизайнеру, принимал работу, собирал токены, внедрял компоненты в Storybook и Chromatic"] },
        { label: "Срок", values: ["около недели"] },
      ],
    },
    {
      type: "text",
      groups: [
        {
          heading: "Итог",
          lines: [
            "Итог: 31 компонент, 2 бренда × 2 темы (light/dark), документация на русском и английском.",
          ],
        },
        {
          tight: true,
          link: { label: "Посмотреть в живую Storybook →", href: "https://main--6ad4a76c23be4704dc8eca20.chromatic.com/" },
        },
        {
          tight: true,
          link: { label: "Посмотреть в живую Figma →", href: "https://www.figma.com/design/ld1upy3d8EXaIUGZWo2FFU/Inta-1.0-%E2%80%94-Public?node-id=840-785&t=IicRv702mD7Bi147-1" },
        },
      ],
    },
    {
      type: "text",
      groups: [
        {
          heading: "Задача",
          lines: [
            "Порталу Trassir Cloud нужен был единый UI: одни и те же элементы на разных экранах выглядели по-разному, а макет и код расходились после каждого релиза.",
            "Потом у компании появились B2B-покупатели, которым нужно было адаптировать продукт под свои бренды. Для этого системе требовались white-label и понятная инструкция, как ею пользоваться.",
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
            "На первом этапе система жила только в Figma. Эту связку я собрал на втором: источник правды остался в Figma, код и документация собираются из неё, а расхождения ловят автоматические проверки.",
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
        { heading: "Figma", subtitle: "Variables: 4 слоя токенов, режимы бренд и тема" },
        { heading: "Токены", subtitle: "tokens.json → CSS-переменные одной командой" },
        { heading: "Компоненты", subtitle: "React + TypeScript + Tailwind v4 на основе shadcn/ui" },
        { heading: "Storybook", subtitle: "истории и документация на рус/англ языке" },
        { heading: "Chromatic", subtitle: "визуальные тесты в каждом PR" },
      ],
      checks: {
        heading: "Проверка в каждом PR",
        lines: ["линтер токенов: 0 ошибок, контраст WCAG и APCA", "сверка Figma ↔ код, 4 комбинации бренд × тема"],
      },
      feedback: "расхождение → правка",
    },
    {
      type: "video",
      src: "/video/inta-design-system/process.mp4",
      poster: "/images/inta-design-system/process-poster.webp",
      alt: "Заведение компонента Button в Figma Variables",
      width: 1430,
      height: 1080,
      shape: "square",
      objectPosition: "100% center",
    },
    {
      type: "table",
      heading: "Стек и языки",
      rowHeading: "Язык",
      columns: ["Для чего"],
      rows: [
        { label: "TypeScript (React, TSX)", values: ["компоненты и истории Storybook"] },
        { label: "CSS (Tailwind)", values: ["стили, токены как CSS-переменные"] },
        { label: "MDX", values: ["страницы документации"] },
        { label: "JSON", values: ["токены, экспорт из Figma"] },
        { label: "JavaScript (Node.js)", values: ["скрипты сборки и проверок"] },
        { label: "YAML", values: ["CI в GitHub Actions"] },
      ],
    },
    {
      type: "text",
      groups: [
        {
          heading: "Почему Tailwind и shadcn/ui",
          lines: [
            "Основа — не свой фреймворк с нуля, а два стандарта индустрии. Их знает любой фронтендер, поэтому новый человек в команде входит в систему без обучения.",
          ],
        },
      ],
    },
    {
      type: "table",
      rowHeading: "Технология",
      columns: ["На чём основано", "Почему выбрал"],
      rows: [
        { label: "Tailwind CSS v4", values: ["Утилитарные классы и CSS-переменные", "Токен сразу становится классом: --ds-color-primary → bg-primary. Разработчик пишет словами системы, а не hex-кодами"] },
        { label: "shadcn/ui", values: ["Примитивы Radix UI + Tailwind", "Это не закрытая библиотека, а исходный код в проекте: я переписал каждый компонент на свои токены"] },
        { label: "Radix UI (внутри shadcn)", values: ["Доступные «скелеты» компонентов без стилей", "Клавиатура, фокус и скринридеры уже решены — не нужно изобретать выпадающий список или диалог"] },
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
            "Токены лежат в четырёх слоях Figma Variables. Каждый слой ссылается только на предыдущий, а компоненты — только на слой смысла.",
            "1. Primitives — сырая палитра и шкалы: 9 цветовых рядов по 11 ступеней, отступы. Например, blue/600 = #155DFC. В компонентах не используются.",
            "2. Brand (режимы Main / Demo) — что делает бренд брендом: основной и второстепенный цвет, шрифты, радиусы.",
            "3. Theme (режимы Light / Dark) — смысловые роли: primary, danger, focus-ring и парные им on-surface, on-primary для текста, плюс surface.",
            "4. Component — точечные исключения для отдельных компонентов (сайдбар, бегунок Switch).",
          ],
        },
      ],
    },
    {
      type: "text",
      groups: [
        {
          heading: "Main и Demo, light и dark",
          lines: [
            "Один и тот же набор компонентов, перекрашенный под два бренда — Main (синий) и Demo (бирюзовый), в обеих темах.",
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
        { label: "Продажи с white-label", values: ["4 клиента, ещё ~7 запланировано", "продано вместе с продуктом компании"] },
        { label: "Сборка 2–3 типовых экранов в коде", values: ["3–4 дня → меньше 1 дня", "разработка берёт готовые компоненты вместо вёрстки с нуля"] },
        { label: "Задачи от разработки и тестирования", values: ["тикеты «в коде не так, как в макете» → запросы на новые составные компоненты", "трекер задач команды"] },
        { label: "Компоненты / истории в Storybook", values: ["31 / 137", "репозиторий"] },
        { label: "Баги доступности и вёрстки", values: ["9 найдено и исправлено", "ревью в Chromatic"] },
        { label: "Бренды и темы", values: ["2 × 2, все комбинации проходят проверку контраста", "CI"] },
      ],
    },
    {
      type: "text",
      groups: [
        {
          heading: "Сколько занимает бренд клиента",
          lines: [
            "У клиента есть палитра для обеих тем, шрифт и радиусы 1–2 дня.",
            "Нужны правки палитры под контраст или нестандартный шрифт 3–5 дней.",
          ],
        },
      ],
    },
    {
      type: "text",
      groups: [
        {
          heading: "Новый продукт на системе",
          lines: [
            "Чтобы показать, что система даёт сверх смены бренда, я оценил запуск веб-MVP уровня портала Trassir Cloud: 15–25 экранов, 1 дизайнер, 2 фронтенд-разработчика, QA на части ставки, бренд и шрифты уже есть, бэкенд не учитывается. Сравнение — с тем, как компания работала раньше: макеты в Figma без токенов.",
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
      columns: ["Раньше Figma без токенов", "Сейчас на системе"],
      rows: [
        { label: "Токены и бренд", values: ["3–5", "0,5–1"] },
        { label: "Библиотека в коде и Storybook", values: ["4–8", "1–2, только недостающие компоненты"] },
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
            "Срок считается до момента, когда интерфейс прошёл проверки и QA. Компоненты не переделываются: меняется только слой Brand, а проверки контраста показывают, какие цвета нужно сдвинуть. Согласования с клиентом и релизный цикл компании в срок не входят.",
          ],
        },
        {
          lines: [
            "Работа над дизайн-системой продолжается: она активно развивается, а свежие компоненты, доработки и обновления регулярно публикуются на GitHub.",
          ],
        },
      ],
    },
  ],
};
