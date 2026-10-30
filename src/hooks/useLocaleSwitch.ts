import { useLocation, useNavigate } from "react-router-dom";
import { useLocale, localizePath, delocalizePath } from "./useLocale";

export function useLocaleSwitch() {
  const locale = useLocale();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const bare = delocalizePath(pathname);

  const go = (target: "ru" | "en") => {
    if (target === locale) return;
    navigate(target === "ru" ? bare : localizePath("en", bare));
  };

  return { locale, go };
}
