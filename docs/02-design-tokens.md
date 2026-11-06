# Design tokens

Источники — Figma:
- https://www.figma.com/design/5PJKgkVYGTO8pkYG8AKn2r/Untitled?node-id=23-9 (каркас главной, фрейм «Hiro») — сетка/отступы/контент
- https://www.figma.com/design/5PJKgkVYGTO8pkYG8AKn2r/Portfolio3?node-id=359-228 (фрейм «Frame 59», стиль-гайд: карточка-компонент в 4 состояниях, таблица, текстовый блок) — цвета и шрифтовые стили
- https://www.figma.com/design/5PJKgkVYGTO8pkYG8AKn2r/Portfolio3?node-id=531-1766 (страница «State», плейсхолдеры медиа: no_img / load_img / reload_button) и node-id=532-1853 (мастер-компонент кнопки, состояния Default/Hover/Pressed/Focus) — плейсхолдеры картинок без изображения / в процессе загрузки / с ошибкой загрузки
- https://www.figma.com/design/5PJKgkVYGTO8pkYG8AKn2r/Portfolio3?node-id=532-1862 (страница «404») — `src/pages/NotFoundPage.tsx`

Значения синхронизированы с `src/styles/tokens.css`. 2026-10-29: обновлены цвета (добавлен семантический слой) и шрифты (Cascadia Mono → PT Sans + Roboto Mono) по второму источнику; значения `--color-bg` и `--color-link` затем сверены и поправлены по первому источнику (реальный контент фрейма «Hiro», а не абстрактный стиль-гайд).

## Цвета

Два слоя — примитивы (сырые значения из Figma-переменных) и семантика (алиасы по смыслу использования), как в самом Figma-файле.

### Примитивы
| Токен | Значение | Figma variable |
|---|---|---|
| `--grey-1000` | `#050505` | Primitive colors/Grey/1000 |
| `--grey-750` | `#6e6e6e` | Primitive colors/Grey/750 |
| `--grey-700` | `#838383` | Primitive colors/Grey/700 |
| `--grey-c4` | `#c4c4c4` | — (body-текст на тёмном фоне) |
| `--bg-light` | `#dddddd` | — (фон светлой карточки) |
| `--bg-dark` | `#000000` | — (фон тёмной/инвертированной карточки) |
| `--grey-100` | `#e6e6e6` | Primitive colors/Grey/100 |
| `--grey-150` | `#dadada` | Primitive colors/Grey/150 |
| `--blue-link` | `#1414cb` | Link |
| `--blue-link-invers` | `#6262f6` | Link invers |
| `--blue-400` | `#3d3df4` | Primitive colors/Blue/400 |

### Семантика
| Токен | Значение | Использование |
|---|---|---|
| `--color-bg` | `var(--grey-100)` `#e6e6e6` | Фон страницы (Primitive colors/Grey/100, сверено по фрейму «Hiro» — отличается от `BG1`/`#e8e8e8` из стиль-гайда, в файле это две разные переменные) |
| `--color-surface` | `#ffffff` | Фон медиа-контейнеров (фото/видео кейсов, аватар) — не из стиль-гайда, отдельный приём сайта |
| `--color-surface-dim` | `var(--bg-light)` `#dddddd` | Светлая поверхность карточки/блока (вариант «light» в стиль-гайде) |
| `--color-surface-inverse` | `var(--bg-dark)` `#000000` | Тёмная/инвертированная поверхность (вариант «dark») |
| `--color-text-primary` | `var(--grey-1000)` `#050505` | Основной текст на светлом фоне |
| `--color-text-secondary` | `var(--grey-750)` `#6e6e6e` | Вторичный текст на светлом: лейблы, копирайт, подписи кейсов |
| `--color-text-tertiary` | `var(--grey-700)` `#838383` / dark `var(--grey-750)` `#6e6e6e` | Третичный текст (onBG_2 из Figma Variables) — цифры «404» на странице `NotFoundPage` |
| `--color-text-primary-inverse` | `#ffffff` | Основной текст на тёмном фоне |
| `--color-text-secondary-inverse` | `var(--grey-c4)` `#c4c4c4` | Вторичный текст на тёмном фоне |
| `--color-link` | `var(--blue-link)` `#1414cb` | Ссылки (cv/telegram/linkedin/mail и т.п.) |
| `--color-link-hover` | `var(--blue-400)` `#3d3df4` | Hover-состояние ссылки-кнопки (например, Reload в плейсхолдере медиа) |
| `--color-link-inverse` | `var(--blue-link-invers)` `#6262f6` | Ссылки на тёмном фоне |
| `--color-surface-placeholder` | `var(--grey-150)` `#dadada` | Фон плейсхолдера медиа (нет картинки / загрузка / ошибка загрузки), фрейм «State» (531:1765), ноды 531:1767/1769/1772 |

