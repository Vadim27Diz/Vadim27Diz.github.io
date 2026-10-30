import { createContext, useContext, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

export type Locale = "ru" | "en";

const LocaleContext = createContext<Locale>("ru");

export function LocaleProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const locale: Locale =
    pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ru";

  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}

/** Строит путь в текущей локали: localizePath("en", "/work/slug") -> "/en/work/slug" */
export function localizePath(locale: Locale, path: string) {
  if (locale === "ru") return path;
  return path === "/" ? "/en" : `/en${path}`;
}

/** Снимает префикс локали с текущего пути: "/en/work/slug" -> "/work/slug" */
export function delocalizePath(pathname: string) {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname;
}
