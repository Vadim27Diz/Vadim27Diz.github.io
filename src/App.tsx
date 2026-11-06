import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Cursor from "./components/Cursor";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import UIConcept from "./sections/UIConcept";
import CaseRoute from "./pages/CaseRoute";
import CaseStudyPage from "./pages/CaseStudyPage";
import NotFoundPage from "./pages/NotFoundPage";
import { demoCompetitiveTable } from "./content/cases/demoCompetitiveTable";
import { useLenis, scrollToInstant } from "./hooks/useLenis";
import { LocaleProvider } from "./hooks/useLocale";
import { useAvatarPinned } from "./hooks/useAvatarPinned";

const HOME_SCROLL_KEY = "home-scroll-y";

/**
 * Флаг в памяти (не в sessionStorage) — true, только если Home уже
 * монтировался в этом запуске приложения. При реальной перезагрузке
 * страницы (F5) модуль выполняется заново и флаг снова false, поэтому
 * восстановление координат срабатывает только при возврате на Home
 * клиентской SPA-навигацией (кейс → назад), а не после рефреша, даже
 * если sessionStorage ещё хранит старое значение с прошлого раза.
 */
let hasMountedHomeThisSession = false;

function Home() {
  const { ref: avatarRef, pinned } = useAvatarPinned<HTMLDivElement>();

  /**
   * Координата сохраняется в sessionStorage НЕПРЕРЫВНО по ходу скролла,
   * а не один раз в cleanup при размонтировании. Причина: при переходе
   * на кейс React сначала заменяет DOM Home на куда более короткий
   * CaseStudyPage, и только потом (passive-эффекты асинхронны, летят
   * после коммита) срабатывает cleanup — браузер к этому моменту уже
   * сам сжал `window.scrollY` до нового, куда меньшего `scrollHeight -
   * innerHeight` страницы кейса. cleanup читал бы уже испорченное
   * значение (баг: «возврат на Home промахивается мимо прежней
   * позиции», воспроизводился на любом кейсе короче точки клика).
   */
  useEffect(() => {
    const saved = sessionStorage.getItem(HOME_SCROLL_KEY);
    const shouldRestore = hasMountedHomeThisSession && saved !== null;
    scrollToInstant(shouldRestore ? Number(saved) : 0);
    hasMountedHomeThisSession = true;

    const onScroll = () => {
      sessionStorage.setItem(HOME_SCROLL_KEY, String(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main>
      <NavBar localePinned={pinned} />
      <Hero avatarRef={avatarRef} localePinned={pinned} />
      <Projects />
      <UIConcept />
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
