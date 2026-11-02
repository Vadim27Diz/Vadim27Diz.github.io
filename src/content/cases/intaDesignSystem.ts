import type { CaseStudyData } from "./blocks";

/**
 * Кейс «Inta 1.0» — на основе PDF-отчёта пользователя (src/content/inta 1.0/«Дизайн система inta .pdf»).
 * Скриншоты Storybook/Figma из самого PDF (button grid, docs-страница Empty, light/dark матрицы,
 * схема Figma→Tokens→Components→Storybook→Chromatic) — извлечены из PDF как настоящие растры
 * (pdfimages), не пересняты. Данные таблиц (стек, палитра, токены, результаты, сроки) — пересобраны
 * из текста PDF в table-блоки (как у остальных кейсов), а не оставлены скриншотами — плотные
 * скрины с мелкими цифрами (01 Palette, 03 Color roles) нечитаемы в сетке кейса.
 * Hero- и process-видео — реальные файлы пользователя (src/content/inta 1.0/video), hero вставлено
 * без перекодирования по его просьбе.
 */
export const intaDesignSystem: CaseStudyData = {
  slug: "inta-design-system",
  title: "Дизайн система inta 1.0",
  subtitle: "дизайн-система, 2026",
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
            { label: "что сделано", value: "дизайн-система в Figma для портала, токены, компоненты в Storybook и Chromatic, передача в разработку" },
            { label: "команда", value: "я + Claude Code, без разработчика" },
            { label: "моя роль", value: "вёл систему — ставил задачи дизайнеру, принимал работу, собирал токены, внедрял компоненты в Storybook и Chromatic" },
            { label: "срок", value: "~1 недели" },
          ],
        },
        {
          heading: "Inta 1.0",
          lines: [
            "Мультибрендовая дизайн-система для web-интерфейсов. Она выросла из UI-кита для Trassir Cloud — облачного видеонаблюдения, где через веб-портал (CMS) управляют камерами, архивом записей и доступами пользователей. Потом я перенёс её на свою базу и убрал фирменную идентичность, чтобы систему можно было перекрасить под любой бренд (white-label).",
          ],
        },
        {
          tight: true,
          lines: [
            "Итог: 31 компонент, 2 бренда × 2 темы (light/dark), документация на русском и английском языках.",
          ],
        },
      ],
    },
    {
      type: "text",
      groups: [
        {
          heading: "Задача",
          lines: [
            "Порталу Trassir Cloud нужен был единый UI: одни и те же элементы на разных экранах выглядели по-разному, а макет и код расходились после каждого релиза.",
            "Потом у компании появились B2B-покупатели, которым нужно было адаптировать продукт под свои бренды. Для этого системе требовались white-label и понятная инструкция, как ею пользоваться.",
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
      type: "image",
      src: "/images/inta-design-system/flow.webp",
      alt: "Схема: Figma → Токены → Компоненты → Storybook → Chromatic",
      width: 2048,
      height: 1024,
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
      columns: ["На чём основано", "Почему выбрал"],
      rows: [
        { label: "Tailwind CSS v4", values: ["Утилитарные классы и CSS-переменные", "Токен сразу становится классом: --ds-color-primary → bg-primary. Разработчик пишет словами системы, а не hex-кодами"] },
        { label: "shadcn/ui", values: ["Примитивы Radix UI + Tailwind", "Это не закрытая библиотека, а исходный код в проекте: я переписал каждый компонент на свои токены"] },
        { label: "Radix UI (внутри shadcn)", values: ["Доступные «скелеты» компонентов без стилей", "Клавиатура, фокус и скринридеры уже решены — не нужно изобретать выпадающий список или диалог"] },
      ],
    },
    {
      type: "text",
      groups: [
        {
          heading: "Один компонент — Button",
          lines: [
            "Кнопка. Variant (10) × Size (4) × State (5), свойства Label, Icon left, Icon right. Иконки — экземпляры Icon Size=16, цвет берут on-* токен своего варианта. Фокус — отдельный слой focus-ring: 2px color/focus-ring снаружи, прозрачный зазор 2px (в коде outline-2 outline-offset-2).",
            "Ниже — как это выглядит в работе: превращение одного компонента в Variant × Size × State в Figma Variables.",
          ],
        },
      ],
    },
    {
      type: "video",
      src: "/video/inta-design-system/process.mp4",
      webm: "/video/inta-design-system/process.webm",
      poster: "/images/inta-design-system/process-poster.webp",
      alt: "Заведение компонента Button в Figma Variables",
      width: 1024,
      height: 1024,
      shape: "square",
    },
    {
      type: "squarePair",
      items: [
        {
          type: "square",
          src: "/images/inta-design-system/button-grid.webp",
          alt: "Grid вариантов кнопки — Variant × Size × State",
          width: 1600,
          height: 1074,
          aspect: 1600 / 1074,
        },
        {
          type: "square",
          src: "/images/inta-design-system/storybook-empty.webp",
          alt: "Документация компонента Empty в Storybook",
          width: 1600,
          height: 948,
          aspect: 1600 / 948,
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
            "3. Theme (режимы Light / Dark) — смысловые роли: primary, danger, focus-ring и парные им on-surface, on-primary для текста, плюс surface.",
            "4. Component — точечные исключения для отдельных компонентов (сайдбар, бегунок Switch).",
          ],
        },
      ],
    },
    {
      type: "table",
      heading: "Как это работает на примере primary",
      rowHeading: "Состояние",
      columns: ["Токен смысла (Theme)", "Токен бренда (Brand)", "Main", "Demo"],
      rows: [
        { label: "Обычное", values: ["primary", "brand/primary/600", "blue/600", "teal/700"] },
        { label: "Наведение", values: ["primary-hover", "brand/primary/700", "blue/700", "teal/800"] },
        { label: "Нажатие", values: ["primary-pressed", "brand/primary/800", "blue/800", "teal/900"] },
        { label: "Текст", values: ["on-primary", "brand/primary/on", "white", "white"] },
      ],
    },
    {
      type: "text",
      groups: [
        {
          heading: "Main и Demo, light и dark",
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
          src: "/images/inta-design-system/buttons-light.webp",
          alt: "Компоненты, light-тема",
          width: 1600,
          height: 1298,
          aspect: 1600 / 1298,
        },
        {
          type: "square",
          src: "/images/inta-design-system/buttons-dark.webp",
          alt: "Компоненты, dark-тема",
          width: 1600,
          height: 1214,
          aspect: 1600 / 1214,
        },
      ],
    },
    {
      type: "table",
      heading: "01 Palette",
      rowHeading: "Шкала",
      columns: ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"],
      rows: [
        { label: "color/blue", values: ["#EFF6FF", "#DBEAFE", "#BEDBFF", "#8EC5FF", "#51A2FF", "#2B7FFF", "#155DFC", "#1447E6", "#193CB8", "#1C398E", "#162456"] },
        { label: "color/violet", values: ["#F5F3FF", "#EDE9FE", "#DDD6FF", "#C4B4FF", "#A684FF", "#8E51FF", "#7F22FE", "#7008E7", "#5D0EC0", "#4D179A", "#2F0D68"] },
        { label: "color/teal", values: ["#F0FDFA", "#CBFBF1", "#96F7E4", "#46ECD5", "#00D5BE", "#00BBA7", "#009689", "#00786F", "#005F5A", "#0B4F4A", "#022F2E"] },
        { label: "color/orange", values: ["#FFF7ED", "#FFEDD4", "#FFD6A7", "#FFB86A", "#FF8904", "#FF6900", "#F54900", "#CA3500", "#9F2D00", "#7E2A0C", "#441306"] },
        { label: "color/zinc", values: ["#FAFAFA", "#F4F4F5", "#E4E4E7", "#D4D4D8", "#9F9FA9", "#71717B", "#52525C", "#3F3F46", "#27272A", "#18181B", "#09090B"] },
      ],
    },
    {
      type: "table",
      heading: "Результаты",
      rowHeading: "Что",
      columns: ["Результат", "Откуда"],
      rows: [
        { label: "Продажи с white-label", values: ["4 клиента, ещё ~7 запланировано", "продано вместе с продуктом компании"] },
        { label: "Сборка 2–3 типовых экранов в коде", values: ["3–4 дня → меньше 1 дня", "разработка берёт готовые компоненты вместо вёрстки с нуля"] },
        { label: "Задачи от разработки и тестирования", values: ["тикеты «в коде не так, как в макете» → запросы на новые составные компоненты", "трекер задач команды"] },
        { label: "Компоненты / истории в Storybook", values: ["31 / 137", "репозиторий"] },
        { label: "Баги доступности и вёрстки", values: ["9 найдено и исправлено", "ревью в Chromatic"] },
        { label: "Бренды × темы", values: ["2 × 2, все комбинации проходят проверку контраста", "CI"] },
      ],
    },
    {
      type: "table",
      heading: "Сколько занимает бренд клиента",
      rowHeading: "Случай",
      columns: ["До готовности к релизу"],
      rows: [
        { label: "У клиента есть палитра для обеих тем, шрифт и радиусы", values: ["1–2 дня"] },
        { label: "Нужны правки палитры под контраст или нестандартный шрифт", values: ["3–5 дней"] },
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
      type: "table",
      rowHeading: "Этап, недели",
      columns: ["Раньше: Figma без токенов", "Сейчас: на системе"],
      rows: [
        { label: "Токены и бренд", values: ["3–5", "0,5–1"] },
        { label: "Библиотека в коде и Storybook", values: ["4–8", "1–2, только недостающие компоненты"] },
        { label: "Сборка экранов MVP", values: ["3–5", "3–5"] },
        { label: "QA, доступность, релиз", values: ["1–2", "1–2"] },
        { label: "Итого", values: ["~3–5 месяцев", "~6–10 недель"] },
      ],
    },
    {
      type: "text",
      groups: [
        {
          tight: true,
          lines: [
            "Срок считается до момента, когда интерфейс прошёл проверки и QA. Компоненты не переделываются: меняется только слой Brand, а проверки контраста показывают, какие цвета нужно сдвинуть. Согласования с клиентом и релизный цикл компании в срок не входят.",
          ],
        },
        {
          tight: true,
          lines: [
            "Работа над дизайн-системой продолжается: она активно развивается, а свежие компоненты, доработки и обновления регулярно публикуются на GitHub.",
          ],
        },
      ],
    },
  ],
};
