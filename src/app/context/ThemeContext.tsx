"use client";

import { createContext, useContext, useEffect, useState } from "react";
type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [theme, setThemeState] = useState<Theme>("light");

  // Update theme
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);

    if (globalThis.window !== undefined) {
      globalThis.localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    }
  };

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Initialize theme
  useEffect(() => {
    if (globalThis.window === undefined) return;

    const savedTheme = globalThis.localStorage.getItem("theme") as Theme | null;
    const systemTheme =
      globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    const initialTheme = savedTheme || systemTheme;

    // Reuse the main setTheme function
    setTheme(initialTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
