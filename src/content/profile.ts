export interface ProfileContent {
  role: string;
  bio: string;
  links: { label: string; href: string }[];
  copyright: string;
  avatar: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export const profile: Record<"ru" | "en", ProfileContent> = {
  ru: {
    role: "Product Designer",
    bio: "Привет! Меня зовут Вадим, я более 15 лет в дизайне и 8 из них — в продуктовой разработке. Специализируюсь на сложных B2B/B2C системах, токенизированных White-label решениях и мобильных сервисах. Соединяю UX-исследования, работу с метриками и AI-инструменты, чтобы находить сильные и неочевидные решения для задач бизнеса.",
    links: [
      { label: "cv", href: "/cv/Reznikov_CV2026_ru.pdf" },
      { label: "telegram", href: "https://t.me/Vadim27" },
      { label: "linkedin", href: "https://www.linkedin.com/in/vadim-reznikov-r27" },
      { label: "mail", href: "mailto:will27roo@gmail.com" },
    ],
    copyright: "© Резников Вадим, 2026",
    avatar: {
      src: "/images/avatar.webp",
      alt: "Вадим Резников",
      width: 234,
      height: 270,
    },
  },
  en: {
    role: "Product Designer",
    bio: "I've been in design for over 15 years, 8 of them in product development. I specialize in complex B2B/B2C systems, tokenized white-label solutions, and mobile services. I combine UX research, metrics-driven work, and AI tools to find strong, non-obvious solutions for business problems.",
    links: [
      { label: "cv", href: "/cv/Reznikov_CV2026_en.pdf" },
      { label: "telegram", href: "https://t.me/Vadim27" },
      { label: "linkedin", href: "https://www.linkedin.com/in/vadim-reznikov-r27" },
      { label: "mail", href: "mailto:will27roo@gmail.com" },
    ],
    copyright: "© Reznikov Vadim, 2026",
    avatar: {
      src: "/images/avatar.webp",
      alt: "Vadim Reznikov",
      width: 234,
      height: 270,
    },
  },
};
