import type {
  CaseImageBlock,
  CaseSquareBlock,
  CaseStudyData,
  CaseUserFlowBlock,
  CaseVideoBlock,
} from "./blocks";

const img = (name: string, alt: string): CaseImageBlock => ({
  type: "image",
  src: `/images/trassir-redesign/${name}.webp`,
  alt,
  width: 2048,
  height: 1024,
});

const square = (name: string, alt: string, size = 1022): CaseSquareBlock => ({
  type: "square",
  src: `/images/trassir-redesign/${name}.webp`,
  alt,
  width: size,
  height: size,
});

const video = (
  name: string,
  alt: string,
  shape: "wide" | "square" = "wide",
  size = 1024
): CaseVideoBlock => ({
  type: "video",
  src: `/video/trassir-redesign/${name}.mp4`,
  webm: `/video/trassir-redesign/${name}.webm`,
  poster: `/images/trassir-redesign/${name}-poster.webp`,
  alt,
  width: size,
  height: shape === "square" ? size : 512,
  shape,
});

// Figma node 630:3430, «Флоу пользователя»
const userFlowRu: CaseUserFlowBlock = {
  type: "userFlow",
  heading: "Флоу пользователя",
  entrySteps: ["Авторизация", "Онбординг"],
  screen: "Главный экран",
  columns: [
    {
      cards: [
        { lines: ["Live просмотр"], accent: true },
        { lines: ["Архив"], accent: true },
        { lines: ["Экспорт"] },
      ],
    },
    {
      cards: [
        { lines: ["Уведомление"], accent: true },
        { lines: ["Настройки", "уведомление"] },
      ],
    },
    {
      cards: [
        { lines: ["Настройки"] },
        { lines: ["Пополнения", "баланса"] },
        { lines: ["Тарифы"] },
        { lines: ["Витрина"] },
        { lines: ["Семейный доступ"] },
        { lines: ["и др"] },
      ],
    },
  ],
};

const userFlowEn: CaseUserFlowBlock = {
  type: "userFlow",
  heading: "User flow",
  entrySteps: ["Authorization", "Onboarding"],
  screen: "Home screen",
  columns: [
    {
      cards: [
        { lines: ["Live view"], accent: true },
        { lines: ["Archive"], accent: true },
        { lines: ["Export"] },
      ],
    },
    {
      cards: [
        { lines: ["Notification"], accent: true },
        { lines: ["Notification", "settings"] },
      ],
    },
    {
      cards: [
        { lines: ["Settings"] },
        { lines: ["Balance", "top-up"] },
        { lines: ["Plans"] },
        { lines: ["Store"] },
        { lines: ["Family access"] },
        { lines: ["etc."] },
      ],
    },
  ],
};

