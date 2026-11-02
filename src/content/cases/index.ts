import { projects } from "../projects";
import { platiChastyami } from "./platiChastyami";
import { sportmasterCaseStudy } from "./sportmasterCaseStudy";
import { trassirRedesign } from "./trassirRedesign";

export const caseStudies = {
  [platiChastyami.slug]: platiChastyami,
  [trassirRedesign.slug]: trassirRedesign,
  [sportmasterCaseStudy.slug]: sportmasterCaseStudy,
};

export type CaseStudySlug = keyof typeof caseStudies;

/**
 * Порядок для кнопки «Следующий проект»: как карточки идут на главной (projects.ts, ru и en
 * перечисляют одни и те же слаги в одном порядке), отфильтровано до кейсов со своей страницей.
 * Кейсы без карточки на главной дописаны следом в порядке регистрации выше — иначе с них
 * было бы некуда «дальше».
 */
const gridOrder = projects.ru.map((project) => project.slug).filter((slug) => slug in caseStudies);
const orphanSlugs = Object.keys(caseStudies).filter((slug) => !gridOrder.includes(slug));
export const caseOrder: CaseStudySlug[] = [...gridOrder, ...orphanSlugs] as CaseStudySlug[];

export function getNextCaseSlug(currentSlug: string): CaseStudySlug {
  const index = caseOrder.indexOf(currentSlug as CaseStudySlug);
  return caseOrder[index === -1 ? 0 : (index + 1) % caseOrder.length];
}
