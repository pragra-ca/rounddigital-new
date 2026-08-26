import { createContext, useCallback, useContext, useEffect, useState } from "react";

// Light is the default. This site is read by procurement evaluators who print
// and annotate pages, so the document-like reading mode is the correct default;
// dark is an explicit opt-in stored in localStorage.
//
// CSS keys off html[data-rds-theme="dark"]. An inline script in _document.js
// sets the attribute before first paint so a dark-mode user never sees a flash.
const STORAGE_KEY = "rds-theme";

function apply(theme) {
  const el = document.documentElement;
  if (theme === "dark") el.setAttribute("data-rds-theme", "dark");
  else el.removeAttribute("data-rds-theme");
}

const ThemeContext = createContext({ theme: "light", toggle: () => {} });

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    let stored = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* storage blocked — fall through to the system preference */
    }
    if (stored === "dark" || stored === "light") {
      setTheme(stored);
      apply(stored);
      return;
    }
    // No stored choice: follow the OS. We do NOT persist this, so the site
    // keeps tracking the system setting until the user picks explicitly.
    if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      apply("dark");
    }
  }, []);

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* storage blocked — the toggle still works for this page view */
      }
      apply(next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
