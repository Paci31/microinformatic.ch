// Light-only ThemeProvider (désactive totalement le dark mode)
import { createContext, useContext } from "react";

const ThemeContext = createContext({ theme: "light", toggle: () => {} });

export function ThemeProvider({ children }) {
  // S'assure que la classe 'dark' n'est jamais posée sur <html>
  if (typeof document !== "undefined") {
    document.documentElement.classList.remove("dark");
  }
  return (
    <ThemeContext.Provider value={{ theme: "light", toggle: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
