import type { CaseStudyData } from "./blocks";

/**
 * Полный кейс «CRM. Спортмастер-Маркетплейс» — Figma node 216:1257 (файл Portfolio3),
 * фрейм «Sportmaster_case».
 *
 * Заголовок страницы в макете сейчас с опечаткой («...Маркетплей Проект») — взял
 * вариант из черновика demoCompetitiveTable.ts («CRM. Спортмастер-Маркетплейс»),
 * который был тестовой версткой именно таблицы конкурентного анализа этого кейса.
 *
 * Картинки без видео сопоставлены с текстом по Y-координате в Figma и
 * проверены визуально скриншотами (2026-10-29, два захода — во втором
 * пользователь переименовал часть слоёв в макете и дал точные правки,
 * см. docs/06-progress.md). Источник картинок — локальные мастер-файлы
 * `src/content/Sportmaster/Screens/` с тем же именем, что у слоя в Figma
 * (выше качеством, чем скриншот-экспорт через MCP).
 * Ссылки "Конкурентный анализ →", "Древо метрик →", "Подробнее о сравнении →"
 * и "Матрица глубинки →" — это реальные href из Figma (через get_design_context
 * на текстовых узлах), ведут на внешний Figma-файл/FigJam-борд, не на якоря
 * внутри страницы.
 *
 * 2026-11-04: добавлена английская версия (locale en) — тот же порядок блоков
 * и медиа, текст переведён на английский.
 */
