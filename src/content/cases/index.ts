import { platiChastyami } from "./platiChastyami";
import { sportmasterBanners } from "./sportmasterBanners";
import { sportmasterCaseStudy } from "./sportmasterCaseStudy";
import { trassirRedesign } from "./trassirRedesign";

export const caseStudies = {
  [platiChastyami.slug]: platiChastyami,
  [trassirRedesign.slug]: trassirRedesign,
  [sportmasterBanners.slug]: sportmasterBanners,
  [sportmasterCaseStudy.slug]: sportmasterCaseStudy,
};

export type CaseStudySlug = keyof typeof caseStudies;
