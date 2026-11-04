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
              "Рынок захватили маркетплейсы, а потенциал BNPL-приложений не раскрыт. Я захотел разрушить стереотип о сложной бюрократии, сделав рассрочки бесшовным социальным опытом — как для онлайна, так и для офлайн-оплат по QR-коду.",
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

      img("feed", "Лента приложения с контентом блогеров и карточкой товара", 2048, 1024),

      {
        type: "text",
        groups: [
          {
            heading: "Проблема",
            lines: [
              "Приложения рассрочек похожи друг на друга: внутри — список сайтов-партнёров банка, зайди и выбирай магазин по вкусу. Кажется простым, но за этой простотой скрывается цепочка трений, которая отбивает желание пользоваться сервисом ещё до покупки.",
            ],
          },
          {
            heading: "Почему «Плати частями»",
            lines: [
              "У Сбера есть экосистема, аудитория и «Спасибо», но «Плати частями» проигрывает в опыте. СберБанк Онлайн — управление деньгами, не шопинг: покупка рождается в другом состоянии и не возникает среди счетов.",
              "Мерчантам не всегда выгодно переезжать на склады СберЛогистики. Зато продавать на огромную аудиторию без привязки к чужой инфраструктуре и лишних рисков — предложение, от которого сложно отказаться. А значит, ниша не занята.",
              "«Плати частями» может стать витриной и рекламной площадкой для брендов и блогеров, удерживая аудиторию в одном потоке покупок.",
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
            alt: "Шесть точек трения в текущем опыте сервисов рассрочки",
            width: 1024,
            height: 1024,
          },
          {
            type: "square",
            src: "/images/plati-chastyami/competitors-ui.webp",
            alt: "Интерфейсы условий рассрочки у конкурентов",
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
            heading: "Лидер играет не по этим правилам",
            lines: [
              "«Халва» — юридически кредитная карта, а не рассрочка. Она не попадает под потолок 283-ФЗ и спокойно даёт 10–36 месяцев против наших четырёх к 2028 году.",
            ],
          },
          {
            heading: "Интересный факт о ЦА",
            lines: [
              "Женщины пользуются рассрочкой в 1,5 раза чаще мужчин — но среди ежемесячно активных пользователей отдельных приложений BNPL мужчин больше. Разрыв читается так: женщины чаще платят частями, мужчины чаще доходят до установки приложения.",
            ],
          },
        ],
      },

      img("competitors-table", "Таблица сравнения BNPL-сервисов по условиям"),

      {
        type: "text",
        groups: [
          {
            heading: "Преимущества",
            lines: [
              "Уникальные данные. Сбер знает финансы 110 млн человек. Эту историю доверия невозможно скопировать или купить.",
            ],
          },
          {
            heading: "В чём отстаёт",
            lines: [
              "Поздний контакт: появляемся только в корзине, а не на витрине магазина.",
              "Нет цифр для бизнеса: пока не можем доказать партнёрам свою ценность на графиках.",
            ],
          },
        ],
      },

      img("hypotheses", "Шесть гипотез H1–H6 с метриками проверки"),

      {
        type: "text",
        groups: [
          {
            heading: "Откуда взялись гипотезы",
            lines: [
              "Гипотезы выросли из анализа рынка и конкурентов ещё до интервью. Четыре разговора часть подтвердили, часть заставили переформулировать.",
            ],
          },
          {
            lines: [
              "H3 закрывает дыру бизнес-модели: после 283-ФЗ конкуренты монетизируются кросс-селлом кредитов вместо штрафов, а у «Плати частями» такого канала нет. Решение — «скор доверия»: дисциплина в рассрочке конвертируется в покупку платных продуктов банка. В интервью гипотеза не проверялась — оценка требует когортного анализа, поэтому на защите её стоит честно назвать риском. Проверить качественно всё же можно: спрашивать не «взяли бы?», а о прошлом — предлагал ли банк кредит за аккуратные платежи и как респондент реагировал.",
            ],
          },
          {
            heading: "Интервью",
            lines: [
              "3 голосовых сообщения и 1 офлайн. Выборка маленькая, но три ключевых вывода подтвердились у всех четырёх, а не у большинства. Интервью не просто подтвердили гипотезы — они трижды заставили переформулировать то, что казалось очевидным, а это ценнее, чем совпадение с первого предположения.",
            ],
          },
        ],
      },

      { ...square("interview", "Расшифровка интервью с респондентом и голосовые сообщения", 1022), solo: true },

      {
        type: "text",
        groups: [
          {
            heading: "Добавил пять решений — и почему они зайдут",
            lines: [
              "Каждое опирается на то, что уже происходит с рынком и поведением людей сегодня, а не на предположение, что через пять лет всё станет иначе.",
            ],
          },
        ],
      },

      img("solutions", "Пять решений: бюджет, Sber ID, лента, помощник, сканер"),
      img("user-flow", "Карта пользовательских сценариев приложения"),

      {
        type: "text",
        groups: [
          {
            heading: "Я создал три персоны",
            lines: ["Прогнал их по флоу, чтобы посмотреть, как они закроют свои потребности."],
          },
          {
            heading: "Анна",
            lines: [
              "Вынужденная трата и запас доверия. Зарплатный клиент три года, недавно погасила рассрочку на телефон вовремя, и взяла новый. Но не вовремя сломалась стиральная машина — отложить нельзя. Ответ экрана: «да, потянешь» — с расчётом по её денежному потоку. Плюс её парень предложил помочь покрыть часть за телефон.",
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
              "Каталог → Карточка товара → В магазин → Оформление товара (+ бонусы Спасибо) → Ссылка поделится рассрочкой с Димой",
            ],
          },
        ],
      },

      img("anna-flow", "Сценарий Анны: каталог, карточка товара и график платежей"),

      {
        type: "text",
        groups: [
          {
            heading: "Дима",
            lines: ["Три активные рассрочки, оформляет четвёртую — и уже после того, как помог Анне."],
          },
          {
            lines: [
              "Дмитрий не берёт куртку. С этого же экрана он уходит в «Накопи до 14 % годовых»: деньги остаются в банке, покупка переносится. Сделки сегодня нет — но нет и просрочки через месяц, и человека, который после неё больше не откроет приложение. «Плати частями» зарабатывает на обороте и комиссии магазина, а не на чужих просрочках: одна сделка сегодня меняется на клиента, который возвращается.",
              "Отложенная покупка — не потерянная, а сохранённый клиент.",
            ],
          },
        ],
      },

      img("persona-dima", "Персона Дима: выбирает куртку в магазине"),

      {
        type: "text",
        groups: [
          {
            lines: [
              "Сканер → Экран предупреждения → Увидел баннер про вклад → Перешёл в СберБанк Онлайн → Оформил вклад, чтобы копить",
            ],
          },
        ],
      },

      img("dima-flow", "Сценарий Димы: сканер QR, предупреждение о нагрузке и вклад"),

      {
        type: "text",
        groups: [
          {
            heading: "Мария",
            lines: [
              "Выходит замуж и сразу переезжает. Два события подряд — свадьба и новоселье, и оба требуют вещей. Её боль: неловко говорить, что дарить. Не просить — подарят три чайника, а нужное придётся докупать самой. Боль гостей: не знают, что дарить, дублируют друг друга, несут конверт «на всякий случай». На втором поводе подряд фантазия заканчивается.",
            ],
          },
        ],
      },

      img("persona-maria", "Персона Мария: свадьба и список подарков"),

      {
        type: "text",
        groups: [
          {
            lines: [
              "Собирает вишлист из каталога → Копирует ссылку на вишлист → Публикует в соцсетях или присылает в группу.",
              "Гость переходит по ссылке → Оформляет у нас рассрочку (+ бонусы Спасибо, + новый пользователь)",
            ],
          },
        ],
      },

      img("maria-flow", "Сценарий Марии: вишлист и приглашение скинуться"),

      {
        type: "text",
        groups: [
          {
            heading: "Если выбор поставщика станет обязательным, мы окажемся в лучшей позиции",
            lines: [
              "Что будет, если примут закон, который уравняет шансы всех. И полки уравняются: цена, срок и комиссия у всех по закону одинаковы, а дистрибуция, на которой сегодня выигрывают конкуренты, перестаёт быть преимуществом. Нашими остаются бонусы «Спасибо», которых за рассрочку не даёт вообще никто на рынке при 98,9 млн участников программы. Остаётся экосистема, где зарплатный счёт и все рассрочки в одном графике.",
            ],
          },
        ],
      },

      square("promo", "Промо-механика: розыгрыш за оплату частями на терминалах Сбера", 1022),

      {
        type: "text",
        groups: [
          {
            heading: "Помощник знает тебя, а не только моду",
            lines: [
              "Помощник знает, что у тебя уже есть — пальто, диван, стиральную машину. Поэтому на «хочу перестановку, нужно кресло» он отвечает не каталогом на тысячу позиций, а несколькими вариантами под ту мебель, что уже стоит в комнате, и под привычный бюджет. Те же данные, которыми экран решения отвечает «потянешь ли ты», здесь отвечают «подойдёт ли тебе».",
            ],
          },
        ],
      },

      img("assistant", "Чат с ИИ-помощником для подбора товаров"),
      img("assistant-cards", "Экраны: поделиться рассрочкой, умный помощник, контроль баланса"),
      img("catalog", "Каталог со скидками и подборками"),
      img("stories", "Сторис и контент блогеров в ленте"),
      img("product", "Карточка товара с выбором размера"),
      img("wishlist", "Вишлист и избранные товары"),
      img("payment", "Оформление платежа"),

      {
        type: "text",
        groups: [{ lines: ["Интеграция в СберБанк Онлайн"] }],
      },

      img("sber-online", "Интеграция рассрочек в СберБанк Онлайн"),
      img("icons", "Набор 3D-иконок для интерфейса"),

      {
        type: "text",
        groups: [
          {
            heading: "Спасибо за внимание!",
            lines: [
              "Через пять лет «Плати частями» — способ не занимать, а не способ занять. Сервис считает нагрузку до покупки и показывает выходы: другой срок, часть суммы своими, перенос платежа — или платёж от близкого, который ничем себя не обязывает. Ссылка в соцсетях превращает событие в повод скинуться: вместо нового кредита — деньги внутри своего круга и новые пользователи не из рекламы, а по приглашению. Бизнесу это даёт покупателя, который пришёл за покупкой по средствам и вернётся, потому что не остался с долгом.",
            ],
          },
        ],
      },

      square("share", "Отправка ссылки на рассрочку в мессенджере", 1022),
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
              "Marketplaces have taken over the market, while the potential of BNPL apps remains untapped. I wanted to break the stereotype of complicated paperwork by making installment payments a seamless social experience — both online and for offline QR-code payments.",
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
              "Installment apps all look alike: inside is a list of the bank's partner sites — walk in and pick a store you like. Sounds simple, but behind that simplicity hides a chain of friction that kills the desire to use the service before the purchase even happens.",
            ],
          },
          {
            heading: "Why “Pay in Installments”",
            lines: [
              "Sber has the ecosystem, the audience, and Spasibo bonus points, but “Pay in Installments” loses on experience. SberBank Online is about managing money, not shopping: a purchase is born in a different state of mind and doesn't come up among your bills.",
              "It's not always worth it for merchants to move onto SberLogistics warehouses. But selling to a huge audience with no tie to someone else's infrastructure and no extra risk is an offer that's hard to refuse. Which means the niche is open.",
              "“Pay in Installments” can become a storefront and an ad platform for brands and bloggers, keeping the audience inside one shopping flow.",
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
              "“Khalva” is legally a credit card, not an installment plan. It doesn't fall under the cap of Federal Law 283-FZ and comfortably offers 10–36 months against our four by 2028.",
            ],
          },
          {
            heading: "An interesting fact about the audience",
            lines: [
              "Women use installment plans 1.5x more often than men — but among monthly active users of standalone BNPL apps, men are the majority. The gap reads like this: women pay in installments more often, men are more likely to actually install the app.",
            ],
          },
        ],
      },

      img("competitors-table", "Comparison table of BNPL services by terms"),

      {
        type: "text",
        groups: [
          {
            heading: "Advantages",
            lines: [
              "Unique data. Sber knows the finances of 110 million people. That history of trust can't be copied or bought.",
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
              "The hypotheses grew out of market and competitor analysis before the interviews even started. Four conversations confirmed some of them and forced others to be reframed.",
            ],
          },
          {
            lines: [
              "H3 closes a gap in the business model: after 283-FZ, competitors monetize through credit cross-sell instead of late fees, and “Pay in Installments” has no such channel. The solution is a “trust score”: discipline in installment payments converts into purchases of the bank's paid products. This hypothesis wasn't tested in the interviews — assessing it needs cohort analysis, so at the defense it's honest to call it a risk. It can still be checked qualitatively, though: instead of asking “would you take it?”, ask about the past — has the bank ever offered a loan for on-time payments, and how did the respondent react.",
            ],
          },
          {
            heading: "Interviews",
            lines: [
              "3 voice messages and 1 in person. The sample is small, but three key findings held up across all four, not just a majority. The interviews didn't just confirm the hypotheses — three times they forced a reframe of something that seemed obvious, which is worth more than confirming the first guess.",
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
              "Each one builds on what's already happening in the market and in people's behavior today, not on an assumption that everything will be different in five years.",
            ],
          },
        ],
      },

      img("solutions", "Five solutions: budget, Sber ID, feed, assistant, scanner"),
      img("user-flow", "Map of the app's user scenarios"),

      {
        type: "text",
        groups: [
          {
            heading: "I created three personas",
            lines: ["I ran them through the flow to see how each would get their needs met."],
          },
          {
            heading: "Anna",
            lines: [
              "A forced expense and a reserve of trust. A payroll-card client for three years, she recently paid off her phone installment on time and took out a new one. Then the washing machine broke at the worst moment — it can't wait. The screen's answer: “yes, you can handle it” — based on her cash flow. Plus her boyfriend offered to help cover part of the phone.",
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
              "Dmitry doesn't buy the jacket. From this same screen he moves into “Save at up to 14% APY”: the money stays with the bank, the purchase is postponed. There's no deal today — but there's also no missed payment a month from now, and no person who, after that, never opens the app again. “Pay in Installments” earns on turnover and the store's commission, not on other people's missed payments: one deal today trades for a customer who comes back.",
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
              "Getting married and moving right after. Two events back to back — a wedding and a housewarming, both requiring things. Her pain: it feels awkward to say what she wants as gifts. If she doesn't ask, she'll get three kettles and have to buy the things she actually needs herself. The guests' pain: they don't know what to give, they duplicate each other, and they bring an envelope “just in case.” By the second occasion in a row, everyone's out of ideas.",
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
              "What happens if a law passes that levels the playing field for everyone. The shelves level out too: price, term, and commission become the same for everyone by law, and the distribution competitors win on today stops being an advantage. What stays ours are the Spasibo bonus points — nobody else on the market gives those for installment payments, with 98.9 million program members. What also stays is the ecosystem, where the payroll account and every installment plan live on one timeline.",
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
              "The assistant knows what you already own — a coat, a sofa, a washing machine. So to “I want to rearrange, I need an armchair” it doesn't answer with a thousand-item catalog, but with a few options that fit the furniture already in the room, and your usual budget. The same data the decision screen uses to answer “can you afford it” answers “will it suit you” here.",
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
              "In five years, “Pay in Installments” is a way not to borrow — not a way to borrow. The service calculates debt load before the purchase and shows the exits: a different term, part of the sum paid upfront, a postponed payment — or a payment from a loved one who takes on no obligation by making it. A social-media link turns an occasion into a reason to chip in: instead of a new loan, money stays within your own circle, and new users arrive by invitation, not advertising. For the business, that means a customer who came to buy within their means and comes back, because they weren't left with debt.",
            ],
          },
        ],
      },

      square("share", "Sending an installment-plan link in a messenger", 1022),
    ],
  },
};