export const trassirRedesign: Record<"ru" | "en", CaseStudyData> = {
  ru: {
    slug: "trassir-mobile-ios-redesign",
    title: "Trassir mobile",
    subtitle: "редизайн 2026",
    blocks: [
      video("preview", "Превью редизайна мобильного приложения Trassir"),

      {
        type: "text",
        groups: [
          {
            lines: [
              "TRASSIR — платформа видеонаблюдения российской компании DSSL. Мобильное приложение позволяет B2B- и B2C-пользователям удалённо смотреть лайв и архив и получать уведомления о событиях",
            ],
          },
          {
            pairs: [
              { label: "продукт", value: "Trassir mobile" },
              { label: "платформа", value: "iOS" },
              { label: "роль", value: "дизайнер продукта" },
              { label: "год", value: "2026" },
            ],
          },
          {
            heading: "Проблема",
            lines: [
              "Приложение создавалось как B2B-инструмент. Для массового B2C-пользователя оно оказалось перегружено: базовые сценарии требовали лишних шагов, а ценность подписок была неочевидна. Пользователи путались в навигации, уходили и писали в поддержку",
            ],
          },
          {
            heading: "Ключевой инсайт",
            lines: [
              "80% времени в приложении уходит на три сценария: лайв, события и архив. При этом интерфейс был построен вокруг устройств и серверов, а не этих задач",
            ],
          },
        ],
      },

      userFlowRu,

      {
        type: "text",
        groups: [
          {
            heading: "Задача",
            lines: [
              "Сократить Time-to-Task в лайве, событиях и архиве; увеличить конверсию в подписку; повысить доверие B2C-пользователей; проверить дизайн на части аудитории до полного релиза",
            ],
          },
        ],
      },

      { ...video("main", "Главный экран: лента Recent с часто открываемыми камерами", "square"), solo: true },

      {
        type: "text",
        groups: [
          {
            heading: "Продуктовый процесс",
            lines: [
              "Исследование 12 глубинных интервью с активными пользователями → Гипотезы → Решение → Тестирование → Результат",
            ],
          },
          {
            heading: "Главный экран",
            lines: [
              "На аккаунте в среднем 5–10 камер: личные, рабочие и пошаренные. Но в 78% сессий открывают одни и те же 2–3",
            ],
          },
          {
            heading: "Исследование. 12 глубинных интервью с активными пользователями",
            lines: [
              "— Камеры воспринимают как «зоны контроля» под ежедневные задачи: ребёнок, парковка. К ним нужен доступ за секунду, остальные открывают при ЧП.",
              "— Владельцам многих камер важно сразу видеть, где что-то происходит.",
              "— Новую камеру ищут сразу после подключения.",
              "— Облачные и локальные камеры путают: иконки в заголовках не считываются",
            ],
          },
          {
            heading: "Гипотеза",
            lines: [
              "Если вынести частые камеры наверх, главный экран станет точкой входа в большинство сессий. Сравнили ручное «Избранное» и автоматический Recent",
            ],
          },
          {
            heading: "Recent вместо избранного",
            lines: [
              "— Recent: частые, новые и активные камеры. Новая камера отмечена точкой, как приложение в iOS, и сразу появляется в списке своего сервера.",
              "— Фильтры по типу подключения вместо неочевидных иконок",
            ],
          },
          {
            heading: "83% сессий входят через Recent",
            lines: ["Recent стал точкой входа в 83% ежедневных сессий"],
          },
        ],
      },

      img("home-before-after", "Главный экран до и после редизайна"),

      {
        type: "text",
        groups: [
          {
            heading: "Сценарий 1/3 — Лайв-режим",
            lines: [
              "Под плеером был список других камер. Он дублировал навигацию главного экрана и не помогал разобраться в том, что происходит на этой камере",
            ],
          },
          {
            heading: "Конкурентный анализ",
            lines: [
              "— IPEYE, iCSee: массив технических контролов под видео.",
              "— Ivideon: таймлайн архива сразу под плеером.",
              "— Faceter: смарт-события под видео",
            ],
          },
          {
            heading: "Исследование",
            lines: [
              "Показали пустой экран лайва с одним превью и спросили, что должно быть под видео. 9 из 12 участников назвали список событий",
            ],
          },
          {
            heading: "Лента событий вместо списка камер",
            lines: [
              "Под плеером лента событий камеры по дням с переходом в архив. Для пользователей старой версии добавили онбординг нового пути",
            ],
          },
          {
            heading: "38% переходов в архив через ленту",
            lines: [
              "Результат. За 30 дней 38% переходов в архив идут через ленту событий. Среднее время поиска события сократилось с 32 до 18 секунд (вклад дали лента событий и переработанный архив)",
            ],
          },
        ],
      },

      img("live-before-after", "Экран лайва до и после редизайна"),

      {
        type: "text",
        groups: [
          {
            heading: "Сценарий 2/3 — Архив",
            lines: [
              "Самый сложный экран продукта: контролы занимали весь низ, и было неочевидно, с чего начать поиск.",
            ],
          },
          {
            heading: "Исследование и референсы",
            lines: [
              "— Смена скорости (x2, x4, x8) — одно из самых частых действий в архиве.",
              "— Мы предположили, что при скраббинге палец закрывает шкалу и мешает попасть в нужный момент. В системном редакторе iOS это решено зумом шкалы при долгом удержании.",
            ],
          },
          {
            lines: [
              "Гипотеза. Если шкалу не перекрывает палец, а частые контролы находятся в зоне большого пальца, архивом станут пользоваться чаще.",
            ],
          },
          {
            heading: "Таймлайн над зоной касания",
            lines: [
              "— Таймлайн над зоной касания: палец больше не перекрывает обзор. При точной подстройке шкала растягивается, как в видеоредакторе iOS.",
              "— Кнопка скорости в зоне большого пальца.",
              "— Кнопки перемотки на фиксированный шаг для коротких переходов.",
              "— Экспорт уменьшили: он занимал всю ширину, хотя это не основное действие на экране.",
            ],
          },
          {
            heading: "Архив используют чаще на 18%",
            lines: [
              "Прямой метрики точности не было. На тестировании прототипа все 4 давних клиента отметили, что таймлайном стало удобно пользоваться, а за 60 дней после релиза частота использования архива выросла на 18%.",
            ],
          },
        ],
      },

      square("live-no-tariff", "Экран лайва без подключённого тарифа с промо облачного архива"),

      img("archive", "Экран архива до и после редизайна"),

      {
        type: "squarePair",
        items: [
          square("archive-timeline", "Архив: таймлайн над зоной касания и кнопка скорости"),
          square("archive-calendar", "Календарь архива с цветными точками типов событий"),
        ],
      },

      {
        type: "text",
        groups: [
          {
            heading: "Календарь событий",
            lines: [
              "Старый календарь открывался поповером поверх контента и контролов. Ячейки 40 pt были меньше минимума в 44 pt по HIG: пользователи промахивались по датам и случайно закрывали календарь тапом мимо. Тап сразу применял дату, поэтому каждый промах стоил повторного открытия.",
            ],
          },
          {
            heading: "Гипотеза",
            lines: [
              "Если увеличить зону нажатия, дать возможность исправить выбор и показать, в какие дни что происходило, ошибочных переходов станет меньше.",
            ],
          },
          {
            heading: "Шторка на всю ширину, точки событий",
            lines: [
              "— Календарь стал шторкой на всю ширину, ячейки увеличены с 40 до 50 pt.",
              "— Выбор подтверждается кнопкой: промах можно исправить, не закрывая календарь.",
              "— По умолчанию открыт текущий месяц: даже при архиве на 14–30 дней чаще всего смотрят последние 3–4 дня. Выбор года и месяца убрали, глубокий архив доступен прокруткой.",
              "— Цветные точки под датой показывают типы событий этого дня: движение, звук, человек в кадре, состояние камеры. Легенда в шапке объясняет цвета.",
            ],
          },
          {
            heading: "Ошибка выбора даты: 41% → 16%",
            lines: [
              "За 60 дней доля сессий с ошибочным выбором даты упала с 41% до 16%.",
            ],
          },
        ],
      },

      img("calendar", "Календарь событий до и после редизайна"),

      {
        type: "text",
        groups: [
          {
            heading: "Настройки и финансы",
            lines: [
              "Настройки были техническим разделом: 83% пользователей заходили туда один раз. При этом экран пустовал, хотя внимание пользователя там есть.",
            ],
          },
          {
            heading: "Исследование",
            lines: [
              "— 5 из 12 на интервью делят один аккаунт на всю семью, из-за чего у всех ломаются настройки уведомлений.",
              "— Конкурентный анализ: привязку новой карты нельзя убирать из сценария пополнения, иначе платёж прерывается.",
              "— Маркетплейсы не оставляют пустых экранов: свободное место работает на продажи.",
            ],
          },
          {
            heading: "Гипотезы",
            lines: [
              "— Если занять пустой раздел витриной «камера + подписка», он станет каналом кросс-сейла.",
              "— Если дать семейный доступ с переключением без разлогина, каждый настроит свои уведомления под себя.",
            ],
          },
          {
            heading: "Витрина, карта, семейный доступ",
            lines: [
              "Профиль с балансом наверху, витрина Trassir Store, привязка карты прямо при пополнении, история транзакций, семейный доступ. Тарифы доступны из нескольких точек: при подключении камеры, из её настроек, из раздела My Services и с баннера со скидкой на главной.",
            ],
          },
          {
            heading: "Витрина +18%, семейный доступ не прижился",
            lines: [
              "Витрина дала +18% переходов в магазин оборудования (60 дней). Семейный доступ не сработал там, где задумывался: среди делящих аккаунт дома им воспользовались 7%. Семье нечего разделять, все смотрят одни и те же события. Зато функцию забрал другой сегмент: у 27% пользователей есть второй, рабочий аккаунт, и 64% из них переключаются между аккаунтами регулярно.",
            ],
          },
        ],
      },

      img("settings", "Настройки до и после редизайна: профиль с балансом и витрина"),

      { ...video("settings", "Настройки: профиль, баланс и витрина Trassir Store", "square", 720), solo: true },

      {
        type: "text",
        groups: [
          {
            heading: "Сценарий 3/3 — Уведомления",
            lines: [
              "Лента была плотной и однообразной: крупные карточки, дата на каждой, метки тарифов. Нужное событие приходилось искать прокруткой.",
            ],
          },
          {
            heading: "Исследование и аудит",
            lines: [
              "— Настройки уведомлений искали здесь, а не в общем разделе «Настройки».",
              "— При высокой плотности событий поиск нужного занимал много времени.",
              "— Дата повторялась на каждой карточке и съедала место.",
              "— Пользователи общего аккаунта получали одинаковые уведомления: кто-то мирился, кто-то отключал их полностью.",
            ],
          },
          {
            heading: "Гипотеза",
            lines: [
              "Если уплотнить карточки, сгруппировать события по дням и дать фильтры, нужное событие будет находиться быстрее.",
            ],
          },
          {
            heading: "Компактные карточки и фильтры",
            lines: [
              "— Карточки уменьшили: на экран помещается 9 событий вместо 5.",
              "— Липкие сворачиваемые заголовки с датой вместо даты на каждой карточке, календарь для перехода к нужному дню.",
              "— Фильтры по типам детекций — те же, что в календаре.",
              "— Настройки перенесли в этот раздел и добавили правила: камеры, типы детекций и каналы доставки.",
              "— Метки тарифов убрали: при разборе событий они не нужны.",
            ],
          },
          {
            heading: "Поиск события: 28с → 14с",
            lines: [
              "Среднее время поиска события сократилось с 28 до 14 секунд. 8 из 12 участников отметили, что искать стало удобнее, остальные разницы не заметили.",
            ],
          },
        ],
      },

      img("notifications", "Лента уведомлений до и после редизайна"),

      {
        ...square(
          "notifications-rules",
          "Правило уведомлений: камеры, типы детекций и каналы доставки"
        ),
        solo: true,
      },

      {
        type: "text",
        groups: [
          {
            heading: "Тарифы",
            lines: [
              "Чтобы подключить тариф, пользователь собирал его сам: канал, глубина архива, тип записи, качество видео. Для B2C-сегмента это набор решений, которые он не может принять: неочевидно, чем запись по детектору лучше постоянной и сколько дней архива нужно.",
            ],
          },
          {
            heading: "Готовые пакеты вместо конструктора",
            lines: [
              "Вместе с маркетингом собрали готовые пакеты под типовые сценарии: дом, квартира, малый бизнес, склад, пункт выдачи. Теперь выбор начинается с них, а конструктор остался рядом, кнопкой внизу экрана, для тех, кому нужна ручная настройка.",
            ],
          },
          {
            heading: "68% подключений через пакеты",
            lines: [
              "68% подключений и смен тарифа идут через готовые пакеты, 32% — через ручную настройку.",
            ],
          },
        ],
      },

      img("tariffs", "Тарифы до и после: конструктор и готовые пакеты"),

      {
        type: "text",
        groups: [{ lines: ["Другие экраны"] }],
      },

      {
        type: "squarePair",
        items: [
          square("banner", "Баннер со скидкой на главном экране"),
          square("home-empty", "Пустое состояние главного экрана с витриной оборудования"),
        ],
      },

      {
        type: "squarePair",
        items: [
          square("notify-list", "Пустое состояние ленты уведомлений"),
          square("notify-settings", "Пустое состояние настроек уведомлений"),
        ],
      },

      {
        type: "text",
        groups: [
          {
            heading: "Бренд через контраст",
            lines: [
              "Фирменный фиолетовый красил всё подряд: кнопки, табы, лейблы, активные даты. Когда акцентом выделено всё, он перестаёт выделять. Мы оставили цвет там, где он несёт смысл: бейджи статусов, счётчики непрочитанных, активное состояние, иллюстрации. Остальное стало нейтральным, как в Linear, где акцент работает точечным источником света. Это не отказ от бренда, а его усиление: на спокойном фоне фиолетовый снова заметен. Размытие работает по тому же принципу — только там, где элемент лежит поверх контента: таббар, тулбар, шторки. Это отделяет управление от того, чем управляют.",
            ],
          },
        ],
      },

      img("ui-system", "UI-кит до и после: кнопки, табы, поля и календарь"),

      {
        type: "squarePair",
        items: [
          square("ui-material", "Слои интерфейса: активный и пассивный уровни"),
          video("ui", "Иконки приложения", "square"),
        ],
      },

      {
        type: "text",
        groups: [
          {
            heading: "Тестирование",
            lines: [
              "Канареечный релиз. Выкатили новый дизайн на 30% базы и следили за обращениями в поддержку по трём категориям: навигация, технические сбои, платежи. Жалоб не прибавилось: тикетов по навигации в архиве стало меньше на 6%, по статусу платежей — на 37%. Закрытый тест. Затем проверили новые паттерны на лояльных пользователях — тех, кто в продукте больше года. Нас интересовало, не отторгнут ли они привычный интерфейс. Больше 70% участников оценили новый UI положительно, лента событий вместо списка камер в лайве показалась удобной.",
            ],
          },
          {
            heading: "Итог",
            lines: [
              "После полного релиза метрики выросли по всем трём направлениям. Монетизация. Конверсия в облачные тарифы +9%, переходы в магазин оборудования +18%. 68% подключений и смен тарифа идут через готовые пакеты.",
            ],
          },
          {
            tight: true,
            lines: [
              "Engagement. Поиск события ускорился почти вдвое: с 28 до 14 с в ленте уведомлений и с 32 до 18 с в архиве. Частота использования архива +18%. Recent стал точкой входа в 83% ежедневных сессий.",
            ],
          },
          {
            tight: true,
            lines: [
              "Retention. D30 +7%, D60 +3%: Recent снизил порог входа в повседневный сценарий.",
            ],
          },
          {
            tight: true,
            lines: [
              "Подход. Новые пути добавляли рядом со старыми, а не вместо них: кнопка архива в лайве и конструктор тарифов остались на месте. Привычные сценарии не сломались, а новые приживались сами.",
            ],
          },
        ],
      },
    ],
  },
  en: {
    slug: "trassir-mobile-ios-redesign",
    title: "Trassir mobile",
    subtitle: "redesign 2026",
    blocks: [
      video("preview", "Preview of the Trassir mobile app redesign"),

      {
        type: "text",
        groups: [
          {
            lines: [
              "TRASSIR is a video surveillance platform by the Russian company DSSL. The mobile app lets B2B and B2C users remotely watch live video and archive footage and receive event notifications",
            ],
          },
          {
            pairs: [
              { label: "product", value: "Trassir mobile" },
              { label: "platform", value: "iOS" },
              { label: "role", value: "Product Designer" },
              { label: "year", value: "2026" },
            ],
          },
          {
            heading: "Problem",
            lines: [
              "The app was built as a B2B tool. For the mass B2C user it turned out overloaded: basic scenarios required extra steps, and the value of subscriptions wasn't obvious. Users got lost in the navigation, churned, and wrote to support",
            ],
          },
          {
            heading: "Key insight",
            lines: [
              "80% of time in the app goes to three scenarios: live view, events, and archive. Yet the interface was built around devices and servers, not these tasks",
            ],
          },
        ],
      },

      userFlowEn,

      {
        type: "text",
        groups: [
          {
            heading: "Task",
            lines: [
              "Cut Time-to-Task in live view, events, and archive; increase subscription conversion; build trust with B2C users; validate the design on part of the audience before a full release",
            ],
          },
        ],
      },

      { ...video("main", "Home screen: Recent feed with frequently opened cameras", "square"), solo: true },

      {
        type: "text",
        groups: [
          {
            heading: "Product process",
            lines: [
              "Research — 12 in-depth interviews with active users → Hypotheses → Solution → Testing → Result",
            ],
          },
          {
            heading: "Home screen",
            lines: [
              "An account has 5–10 cameras on average: personal, work, and shared. But 78% of sessions open the same 2–3",
            ],
          },
          {
            heading: "Research. 12 in-depth interviews with active users",
            lines: [
              "— People treat cameras as “control zones” for daily tasks: the kid, the parking lot. They need one-second access to those; the rest get opened only in an emergency.",
              "— Owners of many cameras need to see at a glance where something is happening.",
              "— A new camera gets searched for right after it's connected.",
              "— Cloud and local cameras get confused: the icons in the headers don't read clearly",
            ],
          },
          {
            heading: "Hypothesis",
            lines: [
              "If frequent cameras are surfaced at the top, the home screen becomes the entry point for most sessions. We compared a manual “Favorites” against an automatic Recent",
            ],
          },
          {
            heading: "Recent instead of Favorites",
            lines: [
              "— Recent: frequent, new, and active cameras. A new camera is marked with a dot, like an iOS app, and appears right away in its server's list.",
              "— Filters by connection type instead of unclear icons",
            ],
          },
          {
            heading: "83% of sessions enter through Recent",
            lines: ["Recent became the entry point for 83% of daily sessions"],
          },
        ],
      },

      img("home-before-after", "Home screen before and after the redesign"),

      {
        type: "text",
        groups: [
          {
            heading: "Scenario 1/3 — Live mode",
            lines: [
              "Below the player was a list of other cameras. It duplicated the home screen's navigation and didn't help make sense of what was happening on this particular camera",
            ],
          },
          {
            heading: "Competitive analysis",
            lines: [
              "— IPEYE, iCSee: a grid of technical controls under the video.",
              "— Ivideon: an archive timeline right under the player.",
              "— Faceter: smart events under the video",
            ],
          },
          {
            heading: "Research",
            lines: [
              "We showed an empty live screen with a single preview and asked what should be under the video. 9 of 12 participants said a list of events",
            ],
          },
          {
            heading: "Event feed instead of a camera list",
            lines: [
              "Under the player is this camera's event feed grouped by day, with a jump into the archive. For users of the old version we added onboarding for the new flow",
            ],
          },
          {
            heading: "38% of archive visits come through the feed",
            lines: [
              "Result. Over 30 days, 38% of archive visits go through the event feed. Average time to find an event dropped from 32 to 18 seconds (thanks to both the event feed and the reworked archive)",
            ],
          },
        ],
      },

      img("live-before-after", "Live screen before and after the redesign"),

      {
        type: "text",
        groups: [
          {
            heading: "Scenario 2/3 — Archive",
            lines: [
              "The product's most complex screen: controls took up the entire bottom, and it wasn't obvious where to start searching.",
            ],
          },
          {
            heading: "Research and references",
            lines: [
              "— Changing speed (x2, x4, x8) is one of the most common actions in the archive.",
              "— We hypothesized that while scrubbing, a finger covers the scrubber and makes it hard to land on the right moment. iOS's own video editor solves this by zooming the scrubber on a long press.",
            ],
          },
          {
            lines: [
              "Hypothesis. If the finger no longer covers the scrubber, and frequent controls sit within thumb's reach, people will use the archive more.",
            ],
          },
          {
            heading: "Timeline above the touch zone",
            lines: [
              "— Timeline above the touch zone: the finger no longer blocks the view. For fine adjustment the scrubber stretches, like in iOS's video editor.",
              "— Speed button within thumb's reach.",
              "— Seek buttons with a fixed step for short jumps.",
              "— Export was shrunk: it used to take the full width even though it's not the screen's primary action.",
            ],
          },
          {
            heading: "Archive usage up 18%",
            lines: [
              "There was no direct accuracy metric. In prototype testing, all 4 long-time clients noted the timeline had become easy to use, and 60 days after release, archive usage frequency rose by 18%.",
            ],
          },
        ],
      },

      square("live-no-tariff", "Live screen with no plan connected, showing a cloud archive promo"),

      img("archive", "Archive screen before and after the redesign"),

      {
        type: "squarePair",
        items: [
          square("archive-timeline", "Archive: timeline above the touch zone and the speed button"),
          square("archive-calendar", "Archive calendar with color-coded event-type dots"),
        ],
      },

      {
        type: "text",
        groups: [
          {
            heading: "Event calendar",
            lines: [
              "The old calendar opened as a popover over the content and controls. The 40 pt cells were below HIG's 44 pt minimum: users missed dates and accidentally closed the calendar by tapping outside it. A tap applied the date immediately, so every miss cost a re-open.",
            ],
          },
          {
            heading: "Hypothesis",
            lines: [
              "If we enlarge the tap target, allow correcting the selection, and show which days had activity, mis-taps will drop.",
            ],
          },
          {
            heading: "Full-width sheet, event dots",
            lines: [
              "— The calendar became a full-width sheet, cells enlarged from 40 to 50 pt.",
              "— Selection is confirmed with a button: a mis-tap can be corrected without closing the calendar.",
              "— The current month opens by default: even with a 14–30 day archive, people mostly check the last 3–4 days. Year and month pickers were removed; deeper archive is reached by scrolling.",
              "— Colored dots under the date show that day's event types: motion, sound, a person in frame, camera status. A legend in the header explains the colors.",
            ],
          },
          {
            heading: "Date-selection errors: 41% → 16%",
            lines: [
              "Over 60 days, the share of sessions with a mistaken date selection dropped from 41% to 16%.",
            ],
          },
        ],
      },

      img("calendar", "Event calendar before and after the redesign"),

      {
        type: "text",
        groups: [
          {
            heading: "Settings and billing",
            lines: [
              "Settings was a technical section: 83% of users opened it exactly once. Yet the screen sat empty, even though it had the user's attention.",
            ],
          },
          {
            heading: "Research",
            lines: [
              "— 5 of 12 interviewees share one account across the whole family, which breaks everyone's notification settings.",
              "— Competitive analysis: linking a new card can't be removed from the top-up flow, or the payment breaks.",
              "— Marketplaces never leave a screen empty: free space works for sales.",
            ],
          },
          {
            heading: "Hypotheses",
            lines: [
              "— If the empty section is filled with a “camera + subscription” store, it becomes a cross-sell channel.",
              "— If we give family access with switching and no re-login, everyone can tune their own notifications.",
            ],
          },
          {
            heading: "Store, card, family access",
            lines: [
              "A profile with balance at the top, the Trassir Store, card linking right inside the top-up flow, transaction history, family access. Plans are reachable from several entry points: when connecting a camera, from its settings, from the My Services section, and from a discount banner on the home screen.",
            ],
          },
          {
            heading: "Store +18%, family access didn't stick",
            lines: [
              "The store drove +18% visits to the hardware store (60 days). Family access didn't work where it was meant to: only 7% of people sharing a home account used it — a family has nothing to divide, everyone watches the same events. But a different segment picked it up instead: 27% of users have a second, work account, and 64% of them switch between accounts regularly.",
            ],
          },
        ],
      },

      img("settings", "Settings before and after the redesign: profile with balance and the store"),

      { ...video("settings", "Settings: profile, balance, and the Trassir Store", "square", 720), solo: true },

      {
        type: "text",
        groups: [
          {
            heading: "Scenario 3/3 — Notifications",
            lines: [
              "The feed was dense and repetitive: large cards, a date on every one, plan badges. Finding the right event meant scrolling.",
            ],
          },
          {
            heading: "Research and audit",
            lines: [
              "— People looked for notification settings here, not in the general Settings section.",
              "— With a high density of events, finding the right one took a long time.",
              "— The date repeated on every card and ate up space.",
              "— Users of a shared account got identical notifications: some put up with it, some turned them off entirely.",
            ],
          },
          {
            heading: "Hypothesis",
            lines: [
              "If cards are made denser, events are grouped by day, and filters are added, the right event will be found faster.",
            ],
          },
          {
            heading: "Compact cards and filters",
            lines: [
              "— Cards were shrunk: 9 events now fit on screen instead of 5.",
              "— Sticky, collapsible date headers replace a date on every card, plus a calendar to jump to a given day.",
              "— Detection-type filters — the same ones as in the calendar.",
              "— Settings moved into this section, with added rules: cameras, detection types, and delivery channels.",
              "— Plan badges were removed: they're not needed when going through events.",
            ],
          },
          {
            heading: "Finding an event: 28s → 14s",
            lines: [
              "Average time to find an event dropped from 28 to 14 seconds. 8 of 12 participants said searching got easier; the rest didn't notice a difference.",
            ],
          },
        ],
      },

      img("notifications", "Notification feed before and after the redesign"),

      {
        ...square(
          "notifications-rules",
          "Notification rule: cameras, detection types, and delivery channels"
        ),
        solo: true,
      },

      {
        type: "text",
        groups: [
          {
            heading: "Plans",
            lines: [
              "To connect a plan, the user had to assemble it themselves: channel, archive depth, recording type, video quality. For the B2C segment, that's a set of decisions they can't make: it's not obvious why detector-based recording beats continuous, or how many days of archive they need.",
            ],
          },
          {
            heading: "Ready-made packages instead of a builder",
            lines: [
              "Together with marketing we put together ready-made packages for typical scenarios: house, apartment, small business, warehouse, pickup point. The choice now starts with these, and the builder stays nearby as a button at the bottom of the screen, for those who need manual configuration.",
            ],
          },
          {
            heading: "68% of activations go through packages",
            lines: [
              "68% of plan activations and switches go through ready-made packages, 32% through manual configuration.",
            ],
          },
        ],
      },

      img("tariffs", "Plans before and after: builder and ready-made packages"),

      {
        type: "text",
        groups: [{ lines: ["Other screens"] }],
      },

      {
        type: "squarePair",
        items: [
          square("banner", "Discount banner on the home screen"),
          square("home-empty", "Home screen empty state with the hardware store"),
        ],
      },

      {
        type: "squarePair",
        items: [
          square("notify-list", "Notification feed empty state"),
          square("notify-settings", "Notification settings empty state"),
        ],
      },

      {
        type: "text",
        groups: [
          {
            heading: "Brand through contrast",
            lines: [
              "The brand purple colored everything: buttons, tabs, labels, active dates. When the accent is on everything, it stops standing out. We kept color where it carries meaning: status badges, unread counters, active state, illustrations. Everything else turned neutral, like in Linear, where the accent works as a single point of light. This isn't abandoning the brand but sharpening it: against a calm background, purple stands out again. Blur works on the same principle — only where an element sits over content: tab bar, toolbar, sheets. It separates the controls from what they control.",
            ],
          },
        ],
      },

      img("ui-system", "UI kit before and after: buttons, tabs, fields, and the calendar"),

      {
        type: "squarePair",
        items: [
          square("ui-material", "Interface layers: active and passive levels"),
          video("ui", "App icons", "square"),
        ],
      },

      {
        type: "text",
        groups: [
          {
            heading: "Testing",
            lines: [
              "Canary release. We rolled the new design out to 30% of the base and tracked support tickets across three categories: navigation, technical failures, payments. Complaints didn't rise: navigation-related archive tickets dropped by 6%, payment-status tickets by 37%. Closed test. We then checked the new patterns on loyal users — those with the product for over a year. We wanted to know whether they'd reject the familiar interface. Over 70% of participants rated the new UI positively; the event feed instead of a camera list in live view felt convenient.",
            ],
          },
          {
            heading: "Outcome",
            lines: [
              "After the full release, metrics rose across all three directions. Monetization. Cloud plan conversion +9%, hardware store visits +18%. 68% of plan activations and switches go through ready-made packages.",
            ],
          },
          {
            tight: true,
            lines: [
              "Engagement. Finding an event got almost twice as fast: from 28 to 14s in the notification feed and from 32 to 18s in the archive. Archive usage frequency +18%. Recent became the entry point for 83% of daily sessions.",
            ],
          },
          {
            tight: true,
            lines: [
              "Retention. D30 +7%, D60 +3%: Recent lowered the barrier to entering the everyday scenario.",
            ],
          },
          {
            tight: true,
            lines: [
              "Approach. New paths were added alongside the old ones, not instead of them: the archive button in live view and the plan builder stayed put. Familiar scenarios didn't break, and the new ones took hold on their own.",
            ],
          },
        ],
      },
    ],
  },
};
