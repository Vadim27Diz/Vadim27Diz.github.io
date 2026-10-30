# Portfolio — правила проекта
cegth
## Стек
- Vite + React + TypeScript
- Embla Carousel (`embla-carousel-react`) — drag-галереи (кейсы, слайдеры медиа)
- Lenis для плавного вертикального скролла (`src/hooks/useLenis.ts`)
- GSAP + ScrollTrigger — появление элементов и микро-анимации (`src/hooks/useScrollReveal.ts`, `src/components/Cursor.tsx`)
- CSS Modules для стилей компонентов

## Структура
- `docs/` — источник правды по контенту, дизайну и анимациям. Перед тем как писать секцию или компонент — смотри соответствующий файл в `docs/`.
- `src/sections/` — композиция главной страницы (`Hero` — имя/био/ссылки/копирайт, `Projects` — список кейсов), каждая секция — отдельный файл. Отдельного Header/Footer/About/Contact нет: в макете всё это внутри Hero, футера нет вовсе (см. `docs/01-brief.md`).
- `src/components/` — переиспользуемые UI-блоки, без привязки к конкретной секции.
- `src/content/` — тексты, данные кейсов (`projects.ts`) и профиля (`profile.ts`), ссылки на медиа. Никаких текстовых строк внутри JSX — только через `content/`.
- `src/styles/tokens.css` — единственное место для цветов/шрифтов/отступов. Не хардкодить значения в компонентах.
- `public/images`, `public/video` — только оптимизированные файлы (webp/mp4+webm с постером).

## Правила
- Макет в Figma: https://www.figma.com/design/5PJKgkVYGTO8pkYG8AKn2r/Untitled (каркас главной — node 23:9). Перед вёрсткой секции читай её фрейм через Figma MCP, не гадай по описанию в `docs/`.
- Mobile-first: вёрстка от мобильного вверх. Контейнеры и размеры — на `%`, `rem`, `clamp()`, не на фиксированных `px`.
- Брейкпоинты и поведение на каждом — `docs/05-responsive.md`.
- Цвета, шрифты, размеры — только из `src/styles/tokens.css`, не хардкодить в компонентах.
- Стили компонентов — CSS Modules, колоцированные с компонентом: `ComponentName.tsx` + `ComponentName.module.css`, импорт как `styles`, классы через `styles.foo`. Глобальные вещи (токены, reset, grid-утилита) остаются обычным CSS в `src/styles/` и не модулятся.
- Брейкпоинты и сетка зафиксированы в `src/styles/grid.css` и `docs/05-responsive.md` — не вводить новые без обновления обоих файлов.
- Анимации — по `docs/04-animations.md`, тайминги и easing только из `src/styles/tokens.css` (`--duration-*`, `--ease-*`). Уважать `prefers-reduced-motion` — при нём анимации выключаются или сводятся к мгновенным.
- Появление по скроллу — только через `useScrollReveal` (GSAP ScrollTrigger), не IntersectionObserver напрямую.
- Интерактивные элементы, над которыми должен увеличиваться курсор, помечаются атрибутом `data-cursor="hover"`.
- Тексты и медиа — только через `src/content/projects.ts` и `src/content/profile.ts`, не хардкодить в компонентах.
- Видео: `muted`, `loop`, `playsinline`, `preload="metadata"`, с `poster`. Автоплей — только когда видео в зоне видимости.
- Картинки: `webp`, заданы `width`/`height`, `loading="lazy"` (кроме первой на странице).
- Одна задача за раз. После задачи — обновить `docs/06-progress.md`.
- Не добавлять новые библиотеки без вопроса.

## Команды
- `npm run dev` — локальный сервер
- `npm run build` — продакшн-сборка
