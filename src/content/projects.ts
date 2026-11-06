export interface CaseMedia {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  meta: {
    product: string;
    platform: string;
    role: string;
    year: string;
  };
  media: CaseMedia;
  externalUrl?: string;
}

export const projects: Record<"ru" | "en", Project[]> = {
  ru: [
    {
      slug: "trassir-mobile-ios-redesign",
      title: "Trassir",
      description:
        "TRASSIR — платформа для управления камерами, видеоархивом и аналитикой. Для пользователей B2B и B2C также доступно мобильное приложение TRASSIR, которое позволяет удаленно контролировать объекты и просматривать видеопоток в реальном времени. Моя задача сделать редизайн iOS для повышения опыта использование.",
      meta: { product: "Trassir mobile", platform: "iOS", role: "дизайнер продукта", year: "2026" },
      media: {
        type: "image",
        src: "/images/trassir-mobile-ios-redesign.webp",
        alt: "Trassir mobile iOS redesign",
        width: 1248,
        height: 936,
      },
    },
    {
      slug: "sportmaster-build-banners",
      title: "Sportmaster",
      description:
        "Конструктор рекламных баннеров для продавцов Sportmaster — чтобы собирать их прямо в личном кабинете, без Figma и фрилансера. Моя задача — чтобы продавец выпускал рекламный баннер сам. Без дизайнера, фрилансера и потерянного вечера.",
      meta: { product: "Спортмастер Маркетплейс", platform: "Web", role: "дизайнер продукта", year: "2024" },
      media: {
        type: "image",
        src: "/images/sportmaster-build-banners.webp",
        alt: "Sportmaster — конструктор баннеров",
        width: 1248,
        height: 936,
      },
    },
    {
      slug: "sportmaster-banner-builder",
      title: "Плати частями",
      description:
        "Переосмысление реального BNPL-сервиса Сбербанка «Плати частями». Самостоятельная платформа с охватом вне банка открывает новый канал выручки — рекламу блогеров и брендов без склада и риска, плюс механика «закрыть рассрочку близкого без обязательства» через Sber ID.",
      meta: { product: "продуктовый концепт", platform: "iOS", role: "дизайнер продукта", year: "2026" },
      media: {
        type: "image",
        src: "/images/sportmaster-banner-builder.webp",
        alt: "Плати частями",
        width: 1248,
        height: 936,
      },
    },
    {
      slug: "inta-design-system",
      title: "Дизайн система inta 1.0",
      description:
        "Мультибрендовая дизайн-система для web-интерфейсов. Она выросла из UI-кита для Trassir Cloud — облачного видеонаблюдения, где через веб-портал (CMS) управляют камерами, архивом записей и доступами пользователей. Потом я перенёс её на свою базу и убрал фирменную идентичность, чтобы систему можно было перекрасить под любой бренд (white-label).",
      meta: { product: "Дизайн-система", platform: "Web", role: "дизайнер продукта", year: "2026" },
      media: {
        type: "image",
        src: "/images/simple-guide-1.webp",
        alt: "Дизайн система inta 1.0",
        width: 1664,
        height: 1248,
      },
    },
    {
      slug: "trassir-mobile-notifications",
      title: "Trassir",
      description:
        "Пользователи мобильного приложения видеонаблюдения получали поток уведомлений со всех камер без возможности фильтрации, поэтому массово их отключали и пропускали важные события. Моей задачей было исследовать проблему и создать понятный интерфейс для точечной настройки уведомлений, чтобы вернуть людям контроль и повысить NPS продукта.",
      meta: { product: "Trassir mobile", platform: "iOS, Android", role: "дизайнер продукта", year: "2025" },
      media: {
        type: "image",
        src: "/images/trassir-mobile-notifications.webp",
        alt: "Trassir mobile notifications",
        width: 1664,
        height: 1248,
      },
      externalUrl: "https://buildin.ai/share/a0390670-a449-44b9-9a81-cd6abf734823?code=0EDHCX",
    },
    {
      slug: "pixel-fx",
      title: "Pixel FX",
      description:
        "Плагин для Figma, который переносит на холст полноценный пиксельный конвейер эффектов: альфа-ключ, уровни, реколор, тон/насыщенность, блендинг, бесшовный тайлинг и автообрезку. Обрабатывает выделенные слои пакетно, с живым превью и одним отменяемым действием на всю пачку.",
      meta: { product: "Pixel FX", platform: "Figma", role: "разработка плагина", year: "2025" },
      media: {
        type: "image",
        src: "/images/pixel-fx/screen01.webp",
        alt: "Pixel FX — скриншот интерфейса плагина",
        width: 1664,
        height: 1248,
      },
    },
    {
      slug: "simple-guide-2",
      title: "Simple Guide",
      description:
        "NDA кейс основан на реальном продукте в travel / local discovery сегменте. Для публикации в портфолио я изменил название, иконку, часть визуальных решений и отдельные UI-элементы, сохранив продуктовую логику, структуру сценариев и суть дизайн-решений.",
      meta: { product: "NDA", platform: "iOS, Android", role: "дизайнер продукта", year: "2023" },
      media: {
        type: "image",
        src: "/images/simple-guide-2.webp",
        alt: "Simple Guide",
        width: 1664,
        height: 1248,
      },
      externalUrl: "https://buildin.ai/share/0dab20ef-157d-45c2-a0ef-57b8941776bd?code=0EDHCX",
    },
    {
      slug: "trassir-mobile-payments",
      title: "Trassir",
      description:
        "Спроектировал и внедрил встроенную систему оплаты с привязкой карты, автоматическим списанием средств с общего баланса и управлением способами оплаты.",
      meta: { product: "Trassir", platform: "iOS, Android", role: "дизайнер продукта", year: "2024" },
      media: {
        type: "image",
        src: "/images/trassir-mobile-payments.webp",
        alt: "Trassir mobile payments",
        width: 1248,
        height: 936,
      },
      externalUrl: "https://buildin.ai/share/ff1f00d8-3f6e-491c-90e7-dec9c48b0032?code=0EDHCX",
    },
  ],
  en: [
    {
      slug: "trassir-mobile-ios-redesign",
      title: "Trassir",
      description:
        "TRASSIR is a platform for managing cameras, video archives, and analytics. B2B and B2C users also get the TRASSIR mobile app, which lets them remotely monitor sites and watch live video in real time. My task was to redesign the iOS app to improve the user experience.",
      meta: { product: "Trassir mobile", platform: "iOS", role: "Product Designer", year: "2026" },
      media: {
        type: "image",
        src: "/images/trassir-mobile-ios-redesign.webp",
        alt: "Trassir mobile iOS redesign",
        width: 1248,
        height: 936,
      },
    },
    {
      slug: "sportmaster-build-banners",
      title: "Sportmaster",
      description:
        "A banner builder for Sportmaster's marketplace sellers — so they can put banners together right in their seller dashboard, no Figma and no freelancer needed. My task was to let sellers ship an ad banner themselves — no designer, no freelancer, no lost evening.",
      meta: { product: "Sportmaster Marketplace", platform: "Web", role: "Product Designer", year: "2024" },
      media: {
        type: "image",
        src: "/images/sportmaster-build-banners.webp",
        alt: "Sportmaster banner builder",
        width: 1248,
        height: 936,
      },
    },
    {
      slug: "sportmaster-banner-builder",
      title: "Pay in Installments",
      description:
        "A reimagining of Sberbank's real BNPL service, \u2018Pay in Installments.\u2019 A standalone platform reaching beyond the bank opens a new revenue channel \u2014 advertising for bloggers and brands with no inventory or risk \u2014 plus a mechanic for covering a loved one\u2019s installment plan with no obligation, via Sber ID.",
      meta: { product: "product concept", platform: "iOS", role: "Product Designer", year: "2026" },
      media: {
        type: "image",
        src: "/images/sportmaster-banner-builder.webp",
        alt: "Pay in Installments",
        width: 1248,
        height: 936,
      },
    },
    {
      slug: "inta-design-system",
      title: "inta Design System 1.0",
      description:
        "A multi-brand design system for web interfaces. It grew out of a UI kit for Trassir Cloud, a cloud video surveillance platform where a web portal (CMS) is used to manage cameras, recording archives, and user access. I later moved it onto my own base and stripped the brand identity so the system could be recolored for any brand (white-label).",
      meta: { product: "Design System", platform: "Web", role: "Product Designer", year: "2026" },
      media: {
        type: "image",
        src: "/images/simple-guide-1.webp",
        alt: "inta Design System 1.0",
        width: 1664,
        height: 1248,
      },
    },
    {
      slug: "trassir-mobile-notifications",
      title: "Trassir",
      description:
        "Users of the video surveillance mobile app received a stream of notifications from every camera with no way to filter them, so they disabled notifications en masse and missed important events. My task was to research the problem and design a clear interface for granular notification settings, giving people back control and raising the product's NPS.",
      meta: { product: "Trassir mobile", platform: "iOS, Android", role: "Product Designer", year: "2025" },
      media: {
        type: "image",
        src: "/images/trassir-mobile-notifications.webp",
        alt: "Trassir mobile notifications",
        width: 1664,
        height: 1248,
      },
      externalUrl: "https://buildin.ai/share/a0390670-a449-44b9-9a81-cd6abf734823?code=0EDHCX",
    },
    {
      slug: "pixel-fx",
      title: "Pixel FX",
      description:
        "A Figma plugin that brings a full pixel-effects pipeline onto the canvas: alpha key, levels, recolor, hue/saturation, blending, seamless tiling, and auto-crop. Processes selected layers in a batch, with a live preview and one undoable action for the whole batch.",
      meta: { product: "Pixel FX", platform: "Figma", role: "Plugin development", year: "2025" },
      media: {
        type: "image",
        src: "/images/pixel-fx/screen01.webp",
        alt: "Pixel FX — plugin interface screenshot",
        width: 1664,
        height: 1248,
      },
    },
    {
      slug: "simple-guide-2",
      title: "Simple Guide",
      description:
        "An NDA case based on a real product in the travel / local discovery space. For this portfolio I changed the name, icon, some visual decisions, and individual UI elements, while keeping the product logic, flow structure, and the substance of the design decisions.",
      meta: { product: "NDA", platform: "iOS, Android", role: "Product Designer", year: "2023" },
      media: {
        type: "image",
        src: "/images/simple-guide-2.webp",
        alt: "Simple Guide",
        width: 1664,
        height: 1248,
      },
      externalUrl: "https://buildin.ai/share/0dab20ef-157d-45c2-a0ef-57b8941776bd?code=0EDHCX",
    },
    {
      slug: "trassir-mobile-payments",
      title: "Trassir",
      description:
        "Designed and implemented an in-app payment system with card linking, automatic charge-off from the shared balance, and payment method management.",
      meta: { product: "Trassir", platform: "iOS, Android", role: "Product Designer", year: "2024" },
      media: {
        type: "image",
        src: "/images/trassir-mobile-payments.webp",
        alt: "Trassir mobile payments",
        width: 1248,
        height: 936,
      },
      externalUrl: "https://buildin.ai/share/ff1f00d8-3f6e-491c-90e7-dec9c48b0032?code=0EDHCX",
    },
  ],
};