Есть вариант «outline»: прозрачный фон, рамка `1px dashed var(--color-text-primary)` — отдельного токена под него не заводили, это комбинация существующих.

⚠️ История правки: изначально взял `--color-link` = `#1818f2` по переменной `link` (с маленькой буквы) из стиль-гайда (фрейм 359:228). На фрейме «Hiro» (реальный контент — список ссылок cv/telegram/linkedin/mail) обнаружилась другая переменная, `Link` (с большой буквы) = `#1414cb`, и именно она стоит на живых элементах страницы. `#1818f2`, похоже, в реальном контенте не используется — это рассинхрон внутри самого Figma-файла (две похожие переменные). Исправлено на `#1414cb` как значение, подтверждённое реальным контентом.

`--color-fg` (`#000000`) и `--color-muted` (`#828282`) оставлены как legacy-алиасы — используются в уже написанных компонентах. Перенос компонентов на `--color-text-primary`/`--color-text-secondary` — отдельная задача (см. план внедрения).

## Шрифты

Два шрифта вместо одного моноширинного:
- **PT Sans** — весь текст (заголовки, body, лейблы, таблицы)
- **Roboto Mono** — только ссылки вида «Link →»

Файлов шрифта в макете нет — нужно добавить самостоятельно (аналогично прежнему плану для Cascadia Mono):
1. Скачать PT Sans (Regular 400, Bold 700) и Roboto Mono (Regular 400) — оба открытые (Google Fonts, Apache/OFL)
2. Сконвертировать нужные веса в `.woff2` и положить в `public/fonts/`
3. Добавить `@font-face` в `src/styles/global.css`, указав на `/fonts/...woff2`

До этого момента используются системные фоллбэки.

| Токен | Значение |
|---|---|
| `--font-sans` | `"PT Sans", Arial, "Helvetica Neue", sans-serif` |
| `--font-mono` | `"Roboto Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace` |
| `--font-size-display` | `3.3125rem` (53px) | Цифры «404» (`NotFoundPage`, Figma node 532:1863) — единственное крупное демонстрационное число на сайте |

### Именованные стили
Из стиль-гайда (фрейм 359:228) и сверено по реальному контенту фрейма «Hiro» (23:9):

| Стиль | Шрифт | Размер/высота строки | Трекинг | Токены | Где используется |
|---|---|---|---|---|---|
| **H3** | PT Sans Bold (700) | 15px / 22px | 0.13px | `--font-size-base` / `--line-height-heading` / `--letter-spacing-heading` | Заголовок текстового блока в стиль-гайде («Header», жирный) — и заголовки секций (`.heading`) на страницах кейсов, см. `CaseBlocks.module.css` |
| **H2** | PT Sans Regular (400) | 16px / 20px | — | `--font-size-stat` / `--line-height-base` | Крупные цифры статистики (`statPairs`, Figma node 656:5481 «Доля пользователей», кейс «Плати частями») |
| **Body 2** | PT Sans Regular (400) | 15px / 22px | — | `--font-size-base` / `--line-height-base` | Весь обычный текст: био, заголовки и описания кейсов, лейблы продукт/платформа/роль/год, ячейки таблицы |
| **mono Link 1** | Roboto Mono Regular (400) | 13px / 21px | — | `--font-size-control` / `--line-height-link` | Ссылки: cv/telegram/linkedin/mail, «Link →» |
| **mono Caption 1** | Roboto Mono Regular (400) | 11px / 19px | — | `--font-size-caption` / `--line-height-caption` | Копирайт «© Reznikov Vadim, 2026» |
| **mono controls 1** | Roboto Mono Regular (400) | 13px / 20px | — | `--font-size-control` / `--line-height-control` | RU/ENG-переключатель, кнопка Reload, текст плейсхолдера медиа, ссылка на `NotFoundPage` |

