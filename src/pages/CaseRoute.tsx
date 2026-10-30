import { Navigate, useParams } from "react-router-dom";
import { caseStudies } from "../content/cases";
import CaseStudyPage from "./CaseStudyPage";

export default function CaseRoute() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? caseStudies[slug] : undefined;

  if (!data) return <Navigate to="/" replace />;

  return <CaseStudyPage data={data} />;
}