export const sportmasterCaseStudy: Record<"ru" | "en", CaseStudyData> = {
  ru: {
    slug: "sportmaster-build-banners",
    title: "CRM. Спортмастер-Маркетплейс",
    subtitle: "конструктор баннеров, 2024",
    blocks: [
      {
        type: "image",
        src: "/images/sportmaster-build-banners/screen-start.webp",
        alt: "Sportmaster — конструктор баннеров",
        width: 1024,
        height: 512,
      },
      {
        type: "text",
        groups: [
          {
            pairs: [
              { label: "продукт", value: "Спортмастер Маркетплейс" },
              { label: "платформа", value: "Web" },
              { label: "роль", value: "дизайнер продукта" },
              { label: "год", value: "2024" },
            ],
          },
          {
            heading: "Конструктор баннеров для селлеров Спортмастера",
            lines: [
              "Сократили время создания рекламного баннера с 40 до 27 минут и повысили долю запусков без правок модерации с 45% до 58%.",
            ],
          },
          {
            heading: "Контекст и проблема",
            lines: [
              "Чтобы запустить рекламную кампанию на маркетплейсе, продавцу нужен баннер. Своего редактора не было. Официальный путь — 14 шагов, 3 инструмента, 2 документа с требованиями. Проверить баннер до модерации было негде. Каждая ошибка в модерации стоила от 25 минут до половины ночи.",
            ],
          },
          {
            heading: "Таймлайн",
          },
        ],
      },
      {
        type: "timeline",
        phases: [
          { phase: "Фаза 1", month: "февраль", left: 0 },
          { month: "апрель", left: 25.39 },
          { phase: "Фаза 2", month: "июль", left: 79.59 },
        ],
        milestones: [
          { label: "Погружение в контекст", left: 1.46, top: 31.85 },
          { label: "UX-аудит и первичный анализ", left: 9.77, top: 51.59 },
          { label: "Исследование и валидация", left: 26.95, top: 31.21 },
          { label: "Стратегия и метрики", left: 18.65, top: 71.34 },
          { label: "Концепция и прототипирование", left: 36.13, top: 51.59 },
          { label: "Тестирование прототипа", left: 51.07, top: 71.34 },
          { label: "Финальный дизайн и передача в разработку", left: 64.65, top: 31.21 },
        ],
      },
      {
        type: "text",
        groups: [
          {
            heading: "Команда",
            lines: ["PM, арт-директор, я (дизайнер продукта), backend, frontend, QA"],
          },
          {
            heading: "Диагностика",
            lines: [
              "11% → 18% заброшенных кампаний (90 дней). 1,6 → 1,8 — среднее число проверок на один одобренный баннер. Типовые ошибки селлеров (по тикетам модераторов).",
            ],
          },
          {
            heading: "UX-аудит. Сценарий",
            lines: [
              "14 шагов, 3 инструмента, 2 документа",
              "Шаг 1. Поиск шаблона в справке → 2. Регистрация в Figma → 3. Скачивание .fig/.psd → 4. Импорт → 5. Выбор формата → 6. Вёрстка креатива → 7. ⚠️ Ручной отступ полей → 8. Удаление вспомогательных рамок → 9. Экспорт → 10. ⚠️ Сверка с регламентом → 11. Сжатие на стороннем сайте → 12. Загрузка в кабинет → 13. ⚠️ Ожидание модерации → 14. ⚠️ Отказ и возврат на шаг 6. Инструменты: справка площадки → Figma → сайт-сжиматель → личный кабинет.",
            ],
          },
          {
            heading: "Я прогнал путь по эвристикам Нильсена: девять нарушений, четыре критичных.",
            lines: [
              "Ничто не предотвращает ошибку, например текст за охранным полем. Требования надо помнить. Обратной связи нет до модерации. Отказ возвращает в сторонний редактор, и путь повторяется заново.",
            ],
          },
          {
            heading: "Я разобрал 8 альтернатив — от AI-генераторов до интеграции внешних сервисов. Готового решения на рынке нет.",
            lines: [
              "Требования к форматам, safe-zone и весу — внутреннее знание площадки. Ни один внешний редактор физически не может их проверить до отправки.",
            ],
            link: {
              label: "Конкурентный анализ →",
              href: "https://www.figma.com/board/7PpG2dl2lDiRHZ25Nyk0BH/%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%BE%D1%80-%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80%D0%BE%D0%B2-%E2%80%94-%D0%B8%D1%81%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5--%D0%B0%D0%BF%D1%80%D0%B5%D0%BB%D1%8C-2024?node-id=90-717&t=sz1hzcEFMuCpvJvZ-1",
            },
          },
        ],
      },
      {
        type: "square",
        src: "/images/sportmaster-build-banners/concurent-analysis.webp",
        alt: "Конкурентный анализ — таблица сравнения площадок",
        width: 511,
        height: 511,
      },
      {
        type: "text",
        groups: [
          {
            heading: "Метрики успеха",
            lines: [
              "North Star — Activation: доля продавцов с хотя бы одним одобренным баннером («Отправка — попытка, одобрение — результат»). Guardrail — доля баннеров, одобренных с первой попытки: он защищает от случая, когда Activation растёт за счёт того, что продавец доходит до одобрения только с третьей попытки.",
            ],
            link: {
              label: "Древо метрик →",
              href: "https://www.figma.com/board/7PpG2dl2lDiRHZ25Nyk0BH/%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%BE%D1%80-%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80%D0%BE%D0%B2-%E2%80%94-%D0%B8%D1%81%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5--%D0%B0%D0%BF%D1%80%D0%B5%D0%BB%D1%8C-2024?node-id=123-773&t=sz1hzcEFMuCpvJvZ-1",
            },
          },
          {
            heading: "Гипотезы",
            lines: [
              "Первый список был из 10 гипотез. Оставил 5 по одному фильтру: «от ответа должно меняться решение». Потом спросил у каждой гипотезы, какое решение умрёт, если она неверна. Ответов набралось три: «строить ли вообще, вокруг какой боли строить, что войдёт в первый релиз».",
            ],
          },
        ],
      },
      {
        type: "table",
        rowHeading: "Вопрос",
        columns: ["Гипотеза", "Что показали разговоры"],
        rows: [
          {
            label: "Нужен ли продукт вообще?",
            values: [
              "Продавцу нужен контроль над содержанием, а не результат за клик",
              "Подтвердилась, 5 из 5. Жали «ещё вариант» от четырёх до двадцати раз — и ни один не оставил результат как есть",
            ],
          },
          {
            label: "Нужен ли продукт вообще?",
            values: [
              "Продавец готов потратить десять минут вместо одной, если результат управляем",
              "Подтвердилась, 5 из 5. На свой баннер и так тратят от 40 минут до полутора часов — десять минут их не пугают",
            ],
          },
          {
            label: "В чём собственно боль?",
            values: [
              "Баннер отклоняют регулярно, и продавцу это дорого",
              "Подтвердилась, 5 из 5. Причину отказа понимали трое — и всё равно теряли от 25 минут до половины ночи",
            ],
          },
          {
            label: "Размер макета",
            values: [
              "Сегмент не владеет базовыми операциями графического редактора",
              "Опровергнута. Четверо из пяти владеют: Figma, Photoshop, Canva, SUPA. Навык добирали по ходу, а не учились ему. И всё равно все пятеро платили за баннер 800–1200 ₽",
            ],
          },
          {
            label: "Кто и в каких условиях работает?",
            values: [
              "Продавец работает с кабинетом за компьютером, а не с телефона",
              "Подтвердилась, 5 из 5. Правят с компьютера все. Трое ведут кабинет и с телефона, но не редактируют",
            ],
          },
        ],
      },
      {
        type: "square",
        src: "/images/sportmaster-build-banners/research-call.webp",
        alt: "Глубинное интервью с продавцом",
        width: 511,
        height: 511,
        solo: true,
      },
      {
        type: "text",
        groups: [
          {
            heading: "Исследование",
            lines: [
              "Провёл 5 глубинных интервью. Трое продавцов-основателей и двое менеджеров маркетплейсов. Выборку составили те, кто согласился прийти на тест нового инструмента — самых недоверчивых здесь нет по построению. 4 из 5 участников уже владеют инструментом — Figma, Photoshop, Canva или SUPA. Проблема не в навыке, а в цене каждого баннера. Один отказ стоил участникам от 25 минут до половины ночи. Требование я переформулировал: было «сделай баннер за продавца, который не умеет», стало «дай управляемый результат без поиска, без переделок и без выхода из кабинета».",
            ],
            link: {
              label: "Матрица глубинки →",
              href: "https://www.figma.com/board/7PpG2dl2lDiRHZ25Nyk0BH/%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%BE%D1%80-%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80%D0%BE%D0%B2-%E2%80%94-%D0%B8%D1%81%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5--%D0%B0%D0%BF%D1%80%D0%B5%D0%BB%D1%8C-2024?node-id=2-2&t=sz1hzcEFMuCpvJvZ-1",
            },
          },
        ],
      },
      {
        type: "squarePair",
        items: [
          {
            type: "square",
            src: "/images/sportmaster-build-banners/matrix-ux.webp",
            alt: "Матрица глубинки — анализ интервью по темам",
            width: 1024,
            height: 886,
            aspect: 1024 / 886,
          },
          {
            type: "square",
            src: "/images/sportmaster-build-banners/moscow.webp",
            alt: "Приоритизация решений по MoSCoW",
            width: 1022,
            height: 886,
            aspect: 1022 / 886,
          },
        ],
      },
      {
        type: "text",
        groups: [
          {
            heading: "Решения",
            lines: [
              "Я спроектировал редактор так, чтобы селлер доходил до одобренного баннера без переделок.",
            ],
          },
        ],
      },
      {
        type: "text",
        groups: [
          {
            heading: "Автоадаптация под форматы площадки",
            lines: [
              "Смена формата внутри редактора опирается на 3 приоритета: сохранённый снимок работы селлера → готовая раскладка дизайнера → пересборка по якорям.",
            ],
          },
        ],
      },
      {
        type: "video",
        src: "/video/sportmaster-build-banners/size.mp4",
        poster: "/images/sportmaster-build-banners/size-poster.webp",
        alt: "Автоадаптация баннера под форматы площадки",
        width: 1024,
        height: 512,
      },
      {
        type: "text",
        groups: [
          {
            heading: "Обязательный предпросмотр перед отправкой",
            lines: [
              "Зашил обязательный шаг — предпросмотр баннера в трёх контекстах размещения (главная, категория, карточка товара).",
            ],
          },
        ],
      },
      {
        type: "video",
        src: "/video/sportmaster-build-banners/review.mp4",
        poster: "/images/sportmaster-build-banners/review-poster.webp",
        alt: "Обязательный предпросмотр баннера перед отправкой",
        width: 1024,
        height: 512,
      },
      {
        type: "text",
        groups: [
          {
            heading: "Разные правила Safe Zone для фото и текста",
            lines: [
              "Фотографии могут выходить за край холста, но текстовые блоки жёстко заперты внутри Safe Zone.",
            ],
          },
        ],
      },
      {
        type: "video",
        src: "/video/sportmaster-build-banners/zone.mp4",
        poster: "/images/sportmaster-build-banners/zone-poster.webp",
        alt: "Safe Zone для фото и текста",
        width: 1024,
        height: 512,
      },
      {
        type: "text",
        groups: [
          {
            heading: "Прозрачный вердикт модерации",
            lines: [
              "Спроектировал письмо-разбор с обязательным чек-листом типовых ошибок. На тесте 5 из 5 участников сразу поняли причину отказа. Проверка идёт в два этапа. Первый этап — AI (1–5 мин), автоматически отсеивает технические ошибки (контраст, формат, текст). Второй этап — модератор. Разбирает сложный контекст, который нельзя проверить алгоритмом.",
            ],
          },
        ],
      },
      {
        type: "image",
        src: "/images/sportmaster-build-banners/screen-mail.webp",
        alt: "Письмо «Баннер не прошёл модерацию» с чек-листом причин отказа",
        width: 1024,
        height: 512,
      },
      {
        type: "text",
        groups: [
          {
            heading: "AI-генерация баннера (фаза 2)",
            lines: [
              "0 из 5 респондентов приняли результат AI-конкурентов (Яндекс Маркет, обычные нейросети) как есть — все дорабатывали вручную. Поэтому AI не рисует баннер целиком, а собирает его из готовых элементов библиотеки — фон, иллюстрация, бейдж.",
            ],
          },
        ],
      },
      {
        type: "video",
        src: "/video/sportmaster-build-banners/ai.mp4",
        poster: "/images/sportmaster-build-banners/ai-poster.webp",
        alt: "AI-генерация баннера",
        width: 1024,
        height: 512,
      },
      {
        type: "text",
        groups: [
          {
            heading: "Экспорт",
            lines: [
              "Сжатие встроено прямо в продукт под автоматические лимиты площадок (до 120–150 КБ). Уход на внешние компрессоры полностью исключён.",
            ],
          },
        ],
      },
      {
        type: "video",
        src: "/video/sportmaster-build-banners/export.mp4",
        poster: "/images/sportmaster-build-banners/export-poster.webp",
        alt: "Экспорт баннера",
        width: 1024,
        height: 512,
      },
      {
        type: "text",
        groups: [
          {
            heading: "Палитра у векторных элементов",
            lines: ["Возможность подогнать иллюстрацию под свой бренд."],
          },
        ],
      },
      {
        type: "video",
        src: "/video/sportmaster-build-banners/color.mp4",
        poster: "/images/sportmaster-build-banners/color-poster.webp",
        alt: "Палитра у векторных элементов",
        width: 1024,
        height: 512,
      },
      {
        type: "text",
        groups: [
          {
            heading: "Шрифты",
            lines: [
              "Типографику сформировали непосредственно при сборке библиотеки шаблонов: вместо свободного поиска подобрали проверенные шрифтовые пары с высокими показателями читаемости при быстром скролле. В качестве панграммы использовал слоган Спортмастера.",
            ],
          },
        ],
      },
      {
        type: "video",
        src: "/video/sportmaster-build-banners/font.mp4",
        poster: "/images/sportmaster-build-banners/font-poster.webp",
        alt: "Шрифтовые пары библиотеки шаблонов",
        width: 1024,
        height: 512,
      },
      {
        type: "text",
        groups: [
          {
            heading: "Onboarding",
            lines: [
              "Внедрил интерактивный онбординг с механикой drag-and-drop — пользователи могли перетаскивать объекты для повышения вовлечённости.",
            ],
          },
        ],
      },
      {
        type: "video",
        src: "/video/sportmaster-build-banners/onboarding.mp4",
        poster: "/images/sportmaster-build-banners/onboarding-poster.webp",
        alt: "Интерактивный онбординг",
        width: 1024,
        height: 512,
      },
      {
        type: "text",
        groups: [
          {
            heading: "UI-референсы",
            lines: [
              "Чтобы спроектировать редактор, я разложил по шагам Mega Creator, Adobe Express и VistaCreate. Задача была не скопировать софт, а снизить когнитивную нагрузку: точка входа (от Mega Creator) — старт в 1 клик с галереи готовых шаблонов вместо белого листа; рабочая область (от Adobe Express) — предсказуемая панель слоёв, выравнивание и стили в клик; ограничения платформы — убрали ручной ввод размеров и свободную трансформацию, зашив пропорции рекламных мест и охранные поля прямо в поведение холста.",
            ],
            link: {
              label: "Подробнее о сравнении →",
              href: "https://www.figma.com/board/7PpG2dl2lDiRHZ25Nyk0BH/%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%BE%D1%80-%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80%D0%BE%D0%B2-%E2%80%94-%D0%B8%D1%81%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5--%D0%B0%D0%BF%D1%80%D0%B5%D0%BB%D1%8C-2024?node-id=201-1193&t=sz1hzcEFMuCpvJvZ-1",
            },
          },
        ],
      },
      {
        type: "table",
        id: "editor-comparison",
        heading: "Сравнение редакторов",
        rowHeading: "Параметр",
        columns: ["Mega Creator", "Adobe Express", "VistaCreate", "Наше решение"],
        rows: [
          {
            label: "Вход в редактор",
            values: [
              "1 шаг, без регистрации",
              "4 шага, логин + подписка",
              "4 шага, логин + опрос",
              "0 шагов: вход прямо из кабинета",
            ],
          },
          {
            label: "Точка старта",
            values: [
              "Каталог шаблонов",
              "Опрос «Что хотите создать?»",
              "Текстовый экран",
              "Галерея готовых шаблонов",
            ],
          },
          {
            label: "Размер макета",
            values: [
              "Выбор внутри редактора",
              "Первый шаг (ручной ввод)",
              "Из шаблона",
              "Жёстко задан слотом кампании",
            ],
          },
          {
            label: "Панель слоёв",
            values: [
              "Нет",
              "Есть (с превью иерархии)",
              "Скрыта",
              "Семантические слои («Текст», «Фон»)",
            ],
          },
        ],
      },
      {
        type: "image",
        src: "/images/sportmaster-build-banners/ui-references.webp",
        alt: "Mega Creator, Adobe Express и VistaCreate бок о бок",
        width: 1024,
        height: 512,
      },
      {
        type: "square",
        src: "/images/sportmaster-build-banners/illustrations-panel.webp",
        alt: "Панель библиотеки иллюстраций",
        width: 511,
        height: 511,
        solo: true,
      },
      {
        type: "text",
        groups: [
          {
            heading: "Дизайн UI",
            lines: [
              "Спроектировал UI на базе дизайн-системы. Добавил новые элементы, включая текстовое поле и анимацию для AI-генерации. Старался не оставлять пустых состояний без выхода. К примеру для пустого списка поиска предложил альтернативные шаблоны и компоненты.",
            ],
          },
        ],
      },
      {
        type: "image",
        src: "/images/sportmaster-build-banners/ui-01.webp",
        alt: "Экран редактора баннера с библиотекой изображений",
        width: 1024,
        height: 512,
      },
      {
        type: "showcase",
        items: [
          {
            src: "/images/sportmaster-build-banners/ui-02.webp",
            alt: "Палитра цветов фона",
            width: 512,
            height: 511,
          },
          {
            src: "/images/sportmaster-build-banners/ui-03.webp",
            alt: "Настройка градиентов",
            width: 512,
            height: 512,
          },
          {
            src: "/images/sportmaster-build-banners/ui-04.webp",
            alt: "Диалог экспорта баннера",
            width: 512,
            height: 511,
          },
          {
            src: "/images/sportmaster-build-banners/ui-05.webp",
            alt: "Онбординг выбора размера шаблона",
            width: 512,
            height: 512,
          },
        ],
      },
      {
        type: "image",
        src: "/images/sportmaster-build-banners/ui-06.webp",
        alt: "Мокапы тестирования галереи шаблонов",
        width: 1024,
        height: 512,
      },
      {
        type: "text",
        groups: [
          {
            heading: "Проверка: тест на прототипе",
            lines: [
              "Тестирование прототипа с 5 участниками помогло отрезать треть лишней функциональности до разработки. Мы отказались от AI-генерации в первом релизе из-за отсутствия устойчивого спроса (готовы платить лишь 2 из 5) и убрали около 10 экранов в стол. Выяснили, что кнопка экспорта файла вторична на фоне отправки на модерацию, семантические названия слоёв («Фон», «Бейдж») так и не решили барьер для новичков, а зашитые внутрь шаблонов правила вызывают недоверие — селлерам необходим открытый чек-лист проверок.",
            ],
          },
        ],
      },
      {
        type: "video",
        src: "/video/sportmaster-build-banners/ai-icon.mp4",
        poster: "/images/sportmaster-build-banners/ai-icon-poster.webp",
        alt: "Анимация AI-иконки в редакторе",
        width: 512,
        height: 512,
        shape: "square",
        solo: true,
      },
      {
        type: "video",
        src: "/video/sportmaster-build-banners/layers.mp4",
        poster: "/images/sportmaster-build-banners/layers-poster.webp",
        alt: "Тест прототипа редактора",
        width: 1024,
        height: 512,
      },
      {
        type: "text",
        groups: [
          {
            heading: "Результат",
            lines: [
              "41% → 51% activation (селлеры с одобренным баннером)",
              "45% → 58% одобрено с первой попытки",
              "~40 → ~27 минут — время до первого одобренного баннера",
              "1,8 → 1,6 — число проверок на один баннер",
            ],
          },
          {
            tight: true,
            lines: [
              "Guardrail выдержал: доля одобренных с первой попытки росла вместе с Activation — рост не переложен на модерацию.",
            ],
          },
        ],
      },
      {
        type: "video",
        src: "/video/sportmaster-build-banners/show.mp4",
        poster: "/images/sportmaster-build-banners/show-poster.webp",
        alt: "Готовый редактор баннеров",
        width: 1024,
        height: 512,
      },
    ],
  },
  en: {
    slug: "sportmaster-build-banners",
    title: "CRM. Sportmaster Marketplace",
    subtitle: "banner builder, 2024",
    blocks: [
      {
        type: "image",
        src: "/images/sportmaster-build-banners/screen-start.webp",
        alt: "Sportmaster — banner builder",
        width: 1024,
        height: 512,
      },
      {
        type: "text",
        groups: [
          {
            pairs: [
              { label: "product", value: "Sportmaster Marketplace" },
              { label: "platform", value: "Web" },
              { label: "role", value: "Product Designer" },
              { label: "year", value: "2024" },
            ],
          },
          {
            heading: "A banner builder for Sportmaster sellers",
            lines: [
              "Cut the time to create an ad banner from 40 to 27 minutes and raised the share of launches with no moderation edits from 45% to 58%.",
            ],
          },
          {
            heading: "Context and problem",
            lines: [
              "To launch an ad campaign on the marketplace, a seller needs a banner. There was no built-in editor. The official path was 14 steps, 3 tools, 2 requirement documents. There was nowhere to check a banner before moderation. Every moderation failure cost anywhere from 25 minutes to half a night.",
            ],
          },
          {
            heading: "Timeline",
          },
        ],
      },
      {
        type: "timeline",
        phases: [
          { phase: "Phase 1", month: "February", left: 0 },
          { month: "April", left: 25.39 },
          { phase: "Phase 2", month: "July", left: 79.59 },
        ],
        milestones: [
          { label: "Context deep dive", left: 1.46, top: 31.85 },
          { label: "UX audit and initial analysis", left: 9.77, top: 51.59 },
          { label: "Research and validation", left: 26.95, top: 31.21 },
          { label: "Strategy and metrics", left: 18.65, top: 71.34 },
          { label: "Concept and prototyping", left: 36.13, top: 51.59 },
          { label: "Prototype testing", left: 51.07, top: 71.34 },
          { label: "Final design and handoff to development", left: 64.65, top: 31.21 },
        ],
      },
      {
        type: "text",
        groups: [
          {
            heading: "Team",
            lines: ["PM, art director, me (Product Designer), backend, frontend, QA"],
          },
          {
            heading: "Diagnosis",
            lines: [
              "11% → 18% abandoned campaigns (90 days). 1.6 → 1.8 — average number of review rounds per approved banner. Typical seller mistakes (from moderator tickets).",
            ],
          },
          {
            heading: "UX audit. The scenario",
            lines: [
              "14 steps, 3 tools, 2 documents",
              "Step 1. Find a template in the help center → 2. Sign up for Figma → 3. Download .fig/.psd → 4. Import → 5. Pick a format → 6. Lay out the creative → 7. ⚠️ Manually set safe-zone margins → 8. Delete helper frames → 9. Export → 10. ⚠️ Check against the guidelines → 11. Compress on a third-party site → 12. Upload to the seller dashboard → 13. ⚠️ Wait for moderation → 14. ⚠️ Rejection and back to step 6. Tools used: platform help center → Figma → a compression site → the seller dashboard.",
            ],
          },
          {
            heading: "I ran the flow against Nielsen's heuristics: nine violations, four critical.",
            lines: [
              "Nothing prevents an error, like text crossing the safe zone. Requirements have to be memorized. There's no feedback until moderation. A rejection sends you back to a third-party editor, and the whole path repeats.",
            ],
          },
          {
            heading: "I reviewed 8 alternatives — from AI generators to integrating external services. No ready solution exists on the market.",
            lines: [
              "Format, safe-zone, and file-size requirements are internal knowledge of the platform. No external editor can physically check them before submission.",
            ],
            link: {
              label: "Competitive analysis →",
              href: "https://www.figma.com/board/7PpG2dl2lDiRHZ25Nyk0BH/%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%BE%D1%80-%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80%D0%BE%D0%B2-%E2%80%94-%D0%B8%D1%81%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5--%D0%B0%D0%BF%D1%80%D0%B5%D0%BB%D1%8C-2024?node-id=90-717&t=sz1hzcEFMuCpvJvZ-1",
            },
          },
        ],
      },
      {
        type: "square",
        src: "/images/sportmaster-build-banners/concurent-analysis.webp",
        alt: "Competitive analysis — a comparison table of platforms",
        width: 511,
        height: 511,
      },
      {
        type: "text",
        groups: [
          {
            heading: "Success metrics",
            lines: [
              "North Star — Activation: the share of sellers with at least one approved banner (“submission is an attempt, approval is the result”). Guardrail — the share of banners approved on the first try: it protects against Activation growing simply because a seller only reaches approval on the third attempt.",
            ],
            link: {
              label: "Metrics tree →",
              href: "https://www.figma.com/board/7PpG2dl2lDiRHZ25Nyk0BH/%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%BE%D1%80-%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80%D0%BE%D0%B2-%E2%80%94-%D0%B8%D1%81%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5--%D0%B0%D0%BF%D1%80%D0%B5%D0%BB%D1%8C-2024?node-id=123-773&t=sz1hzcEFMuCpvJvZ-1",
            },
          },
          {
            heading: "Hypotheses",
            lines: [
              "The first list had 10 hypotheses. I kept 5 using a single filter: “the answer has to change a decision.” Then I asked each hypothesis which decision would die if it turned out false. Three answers came up: “whether to build this at all, which pain to build around, what makes it into the first release.”",
            ],
          },
        ],
      },
      {
        type: "table",
        rowHeading: "Question",
        columns: ["Hypothesis", "What the conversations showed"],
        rows: [
          {
            label: "Is the product even needed?",
            values: [
              "The seller needs control over the content, not just a one-click result",
              "Confirmed, 5 of 5. They clicked “another option” anywhere from four to twenty times — and not one kept the result as-is",
            ],
          },
          {
            label: "Is the product even needed?",
            values: [
              "The seller is willing to spend ten minutes instead of one, if the result is controllable",
              "Confirmed, 5 of 5. They already spend 40 minutes to an hour and a half on their own banner — ten minutes doesn't scare them",
            ],
          },
          {
            label: "What's the actual pain?",
            values: [
              "The banner gets rejected regularly, and it costs the seller",
              "Confirmed, 5 of 5. Three understood the reason for rejection — and still lost anywhere from 25 minutes to half a night",
            ],
          },
          {
            label: "Mockup size",
            values: [
              "The segment doesn't know the basics of a graphics editor",
              "Disproved. Four of five do: Figma, Photoshop, Canva, SUPA. They picked up the skill along the way rather than learning it. And all five still paid 800–1,200 ₽ for a banner anyway",
            ],
          },
          {
            label: "Who works under what conditions?",
            values: [
              "The seller works in the dashboard on a computer, not a phone",
              "Confirmed, 5 of 5. Everyone edits from a computer. Three also run the dashboard from a phone, but don't edit from it",
            ],
          },
        ],
      },
      {
        type: "square",
        src: "/images/sportmaster-build-banners/research-call.webp",
        alt: "In-depth interview with a seller",
        width: 511,
        height: 511,
        solo: true,
      },
      {
        type: "text",
        groups: [
          {
            heading: "Research",
            lines: [
              "I ran 5 in-depth interviews. Three founder-sellers and two marketplace managers. The sample consisted of people who agreed to test a new tool — by construction, the most distrustful people aren't in it. 4 of 5 participants already know a tool — Figma, Photoshop, Canva, or SUPA. The problem isn't skill, it's the cost of every banner. One rejection cost participants anywhere from 25 minutes to half a night. I reframed the requirement: it used to be “make the banner for a seller who can't,” and became “give a controllable result with no searching, no rework, and no leaving the dashboard.”",
            ],
            link: {
              label: "Depth-interview matrix →",
              href: "https://www.figma.com/board/7PpG2dl2lDiRHZ25Nyk0BH/%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%BE%D1%80-%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80%D0%BE%D0%B2-%E2%80%94-%D0%B8%D1%81%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5--%D0%B0%D0%BF%D1%80%D0%B5%D0%BB%D1%8C-2024?node-id=2-2&t=sz1hzcEFMuCpvJvZ-1",
            },
          },
        ],
      },
      {
        type: "squarePair",
        items: [
          {
            type: "square",
            src: "/images/sportmaster-build-banners/matrix-ux.webp",
            alt: "Depth-interview matrix — interviews analyzed by theme",
            width: 1024,
            height: 886,
            aspect: 1024 / 886,
          },
          {
            type: "square",
            src: "/images/sportmaster-build-banners/moscow.webp",
            alt: "Solution prioritization with MoSCoW",
            width: 1022,
            height: 886,
            aspect: 1022 / 886,
          },
        ],
      },
      {
        type: "text",
        groups: [
          {
            heading: "Solutions",
            lines: [
              "I designed the editor so a seller reaches an approved banner with no rework.",
            ],
          },
        ],
      },
      {
        type: "text",
        groups: [
          {
            heading: "Auto-adaptation to platform formats",
            lines: [
              "Changing format inside the editor relies on 3 priorities: the seller's saved snapshot of their work → the designer's ready-made layout → a rebuild based on anchors.",
            ],
          },
        ],
      },
      {
        type: "video",
        src: "/video/sportmaster-build-banners/size.mp4",
        poster: "/images/sportmaster-build-banners/size-poster.webp",
        alt: "Auto-adapting the banner to platform formats",
        width: 1024,
        height: 512,
      },
      {
        type: "text",
        groups: [
          {
            heading: "Mandatory preview before submission",
            lines: [
              "I built in a mandatory step — previewing the banner in three placement contexts (home page, category, product card).",
            ],
          },
        ],
      },
      {
        type: "video",
        src: "/video/sportmaster-build-banners/review.mp4",
        poster: "/images/sportmaster-build-banners/review-poster.webp",
        alt: "Mandatory banner preview before submission",
        width: 1024,
        height: 512,
      },
      {
        type: "text",
        groups: [
          {
            heading: "Different Safe Zone rules for photos and text",
            lines: [
              "Photos can bleed past the canvas edge, but text blocks are strictly locked inside the Safe Zone.",
            ],
          },
        ],
      },
      {
        type: "video",
        src: "/video/sportmaster-build-banners/zone.mp4",
        poster: "/images/sportmaster-build-banners/zone-poster.webp",
        alt: "Safe Zone for photos and text",
        width: 1024,
        height: 512,
      },
      {
        type: "text",
        groups: [
          {
            heading: "A transparent moderation verdict",
            lines: [
              "I designed a breakdown email with a mandatory checklist of common mistakes. In testing, 5 of 5 participants immediately understood the reason for rejection. Review runs in two stages. Stage one is AI (1–5 min), automatically filtering out technical errors (contrast, format, text). Stage two is a moderator, who handles the complex context an algorithm can't check.",
            ],
          },
        ],
      },
      {
        type: "image",
        src: "/images/sportmaster-build-banners/screen-mail.webp",
        alt: "“Banner failed moderation” email with a checklist of rejection reasons",
        width: 1024,
        height: 512,
      },
      {
        type: "text",
        groups: [
          {
            heading: "AI banner generation (phase 2)",
            lines: [
              "0 of 5 respondents accepted the output of AI competitors (Yandex Market, generic neural networks) as-is — everyone touched it up by hand. So instead of drawing the whole banner, the AI assembles it from ready-made library elements — background, illustration, badge.",
            ],
          },
        ],
      },
      {
        type: "video",
        src: "/video/sportmaster-build-banners/ai.mp4",
        poster: "/images/sportmaster-build-banners/ai-poster.webp",
        alt: "AI banner generation",
        width: 1024,
        height: 512,
      },
      {
        type: "text",
        groups: [
          {
            heading: "Export",
            lines: [
              "Compression is built right into the product to match the platforms' automatic limits (up to 120–150 KB). Going to an external compressor is ruled out entirely.",
            ],
          },
        ],
      },
      {
        type: "video",
        src: "/video/sportmaster-build-banners/export.mp4",
        poster: "/images/sportmaster-build-banners/export-poster.webp",
        alt: "Banner export",
        width: 1024,
        height: 512,
      },
      {
        type: "text",
        groups: [
          {
            heading: "A palette for vector elements",
            lines: ["The ability to match an illustration to your own brand."],
          },
        ],
      },
      {
        type: "video",
        src: "/video/sportmaster-build-banners/color.mp4",
        poster: "/images/sportmaster-build-banners/color-poster.webp",
        alt: "Palette for vector elements",
        width: 1024,
        height: 512,
      },
      {
        type: "text",
        groups: [
          {
            heading: "Fonts",
            lines: [
              "Typography was defined right while assembling the template library: instead of open-ended search, we picked proven font pairs with high readability during fast scrolling. I used the Sportmaster slogan as the pangram.",
            ],
          },
        ],
      },
      {
        type: "video",
        src: "/video/sportmaster-build-banners/font.mp4",
        poster: "/images/sportmaster-build-banners/font-poster.webp",
        alt: "Font pairs from the template library",
        width: 1024,
        height: 512,
      },
      {
        type: "text",
        groups: [
          {
            heading: "Onboarding",
            lines: [
              "I introduced interactive onboarding with a drag-and-drop mechanic — users could drag objects around to boost engagement.",
            ],
          },
        ],
      },
      {
        type: "video",
        src: "/video/sportmaster-build-banners/onboarding.mp4",
        poster: "/images/sportmaster-build-banners/onboarding-poster.webp",
        alt: "Interactive onboarding",
        width: 1024,
        height: 512,
      },
      {
        type: "text",
        groups: [
          {
            heading: "UI references",
            lines: [
              "To design the editor, I broke down Mega Creator, Adobe Express, and VistaCreate step by step. The goal wasn't to copy the software but to cut cognitive load: the entry point (from Mega Creator) — a 1-click start from a gallery of ready-made templates instead of a blank page; the workspace (from Adobe Express) — a predictable layers panel, alignment and styles in one click; platform constraints — removed manual size entry and free transforms by baking ad-slot proportions and safe margins right into the canvas's behavior.",
            ],
            link: {
              label: "More on the comparison →",
              href: "https://www.figma.com/board/7PpG2dl2lDiRHZ25Nyk0BH/%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%BE%D1%80-%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80%D0%BE%D0%B2-%E2%80%94-%D0%B8%D1%81%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5--%D0%B0%D0%BF%D1%80%D0%B5%D0%BB%D1%8C-2024?node-id=201-1193&t=sz1hzcEFMuCpvJvZ-1",
            },
          },
        ],
      },
      {
        type: "table",
        id: "editor-comparison",
        heading: "Comparing editors",
        rowHeading: "Parameter",
        columns: ["Mega Creator", "Adobe Express", "VistaCreate", "Our solution"],
        rows: [
          {
            label: "Entering the editor",
            values: [
              "1 step, no sign-up",
              "4 steps, login + subscription",
              "4 steps, login + survey",
              "0 steps: enters right from the dashboard",
            ],
          },
          {
            label: "Starting point",
            values: [
              "Template catalog",
              "Survey: “What do you want to create?”",
              "Text screen",
              "Gallery of ready-made templates",
            ],
          },
          {
            label: "Mockup size",
            values: [
              "Chosen inside the editor",
              "First step (manual entry)",
              "From the template",
              "Hard-set by the campaign slot",
            ],
          },
          {
            label: "Layers panel",
            values: [
              "None",
              "Yes (with hierarchy preview)",
              "Hidden",
              "Semantic layers (“Text”, “Background”)",
            ],
          },
        ],
      },
      {
        type: "image",
        src: "/images/sportmaster-build-banners/ui-references.webp",
        alt: "Mega Creator, Adobe Express, and VistaCreate side by side",
        width: 1024,
        height: 512,
      },
      {
        type: "square",
        src: "/images/sportmaster-build-banners/illustrations-panel.webp",
        alt: "Illustration library panel",
        width: 511,
        height: 511,
        solo: true,
      },
      {
        type: "text",
        groups: [
          {
            heading: "UI design",
            lines: [
              "I designed the UI on top of the design system. I added new elements, including a text field and an animation for AI generation. I tried not to leave empty states without a way out — for an empty search list, for instance, I offered alternative templates and components.",
            ],
          },
        ],
      },
      {
        type: "image",
        src: "/images/sportmaster-build-banners/ui-01.webp",
        alt: "Banner editor screen with the image library",
        width: 1024,
        height: 512,
      },
      {
        type: "showcase",
        items: [
          {
            src: "/images/sportmaster-build-banners/ui-02.webp",
            alt: "Background color palette",
            width: 512,
            height: 511,
          },
          {
            src: "/images/sportmaster-build-banners/ui-03.webp",
            alt: "Gradient settings",
            width: 512,
            height: 512,
          },
          {
            src: "/images/sportmaster-build-banners/ui-04.webp",
            alt: "Banner export dialog",
            width: 512,
            height: 511,
          },
          {
            src: "/images/sportmaster-build-banners/ui-05.webp",
            alt: "Onboarding for template size selection",
            width: 512,
            height: 512,
          },
        ],
      },
      {
        type: "image",
        src: "/images/sportmaster-build-banners/ui-06.webp",
        alt: "Mockups for testing the template gallery",
        width: 1024,
        height: 512,
      },
      {
        type: "text",
        groups: [
          {
            heading: "Validation: prototype testing",
            lines: [
              "Prototype testing with 5 participants helped cut a third of unnecessary functionality before development. We dropped AI generation from the first release due to a lack of sustained demand (only 2 of 5 were willing to pay) and shelved about 10 screens. We learned that the file-export button is secondary to submitting for moderation, that semantic layer names (“Background”, “Badge”) still didn't solve the barrier for newcomers, and that rules baked silently into templates breed distrust — sellers need an open checklist of checks.",
            ],
          },
        ],
      },
      {
        type: "video",
        src: "/video/sportmaster-build-banners/ai-icon.mp4",
        poster: "/images/sportmaster-build-banners/ai-icon-poster.webp",
        alt: "AI icon animation in the editor",
        width: 512,
        height: 512,
        shape: "square",
        solo: true,
      },
      {
        type: "video",
        src: "/video/sportmaster-build-banners/layers.mp4",
        poster: "/images/sportmaster-build-banners/layers-poster.webp",
        alt: "Editor prototype test",
        width: 1024,
        height: 512,
      },
      {
        type: "text",
        groups: [
          {
            heading: "Result",
            lines: [
              "41% → 51% activation (sellers with an approved banner)",
              "45% → 58% approved on the first try",
              "~40 → ~27 minutes — time to the first approved banner",
              "1.8 → 1.6 — review rounds per banner",
            ],
          },
          {
            tight: true,
            lines: [
              "The guardrail held: the share approved on the first try grew together with Activation — growth wasn't pushed onto moderation.",
            ],
          },
        ],
      },
      {
        type: "video",
        src: "/video/sportmaster-build-banners/show.mp4",
        poster: "/images/sportmaster-build-banners/show-poster.webp",
        alt: "The finished banner editor",
        width: 1024,
        height: 512,
      },
    ],
  },
};