Важно: внутри карточки стиль-гайда «Header»/«Lable» набраны обычным **Body 2** (не жирным) — жирный **H3** применяется только к заголовку отдельного текстового блока. Разница между ними — не вес шрифта визуально одинаковых слов, а контекст (заголовок секции vs лейбл внутри карточки).

⚠️ Правка 2026-11-06: **Body 2** и **H3** увеличены с 13px/20px (H3 — с 13px/19px) до 15px/22px. `--font-size-base`/`--line-height-base` — общие токены для Body2/H3, но их же читали Roboto Mono-ссылки и контролы (совпадение по значению, не по смыслу); чтобы не вырастить и их, значения этих мест явно заморожены на новых токенах `--font-size-control` (13px) / `--line-height-control` (20px) — см. `Hero.module.css` (`.localeInline`, `.links a`), `CaseMedia.module.css` (`.placeholderText`), `ReloadButton.module.css`, `NavBar.module.css`/`CaseNavBar.module.css` (`.right`), `CaseBlocks.module.css` (`.link`), `NotFoundPage.module.css` (`.link`). Трекинг H3 (`--letter-spacing-heading`) не менялся — в задаче не упоминался.

## Отступы
| Токен | Значение | Где используется |
|---|---|---|
| `--space-1` | `4px` | зазор иконка-стрелка / текст приветствия, аватар-копирайт |
| `--space-2` | `8px` | гэп между текстовой и медиа-колонкой кейса, список ссылок |
| `--space-3` | `16px` | паддинг страницы (`--page-pad`), вертикальный гэп в мобильной сетке |
| `--space-4` | `24px` | гэп между кейсами, между описанием и метаданными кейса |
| `--space-5` | `48px` | отступ под Hero перед блоком «Кейсы» |
| `--space-6` | `32px` | разрыв между ссылками нижней навигации кейса |
| `--space-7` | `40px` | ритм шапки страницы кейса |
| `--space-8` | `160px` | подвал страницы кейса: отступ перед навигацией «На главную/Следующий проект» и от неё до низа страницы (Figma node 216:1257, измерено ~142px/~168px, округлено) |

## Сетка
Из Figma-каркаса (фрейм 1280×4160, паддинг страницы 16px, контент 1248px), см. `src/styles/grid.css`:
- Контейнер без ограничения по ширине (`width: 100%`), паддинг страницы `16px` с каждой стороны — контент тянется на всю ширину экрана, как на референсе (plyn.framer.website/piershy), отступ от края не растёт на широких экранах
- Hero (desktop, ≥75rem): 3 равные колонки (`repeat(3, 1fr)`), без gap — приветствие / био+ссылки / аватар+копирайт
- Кейс (desktop, ≥75rem): 2 колонки `1fr 2fr` (≈ 408px:832px в макете), gap `8px` — текст слева, медиа справа
- Мобильный (мобильно-первый подход): всё стекается в одну колонку, гэп `16px`/`24px`

Брейкпоинт `75rem` (1200px) выбран как округление от ширины фрейма Figma (1280px) — отдельного мобильного/таблетного фрейма в макете нет, поведение ниже брейкпоинта спроектировано самостоятельно (см. `05-responsive.md`).
