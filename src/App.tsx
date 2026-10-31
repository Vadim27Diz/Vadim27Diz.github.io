import { Route, Routes } from "react-router-dom";
import Cursor from "./components/Cursor";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import CaseRoute from "./pages/CaseRoute";
import CaseStudyPage from "./pages/CaseStudyPage";
import NotFoundPage from "./pages/NotFoundPage";
import { demoCompetitiveTable } from "./content/cases/demoCompetitiveTable";
import { useLenis } from "./hooks/useLenis";
import { LocaleProvider } from "./hooks/useLocale";

function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Projects />
    </main>
  );
}

/**
 * Один и тот же набор маршрутов, смонтированный дважды — под "/" (ru)
 * и под "/en/*" (en).
 */
function LocaleRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="work/:slug" element={<CaseRoute />} />
      <Route
        path="demo/competitive-table"
        element={<CaseStudyPage data={demoCompetitiveTable} />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

function App() {
  useLenis();

  return (
    <LocaleProvider>
      <Cursor />
      <Routes>
        <Route path="/en/*" element={<LocaleRoutes />} />
        <Route path="/*" element={<LocaleRoutes />} />
      </Routes>
    </LocaleProvider>
  );
}

export default App;
