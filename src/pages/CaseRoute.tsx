import { Navigate, useParams } from "react-router-dom";
import { getCaseStudy } from "../content/cases";
import { useLocale } from "../hooks/useLocale";
import CaseStudyPage from "./CaseStudyPage";

export default function CaseRoute() {
  const { slug } = useParams<{ slug: string }>();
  const locale = useLocale();
  const data = slug ? getCaseStudy(locale, slug) : undefined;

  if (!data) return <Navigate to="/" replace />;

  return <CaseStudyPage data={data} />;
}
