import type { CaseStudyData } from "./blocks";
import { projects } from "../projects";
import type { Locale } from "../../hooks/useLocale";
import { intaDesignSystem } from "./intaDesignSystem";
import { platiChastyami } from "./platiChastyami";
import { sportmasterCaseStudy } from "./sportmasterCaseStudy";
import { trassirRedesign } from "./trassirRedesign";

const registry: Record<"ru" | "en", Record<string, CaseStudyData>> = {
  ru: {
    [platiChastyami.ru.slug]: platiChastyami.ru,
    [trassirRedesign.ru.slug]: trassirRedesign.ru,
    [sportmasterCaseStudy.ru.slug]: sportmasterCaseStudy.ru,
    [intaDesignSystem.ru.slug]: intaDesignSystem.ru,
  },
  en: {
    [platiChastyami.en.slug]: platiChastyami.en,
    [trassirRedesign.en.slug]: trassirRedesign.en,
    [sportmasterCaseStudy.en.slug]: sportmasterCaseStudy.en,
    [intaDesignSystem.en.slug]: intaDesignSystem.en,
  },
};

export type CaseStudySlug = keyof typeof registry.ru;

export function getCaseStudy(locale: Locale, slug: string): CaseStudyData | undefined {
  return registry[locale][slug];
}

/**
 * Порядок для кнопки «Следующий проект»: как карточки идут на главной (projects.ts, ru и en
 * перечисляют одни и те же слаги в одном порядке), отфильтровано до кейсов со своей страницей.
 * Кейсы без карточки на главной дописаны следом в порядке регистрации выше — иначе с них
 * было бы некуда «дальше».
 */
const gridOrder = projects.ru.map((project) => project.slug).filter((slug) => slug in registry.ru);
const orphanSlugs = Object.keys(registry.ru).filter((slug) => !gridOrder.includes(slug));
export const caseOrder: CaseStudySlug[] = [...gridOrder, ...orphanSlugs] as CaseStudySlug[];

export function getNextCaseSlug(currentSlug: string): CaseStudySlug {
  const index = caseOrder.indexOf(currentSlug as CaseStudySlug);
  return caseOrder[index === -1 ? 0 : (index + 1) % caseOrder.length];
}
