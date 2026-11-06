import type { CaseImageBlock, CaseSquareBlock, CaseStudyData } from "./blocks";

const img = (
  name: string,
  alt: string,
  width = 2048,
  height = 1057
): CaseImageBlock => ({
  type: "image",
  src: `/images/plati-chastyami/${name}.webp`,
  alt,
  width,
  height,
});

const square = (
  name: string,
  alt: string,
  size = 1024
): CaseSquareBlock => ({
  type: "square",
  src: `/images/plati-chastyami/${name}.webp`,
  alt,
  width: size,
  height: size,
});

export const platiChastyami: Record<"ru" | "en", CaseStudyData> = {
  ru: {
    slug: "sportmaster-banner-builder",
    title: "Плати частями",
    subtitle: "концепт 2026",
    blocks: [
      img("cover", "Плати частями — ключевой визуал концепта"),

      {
        type: "text",
        groups: [
          {
            lines: [
              "Маркетплейсы заняли рынок, а потенциал BNPL остался нераскрытым. Я сделал рассрочку простым социальным опытом — для онлайна и для оплаты по QR-коду.",
            ],
          },
          {
            pairs: [
              { label: "продукт", value: "продуктовый концепт" },
              { label: "платформа", value: "iOS" },
              { label: "роль", value: "дизайнер продукта" },
              { label: "год", value: "2026" },
            ],
          },
        ],
      },

      img("feed", "Лента приложения с контентом блогеров и карточкой товара", 2048, 1024),

      {
        type: "text",
        groups: [
          {
            heading: "Проблема",
            lines: [
              "Приложения рассрочек похожи: список партнёрских магазинов банка, выбирай и заходи. Выглядит просто, но за этим — трения, которые отбивают желание купить ещё до оплаты.",
            ],
          },
          {
            heading: "Почему «Плати частями»",
            lines: [
              "У Сбера есть экосистема, аудитория, «Спасибо». Но СберБанк Онлайн — про деньги, не про шопинг: покупка там не рождается.",
              "Мерчантам не всегда выгодно переезжать на склады СберЛогистики. Зато продавать на их аудиторию без чужих складов и рисков — ниша открыта.",
              "«Плати частями» может стать витриной и рекламной площадкой для брендов и блогеров.",
            ],
          },
        ],
      },

      {
        type: "squarePair",
        items: [
          {
            type: "square",
            src: "/images/plati-chastyami/problem-friction.webp",
            alt: "Шесть точек трения в текущем опыте сервисов рассрочки",
            width: 1024,
            height: 1024,
          },
          {
            type: "square",
            src: "/images/plati-chastyami/competitors-ui.webp",
            alt: "Интерфейсы условий рассрочки у конкурентов",
            width: 1022,
            height: 1022,
          },
        ],
      },

      {
        type: "text",
        groups: [
          {
            heading: "Доля пользователей сервисов рассрочки",
            statPairs: true,
            pairs: [
              { label: "Халва", value: "49%" },
              { label: "Долями", value: "38%" },
              { label: "Подели", value: "13%" },
              { label: "Плати частями", value: "вне тройки" },
            ],
          },
          {
            heading: "Лидер играет не по этим правилам",
            lines: [
              "«Халва» юридически — кредитка, не рассрочка. Закон 283-ФЗ её не касается: 10–36 месяцев против наших четырёх к 2028-му.",
            ],
          },
          {
            heading: "Интересный факт о ЦА",
            lines: [
              "Женщины пользуются рассрочкой в 1,5 раза чаще мужчин. Но среди активных пользователей отдельных BNPL-приложений мужчин больше: женщины чаще платят частями, мужчины — чаще ставят приложение.",
            ],
          },
        ],
      },

      img("competitors-table", "Таблица сравнения BNPL-сервисов по условиям", 1860, 930),

      {
        type: "text",
        groups: [
          {
            heading: "Преимущества",
            lines: [
              "Сбер знает финансы 110 млн человек. Такую историю доверия не скопировать и не купить.",
            ],
          },
          {
            heading: "В чём отстаёт",
            lines: [
              "Поздний контакт: появляемся только в корзине, а не на витрине магазина.",
              "Нет цифр для бизнеса: пока не можем доказать партнёрам свою ценность на графиках.",
            ],
          },
        ],
      },

      img("hypotheses", "Шесть гипотез H1–H6 с метриками проверки"),

      {
        type: "text",
        groups: [
          {
            heading: "Откуда взялись гипотезы",
            lines: [
              "Гипотезы родились из анализа рынка и конкурентов. Четыре интервью часть подтвердили, часть заставили переформулировать.",
            ],
          },
          {
            lines: [
              "H3 закрывает дыру в бизнес-модели: после 283-ФЗ конкуренты зарабатывают на кросс-селле кредитов, а не на штрафах — у нас такого канала нет. Решение — «скор доверия»: дисциплина в рассрочке открывает платные продукты банка. В интервью это не проверялось — нужен когортный анализ, честно называю это риском. Проверить можно иначе: спрашивать не «взяли бы?», а предлагал ли банк кредит за аккуратные платежи — и как человек реагировал.",
            ],
          },
          {
            heading: "Интервью",
            lines: [
              "3 голосовых и 1 офлайн-интервью. Маленькая выборка, но три вывода подтвердились у всех четырёх. Главное — интервью трижды заставили переформулировать то, что казалось очевидным. Это ценнее, чем совпадение с первой гипотезой.",
            ],
          },
        ],
      },

      { ...square("interview", "Расшифровка интервью с респондентом и голосовые сообщения", 1022), solo: true },

      {
        type: "text",
        groups: [
          {
            heading: "Добавил пять решений — и почему они зайдут",
            lines: [
              "Каждое опирается на то, что уже происходит на рынке сегодня — не на прогноз на пять лет вперёд.",
            ],
          },
        ],
      },

      img("solutions", "Пять решений: бюджет, Sber ID, лента, помощник, сканер"),
      img("user-flow", "Карта пользовательских сценариев приложения", 2048, 1024),

      {
        type: "text",
        groups: [
          {
            heading: "Я создал три персоны",
            lines: ["Прогнал их через флоу — проверить, закроют ли они свою потребность."],
          },
          {
            heading: "Анна",
            lines: [
              "Вынужденная трата при хорошей истории. Зарплатный клиент три года, вовремя закрыла рассрочку на телефон, взяла новую. Тут сломалась стиральная машина — ждать нельзя. Экран отвечает «да, потянешь», считая по её денежному потоку. Парень предлагает закрыть часть за телефон.",
            ],
          },
        ],
      },

      img("persona-anna", "Персона Анна: внезапно сломалась стиральная машина"),

      {
        type: "text",
        groups: [
          {
            lines: [
              "Каталог → Карточка товара → В магазин → Оформление товара (+ бонусы Спасибо) → Ссылка поделится рассрочкой с Димой",
            ],
          },
        ],
      },

      img("anna-flow", "Сценарий Анны: каталог, карточка товара и график платежей"),

      {
        type: "text",
        groups: [
          {
            heading: "Дима",
            lines: ["Три активные рассрочки, оформляет четвёртую — и уже после того, как помог Анне."],
          },
          {
            lines: [
              "Дима не берёт куртку — уходит в «Накопи под 14% годовых»: деньги остаются в банке, покупка откладывается. Сделки сегодня нет, но нет и просрочки через месяц, и клиента, который после неё не откроет приложение снова. Банк зарабатывает на обороте и комиссии магазина — не на чужих просрочках.",
              "Отложенная покупка — не потерянная, а сохранённый клиент.",
            ],
          },
        ],
      },

      img("persona-dima", "Персона Дима: выбирает куртку в магазине"),

      {
        type: "text",
        groups: [
          {
            lines: [
              "Сканер → Экран предупреждения → Увидел баннер про вклад → Перешёл в СберБанк Онлайн → Оформил вклад, чтобы копить",
            ],
          },
        ],
      },

      img("dima-flow", "Сценарий Димы: сканер QR, предупреждение о нагрузке и вклад"),

      {
        type: "text",
        groups: [
          {
            heading: "Мария",
            lines: [
              "Выходит замуж и сразу переезжает — два повода подряд, и оба требуют вещей. Её боль: неловко просить конкретные подарки — не попросит, получит три чайника и всё равно докупит нужное сама. Боль гостей: не знают, что дарить, дублируют друг друга или несут конверт «на всякий случай».",
            ],
          },
        ],
      },

      img("persona-maria", "Персона Мария: свадьба и список подарков"),

      {
        type: "text",
        groups: [
          {
            lines: [
              "Собирает вишлист из каталога → Копирует ссылку на вишлист → Публикует в соцсетях или присылает в группу.",
              "Гость переходит по ссылке → Оформляет у нас рассрочку (+ бонусы Спасибо, + новый пользователь)",
            ],
          },
        ],
      },

      img("maria-flow", "Сценарий Марии: вишлист и приглашение скинуться"),

      {
        type: "text",
        groups: [
          {
            heading: "Если выбор поставщика станет обязательным, мы окажемся в лучшей позиции",
            lines: [
              "Если закон уравняет условия для всех — цену, срок, комиссию — дистрибуция конкурентов перестанет быть преимуществом. У нас останутся бонусы «Спасибо» за рассрочку — таких нет ни у кого при 98,9 млн участников программы. И экосистема, где зарплата и все рассрочки — на одном графике.",
            ],
          },
        ],
      },

      square("promo", "Промо-механика: розыгрыш за оплату частями на терминалах Сбера", 1022),

      {
        type: "text",
        groups: [
          {
            heading: "Помощник знает тебя, а не только моду",
            lines: [
              "Помощник знает, что у тебя уже есть — пальто, диван, стиральную машину. На «хочу кресло для перестановки» он отвечает не каталогом на тысячу позиций, а парой вариантов под комнату и бюджет. Те же данные, что считают «потянешь ли», здесь отвечают «подойдёт ли».",
            ],
          },
        ],
      },

      img("assistant", "Чат с ИИ-помощником для подбора товаров"),
      img("assistant-cards", "Экраны: поделиться рассрочкой, умный помощник, контроль баланса"),
      img("catalog", "Каталог со скидками и подборками"),
      img("stories", "Сторис и контент блогеров в ленте"),
      img("product", "Карточка товара с выбором размера"),
      img("wishlist", "Вишлист и избранные товары"),
      img("payment", "Оформление платежа"),

      {
        type: "text",
        groups: [{ lines: ["Интеграция в СберБанк Онлайн"] }],
      },

      img("sber-online", "Интеграция рассрочек в СберБанк Онлайн"),
      img("icons", "Набор 3D-иконок для интерфейса"),

      {
        type: "text",
        groups: [
          {
            heading: "Спасибо за внимание!",
            lines: [
              "Через пять лет «Плати частями» — способ не копить долг, а не способ занять. Сервис считает нагрузку до покупки и предлагает выходы: другой срок, часть суммы своими, перенос платежа или оплата от близкого без обязательств. Ссылка в соцсетях превращает повод в предложение скинуться — вместо кредита деньги остаются внутри круга, а новые пользователи приходят по приглашению, не по рекламе. Бизнесу это даёт покупателя, который платит по средствам и возвращается, потому что не остался в долгах.",
            ],
          },
        ],
      },

      square("share", "Отправка ссылки на рассрочку в мессенджере", 1022),
    ],
  },
  en: {
    slug: "sportmaster-banner-builder",
    title: "Pay in Installments",
    subtitle: "concept 2026",
    blocks: [
      img("cover", "Pay in Installments — key visual of the concept"),

      {
        type: "text",
        groups: [
          {
            lines: [
              "Marketplaces have taken over the market, while BNPL's potential stays untapped. I turned installments into a simple social experience — online and for QR-code payments.",
            ],
          },
          {
            pairs: [
              { label: "product", value: "product concept" },
              { label: "platform", value: "iOS" },
              { label: "role", value: "Product Designer" },
              { label: "year", value: "2026" },
            ],
          },
        ],
      },

      img("feed", "App feed with blogger content and a product card", 2048, 1024),

      {
        type: "text",
        groups: [
          {
            heading: "Problem",
            lines: [
              "Installment apps all look alike: a list of the bank's partner stores, pick one and go. Looks simple, but behind it is friction that kills the urge to buy before checkout even starts.",
            ],
          },
          {
            heading: "Why “Pay in Installments”",
            lines: [
              "Sber has the ecosystem, the audience, Spasibo bonus points. But SberBank Online is about money, not shopping — a purchase just doesn't start there.",
              "Moving onto SberLogistics warehouses isn't always worth it for merchants. But selling to that audience with no warehouses or risk of their own — that niche is open.",
              "“Pay in Installments” can become a storefront and ad platform for brands and bloggers.",
            ],
          },
        ],
      },

      {
        type: "squarePair",
        items: [
          {
            type: "square",
            src: "/images/plati-chastyami/problem-friction.webp",
            alt: "Six friction points in the current installment-service experience",
            width: 1024,
            height: 1024,
          },
          {
            type: "square",
            src: "/images/plati-chastyami/competitors-ui.webp",
            alt: "Competitors' installment-terms interfaces",
            width: 1022,
            height: 1022,
          },
        ],
      },

      {
        type: "text",
        groups: [
          {
            heading: "Share of installment-service users",
            statPairs: true,
            pairs: [
              { label: "Khalva", value: "49%" },
              { label: "Dolyami", value: "38%" },
              { label: "Podeli", value: "13%" },
              { label: "Pay in Installments", value: "outside top 3" },
            ],
          },
          {
            heading: "The leader doesn't play by these rules",
            lines: [
              "“Khalva” is legally a credit card, not an installment plan. Federal Law 283-FZ doesn't apply to it: 10–36 months against our four by 2028.",
            ],
          },
          {
            heading: "An interesting fact about the audience",
            lines: [
              "Women use installment plans 1.5x more than men. But among active users of standalone BNPL apps, men are the majority: women pay in installments more, men install the app more.",
            ],
          },
        ],
      },

      img("competitors-table", "Comparison table of BNPL services by terms", 1860, 930),

      {
        type: "text",
        groups: [
          {
            heading: "Advantages",
            lines: [
              "Sber knows the finances of 110 million people. That kind of trust can't be copied or bought.",
            ],
          },
          {
            heading: "Where it falls behind",
            lines: [
              "Late contact: we only show up at checkout, not on the store's storefront.",
              "No numbers for the business: we can't yet prove our value to partners with charts.",
            ],
          },
        ],
      },

      img("hypotheses", "Six hypotheses H1–H6 with their test metrics"),

      {
        type: "text",
        groups: [
          {
            heading: "Where the hypotheses came from",
            lines: [
              "The hypotheses came from market and competitor analysis. Four interviews confirmed some and forced others to be reframed.",
            ],
          },
          {
            lines: [
              "H3 closes a gap in the business model: after 283-FZ, competitors earn on credit cross-sell, not late fees — we have no such channel. The fix is a “trust score”: discipline in installments unlocks paid bank products. The interviews didn't test this — it needs cohort analysis, so I'll call it a risk, honestly. It can still be checked differently: not “would you take it?” but whether the bank ever offered a loan for on-time payments, and how people reacted.",
            ],
          },
          {
            heading: "Interviews",
            lines: [
              "3 voice messages and 1 in-person interview. A small sample, but three findings held up across all four. More importantly, the interviews forced three reframes of what seemed obvious — worth more than confirming the first guess.",
            ],
          },
        ],
      },

      { ...square("interview", "Interview transcript with a respondent and voice messages", 1022), solo: true },

      {
        type: "text",
        groups: [
          {
            heading: "I added five solutions — and why they'll land",
            lines: [
              "Each one builds on what's already happening in the market today — not a five-year forecast.",
            ],
          },
        ],
      },

      img("solutions", "Five solutions: budget, Sber ID, feed, assistant, scanner"),
      img("user-flow", "Map of the app's user scenarios", 2048, 1024),

      {
        type: "text",
        groups: [
          {
            heading: "I created three personas",
            lines: ["I ran them through the flow to see if it met their need."],
          },
          {
            heading: "Anna",
            lines: [
              "A forced expense with a good track record. A payroll client for three years, she paid off her phone plan on time and took a new one. Then the washing machine broke — it can't wait. The screen says “yes, you can handle it,” based on her cash flow. Her boyfriend offers to cover part of the phone.",
            ],
          },
        ],
      },

      img("persona-anna", "Persona Anna: the washing machine suddenly broke"),

      {
        type: "text",
        groups: [
          {
            lines: [
              "Catalog → Product card → Go to store → Checkout (+ Spasibo bonus points) → Link to share the installment plan with Dima",
            ],
          },
        ],
      },

      img("anna-flow", "Anna's scenario: catalog, product card, and payment schedule"),

      {
        type: "text",
        groups: [
          {
            heading: "Dima",
            lines: ["Three active installment plans, taking out a fourth — right after helping Anna."],
          },
          {
            lines: [
              "Dima skips the jacket — moves to “Save at 14% APY”: the money stays with the bank, the purchase waits. No deal today, but also no missed payment next month, and no customer who never opens the app again after that. The bank earns on turnover and the store's commission — not on other people's missed payments.",
              "A deferred purchase isn't a lost one — it's a kept customer.",
            ],
          },
        ],
      },

      img("persona-dima", "Persona Dima: picking out a jacket in the store"),

      {
        type: "text",
        groups: [
          {
            lines: [
              "Scanner → Warning screen → Sees a savings-account banner → Goes to SberBank Online → Opens a savings account to save up",
            ],
          },
        ],
      },

      img("dima-flow", "Dima's scenario: QR scanner, a debt-load warning, and a savings account"),

      {
        type: "text",
        groups: [
          {
            heading: "Maria",
            lines: [
              "Getting married and moving right after — two occasions back to back, both needing things. Her pain: it feels awkward to ask for specific gifts — if she doesn't, she'll get three kettles and still have to buy what she needs herself. The guests' pain: they don't know what to give, duplicate each other, or bring an envelope “just in case.”",
            ],
          },
        ],
      },

      img("persona-maria", "Persona Maria: a wedding and a gift list"),

      {
        type: "text",
        groups: [
          {
            lines: [
              "Builds a wishlist from the catalog → Copies the wishlist link → Posts it on social media or sends it to a group chat.",
              "A guest follows the link → Sets up an installment plan with us (+ Spasibo bonus points, + a new user)",
            ],
          },
        ],
      },

      img("maria-flow", "Maria's scenario: wishlist and a chip-in invitation"),

      {
        type: "text",
        groups: [
          {
            heading: "If provider choice becomes mandatory, we'll be in a better position",
            lines: [
              "If a law levels the terms for everyone — price, term, commission — competitors' distribution stops being an advantage. We'd still have Spasibo bonus points for installments, which nobody else offers, with 98.9 million program members. And the ecosystem, where payroll and every installment plan sit on one timeline.",
            ],
          },
        ],
      },

      square("promo", "Promo mechanic: a giveaway for paying in installments at Sber terminals", 1022),

      {
        type: "text",
        groups: [
          {
            heading: "The assistant knows you, not just trends",
            lines: [
              "The assistant knows what you already own — a coat, a sofa, a washing machine. To “I want an armchair for a rearrange” it answers not with a thousand-item catalog, but a couple of options that fit the room and the budget. The same data that answers “can you afford it” here answers “will it fit.”",
            ],
          },
        ],
      },

      img("assistant", "Chat with the AI assistant for picking products"),
      img("assistant-cards", "Screens: share an installment plan, smart assistant, balance control"),
      img("catalog", "Catalog with discounts and curated picks"),
      img("stories", "Stories and blogger content in the feed"),
      img("product", "Product card with size selection"),
      img("wishlist", "Wishlist and favorite items"),
      img("payment", "Payment checkout"),

      {
        type: "text",
        groups: [{ lines: ["Integration into SberBank Online"] }],
      },

      img("sber-online", "Installment integration in SberBank Online"),
      img("icons", "Set of 3D interface icons"),

      {
        type: "text",
        groups: [
          {
            heading: "Thank you for your attention!",
            lines: [
              "In five years, “Pay in Installments” is a way not to pile up debt — not a way to borrow. The service calculates debt load before the purchase and offers exits: a different term, part of the sum upfront, a postponed payment, or a payment from a loved one with no obligation attached. A social-media link turns an occasion into a chip-in — instead of a loan, the money stays within the circle, and new users arrive by invitation, not by ads. For the business, that means a customer who pays within their means and comes back, because they weren't left in debt.",
            ],
          },
        ],
      },

      square("share", "Sending an installment-plan link in a messenger", 1022),
    ],
  },
};
