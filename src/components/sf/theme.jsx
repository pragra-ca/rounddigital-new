import { createContext, useCallback, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "rd-theme";

// CSS reads the theme from html[data-rd-theme]; an inline script in
// _document sets it before first paint, and this provider keeps React
// state (toggle label, aria) in sync with it.
function applyThemeAttribute(theme) {
  if (theme === "light") {
    document.documentElement.setAttribute("data-rd-theme", "light");
  } else {
    document.documentElement.removeAttribute("data-rd-theme");
  }
}

const SfThemeContext = createContext({ theme: "dark", toggle: () => {} });

export function SfThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "light" || stored === "dark") {
        setTheme(stored);
        applyThemeAttribute(stored);
      }
    } catch (e) {
      /* storage unavailable */
    }
  }, []);

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        /* storage unavailable */
      }
      applyThemeAttribute(next);
      return next;
    });
  }, []);

  return (
    <SfThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </SfThemeContext.Provider>
  );
}

export const useSfTheme = () => useContext(SfThemeContext);
